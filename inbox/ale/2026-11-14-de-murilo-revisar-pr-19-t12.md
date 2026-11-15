---
para: ale
de: murilo
data: 2026-11-14
tipo: tarefa
status: aceito
---

## O que é

Abri o PR #19, da `logitech/murilolss` para a `dev`, e você é o revisor. Leia e aprove, ou peça ajustes.

## Contexto

PR #19: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/19

- O PR altera só o `docs/Documento_de_Projeto.md`. Ele traz a T12: a **seção 6.1, Processamento de uma linha do
  lote**, com diagrama de sequência em Mermaid, passo a passo, o exemplo da RN 11 percorrido, os casos de borda e os
  ganchos para os cenários.
- **Ponto que precisa da sua aprovação:** na 2.2.6, que é sua, a `FabricaDeCodigos` ganhou `existeModal(codigo)` e
  `existePerfil(codigo)` → `boolean`, chamados antes de `criarModal`/`criarPerfil`. É assim que o lote indica código
  inexistente sem `null` nem exceção. Se preferir outro desenho, comente no PR.
- A decisão "no lote, a rejeição é um valor" fecha só a parte do lote da 1.7. A parte do `Status`/`Transporte` está no
  recado `inbox/ale/2026-11-14-de-murilo-operacao-rejeitada-no-t14.md`, para o T14.
- O PR tem 2 commits: o da T12 (`23ce1ac`) e o merge com a `dev`, que só traz aquele recado.
- Depois do merge, eu rodo `/sincronizar-quadro`.

## Resposta


**2026-11-15, Alexandre:** revisei e pedi ajustes no PR #19 (review "changes requested":
https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/19). Aprovo o `existeModal`/`existePerfil` na 2.2.6,
com estes pedidos:

1. **Contrato do `criar*`:** chamar `criarModal`/`criarPerfil` só depois de `existe*` devolver `true` é pré-condição.
   Se ela for violada, eles lançam `IllegalArgumentException` (erro de programação, que nunca acontece no lote). Registrar
   na 2.2.6 e na decisão da 6.1.
2. **Mesma lista de códigos** para `existe*` e `criar*`: um modal ou perfil novo é uma entrada nova nessa lista. Acrescentar
   o gancho "novo modal ou perfil" na lista de cenários da 6.1.
3. Acrescentar `Encomenda` e `ResultadoCalculo` aos colaboradores do `ProcessadorDeLote`.
4. No passo 9, nomear `relatorio.getTempoMedio()` como quem arredonda a média.
5. Preencher `VALIDA;7;11191,95;7,52;30,10` no caso do AEREO com 5000 kg (e, se quiser, os 5 casos a mais sugeridos
   no review).

Quando você subir os ajustes, eu confiro e aprovo; depois fecho este recado como `concluido`.
