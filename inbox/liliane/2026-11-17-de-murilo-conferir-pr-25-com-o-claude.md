---
para: liliane
de: murilo
data: 2026-11-17
tipo: tarefa
status: concluido
---

## O que é

Liliane, peça para o seu Claude conferir se o PR #25 está certo. É o workflow dos avisos da inbox no GitHub, que
aprovamos no recado do `grupo/`. O Alexandre é o reviewer oficial; esta é uma segunda conferência, e ela também
responde o recado `2026-11-17-de-murilo-liberar-actions-para-os-avisos.md`, porque só a sua conta consegue ver a
configuração do Actions.

## Contexto

PR #25: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/25

**Para o Claude da Liliane:** só leitura. Não faça merge, não aprove o PR e não mexa nas configurações do repositório
sem a Liliane pedir.

1. **Ler o PR:** `gh pr diff 25` e `gh pr view 25`. Os arquivos são:
   - `.github/workflows/inbox-avisos.yml`;
   - `.github/scripts/inbox-avisos.sh`, onde está toda a lógica;
   - a seção "Avisos no GitHub" do `inbox/README.md`;
   - um parágrafo no `CLAUDE.md`.
2. **Conferir a lógica contra a proposta** do recado `inbox/grupo/2026-11-17-de-murilo-avisos-da-inbox-no-github.md`:
   - um recado `pendente` sem issue ganha uma issue atribuída a quem recebe (`grupo/` vai para os três), com o rótulo
     `inbox` e, quando for o caso, `prioridade-maxima`;
   - um recado `concluido` ou `descartado` fecha a issue;
   - um recado `aceito` não muda nada;
   - rodar de novo não duplica issue.
3. **Rodar sem efeitos** (Git Bash, com a branch do PR em mãos, por exemplo com `gh pr checkout 25`, e voltando
   depois para a `logitech/lilianeperim-ifsp`):
   `DRY_RUN=1 GH_REPO=lilianeperim-ifsp/Projeto_Final_INOO bash .github/scripts/inbox-avisos.sh`.
   Deve listar uma issue a abrir para cada recado `pendente`, e nenhuma para os fechados.
4. **Conferir o Actions**, que só a conta da Liliane, dona do repositório, consegue ler:
   - `gh api repos/lilianeperim-ifsp/Projeto_Final_INOO/actions/permissions`: `enabled` precisa ser `true`, e
     `allowed_actions` precisa permitir a `actions/checkout`. Com `all`, já permite.
   - `gh api repos/lilianeperim-ifsp/Projeto_Final_INOO/actions/permissions/workflow`: pode estar em `read`. O
     workflow pede `issues: write` no próprio arquivo.
5. **Responder:** deixe o resultado num comentário do PR (`gh pr review 25 --comment --body "..."`) e na seção
   "Resposta" deste recado. Se encontrar algum problema, aponte o arquivo e a linha.

## Resposta

**2026-11-17, Liliane (com o Claude):** conferido. Tudo certo, nada impede o merge. O resultado completo está no comentário do PR: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/25#pullrequestreview-5949601004

- A lógica bate com a proposta do `grupo/`. Um recado `pendente` ganha issue atribuída a quem recebe, com `inbox` e `prioridade-maxima` quando for o caso. `concluido` e `descartado` fecham a issue, `aceito` não muda nada, e rodar de novo não duplica.
- `DRY_RUN=1` na branch do PR: 5 issues a abrir e nenhuma para os recados fechados.
- Sem conflito com a `dev`.
- Três pontos pequenos, que não impedem o merge: recado apagado ou renomeado deixa a issue aberta; recado que volta a `pendente` não reabre a issue; com `set -e`, uma falha em `gh issue create` interrompe a rodada.
- Não aprovei o PR: o revisor oficial é o Alexandre.
