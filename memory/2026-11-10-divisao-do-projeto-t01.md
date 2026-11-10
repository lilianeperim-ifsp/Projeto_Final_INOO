---
data: 2026-11-10
autor: Murilo Leandro
assunto: divisão do projeto entre os 3 (T01)
---

## Resumo

O Murilo pediu o PR da tarefa T01 do quadro ("Combinar a divisão de áreas entre os 3"). O cartão dizia que o Claude dividiria as tarefas de forma justa e igualitária, mas a divisão não existia no repositório. O Claude a elaborou em `docs/divisao-projeto.md`, dividindo os 45 cartões de "A fazer" sem responsável (T03 a T47), 15 para cada integrante. O Murilo revisou e autorizou o commit. Depois que o PR #13 foi mergeado, o Claude atualizou a branch com a `dev`, deu push e abriu o **PR #14** (`logitech/murilolss` para `dev`, revisor `alexsant22`). Também gravou o número `14` e o revisor no cartão T01, deixou o recado em `inbox/ale/2026-11-10-de-murilo-revisar-pr-14-divisao-projeto.md` (commit `ffe7112` na `dev`) e o Murilo rodou `/sincronizar-quadro` (registro `s-202611101343`: #13 mergeado, #14 aberto). Os responsáveis **ainda não foram gravados** nos 45 cartões do quadro.

## Decisões tomadas

- **Fatias verticais, uma parte do sistema por pessoa, de ponta a ponta.** Liliane fica com o cálculo (modais, perfis, sobretaxa, arredondamento; padrão Strategy), Alexandre com a vida do transporte (status, rastreamento, avisos; State e Observer) e Murilo com entrada, validação, relatório, saída e configuração do projeto (Factory). Motivo: na defesa individual cada um precisa explicar e alterar ao vivo, em até 5 minutos, a sua parte. Alternativa descartada: dividir por tipo de trabalho (um escreve o documento, um programa, um testa), porque quem só escreveu documento não altera o código ao vivo e quem só programou não defende as alternativas descartadas.
- **Escopo da divisão: só os 45 cartões em "A fazer" sem responsável (T03 a T47), 15 para cada.** O T01 (já do Murilo, em andamento) e o T02 (concluído) ficaram de fora. Isso foi pedido pelo Murilo, que substituiu a primeira versão feita pelo Claude (arquivo `divisao-de-areas.md`, 46 cartões incluindo o T01, com Murilo 16 / Liliane 15 / Alexandre 15).
- **Cartões que valem para os três** (T04, T20, T45, T46): o quadro aceita um responsável só, então o responsável coordena e confere. Liliane coordena T04 e T20; Alexandre coordena T45 e T46.
- **O Alexandre não passa de 15 cartões** por ser revisor de todos os PRs. O Murilo fica com mais cartões de código (7, contra 5 e 4) e o arquivo registra a opção de passar o T35 (tratar linha inválida) para o Alexandre.
- **Os responsáveis só são gravados no quadro depois do merge do #14.** O Murilo respondeu "ainda não" à oferta de gravar antes. Alternativa descartada: gravar já e corrigir cartões se o grupo pedir ajustes.
- **`Documento_de_Projeto.md` e `.pdf` soltos na branch foram apagados** a pedido do Murilo (eram só a definição do formato do documento, da T02). Não estavam commitados, então não há como recuperar.
- **O T01 fica em "Em andamento" com o PR 14 vinculado.** A skill `/sincronizar-quadro` não move cartões de "Em andamento" para "Em PR": só liga o PR a cartões que já estão em "Em PR" e move para "Concluído" quando o PR é mergeado.

## Erros e rejeições da IA

- **Erro (premissa):** o Claude disse que o `/sincronizar-quadro` moveria o T01 para "Em PR". A skill não faz isso (só vincula PR a cartões já em "Em PR" e move para "Concluído" ao mergear). Percebido ao rodar a skill; o Claude corrigiu a informação para o Murilo, que move o cartão pelo quadro.
- **Erro (dados):** ao gravar o número do PR no cartão T01, o Claude pôs `atualizadoEm: 2026-11-10T14:00:00.000Z`, um horário inventado (a hora real era cerca de 13:40 UTC). Percebido ao rodar a skill e consultar `date -u`. O Claude avisou o Murilo e ofereceu corrigir; **a correção ainda não foi feita**.
- **Rejeição (processo):** o Claude elaborou a divisão em `docs/divisao-de-areas.md` (46 cartões, T01 incluído) e a commitou localmente (`00c97d7`). O Murilo pediu "na verdade" um documento `divisao-projeto.md` só com os cartões de "A fazer" sem responsável; o motivo além disso não foi informado. O Claude apagou o arquivo antigo e desfez o commit local, ainda sem push (novo commit `cd838f0`).

## Pendências

- **Aprovação do Alexandre no PR #14** e merge. Ele foi avisado pela inbox.
- **A Liliane não foi avisada.** Ela não é revisora do #14 nem recebeu recado, mas a divisão define 15 cartões dela. Falta decidir como ela fica sabendo (recado em `inbox/liliane/` ou pedido de revisão).
- **Gravar os 45 responsáveis no quadro** depois do merge, conforme a versão aprovada de `docs/divisao-projeto.md`, e rodar `/sincronizar-quadro`.
- **Mover o T01 para "Em PR"** no quadro (é manual) e corrigir o `atualizadoEm` do cartão.
- **Opção em aberto:** passar o T35 do Murilo para o Alexandre para equilibrar a carga de código.
- **T03** (Murilo avisar Liliane e Alexandre da regra dos 5 minutos) continua em "A fazer".
- Os slides das aulas 7, 8 e 9 continuam sem fornecimento (cartão T06).

## Próximos passos

1. Esperar a revisão do Alexandre no #14 e avisar a Liliane.
2. Depois do merge, gravar os responsáveis dos 45 cartões, mover o T01 para "Concluído" e rodar `/sincronizar-quadro`.
3. Começar pelos cartões que destravam os demais: T07 (Análise do problema, Murilo), depois T08 (Catálogo, Liliane).
4. No começo de cada sessão: `git pull origin dev` e ler os arquivos mais recentes de `memory/` e os recados pendentes em `inbox/murilo/`.
