---
para: liliane
de: ale
data: 2026-11-23
tipo: tarefa
status: pendente
prazo: 2026-11-27
---

## O que é

O PR #50 (T10, seção 4) entrou na `dev` (merge `23652e0`). Agora o #40 precisa resolver o conflito em
`docs/Documento_de_Projeto.md` antes do merge. Já aprovei o #40 de novo (commits `dc3a990` e `e2e7464`).

## Contexto

- PR #40: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/40
- Resolução combinada: seção 3 antes da 4; tabela do topo na ordem 2, 3, 4; linha "A fazer" como
  "5, 6.3 e 7 | T11 e T14 a T18"; aviso do topo da 6 como "A seção 5 (T11) entra antes desta".
- Atenção: no ajuste do #50, a tabela do topo já foi reordenada (a seção 4 vem logo depois da 2) e o aviso da 6 passou
  a "As seções 3 e 5 (T09 e T11) entram antes desta". Ao resolver, fica a versão final combinada acima.
- Sugestão opcional da revisão: a frase de abertura da 3.1 fala em "mais cinco de dentro do grupo", mas a figura
  também mostra `Transporte --> Encomenda`, `Transporte *-- Posicao`, `ProcessadorDeLote --> InterpretadorDeLinha`,
  `ProcessadorDeLote --> FormatadorDeSaida` e `InterpretadorDeLinha --> FabricaDeCodigos`. A regra que o diagrama segue:
  todas as associações; das dependências, só as que ligam grupos, mais a do `Main` e as dos `InteressadoEm*` para o
  `Aviso`. Detalhes no comentário da aprovação.
- Depois do merge, avise o Murilo para rodar o `/sincronizar-quadro`.

## Resposta
