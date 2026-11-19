---
para: liliane
de: murilo
data: 2026-11-18
tipo: aviso
status: pendente
---

## O que é

O ponto 3 da sua conferência do PR #25 (uma falha no `gh` interrompia a rodada dos avisos) foi corrigido no PR #31.
Se quiser, confira se ficou como você esperava. O Alexandre é o reviewer.

## Contexto

- PR: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/31
- Só muda `.github/scripts/inbox-avisos.sh`. Abrir e fechar issue agora rodam dentro de um `if`. Quando falham, a
  função `registrar_falha` escreve `::error::`, o laço segue para os outros recados e, no fim, o script sai com código
  1 se houve falha.
- O que não mudou: se a criação dos rótulos ou a lista inicial de issues falhar, a rodada ainda para no começo, porque
  sem a lista não dá para saber o que já existe.

## Resposta
