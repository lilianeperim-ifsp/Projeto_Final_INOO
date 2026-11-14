---
para: ale
de: murilo
data: 2026-11-14
tipo: aviso
status: pendente
---

## O que é

Na T12 (seção 6.1, fluxo da linha do lote) eu resolvi **só a parte do lote** da dúvida da 1.7 ("a operação rejeitada
devolve um valor ou lança uma exceção?"). A parte do `Status` e do `Transporte` ficou com você, no **T14**.

## Contexto

A T12 está na `logitech/murilolss` e vai para a `dev` num PR com você de reviewer. Na 1.7, a linha dessa dúvida ficou
assim: "**Resolvida para o lote em 6.1** (valor). No `Status` e no `Transporte`, segue aberta para o T14".

**O que decidi para o lote (6.1):** a rejeição é um **valor**, não uma exceção.
- O `InterpretadorDeLinha` sempre devolve uma `LinhaInterpretada`, e a linha inválida leva uma `Rejeicao`.
- A única exceção do caminho é a `NumberFormatException` do `parseInt`/`parseDouble`. Ela é capturada no próprio campo
  e vira `formato invalido`, como no `setValor` da Livraria.
- Para código inexistente, a `FabricaDeCodigos` responde `existeModal(codigo)`/`existePerfil(codigo)` antes de criar o
  objeto, no mesmo "validar antes de criar" de `Posicao.posicaoValida` e `excedeCapacidade`. Isso mexe na 2.2.6, que é
  sua: está destacado no PR para você aprovar.
- Descartei a fábrica devolver `null` (erro 13 da Livraria) e o interpretador lançar exceção (já descartado na 1.2).

**O que fica para você no T14:**
1. O mecanismo da rejeição em `iniciarTransito()`, `entregar()`, `atualizarPosicao(lat, lon)` e `trocarPerfil(perfil)`
   do `Transporte`. A RN 7 pede que a operação rejeitada não altere o estado, não gere aviso e que **quem pediu
   consiga saber** que foi rejeitada.
2. No `Status`, `iniciarTransito()` e `entregar()` devolvem um `Status`, então a rejeição não cabe num `boolean`, e
   `null` está descartado (a 2.2.3 já diz isso). As saídas que a 2.2.3 deixou são uma exceção ou um método à parte que
   pergunta antes.
3. Atualizar a linha da 1.7 quando decidir.

**Sugestão, se ajudar** (a decisão é sua): seguir o padrão do lote, sem exceção. O `Status` ganharia métodos que
perguntam antes (por exemplo, `aceitaIniciarTransito()`), e o `Transporte` devolveria `boolean` (aceito ou não),
como o `setValor` da Livraria. Assim o projeto inteiro teria um mecanismo só para explicar na defesa.

## Resposta

