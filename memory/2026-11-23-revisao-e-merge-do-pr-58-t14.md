---
data: 2026-11-23
autor: Alexandre Santos
assunto: revisão e merge do PR 58 (T14)
---

## Resumo
Continua `memory/2026-11-23-t14-mudanca-de-status-e-avisos.md`. Aquela memória registra a escrita da 6.3 e o PR #58
ainda aberto.

**Revisão e correções:** o Murilo aprovou o PR #58 e concordou com a decisão 1 da 6.3, a transição rejeitada
devolvendo `this`. Ele lembrou que, na defesa, é preciso saber dizer que o `==` compara a identidade do objeto, e não o
tipo nem o código, e por isso não fere a ET 3.2. Também apontou dois detalhes, sem travar o merge, e o Claude os
corrigiu no commit `ffb1fc7`:
- no quadro de situação do topo, a seção 5 passou a "Escrita";
- nos dois blocos do diagrama da 6.3, o transporte chama `calcularAtual()`, que chama `calcular(perfil vigente)`, com o
  mesmo nome do passo 6.

O Claude respondeu à revisão no PR, e o Murilo já tinha fechado os recados de sincronização dos PRs 56 e 58 (commit
`de65ea7`).

**PDF e merge:** com `/documento`, o Alexandre aprovou gerar o PDF, que saiu com 37 páginas e 1,9 MB. O Claude conferiu
pelo texto extraído do PDF que o diagrama da 6.3 (página 27) foi desenhado e que nenhuma página traz erro do Mermaid. O
Alexandre conferiu visualmente e aprovou o merge.

O #58 foi mergeado na `dev` (merge `e187d25`), só com a aprovação do Murilo, como no #56. O recado
`inbox/murilo/2026-11-23-de-ale-sincronizar-quadro-pr-58-mergeado.md` foi enviado direto para a `dev` (commit
`fbf2341`). A pedido do Alexandre, o PDF gerado foi apagado, porque nunca tinha sido versionado.

## Decisões tomadas
- **Os dois detalhes do Murilo foram corrigidos antes do merge**, em vez de ficarem para outro PR. Por quê: eram
  pequenos, e o nome único (`calcularAtual()`) evita dúvida na defesa. Alternativa descartada: mergear e corrigir
  depois.
- **No quadro do topo, mudou só o status da seção 5.** As seções 3, 4 e 8 continuam "Escrita, em revisão", embora os
  PRs delas já tenham sido mergeados. Por quê: o Murilo apontou só a 5. Alternativa descartada: ajustar todas no mesmo
  commit.
- **Recado novo para o PR mergeado**, em vez de reabrir o recado que o Murilo já tinha fechado. Por quê: segue o
  modelo do `...-pr-50-mergeado.md`.
- **O PDF não é versionado:** ele foi apagado depois da conferência. Ficou sugerido incluir
  `docs/Documento_de_Projeto.pdf` no `.gitignore`, por PR, e o Alexandre ainda não decidiu.

## Erros e rejeições da IA
Nenhum

## Pendências
- **Quadro:** o Murilo precisa rodar `/sincronizar-quadro` para o T14 passar a "Concluído".
- **PNGs da seção 3:** `docs/diagramas/3.1`, `3.3` e `3.4` ainda têm as notas antigas ("provisório, confirmar no T14"),
  e a Liliane decide se gera de novo.
- **Quadro de situação:** as seções 3, 4 e 8 continuam "Escrita, em revisão" mesmo depois do merge.
- **`.gitignore`:** decidir se o PDF entra nele.
- **Branch:** a `logitech/alexsant22` tem 2 commits a mais que a cópia no GitHub, vindos da `dev`, que sobem no próximo
  push.

## Próximos passos
- Fazer a T15 (seção 7, cenários de evolução 1 a 4), a última tarefa do Alexandre na Etapa 1. Os ganchos da 6.1, da 6.2
  e da 6.3 e a lista do CANCELADO na 2.2.3 ajudam.
- Depois da T15, responder ao recado `inbox/ale/2026-11-22-de-murilo-pendencias-da-etapa-1.md`.
