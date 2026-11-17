---
data: 2026-11-16
autor: Alexandre Santos
assunto: revisão do PR 22 (divisão da Etapa 1)
---

## Resumo
O Alexandre atualizou a `logitech/alexsant22` com a `dev` pelo `/atualizar-branch`. Chegaram a memória `2026-11-16-revisao-pr-20-e-ajustes-da-2-2.md` e três recados, entre eles `inbox/ale/2026-11-17-de-murilo-etapa-1-em-partes-iguais.md`. Esse recado diz que T09, T16 e T18 passaram do Alexandre para a Liliane e que, na Etapa 1, o Alexandre fica com T10, T11, T14 e T15. Depois o Alexandre deu push da branch, que atualizou o PR #21 sem mudar a diferença dele em relação à `dev`.

O Claude revisou o PR #22 do Murilo (divisão da Etapa 1 em partes iguais e ajustes da seção 8 do Documento de Projeto). Conferiu as contagens (Alexandre 12, Liliane 17, Murilo 14), os 12 cenários de evolução em blocos de 4, as bordas novas da 8.3 (`10d`, `10f` e `0x1p3`, que o `parseDouble` aceita) e a falta de conflito de texto com o PR #21. O Alexandre pediu ajustes no PR ("Request changes"), sem aprovar, e mandou o recado `inbox/murilo/2026-11-16-de-ale-ajustes-pr-22.md` à `dev` (commit `17bdd11`).

## Decisões tomadas
- **PR #22 com "Request changes", sem aprovação por enquanto.** Motivo: na tabela "Distribuição" de `docs/divisao-projeto.md`, a linha "Já concluídos" diz "nenhum" para o Alexandre, mas o T08 está concluído. A tabela de trocas de 14/11 ainda justifica as trocas citando T09 e T16 como cartões do Alexandre. Alternativa descartada: aprovar e deixar só um comentário sobre a linha do T08.
- **Ordem de merge: o PR #21 entra antes do #22, ou junto.** Motivo: a 8.5 nova do #22 (o teste confere o status pelo `getNome()`, sem `instanceof`) depende do texto da 2.2.3 que está no #21. Na `dev`, a 2.2.3 ainda diz que o `getNome()` é "usado só no texto do log e da mensagem". Alternativa descartada: pedir ao Murilo que mudasse o texto do #22. Não precisa, basta acertar a ordem de merge.
- **Registro para o T21 (Murilo):** a 8.1 põe os testes em `LogiTech/test/testes`, mas o `LogiTech/LogiTech.iml` só declara `src`. No T21 a pasta precisa ser criada e marcada como pasta de testes, com o JUnit ligado só a ela. Fica fora do escopo do PR #22.
- O Alexandre ainda não respondeu se aceita a nova divisão da Etapa 1. A aprovação do #22 vale como resposta.

## Erros e rejeições da IA
- **Recado com uma posição que o Alexandre não tinha tomado:** na primeira versão do recado `inbox/murilo/2026-11-16-de-ale-ajustes-pr-22.md`, o Claude escreveu que o Alexandre "concorda com a nova divisão da Etapa 1", mas o Alexandre não tinha dito isso. O próprio Claude percebeu antes do commit, tirou a frase e avisou o Alexandre. A versão enviada à `dev` não tem a frase.

## Pendências
- **Murilo:** corrigir os itens 1 e 3 do PR #22, citar na descrição que o #22 depende do #21 e pedir de novo a revisão do Alexandre.
- **Liliane:** revisar o PR #21, que já tem a aprovação do Murilo.
- **Alexandre:** decidir se aceita a nova divisão da Etapa 1 (T09, T16 e T18 para a Liliane), aprovando ou não o #22. Combinar com a Liliane o formato dos cenários, porque o T16 dela depende do T15. Se tiver rascunho do diagrama UML (T09), passá-lo para ela.
- O recado `inbox/ale/2026-11-16-de-murilo-pdf-do-documento.md` (o PDF não é versionado, gerar com `/documento`) continua pendente.

## Próximos passos
- Quando o Murilo pedir revisão de novo, revisar o #22 outra vez e mergear o #21 antes dele, ou junto.
- Seguir com o T10 (em andamento) e, depois, o T11, o T15 e o T14.
- Depois de cada merge, avisar o Murilo para rodar o `/sincronizar-quadro`.
