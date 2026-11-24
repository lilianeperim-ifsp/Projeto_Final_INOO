---
data: 2026-11-24
autor: Alexandre Santos
assunto: aprovação e merge do PR 61 (T15)
---

## Resumo

Esta memória continua a `memory/2026-11-24-ajustes-da-revisao-do-pr-61.md`, gravada mais cedo na mesma sessão.

O Murilo aprovou o PR #61 (T15, seção 7, cenários de evolução 1 a 4) às 13:15 UTC, depois de conferir o commit
`46ffeac`. Na aprovação, ele deixou um detalhe que não impedia o merge: na 7.2, o valor esperado do `EncomendaTest`
deve partir da base do gabarito **sem arredondar**. O Alexandre pediu para fazer o ajuste e depois o merge.

- **Ajuste:** commit `00393c9`, na `logitech/alexsant22`. A 7.2 de `docs/Documento_de_Projeto.md` diz que o esperado é
  a base sem arredondar (2.1.2) vezes o multiplicador escolhido. Também explica que a tabela da RN 12 mostra a base já
  arredondada (tempo 18,67, e não 18,6667), o que pode dar um centavo de diferença.
- **Merge:** o PR #61 foi mesclado na `dev` às 13:19 UTC, com merge commit (`55f3322`), como os PRs anteriores (por
  exemplo, o #58). A branch não foi apagada.
- **Recado ao Murilo:** `inbox/murilo/2026-11-24-de-ale-sincronizar-quadro-pr-61-mergeado.md` foi enviado à `dev` (commit
  `0a5dd7e`). Ele pede que o Murilo rode `/sincronizar-quadro` para o T15 passar a "Concluído", conta o ajuste do
  `00393c9` e convida o Murilo a conferi-lo.
- A `logitech/alexsant22` recebeu a `dev` e ficou igual a ela.

Com o T15 mesclado, as seções do Alexandre na Etapa 1 estão todas na `dev`: T08 (2), T10 (4), T11 (5), T14 (6.3) e
T15 (7.1 a 7.4). O recado fala em "as minhas quatro tarefas da Etapa 1": são as que restavam depois do ajuste de
2026-11-16 (T10, T11, T14 e T15, em `docs/divisao-projeto.md`). O T08 já estava concluído antes.

## Decisões tomadas

1. **Fazer o detalhe da aprovação antes do merge, no mesmo PR.**
   - **Por quê:** é uma frase, e o merge leva junto o texto já correto da 7.2, que a T16 e a T17 vão usar como
     referência de formato.
   - **Alternativa descartada:** mesclar como estava e corrigir num PR seguinte. Assim, a `dev` ficaria com uma
     instrução de teste que pode errar um centavo.
   - **Consequência:** o commit `00393c9` entrou depois da aprovação, sem revisão do Murilo. Isso ficou registrado no
     recado.
2. **Merge com merge commit (`gh pr merge --merge`)**, sem squash, para manter o padrão do histórico da `dev`.
3. **Recado novo para o merge**, em vez de reaproveitar o recado da abertura do PR #61 (de 23/11), que ainda está
   pendente na inbox do Murilo. Segue o mesmo modelo do recado do merge do PR #58.

## Erros e rejeições da IA

Nenhum.

## Pendências

- **Quadro de situação desatualizado:** a T15 continua "Escrita, em revisão" no topo do documento e na tabela da seção
  7, mesmo depois do merge. Deve passar a "Escrita", como foi feito com a 6.3 depois do PR #58. A mudança vai por PR
  e pode entrar junto com a próxima alteração no documento. O mesmo vale para a seção 4 (T10), se o PR dela já foi
  mergeado; isso não foi conferido nesta sessão.
- O Murilo rodar `/sincronizar-quadro` (T15 para "Concluído") e fechar os recados do Alexandre em `inbox/murilo/`. Estão
  pendentes (conferido na `dev`, commit `0a5dd7e`):
  - `2026-11-23-de-ale-sincronizar-quadro-pr-58-mergeado.md`;
  - `2026-11-23-de-ale-sincronizar-quadro-pr-61.md`;
  - `2026-11-24-de-ale-sincronizar-quadro-pr-61-mergeado.md`.
- O Murilo conferir o commit `00393c9`, feito depois da aprovação dele.
- A afirmação da 7.1 sobre o `Get-Content | java` trocar os acentos por `?` no PowerShell 5.1 continua não testada. Ela
  fica para a T18 (Liliane) e o `COMO_EXECUTAR.md`.
- A T16 (Liliane) e a T17 (Murilo) devem escrever a 7.5 a 7.12 no formato comum da seção 7, que já está na `dev`, até a
  entrega da Etapa 1 (27/11).

## Próximos passos

- Acompanhar a T16, a T17 e a T18 e revisar os PRs delas, porque o Alexandre é o reviewer de todos os PRs.
- Quando a seção 7 estiver completa, conferir o quadro de situação no topo do documento e gerar o PDF com `/documento`
  para a entrega da Etapa 1 (27/11).
