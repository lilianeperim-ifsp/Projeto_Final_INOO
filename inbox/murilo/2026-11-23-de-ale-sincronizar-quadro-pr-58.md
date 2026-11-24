---
para: murilo
de: ale
data: 2026-11-23
tipo: tarefa
status: pendente
---

## O que é

Abri o PR #58 (T14, seção 6.3: mudança de status e avisos). Rode o `/sincronizar-quadro` para o cartão do T14 passar
a "Em PR", ligado ao #58.

## Contexto

- PR #58: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/58
- Reviewers: Liliane e você (o PR é do Alexandre).
- **Preciso da sua opinião sobre a decisão 1 da 6.3.** Ela troca a sua sugestão do recado
  `inbox/ale/2026-11-14-de-murilo-operacao-rejeitada-no-t14.md`, que fechei com a resposta. O `boolean` no
  `Transporte` ficou, mas no `Status` a transição rejeitada devolve o próprio status (`this`), em vez de um método que
  pergunta antes.
- A 6.3 também resolve o `trocarPerfil(null)` que a 6.2 (sua) deixou para o T14: ele devolve `false`. O passo 4 e a
  tabela de casos de borda da 6.2 foram atualizados.

## Resposta

