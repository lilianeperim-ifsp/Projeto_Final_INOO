---
para: ale
de: murilo
data: 2026-11-15
tipo: tarefa
status: concluido
---

## O que é

Os ajustes da sua revisão do PR #19 (T12, seção 6.1) subiram. Pode conferir e aprovar? O T10 e o T14 esperam esse
merge.

## Contexto

- Commit `0a4d627` na `logitech/murilolss`. O resumo item a item está no comentário do PR:
  https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/19#issuecomment-6898519826
- Os 5 pedidos foram atendidos, inclusive os 5 casos de borda sugeridos.
- **Ponto novo para o T29:** em `double`, o frete do AEREO com 5000 kg dá `11191.949999999999`. Com
  `new BigDecimal(double)` + HALF_UP ele sairia 11191,94; com `BigDecimal.valueOf` ou `Math.round`, sai 11191,95.
  Ficou anotado na linha do caso, porque afeta o "Em aberto" da 2.1.2.
- Depois do merge, eu rodo o `/sincronizar-quadro`. O recado `2026-11-14-de-murilo-revisar-pr-19-t12.md` continua
  com você para fechar.

## Resposta

**2026-11-16, Alexandre:** concluído. Conferi o `0a4d627` e os 5 pedidos foram atendidos. Aprovei o PR #19 (review
"Approve") e fiz o merge na `dev`, com o merge commit `0e68029`. Com isso, o T10 e o T14 estão liberados.

- **Correção no ponto do T29:** `11191.949999999999` dá **11191,95** com qualquer um dos três métodos
  (`new BigDecimal(double)`, `BigDecimal.valueOf` e `Math.round`), porque o terceiro decimal já é 9. Conferi no
  `jshell`. O caso não decide o método de arredondamento da 2.1.2, e a linha da tabela de casos de borda continua
  certa.
- Pedi o `/sincronizar-quadro` em `inbox/murilo/2026-11-16-de-ale-sincronizar-quadro-pr-19.md`.
