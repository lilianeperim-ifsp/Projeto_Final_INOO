---
para: grupo
de: murilo
data: 2026-11-27
tipo: tarefa
status: pendente
prazo: 2026-11-27
prioridade: maxima
---

## O que é

**Revisão cruzada da Etapa 1 (T20), para hoje.** Com o merge do PR #73 (T18), todas as seções do Documento de
Projeto estão na `dev`. Antes da entrega, cada um lê o documento **inteiro**, inclusive as seções dos outros, e
responde aqui com uma das duas opções:

- "li tudo e entendo tudo"; ou
- os trechos que não entendeu ou de que discorda, com o número da seção.

A defesa é individual e inclui alterar o código ao vivo, então ninguém pode depender da explicação de quem escreveu a
seção.

## Contexto

- **Arquivo:** `docs/Documento_de_Projeto.md`, na `dev` atualizada (`git pull origin dev`).
- **O que conferir em cada seção:**
  - se ela responde ao item da Etapa 1 em `contexto/especificacoes-tecnicas.md`, seção 6;
  - se respeita as restrições técnicas (sem `enum`, `Map`, `Set`, `instanceof` nem `switch` por modal ou perfil fora
    da entrada);
  - se você conseguiria explicar ao professor por que se escolheu aquilo, e qual alternativa foi descartada.
- **Atenção especial na defesa:** pela 7.13, a 7.6 (configuração externa) não cabe nos 5 minutos (~9 min 30 s), a 7.4
  (SMS por região) é arriscada (~6 min) e a 7.7 (CANCELADO) fica no limite (~5 min 30 s).
- **Três perguntas ainda "Em aberto" no documento.** Elas não impedem a entrega, mas precisam de resposta do
  professor antes da Etapa 2:
  - usar `final` no método da fórmula de `Modal` (2.1.1);
  - usar `BigDecimal` com `RoundingMode.HALF_UP` no arredondamento (2.1.2);
  - usar o JUnit nos testes (8.1).
- **Correção pequena:** se achar erro de digitação ou de número, aponte aqui. Eu junto tudo no PR #77
  (https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/77), que já atualiza o cabeçalho do documento para a
  versão de entrega. Assim não abrimos três PRs no mesmo arquivo no dia da entrega. Alexandre, o #77 está com você
  para revisar.
- **Depois das três respostas:** eu gero o PDF com `/documento`, abro o PR da `dev` para a `main` com o Alexandre de
  reviewer e fecho a T20 no quadro.

## Resposta

**2026-11-27, Alexandre:** li tudo e entendo tudo, com as observações abaixo. Refiz as contas de todas as seções
(gabarito, 6.1, 6.2, 7.9 a 7.11, 7.13 e 8) e todas batem. Nenhuma seção usa `enum`, `Map`, `Set`, `instanceof` nem
`switch`, a não ser como alternativa descartada. Os pontos 1 a 5 estão também no PR #77, para entrarem lá.

1. **Antes da entrega:** ainda há avisos de situação dentro de cinco seções, inclusive na branch do PR #77: "Em
   revisão" na 2 (linha 173), na 4 (956), na 5 (1044) e na 6.3 (1524), e "Em construção" na 7 (1730). Sugestão: tirar
   só o rótulo e manter o texto. Na 2, sai também a frase "As decisões só valem depois da revisão do PR pelos 3".
2. **Remissões a cartões nas minhas seções:** "justificado no T11" e "a justificar no T11" na 2.2.1 (linhas 294 e
   301), na 2.2.3 (352) e na 2.2.4 (377) passam a 5.2.1, 5.2.2, 5.2.3 e 5.2.4. O "(para o T16)" da 2.2.3 (360) passa a
   7.7.
3. **Linhas com mais de 120 caracteres**, todas minhas: 257 (130), 1010 (127) e 1845 (138).
4. **1.2:** a tabela ainda diz "A decidir (T14)" para o Aviso e "lugar a decidir no T10" para a sobretaxa (linhas 77
   e 78). Sugestão: acrescentar "(resolvido em 2.1.4)" e "(resolvido em 2.1.1)", como a nota da 1.5.
5. **3.1:** o texto (linha 455) diz que a visão geral mostra "mais cinco" setas de dentro do grupo, mas há outras
   seis: `Transporte → Encomenda`, `Transporte *-- Posicao`, `ProcessadorDeLote → InterpretadorDeLinha`,
   `ProcessadorDeLote → FormatadorDeSaida`, `InterpretadorDeLinha → FabricaDeCodigos` e `LinhaInterpretada →
   Rejeicao`. Sugestão: dizer só que aparecem também algumas de dentro do grupo, entre elas as cinco citadas.
6. **Perguntas ao professor:** além das três do recado (`final`, `BigDecimal` e JUnit), o documento marca mais duas
   como "o grupo confirma antes de usar": `Objects.requireNonNull` (3.7, decisão 5, e 7.5, decisão 2) e `File` com
   `FileNotFoundException` (7.6). Não pedem mudança no documento, só entram na lista.

**2026-11-27, Murilo:** li tudo e entendo tudo. As correções da revisão cruzada do Alexandre (pontos 1 a 5) e a
sugestão da coluna "PR" do cabeçalho entraram no PR #77, commit `bd290f8`, junto com o ajuste da tabela da seção 7
(7.13 como "Escrita (PR #73)", commit `9b62ff0`). Falta a resposta da Liliane.
