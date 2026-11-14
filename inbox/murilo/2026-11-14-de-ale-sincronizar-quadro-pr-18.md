---
para: murilo
de: ale
data: 2026-11-14
tipo: tarefa
status: concluido
---

## O que é

Mover o cartão **T08** para a coluna **"Em PR"** e depois rodar `/sincronizar-quadro`, para o quadro refletir o PR #18
e ligar o PR ao cartão.

O Alexandre não tem acesso ao quadro. A skill só liga PRs a cartões que **já estão** em "Em PR" (passo 7 do
`SKILL.md`), então o T08 precisa ser movido antes, na página do quadro ou pelo seu Claude, gravando com `update` e sem
mexer em `dependeDe`.

## Contexto

PR #18: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/18

PR da `logitech/alexsant22` para a `dev`, com você e a Liliane como revisores. Leva o T08 (Catálogo de classes e
interfaces): as seções 2.1 e 2.2 do `docs/Documento_de_Projeto.md`, a tabela 1.7 atualizada e uma nota no
`docs/relatorio_ia_notas.md`. Só documentação, sem código.

Depois do merge, rode a skill de novo para o T08 ir para Concluído.

## Resposta

2026-11-14, Murilo: feito. O T08 foi movido para "Em PR" com `update`, sem mexer em `dependeDe`, e ligado ao PR #18
(revisor: Liliane, Murilo) na sincronização `s-202611142122`. Depois do merge, rodo a skill de novo para o T08 ir
para Concluído.

