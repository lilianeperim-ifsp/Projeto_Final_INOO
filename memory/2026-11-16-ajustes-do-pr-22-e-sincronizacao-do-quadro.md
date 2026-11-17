---
data: 2026-11-16
autor: Murilo Leandro
assunto: ajustes do PR 22 e sincronização do quadro
---

## Resumo
O Murilo pediu as correções que o Alexandre deixou na revisão do PR #22 ("Request changes"), que trata da divisão da Etapa 1 em partes iguais e dos ajustes da seção 8 do Documento de Projeto. O Claude corrigiu `docs/divisao-projeto.md` (commit `d842d8a`, na `logitech/murilolss`), acrescentou à descrição do PR a seção "Ordem de merge: o PR #21 entra antes deste, ou junto", atualizou a branch com a `dev`, deu push e pediu de novo a revisão do Alexandre. O recado `inbox/murilo/2026-11-16-de-ale-ajustes-pr-22.md` foi fechado como `concluido`, direto na `dev` (commit `b65936c`).

Depois o Murilo rodou o `/sincronizar-quadro` (entrada `s-202611170105`): o PR #21 passou a constar como aprovado pelo Murilo e o PR #22 ganhou o título atual. Nenhum cartão estava na coluna "Em PR", então nenhum foi movido.

## Decisões tomadas
- **Linha "Já concluídos" completa, conferida no quadro.** O Alexandre pediu só `T08` na coluna dele. A linha também estava desatualizada para os outros dois, então ficou `T01, T02, T03, T07, T12, T19` (Murilo), `T04, T05` (Liliane) e `T08` (Alexandre), como está na coluna "Concluído" do quadro. Motivo: corrigir só o T08 deixaria a mesma linha errada para o Murilo e para a Liliane. Alternativa descartada: trocar só "nenhum" por `T08`. O Alexandre foi avisado na Resposta do recado, caso prefira só o T08.
- **Nota das trocas de 2026-11-14 em dois lugares.** A linha "Liliane → Alexandre | T08, T10, T15" agora diz que o T09 e o T16 passaram para a Liliane, e uma nota abaixo da tabela cobre também o T18, citado no parágrafo "Continuam com o dono anterior". Motivo: esse parágrafo tinha o mesmo problema que o Alexandre apontou na tabela. Alternativa descartada: a nota só na célula da tabela, que não cobriria o T18.
- **Ordem de merge: o #21 antes do #22, ou junto.** O texto do documento não mudou; a dependência ficou só na descrição do PR, como o Alexandre pediu. Motivo: a 8.5 nova (o teste confere o status pelo `getNome()`) se apoia na 2.2.3 que está no #21. Alternativa descartada: mudar o texto da 8.5 para não depender do #21.
- **Pasta de testes no T21 (item 4 da revisão):** sem mudança neste PR. Ao fazer o T21, o Murilo cria `LogiTech/test`, marca como pasta de testes no `LogiTech/LogiTech.iml` e liga o JUnit só a ela.
- **Datas "2026-11-17" mantidas por enquanto.** As notas novas usam "2026-11-17" para combinar com o título da seção "Ajuste de 2026-11-17" (ver o erro de data abaixo). Alternativa descartada: corrigir a data agora, dentro do PR #22, porque os nomes dos recados com essa data já estão na `dev`.

## Erros e rejeições da IA
- **Tabela "Distribuição" desatualizada (erro de dados, sessão anterior do Murilo):** ao escrever o ajuste da Etapa 1 em `docs/divisao-projeto.md`, o Claude deixou a linha "Já concluídos" como estava em 14/11 ("nenhum" para o Alexandre e para a Liliane, e sem o T12 e o T19 do Murilo), embora o mesmo texto dissesse que o T08 estava concluído. Também manteve a justificativa das trocas de 14/11 citando o T09 e o T16 como cartões do Alexandre. O Alexandre percebeu na revisão do PR #22 e pediu ajustes. Corrigido no commit `d842d8a`, com a linha conferida na coluna "Concluído" do quadro.
- **Data do dia seguinte (erro de dados, sessão anterior do Murilo):** o ajuste da Etapa 1 foi feito em 16/11 às 21h27 (horário de Brasília), mas `docs/divisao-projeto.md` o chama de "Ajuste de 2026-11-17", e os recados `inbox/ale/2026-11-17-de-murilo-etapa-1-em-partes-iguais.md` e `inbox/liliane/2026-11-17-de-murilo-novos-cartoes-da-etapa-1.md` têm a mesma data no nome. Naquele horário já era 17/11 em UTC; a causa provável é o Claude ter usado a data UTC, como no caso de 10/11 já anotado no relatório. O Claude percebeu nesta sessão, ao conferir a data local com os commits. Não foi corrigido (ver "Pendências").

## Pendências
- **Alexandre:** revisar de novo o PR #22 e dizer se prefere só o `T08` na linha "Já concluídos". A aprovação dele continua valendo como resposta ao recado da divisão da Etapa 1.
- **Liliane:** revisar o PR #21, que já tem a aprovação do Murilo.
- **Merge:** o #21 entra antes do #22, ou junto.
- **Murilo:** rodar o `/sincronizar-quadro` depois do merge do #21 e do #22. O recado `inbox/murilo/2026-11-16-de-ale-sincronizar-quadro-pr-21.md` continua pendente até a sincronização depois do merge.
- **Grupo:** decidir se a data "2026-11-17" do ajuste é corrigida para 2026-11-16 em `docs/divisao-projeto.md`. Os nomes dos recados não mudam, porque recado não é renomeado.
- `docs/Documento_de_Projeto.pdf` continua fora do git.

## Próximos passos
- Depois da aprovação do Alexandre e do merge do #21, mergear o #22 e sincronizar o quadro.
- Seguir com os cartões do Murilo na Etapa 1: T13 (fluxo da troca de perfil), T17 (cenários 9 a 12, que depende do T16 da Liliane) e T20 (revisão cruzada, que depende do T18 dela).
- No T21, criar a pasta `LogiTech/test` como pasta de testes, com o JUnit ligado só a ela.
