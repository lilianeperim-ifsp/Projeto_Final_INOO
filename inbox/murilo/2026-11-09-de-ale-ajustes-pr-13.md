---
para: murilo
de: ale
data: 2026-11-09
tipo: tarefa
status: pendente
---

## O que é

Aprovei o PR #13, mas comentei 5 pontos nele. Os pontos 1 e 2 são os que devem ser corrigidos antes do merge.

## Contexto

PR #13: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/13

Comentário completo: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/13#issuecomment-6756815739

Todos os pontos são sobre `.claude/skills/sincronizar-quadro/SKILL.md`.

**Corrigir antes do merge**

1. O texto novo diz que a skill "só move cartões de `pr` para `feito`", mas o passo 8 move qualquer cartão com PR mergeado que ainda não esteja em `feito`. Sugestão: limitar o passo 8 a `coluna = pr`.
2. "Não apague nem altere esse campo" não diz como cumprir a regra, e um `set` substitui o documento inteiro, o que apagaria o `dependeDe`. Sugestão: exigir `update` nos passos 7 e 8.

**Melhorias menores**

3. Falta `descricao` na tabela de `cartoes`.
4. O exemplo `["t07","t08"]` sugere que o id vem do número T-NN, mas o valor deve ser o id do documento.
5. Um pré-requisito excluído conta como dependência satisfeita na página, embora o texto diga que ele precisa estar em `feito`.

Os pontos 3, 4 e 5 vieram da leitura do código da página do quadro. Os cartões reais não foram consultados.

## Resposta
