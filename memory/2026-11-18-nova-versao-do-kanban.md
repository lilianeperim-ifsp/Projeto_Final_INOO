---
data: 2026-11-18
autor: Murilo Leandro
assunto: nova versão do kanban
---

## Resumo
A sessão começou com a conferência da inbox (nenhum recado pendente para o Murilo nem para o grupo) e com o
`/atualizar-branch`, que trouxe da `dev` a memória de 17/11, o aceite da Liliane para os cartões T09, T16 e T18 e o
recado de teste para o Ale. O Murilo pediu o PR do commit `c67327e` (script dos avisos da inbox), que já existia:
era o PR #31, aberto na noite anterior. Foram deixados recados para o Ale (revisar o #31) e para a Liliane (o ponto 3
da conferência dela no PR #25 foi corrigido no #31).

Depois, o quadro Kanban (https://claude.ai/artifact/F1QWFXCoJWQXo3HDSBbvhH) foi refeito no estilo do guia
`contexto/guia-quadro-roadmap/` (modelo do quadro do CIWB), no mesmo link e com os mesmos dados:
- **Versão 9:** abas Quadro e Roadmap; linha do tempo horizontal pela ordem das dependências (algoritmo de Kahn),
  com ondas, passos "em conjunto" (mesma onda e prazos a até 3 dias), "Você está aqui", "Pode começar agora" por
  pessoa; cartões com "Libera", selos de situação e botões ← →; filtro de situação; seção "Atualizações" com notas e
  registro das ações; cores da versão 8 e uma cor por pessoa (Liliane roxo, Murilo laranja, Alexandre
  verde-azulado).
- **Versão 10:** o cabeçalho voltou ao da versão 8, a pedido do Murilo (marca à esquerda e uma etiqueta por etapa,
  com dias até a entrega, concluídos, em PR, atrasadas e esperando outra tarefa).

A rotina da nuvem passou a rodar às 09:00, 13:00, 17:00 e 21:00 de Brasília (cron `0 0,12,16,20 * * *` em UTC),
como no modelo novo. O `CLAUDE.md` e a `.claude/skills/sincronizar-quadro/SKILL.md` foram atualizados (commit
`2a2c5f4`) e entraram no PR #31, que agora tem dois assuntos. Recados para o Ale e a Liliane avisam que a versão
nova do quadro está pronta (commit `bc95f08` na `dev`).

## Decisões tomadas
- **Manter os dados e o esquema do banco do quadro** (`cartoes`, `prs`, `sincronizacoes`) e adaptar a página do
  modelo a eles. Por quê: preserva os 47 cartões e o histórico e não exige mudar a skill nem a rotina. Descartado:
  migrar para o esquema do modelo (`tarefas`, `historico`, `meta/sync`, `meta/prs`), que duplicaria os dados e
  quebraria a `/sincronizar-quadro`.
- **Campos novos só opcionais nos cartões:** `prazo` (AAAA-MM-DD) e `porque` (texto do Roadmap). Sem prazo próprio,
  vale a data da etapa (27/11 ou 04/12). Nenhum cartão foi preenchido pelo Claude: o "por quê" fica com cada
  responsável. Descartado: o Claude escrever prazos e justificativas sem o grupo.
- **Coleção nova `historico`**, gravada só pela página (moveu, criou, editou, excluiu, nota). A seção
  "Atualizações" mostra também as entradas de `sincronizacoes`. A skill não lê nem grava `historico`.
- **Mantidas as regras da versão 8:** cartão só sai de "A fazer" com os pré-requisitos em Concluído (no modelo isso
  era só um aviso), revisor sugerido ao ir para "Em PR", ordem manual por arrastar e gravação sempre com `update`.
- **Cabeçalho da versão 8 (versão 10 do quadro):** as etiquetas contam os cartões de cada etapa e não seguem os
  filtros, como antes. Descartado: o resumo em linha do modelo, que seguia os filtros.
- **Horários da sincronização:** 09:00, 13:00, 17:00 e 21:00, como no modelo. A página marca a última sincronização
  como antiga depois de 13 h (a maior folga é a da noite).
- **Commit do quadro junto no PR #31.** Por quê: o GitHub só aceita um PR aberto por par de branches, e o grupo
  trabalha só na própria branch. Descartados: esperar o merge do #31 e criar a branch `logitech/murilolss-quadro`.
- **O guia `contexto/guia-quadro-roadmap/` não foi versionado:** fica só na máquina do Murilo.

## Erros e rejeições da IA
- **Erro (processo):** no início da sessão, o Claude disse que o commit `c67327e` "precisa de um PR" e, a pedido,
  tentou abri-lo com `gh pr create`, sem conferir que o PR #31 já existia para a mesma branch. Percebido quando o
  GitHub recusou ("a pull request ... already exists"). Corrigido: não foi criado PR novo; o #31 foi conferido e
  usado.
- **Rejeição (interface):** o Claude trocou o cabeçalho do quadro pelo do modelo (resumo em linha com os números). O
  Murilo pediu de volta o cabeçalho da versão 8, com os mesmos dados. Corrigido na versão 10.

## Pendências
- **Ale:** revisar e mergear o PR #31, que agora tem o script dos avisos e os textos do quadro (recados em
  `inbox/ale/`).
- **Liliane e Ale:** ler o recado da versão nova do kanban e preencher o "Por que nesta ordem" dos próprios cartões.
- **Murilo:** conferir a página no navegador (computador e celular). Até agora só a sintaxe do JavaScript foi
  conferida, com `node --check`.
- **A skill que a rotina lê** é a do repositório, então a versão nova da `SKILL.md` só vale para ela depois do merge
  do #31. Os passos não mudaram; só os textos.

## Próximos passos
- Depois do merge do #31, o Murilo roda `/sincronizar-quadro` e confere a sincronização na seção "Atualizações".
- Conferir se a rotina das 13:00 e das 17:00 rodou e gravou em `sincronizacoes`.
- Preencher `prazo` e `porque` dos cartões da Etapa 1 que faltam (T09, T10, T11, T14 a T18 e T20) antes de 27/11.
