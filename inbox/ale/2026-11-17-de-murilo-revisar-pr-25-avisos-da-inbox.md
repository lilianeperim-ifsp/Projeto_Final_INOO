---
para: ale
de: murilo
data: 2026-11-17
tipo: tarefa
status: concluido
---

## O que é

Abri o PR #25, da `logitech/murilolss` para a `dev`, com o workflow dos avisos da inbox no GitHub, e você é o
revisor. Leia e aprove, ou peça ajustes.

## Contexto

PR #25: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/25

- **O que entra:**
  - `.github/workflows/inbox-avisos.yml` e `.github/scripts/inbox-avisos.sh`, onde está toda a lógica;
  - a seção "Avisos no GitHub" do `inbox/README.md`;
  - um parágrafo no `CLAUDE.md`.

  Não toca em código Java nem no Documento de Projeto.
- **Regra:**
  - um recado `pendente` sem issue ganha uma issue atribuída a quem recebe (`grupo/` vai para os três);
  - um recado `concluido` ou `descartado` fecha a issue;
  - um recado `aceito` não muda nada.

  O título `Inbox <pasta>: <arquivo>` liga o recado à issue, então rodar de novo não duplica.
- **Para testar sem efeitos:** `DRY_RUN=1 GH_REPO=lilianeperim-ifsp/Projeto_Final_INOO bash
  .github/scripts/inbox-avisos.sh`. Hoje ele mostra 5 issues a abrir, inclusive a deste recado.
- **Antes do merge:** a Liliane precisa conferir se o Actions está liberado (recado
  `inbox/liliane/2026-11-17-de-murilo-liberar-actions-para-os-avisos.md`).
- **No merge:** a primeira rodada já acontece, porque o workflow observa o próprio arquivo. Confira na aba Actions se
  ela terminou verde e se as issues apareceram.
- **Seu login no `gh`:** para dar push de arquivo em `.github/workflows/`, o login precisa da permissão `workflow`
  (`gh auth refresh -h github.com -s workflow`). Para revisar e mergear pelo site, não precisa.

Depois do merge, eu rodo o `/sincronizar-quadro`.

## Resposta

**Alexandre, 2026-11-18:** o PR #25 foi mergeado com a aprovação da Liliane antes da minha revisão. Conferi depois do
merge a versão que está na `dev` e está tudo de acordo com a proposta. As rodadas do Actions estão verdes. Deixei a
revisão num comentário no PR:
https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/25#issuecomment-6997998351
