---
data: 2026-11-27
autor: lilianeperim-ifsp (Liliane)
assunto: correções da revisão do Murilo no PR #65 (T16)
---

## Resumo
A Liliane rodou `/atualizar-branch`: a `logitech/lilianeperim-ifsp` recebeu da `dev` a memória de 26/11 (T16), dois
recados para o Murilo (sincronizar o quadro com o PR #65 e a T18 esperando a T17) e uma linha do relatório de IA
(merge `a41145e`). A inbox dela tem um único recado pendente,
`inbox/liliane/2026-11-22-de-murilo-pendencias-da-etapa-1.md`, sem prioridade máxima.

O PR #65 (T16, seção 7.5 a 7.8) estava aberto, sem revisão do Alexandre e com uma revisão do Murilo em comentário
(26/11), com 7 pontos, quase todos na 7.6. O Claude propôs o texto das correções 2 a 7, a Liliane aprovou tudo, e o
Claude aplicou as correções em `docs/Documento_de_Projeto.md` (commit `fe8aa48` na `logitech/lilianeperim-ifsp`, com
push, o que atualizou o PR). Ele também respondeu à revisão no PR, item por item, marcando o Alexandre (comentário
`issuecomment-7209653171`). O pedido de revisão ao Alexandre continua pendente desde a abertura do PR, então não foi
preciso pedir de novo.

## Decisões tomadas
- **Ponto 1 (a 6.1 contradiz a 7.6):** a Liliane aceitou a oferta do Murilo. Ele ajusta o gancho e a "Eficiência"
  da 6.1 no PR da T17, citando as quatro classes da 7.6. Alternativa descartada: a Liliane alterar a 6.1, que é seção
  do Murilo, no PR #65.
- **Ponto 2 (`ProcessadorDeLote`):** "Classes alteradas" da 7.6 agora diz que as quatro classes estão na tabela da
  2.2.6, que o `ProcessadorDeLote` só ganha um construtor que repassa a lista, sem tocar no `processar(linhas)`, e
  que isso é inevitável pela decisão 4 da 3.7. Entrou uma linha nova em "O que não muda" e a **decisão 6 da 7.6**: a
  lista passa pelo `ProcessadorDeLote`, e o `Main` não monta a fábrica. Alternativa descartada: o `Main` criar a
  `FabricaDeCodigos` e passá-la pronta, o que mudaria a decisão 4 da 3.7 para todo o lote.
- **Ponto 3 (pasta do `modais.txt`):** fica na pasta de trabalho, que é a raiz de `LogiTech/`, ao lado da `src/`
  (passo 4 da alteração ao vivo). Caso de borda novo, "arquivo na pasta errada": é o Working directory do Run do
  IntelliJ (por padrão, a raiz do projeto) ou a pasta onde o comando é digitado no `cmd`. Fora dela, o arquivo conta
  como ausente, e o `RODO` sai `codigo inexistente` sem mensagem.
- **Ponto 4 (recursos fora dos slides):** `Objects` (7.5, decisão 2), `File` e `FileNotFoundException` (7.6, item do
  `Main`) marcados como "o grupo confirma antes de usar", no formato da 3.7 (decisão 5). Nos `.md` dos slides também
  não aparece `try`/`catch`, mas as aulas 7 a 9 faltam e o enunciado exige tratar as exceções, por isso esse recurso
  não foi marcado.
- **Ponto 5 (`trim`):** a `FabricaDeCodigos` separa cada linha da configuração com `split(";", -1)` e faz `trim` em
  cada parte, como no passo 4 da 6.1. Caso de borda novo: `RODO ; RODOVIARIO` vale como `RODO;RODOVIARIO`, e
  ` ;RODOVIARIO` é ignorada por ter uma parte vazia.
- **Ponto 6 (campo a mais):** "O que a configuração traz" virou **"Ponto de partida"**, um campo opcional da tabela
  de formato da seção 7 ("o que o cenário supõe e o enunciado não define"), e o parágrafo sobre os campos opcionais
  foi atualizado. Alternativa descartada: juntar esse texto a "Classes alteradas", que já é o campo mais longo da 7.6.
- **Ponto 7 (abertura da seção 7):** a situação da 7.1 a 7.4 passou a "Escrita (PR #61)", e a da 7.5 a 7.8 passou a
  "Escrita, em revisão (PR #65)".

## Erros e rejeições da IA
Nenhum.

## Pendências
- **Revisão do Alexandre no PR #65.** O PR já está na versão corrigida (`fe8aa48`).
- **Murilo:** ajustar a 6.1 no PR da T17 (ponto 1) e manter a 7.11 e a 7.12 coerentes com a 7.5 e a 7.6.
- **Grupo:** confirmar o uso de `Objects`, `File` e `FileNotFoundException`.
- **T18** (Liliane) continua esperando a T17 do Murilo (7.9 a 7.12).
- **T42** (Liliane, Etapa 2): o `COMO_EXECUTAR.md` precisa dizer que o `modais.txt` fica na raiz de `LogiTech/`, como
  a 7.6 promete.
- Recado `inbox/liliane/2026-11-22-de-murilo-pendencias-da-etapa-1.md` continua `pendente`.

## Próximos passos
- Acompanhar a revisão do Alexandre no PR #65 e corrigir o que ele pedir. Depois do merge, avisar o Murilo para
  rodar `/sincronizar-quadro`.
- Quando a T17 sair, fazer a T18: cronometrar se cada cenário da seção 7 cabe nos 5 minutos, com atenção à 7.6, que
  tem mais passos (quatro classes e o arquivo).
- Fechar o recado das pendências da Etapa 1 quando a T16 e a T18 estiverem concluídas.
