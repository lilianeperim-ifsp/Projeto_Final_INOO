---
para: grupo
de: murilo
data: 2026-11-17
tipo: decisao
status: pendente
prioridade: maxima
---

## O que é

Proposta para os três aprovarem:

1. **Deixar o repositório privado até a entrega.**
2. **Avisar no GitHub cada recado novo da inbox.** Um workflow do GitHub Actions abre uma issue atribuída a quem
   recebe o recado, e a pessoa é notificada na hora: no sininho do GitHub, por e-mail e no app do celular.
3. **Na entrega ao professor,** removemos a inbox do projeto e voltamos o repositório a público.

Preciso que cada um responda na seção "Resposta" se concorda.

## Contexto

**Por que privado.** Com o repositório público, qualquer pessoa lê os recados em `inbox/`, as memórias e o
`docs/relatorio_ia_notas.md`. As issues de aviso também seriam públicas, porque o GitHub não tem issue privada em
repositório público. Com o repositório privado, só nós três vemos tudo. A conta gratuita permite isso, e o Actions
continua grátis (2000 minutos por mês, e o workflow gasta segundos).

**Como os avisos funcionariam:**

- A cada push na `dev`, o workflow procura recados novos com `status: pendente` e abre uma issue atribuída a quem
  recebe.
- A pasta define quem recebe: `murilo/` → `murilolss`, `liliane/` → `lilianeperim-ifsp`, `ale/` → `alexsant22`,
  `grupo/` → os três.
- A issue ganha o rótulo `inbox` e, quando o recado tem `prioridade: maxima`, também o rótulo `prioridade-maxima`.
- Quando o recado passa a `concluido` ou `descartado`, o workflow fecha a issue.
- A inbox continua sendo a fonte oficial. A issue é só o aviso, então as skills e a leitura da inbox no começo da
  sessão continuam iguais.
- O workflow entra por PR normal, da `logitech/murilolss`, com o Alexandre de reviewer, porque não está coberto pela
  exceção da inbox.

**Passos, se aprovarmos:**

1. **Liliane, a dona do repositório:** em Settings, depois General, Danger Zone e "Change visibility", escolher
   Private. O Murilo e o Alexandre continuam colaboradores.
2. **Murilo:** escreve o workflow e abre o PR.
3. **Cada um:** confere em github.com/settings/notifications se os avisos de "Participating" estão ligados (web, e-mail
   ou o app GitHub Mobile). Uma issue atribuída a você conta como "Participating".

**Pontos de atenção:**

- **Rotina do quadro na nuvem:** ela lê os PRs pela API do GitHub sem token, o que só funciona com o repositório
  público. Com ele privado, a rotina das 08:00, 12:00 e 18:00 deixa de enxergar os PRs, até configurarmos um token
  válido nela. O `/sincronizar-quadro` rodado pelo Murilo na máquina dele continua funcionando, porque usa o `gh`
  autenticado.
- **Na entrega, apagar a pasta não apaga o histórico.** Com o repositório público de novo, os recados antigos
  continuam visíveis nos commits antigos. As issues de aviso também voltariam a ficar públicas, a não ser que sejam
  apagadas antes (só a dona do repositório consegue apagar issues). Para a entrega, temos que escolher entre:
  - (a) apagar as issues e aceitar que o histórico mostra os recados;
  - (b) entregar num repositório novo, público, só com o estado final do código e da documentação, sem o histórico;
  - (c) reescrever o histórico com `git filter-repo`. Exige `push --force`, o que vai contra a nossa regra, então só
    com o acordo dos três.

  Proponho decidir isso perto da entrega. A opção (b) é a mais simples e a mais segura.
- **O que sai na entrega:** a pasta `inbox/`, o workflow dos avisos e as referências à inbox no `CLAUDE.md` e nas
  skills. O `docs/relatorio_ia_notas.md` fica, porque o relatório de IA é um entregável. Falta decidir se a pasta
  `memory/` fica.

**O que falta de cada um:**

- **Liliane:** concorda? E mudaria a visibilidade depois que os três aprovarem?
- **Alexandre:** concorda? E revisa o PR do workflow?
- **Murilo:** concordo. Escrevo o workflow depois das duas respostas.

## Resposta

