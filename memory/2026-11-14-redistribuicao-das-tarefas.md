---
data: 2026-11-14
autor: Murilo Leandro
assunto: redistribuição das tarefas
---

## Resumo
O Murilo atualizou a branch, fechou o aviso de merge do PR #16 e decidiu que o PDF do Documento de Projeto fica fora do git. Depois propôs uma nova divisão dos cartões em aberto, enviada ao Alexandre e levada ao PR #17. Não houve mudança em código nem no Documento de Projeto.

- **Branch:** com `/atualizar-branch`, a `logitech/murilolss` recebeu os 4 commits que tinha atrás da `dev` (fast-forward até `a002a63`).
- **Inbox:** o aviso `inbox/murilo/2026-11-11-de-ale-merge-pr-16-na-main.md` foi fechado como `concluido` no commit `9cc1762`, direto na `dev`, depois de o Claude conferir com `gh pr view` que o PR #16 está `MERGED` (`7b4b08c`).
- **Redistribuição:** o Claude leu o campo `dependeDe` dos 47 cartões do quadro e montou a nova divisão dos 43 cartões em aberto (T04 a T47, sem o T07), que ficou assim:
  - **Murilo (14):** T12, T13, T17, T19, T20, T21, T22, T23, T24, T29, T33, T34, T35, T41.
  - **Alexandre (15):** T08, T09, T10, T11, T14, T15, T16, T18, T25, T26, T27, T28, T30, T32, T36.
  - **Liliane (14):** T04, T05, T06, T31, T37, T38, T39, T40, T42, T43, T44, T45, T46, T47.
- **Conferência:** um script sobre os cartões do quadro confirmou que os 43 cartões estão atribuídos, sem repetir nenhum, e que nenhum cartão do Murilo ou do Alexandre depende de um cartão da Liliane.
- **Envio:**
  - Proposta ao Alexandre em `inbox/ale/2026-11-14-de-murilo-redistribuicao-das-tarefas.md` (`0c0409b`, corrigida em `2128549`).
  - `docs/divisao-projeto.md` reescrito na `logitech/murilolss` (`377156d`), com um "Histórico" que resume a divisão por fatias verticais de 2026-11-10.
  - PR #17 (`logitech/murilolss` → `dev`) aberto com o Alexandre de revisor: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/17
- **Quadro:** o `/sincronizar-quadro` (`s-202611141656`) gravou o PR #17 como aberto e apagou o registro de histórico mais antigo. Os responsáveis dos cartões **ainda não foram alterados** no quadro.

## Decisões tomadas
- **O `docs/Documento_de_Projeto.pdf` fica fora do git.** Quem precisar do PDF roda `/documento`, que o gera na hora a partir do `.md`. Por quê: o `.md` é o documento oficial, e um PDF versionado ficaria desatualizado a cada edição. Alternativa descartada: versionar o PDF. Por enquanto ele não entra no `.gitignore`: só não se faz `git add` nele.
- **Novo critério de divisão:** Murilo e Alexandre ficam com a "espinha" da cadeia de dependências, os cartões que travam outros (o documento da Etapa 1 e o núcleo do código). A Liliane fica com os cartões independentes e com os do fim da cadeia, que dependem do trabalho dos outros dois e só travam cartões dela. Por quê: assim a Liliane nunca trava o Murilo nem o Alexandre. Alternativa descartada: a leitura estrita, só com cartões que não dependem de nenhum e que nenhum espera, que daria a ela apenas T04, T05, T06, T31 e T46, com 38 cartões para os outros dois. A divisão por fatias verticais de 2026-11-10 (PR #14) foi substituída.
- **Cartões da Liliane que travavam outros foram divididos por afinidade:**
  - Para o Alexandre: T08, T10 e T15, que vêm logo antes do T09, do T11 e do T16 dele, e o núcleo do cálculo (T25 a T28).
  - Para o Murilo: T13 (depois do T12), T20 (revisão cruzada da Etapa 1) e T29 (arredondamento, ligado ao T34).
  - Alternativa descartada: todo o cálculo com o Murilo, que ficaria com 19 cartões contra 11 do Alexandre.
- **Proposta só na inbox do Alexandre**, a pedido do Murilo. A aprovação do PR #17 vale como resposta ao recado. A Liliane só é avisada depois dessa aprovação. Alternativa descartada: avisar o grupo antes de o revisor aprovar.
- **Pontos de atenção registrados no recado e no `docs/divisao-projeto.md`:**
  - A Liliane fica com um único cartão de código de produção (T31) e sem documento da Etapa 1, um risco para a defesa oral individual.
  - O Alexandre concentra a Etapa 1, com 8 cartões até 27/11.
  - O T35 continua com o Murilo.
  - As dúvidas do T08 (onde ficam a sobretaxa e o arredondamento) e os dois pontos do comentário do PR #16 (quem guarda o modal e o CO₂ no aviso) passam para o Alexandre.
  - A coordenação dos cartões que os três executam muda: o T20 fica com o Murilo, e o T45 e o T46 com a Liliane.

## Erros e rejeições da IA
- **Erro (dados):** no recado da redistribuição (`0c0409b`), o Claude escreveu que a Liliane ficaria "sem código de produção". O T31 (Rastreamento do transporte), que passou para ela, é de Implementação. O Claude percebeu ao contar as áreas por integrante para o `docs/divisao-projeto.md`, conferiu com um script e corrigiu o recado na `dev` (`2128549`).
- O Murilo preferiu não registrar esse erro em `docs/relatorio_ia_notas.md`: a edição foi recusada durante a sessão, e a linha que o `/salvar-memoria` acrescentou (`7989239`) foi removida a pedido dele.

## Pendências
- **Alexandre:** revisar e aprovar o PR #17, ou propor ajustes. Isso também responde ao recado `inbox/ale/2026-11-14-de-murilo-redistribuicao-das-tarefas.md`.
- **Depois da aprovação (Murilo):**
  - Gravar no quadro o novo responsável dos 20 cartões que mudam de dono, com `update`, sem mexer em `dependeDe`.
  - Avisar a Liliane na inbox dela.
  - Rodar `/sincronizar-quadro` depois do merge.
- **Recados da Liliane desatualizados:** o `inbox/liliane/2026-11-10-de-murilo-t07-pronto-para-o-t08.md` fala de um T08 que deixa de ser dela. Isso deve entrar no aviso à Liliane.
- **`.gitignore` para o PDF:** o Claude ofereceu incluir `docs/Documento_de_Projeto.pdf`, e o Murilo não respondeu. Se for feito, vai por PR.

## Próximos passos
- Acompanhar a revisão do PR #17. Depois do merge, atualizar o quadro e avisar a Liliane.
- Seguir a Etapa 1 (entrega em 27/11). O T08 (catálogo de classes e interfaces), agora do Alexandre, destrava os cartões T09, T10, T12 (Murilo) e T19 (Murilo).
