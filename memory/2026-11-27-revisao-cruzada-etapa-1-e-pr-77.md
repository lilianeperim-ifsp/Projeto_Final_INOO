---
data: 2026-11-27
autor: Alexandre Santos
assunto: revisão cruzada da Etapa 1 (T20) e revisão do PR #77
---

## Resumo

Sessão do Alexandre no dia da entrega da Etapa 1:

- **Branch e inbox:** atualizou a `logitech/alexsant22` com a `dev`. Fechou na inbox os recados de revisão dos PRs #69
  (Murilo) e #73 (Liliane), que já estavam aprovados e mergeados (commit `0a4447d` na `dev`).
- **PR #77 (T20, Murilo):** é o cabeçalho do `docs/Documento_de_Projeto.md` na versão de entrega. O Alexandre o
  revisou como **Comment**:
  - o escopo é só o cabeçalho, e os 13 números de PR da tabela batem com o GitHub;
  - nenhuma linha passa de 120 caracteres, e não há conflito com a `dev`;
  - sugestão não bloqueante: a coluna "PR" anota correções posteriores só nas linhas da seção 2 e da 7.5 a 7.8, mas o
    #58 e o #69 também mexeram em outras seções. Proposta: deixar só o PR em que cada seção foi escrita e pôr uma
    frase abaixo da tabela.
- **Revisão cruzada (T20):** o Claude leu o documento inteiro: primeiro as seções 1, 3, 6.1, 6.2, 7.5 a 7.13 e 8, e
  depois as do Alexandre (2, 4, 5, 6.3 e 7.1 a 7.4).
  - **Contas:** refez à mão as contas do gabarito, da 6.1, da 6.2, da 7.9 a 7.11, das somas de tempo da 7.13 e da 8.
    Todas batem com a RN 2 a 5.
  - **Restrições:** `enum`, `Map`, `Set`, `instanceof` e `switch` só aparecem como alternativa descartada.
  - **Resposta:** o Alexandre respondeu no recado `inbox/grupo/2026-11-27-de-murilo-revisao-cruzada-etapa-1.md`
    (commit `531ee1b`) com "li tudo e entendo tudo, com as observações abaixo" e seis pontos. Os pontos 1 a 5 também
    estão num comentário no PR #77 (issuecomment-7226222885), com a linha e o texto sugerido de cada correção.

## Decisões tomadas

- **PR #77 revisado como Comment, e não Approve.**
  - Por quê: o Murilo vai juntar no #77 as correções da revisão cruzada, então a aprovação vem depois de reler o diff
    final.
  - Alternativa descartada: aprovar já, com a sugestão num comentário (era a recomendação do Claude).
- **As correções da revisão cruzada vão todas para o PR #77**, como o Murilo pediu no recado, mesmo as das seções do
  Alexandre.
  - Por quê: evitar três PRs no mesmo arquivo no dia da entrega.
  - Alternativa descartada: o Alexandre abrir um PR próprio para as seções dele.
- Os seis pontos da revisão cruzada:
  1. **Antes da entrega:** tirar os avisos de situação que ficaram dentro das seções. São "Em revisão" na 2, na 4, na
     5 e na 6.3, e "Em construção" na 7. Na 2, sai também a frase "As decisões só valem depois da revisão do PR pelos
     3". O PR #77 atualizou só o cabeçalho do topo, e esses avisos continuavam na branch dele.
  2. **Remissões a cartões nas seções do Alexandre:** "justificado no T11" na 2.2.1, 2.2.3 e 2.2.4 passa a 5.2.1,
     5.2.2, 5.2.3 e 5.2.4, e "(para o T16)" na 2.2.3 passa a 7.7.
  3. **Três linhas do Alexandre com mais de 120 caracteres:** 257, 1010 e 1845.
  4. **1.2:** acrescentar "(resolvido em 2.1.4)" e "(resolvido em 2.1.1)" nas linhas do Aviso e da sobretaxa, que
     ainda dizem "a decidir".
  5. **3.1:** o texto diz "mais cinco" setas de dentro do grupo na visão geral, mas o diagrama tem outras seis
     (`Transporte → Encomenda`, `Transporte *-- Posicao`, as três da cadeia `ProcessadorDeLote` →
     `InterpretadorDeLinha` → `FabricaDeCodigos` com o `FormatadorDeSaida`, e `LinhaInterpretada → Rejeicao`).
  6. **Perguntas ao professor:** além de `final` (2.1.1), `BigDecimal` com `RoundingMode.HALF_UP` (2.1.2) e JUnit
     (8.1), o documento marca mais duas como "o grupo confirma antes de usar": `Objects.requireNonNull` (3.7, decisão
     5, e 7.5, decisão 2) e `File` com `FileNotFoundException` (7.6). Não pedem mudança no documento.

## Erros e rejeições da IA

- **Erro (processo):** no início da sessão, o Claude listou três recados pendentes já resolvidos e se ofereceu para
  fechá-los. Um deles, `inbox/ale/2026-11-27-de-murilo-revisar-pr-69-t17.md`, já estava `concluido`. A busca por
  `status: pendente` também pegou um recado do grupo concluído que cita esse texto no corpo, e o Claude não conferiu
  o cabeçalho de cada arquivo. Ele mesmo percebeu ao abrir os arquivos, avisou e fechou só os dois que estavam
  pendentes.
- **Rejeição (processo):** na revisão do PR #77, o Claude recomendou Approve com um comentário. O Alexandre preferiu
  Comment, para aprovar depois das correções da T20.

Os dois casos foram registrados em `docs/relatorio_ia_notas.md`.

## Pendências

- **Murilo:** aplicar no PR #77 os pontos 1 a 5 do comentário do Alexandre e as correções que vierem da Liliane.
  Depois, fechar o recado da revisão cruzada, gerar o PDF com `/documento` e abrir o PR da `dev` para a `main`.
- **Liliane:** responder no recado da revisão cruzada.
- **Professor:** as cinco perguntas sobre recursos fora dos slides (ponto 6), antes da Etapa 2.

## Próximos passos

- O Alexandre relê o diff do PR #77 depois das correções e o aprova, se estiverem certas. Depois do merge, avisa o
  Murilo para rodar `/sincronizar-quadro`.
- O Alexandre revisa o PR da `dev` para a `main` da entrega da Etapa 1.
