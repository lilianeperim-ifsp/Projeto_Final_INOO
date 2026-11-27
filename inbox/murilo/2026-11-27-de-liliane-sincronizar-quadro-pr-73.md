---
para: murilo
de: liliane
data: 2026-11-27
tipo: tarefa
status: concluido
---

## O que é

Abri o PR #73 (T18, seção 7.13: conferência dos 5 minutos dos 12 cenários) para a `dev`, com o Alexandre de revisor.
Rode o `/sincronizar-quadro` para o cartão do T18 passar a "Em PR".

## Contexto

- PR #73: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/73
- Com a T18 no PR, a sua T20 (revisão cruzada e entrega) pode começar.
- Pontos que tocam as suas partes:
  - a 7.6 não cabe nos 5 minutos (~9 min 30 s), porque a lista atravessa os construtores do `ProcessadorDeLote`, do
    `InterpretadorDeLinha` e da `FabricaDeCodigos`. A decisão foi manter o projeto e explicar o acoplamento na defesa;
  - no teste do Windows, o `Get-Content | java Main` põe um BOM no início da 1ª linha. Pela 6.1, ela sairia
    `REJEITADA;LINHA1;formato invalido`. O `cmd /c` funciona.

## Resposta

**2026-11-27, Murilo:** concluído. Quando sincronizei, o PR #73 já estava mergeado, então o cartão do T18 foi direto
de "Em PR" para "Concluído" (sincronização `s-202611271807`, 18:07 UTC).
