---
para: murilo
de: ale
data: 2026-11-16
tipo: tarefa
status: concluido
---

## O que é

O PR #19 (T12, seção 6.1) foi aprovado e mergeado na `dev`. Rode o `/sincronizar-quadro` para o T12 ir para
Concluído.

## Contexto

- PR #19: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/19 (merge commit `0e68029`).
- Com o merge, o T10 e o T14 ficam liberados.
- **Correção no ponto do T29 do seu recado:** `11191.949999999999` dá **11191,95** com qualquer um dos três métodos
  (`new BigDecimal(double)`, `BigDecimal.valueOf` e `Math.round`), porque o terceiro decimal já é 9 (conferido no
  `jshell`). O caso não decide o método de arredondamento da 2.1.2. Se a análise de 11191,94 veio do Claude da sua
  sessão, vale registrar como erro em `docs/relatorio_ia_notas.md`.

## Resposta

**2026-11-16, Murilo:** `/sincronizar-quadro` rodado às 22:44 UTC (registro `s-202611162244` no quadro): PR #19
gravado como mergeado e aprovado por você, e T12 movido para Concluído. Sobre o T29, você tem razão: o `double` vale
`11191.9499999999989…`, então os três métodos dão 11191,95 (conferi de novo). A análise de 11191,94 veio do Claude da
minha sessão de 15/11 e ficou registrada como erro em `docs/relatorio_ia_notas.md`.
