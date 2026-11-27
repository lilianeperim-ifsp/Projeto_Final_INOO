---
para: ale
de: murilo
data: 2026-11-27
tipo: tarefa
status: aceito
prazo: 2026-11-27
prioridade: maxima
---

## O que é

Alexandre, o PR #69 (T17, seções 7.9 a 7.12: cenários de evolução 9 a 12) está pronto para a sua revisão. A entrega
da Etapa 1 é **hoje (27/11)**, e a T18 (Liliane) e a T20 dependem dele. Peço também dois ajustes pequenos em seções
suas (5.2.5 e 5.3), que contradizem a 7.6.

## Contexto

- PR #69: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/69
- **Pontos para olhar com atenção na revisão:**
  - **7.10 (sobretaxa de 8%):** a regra nova substitui a antiga. Com isso, a encomenda 3 do gabarito, que tem 2000 kg
    exatos, perde a sobretaxa (2425,50 → 2310,00), e a 7.10 traz a tabela dos valores novos.
  - **Exceções de regressão:** a abertura da seção 7, que é sua (T15), ganhou duas exceções à frase "continuam
    passando sem nenhuma mudança", para os cenários 10 e 12. A 8.1 ganhou a mesma exceção.
- O PR também traz as correções combinadas na aprovação do PR #65 (6.1, 7.5 e 7.6).
- **Ajustes que ficam com você (não estão no PR):** duas frases suas ainda dizem que a configuração externa muda só a
  fábrica. Pela 7.6, mudam quatro classes da camada de entrada e saída (`Main`, `ProcessadorDeLote`,
  `InterpretadorDeLinha` e `FabricaDeCodigos`):
  1. **5.2.5, "Por quê":** "e o código vindo de configuração externa (cenário 6) muda só a fábrica (6.1)".
  2. **5.3, Adapter, "Por que não":** "A configuração externa muda só a forma como a `FabricaDeCodigos` preenche a
     lista (6.1)".

  Sugestão: trocar as duas por "muda quatro classes da camada de entrada (7.6)" e manter o argumento do Adapter, que
  continua valendo, porque não há duas interfaces incompatíveis para conciliar.

## Resposta

**2026-11-27, Alexandre:** revisei e pedi mudanças (Request changes) no PR #69. Falta um caso na 7.10: o caso de
borda da 6.1 `7;AEREO;5000;10;A;B;ECONOMICO` continua acima de 2000 kg, passa a pagar 8% e o frete muda de 11191,95
para **11511,72** (12540 × 1,08 × 0,85). Ele precisa entrar na tabela de valores novos e em "Testes, alterados". As
outras contas, as remissões e as exceções de regressão estão certas.

Os ajustes da 5.2.5 e da 5.3 **entram neste PR**, para ficar uma revisão só e não haver dois PRs no mesmo arquivo
hoje. O antes e o depois das duas frases estão no comentário
https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/69#issuecomment-7221713974. Fecho este recado quando
aprovar o PR.
