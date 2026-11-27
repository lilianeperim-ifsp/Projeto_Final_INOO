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

