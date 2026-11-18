#!/usr/bin/env bash
# Avisos da inbox no GitHub.
#
# Para cada recado de inbox/{ale,murilo,liliane,grupo}/:
#   - status pendente e sem issue      -> abre uma issue atribuída a quem recebe;
#   - status concluido ou descartado    -> fecha a issue, se ela estiver aberta;
#   - qualquer outro status (aceito)    -> não faz nada.
# A issue é só o aviso: a inbox continua sendo a fonte oficial.
#
# A chave que liga recado e issue é o título "Inbox <pasta>: <arquivo sem .md>".
# Por isso o script pode rodar quantas vezes for preciso sem duplicar issue.
#
# Uso:
#   GH_REPO=dono/repo bash .github/scripts/inbox-avisos.sh            (de verdade)
#   DRY_RUN=1 GH_REPO=dono/repo bash .github/scripts/inbox-avisos.sh  (só mostra o que faria)

set -euo pipefail

: "${GH_REPO:?defina GH_REPO, por exemplo lilianeperim-ifsp/Projeto_Final_INOO}"
DRY_RUN="${DRY_RUN:-0}"
BRANCH_DA_INBOX="${BRANCH_DA_INBOX:-dev}"
export GH_REPO

# Quem recebe o recado de cada pasta (usuários do GitHub, separados por vírgula).
responsaveis() {
  case "$1" in
    murilo)  echo "Murilolss" ;;
    liliane) echo "lilianeperim-ifsp" ;;
    ale)     echo "alexsant22" ;;
    grupo)   echo "Murilolss,lilianeperim-ifsp,alexsant22" ;;
    *)       echo "" ;;
  esac
}

# Lê um campo do cabeçalho (entre os dois ---), ignorando comentários "# ..." e o \r do Windows.
campo() {
  awk -v chave="$2" '
    { sub(/\r$/, "") }
    NR == 1 { if ($0 !~ /^---[[:space:]]*$/) exit; next }
    /^---[[:space:]]*$/ { exit }
    index($0, chave ":") == 1 {
      valor = substr($0, length(chave) + 2)
      sub(/#.*/, "", valor)
      gsub(/^[[:space:]]+|[[:space:]]+$/, "", valor)
      print valor
      exit
    }' "$1"
}

# Texto da seção "## O que é", até o próximo título "## ".
secao_o_que_e() {
  awk '
    { sub(/\r$/, "") }
    /^## / { if (dentro) exit; if ($0 ~ /^## O que é/) { dentro = 1; next } }
    dentro { print }' "$1"
}

if [ "$DRY_RUN" != "1" ]; then
  gh label create inbox --force --color 1D76DB --description "Aviso de recado da inbox" >/dev/null
  gh label create prioridade-maxima --force --color B60205 --description "Recado com prioridade máxima" >/dev/null
fi

# Uma única consulta: "número<TAB>estado<TAB>título" de todas as issues com o rótulo inbox.
existentes="$(gh issue list --label inbox --state all --limit 500 \
  --json number,state,title --jq '.[] | "\(.number)\t\(.state)\t\(.title)"')"

abertas=0
fechadas=0

for arquivo in inbox/ale/*.md inbox/murilo/*.md inbox/liliane/*.md inbox/grupo/*.md; do
  [ -f "$arquivo" ] || continue

  pasta="$(basename "$(dirname "$arquivo")")"
  nome="$(basename "$arquivo" .md)"
  titulo="Inbox $pasta: $nome"
  status="$(campo "$arquivo" status)"

  issue="$(printf '%s\n' "$existentes" | awk -F'\t' -v t="$titulo" '$3 == t { print $1 "\t" $2; exit }')"
  numero="${issue%%$'\t'*}"
  estado="${issue#*$'\t'}"

  if [ "$status" = "pendente" ] && [ -z "$issue" ]; then
    de="$(campo "$arquivo" de)"
    tipo="$(campo "$arquivo" tipo)"
    prazo="$(campo "$arquivo" prazo)"
    prioridade="$(campo "$arquivo" prioridade)"

    rotulos=(--label inbox)
    if [ "$prioridade" = "maxima" ]; then
      rotulos+=(--label prioridade-maxima)
    fi

    corpo="**Recado novo na inbox:** [\`$arquivo\`](https://github.com/$GH_REPO/blob/$BRANCH_DA_INBOX/$arquivo)

- **De:** ${de:-?}
- **Tipo:** ${tipo:-?}
- **Prazo:** ${prazo:-sem prazo}
- **Prioridade:** ${prioridade:-normal}

### O que é
$(secao_o_que_e "$arquivo")

---
Responda no arquivo da inbox, não nesta issue. Ela fecha sozinha quando o recado passar a \`concluido\` ou \`descartado\`."

    if [ "$DRY_RUN" = "1" ]; then
      echo "criaria: \"$titulo\" para $(responsaveis "$pasta") ${rotulos[*]}"
    else
      gh issue create --title "$titulo" --body "$corpo" --assignee "$(responsaveis "$pasta")" "${rotulos[@]}"
    fi
    abertas=$((abertas + 1))

  elif { [ "$status" = "concluido" ] || [ "$status" = "descartado" ]; } && [ "$estado" = "OPEN" ]; then
    if [ "$DRY_RUN" = "1" ]; then
      echo "fecharia: #$numero \"$titulo\" (recado $status)"
    else
      gh issue close "$numero" --comment "Recado marcado como \`$status\` na inbox."
    fi
    fechadas=$((fechadas + 1))
  fi
done

echo "Issues abertas: $abertas. Issues fechadas: $fechadas."
