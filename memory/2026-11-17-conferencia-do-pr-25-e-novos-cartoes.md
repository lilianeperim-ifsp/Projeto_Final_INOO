---
data: 2026-11-17
autor: lilianeperim-ifsp
assunto: conferência do PR 25 e novos cartões
---

## Resumo

A Liliane, com o Claude, fez a segunda conferência do PR #25 do Murilo (workflow dos avisos da inbox no GitHub), que o
recado `inbox/liliane/2026-11-17-de-murilo-conferir-pr-25-com-o-claude.md` pedia. A conferência foi só de leitura:

- leitura do diff de `.github/workflows/inbox-avisos.yml`, `.github/scripts/inbox-avisos.sh`, `inbox/README.md` e
  `CLAUDE.md`;
- simulação com `DRY_RUN=1` numa cópia temporária da branch do PR, que listou 5 issues a abrir e nenhuma para os
  recados fechados;
- consulta das permissões do Actions na conta da Liliane: `enabled: true`, `allowed_actions: all` e permissões do
  workflow em `read`.

O resultado ficou num comentário do PR
(https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/25#pullrequestreview-5949601004). Os recados
`conferir-pr-25-com-o-claude` e `liberar-actions-para-os-avisos` foram respondidos e fechados como `concluido`.

A Liliane aprovou o PR, mas o Murilo já tinha feito o merge, e a aprovação ficou só no histórico. Depois do merge, as
duas rodadas do workflow terminaram verdes. Abriram as issues #26 a #30, e a #30, do recado do `grupo/`, fechou
sozinha.

A branch `logitech/lilianeperim-ifsp` foi atualizada com a `dev` (`/atualizar-branch`, sem conflito). O recado
`2026-11-17-de-murilo-novos-cartoes-da-etapa-1.md` foi respondido como `aceito`: a Liliane assume o T09, o T16 e o
T18, que vieram do Alexandre, além do T06.

## Decisões tomadas

- **Nada mudou nas configurações do Actions.** O Actions já estava liberado, e o `issues: write` declarado no próprio
  workflow basta. Alternativa descartada: passar as permissões padrão do workflow para `write`, que daria a todo
  workflow mais acesso do que ele precisa.
- **A conferência entrou no PR como comentário, não como aprovação.** O recado pedia assim, e o revisor oficial é o
  Alexandre. A aprovação veio depois, a pedido da Liliane.
- **Três pontos pequenos do script ficaram registrados, sem pedir correção.** Recado apagado ou renomeado deixa a issue
  aberta, recado que volta a `pendente` não reabre a issue, e com `set -e` uma falha em `gh issue create` interrompe a
  rodada. Nenhum deles impede o uso. Alternativa descartada: pedir ajustes antes do merge.
- **Os cartões novos foram aceitos, começando pelo T09.** A ordem é T09 (diagrama de classes, a partir do catálogo do
  T08), depois o T16 (cenários 5 a 8, depois do T15 do Alexandre), depois o T18 (conferir se cada cenário cabe em 5
  minutos).

## Erros e rejeições da IA

- **Conta errada de issues no comentário do PR.** O Claude escreveu que apareceriam 7 issues depois do merge. Esqueceu
  que os dois recados da Liliane seriam fechados antes e, por isso, não gerariam issue. O próprio Claude percebeu ao
  reler a lógica do script e editou o comentário para 5 issues, o número que de fato apareceu.
- **Aprovação de um PR já mergeado.** O Claude rodou `gh pr review 25 --approve` no mesmo comando que consultava o
  estado do PR, sem parar ao ver `MERGED`. A aprovação ficou no histórico, sem efeito. Foi percebido pela saída do
  comando.

A Liliane decidiu não registrar esses casos em `docs/relatorio_ia_notas.md`.

## Pendências

- **Liliane:** ligar os avisos de "Participating" em github.com/settings/notifications, para receber as issues da
  inbox.
- **T16:** combinar com o Alexandre o formato dos cenários de evolução antes de começar. O T16 depende do T15 dele.
- **T18:** depende do T15, do T16 e do T17 (Murilo), e trava o T20.
- **T06:** confirmar com o professor o que as aulas 8 e 9 permitem.
- **Fechar a issue #29:** ela só fecha quando o recado dos novos cartões passar a `concluido`.

## Próximos passos

- Começar o T09: diagrama de classes UML (Mermaid ou PlantUML) em `docs/Documento_de_Projeto.md`, a partir do
  catálogo de classes e interfaces do T08. Prazo da Etapa 1: 27/11.
- Falar com o Alexandre sobre o formato dos cenários (T15/T16).
