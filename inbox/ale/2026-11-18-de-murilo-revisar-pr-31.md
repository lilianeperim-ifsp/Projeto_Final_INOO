---
para: ale
de: murilo
data: 2026-11-18
tipo: tarefa
status: pendente
---

## O que é

Revisar e, se estiver ok, mergear o PR #31, que deixa o script dos avisos da inbox seguir em frente quando o `gh`
falha num recado. Você é o reviewer.

## Contexto

- PR: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/31 (`logitech/murilolss` → `dev`)
- Só muda `.github/scripts/inbox-avisos.sh`. Se abrir ou fechar uma issue falhar, o script registra `::error::`, segue
  com os outros recados e termina com código 1, para a rodada ficar vermelha no Actions.
- Atende ao ponto 3 da conferência da Liliane no PR #25.
- Testado com um `gh` simulado que recusa uma das issues e com `DRY_RUN=1` no repositório real (0 a abrir, 0 a fechar,
  0 falhas).
- Depois do merge, me avise para eu rodar `/sincronizar-quadro`.

## Resposta
