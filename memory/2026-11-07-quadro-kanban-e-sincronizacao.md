---
data: 2026-11-07
autor: Murilo Leandro
assunto: quadro Kanban do grupo e sincronização com os PRs do GitHub
---

## Resumo
O Murilo pediu um artefato com prazos, tarefas e próximos passos que o grupo todo acesse. Virou um **Kanban compartilhado no claude.ai** (colunas A fazer, Em andamento, Em PR e Concluído), com campo de responsável por cartão e **47 cartões já criados** a partir dos arquivos de contexto. Depois o Murilo pediu que o número do PR e o aprovador viessem do GitHub sem digitar. A página do artefato não alcança a API do GitHub, então foi criada a skill de projeto **`/sincronizar-quadro`** (no mesmo molde da `/salvar-memoria`), com um painel de atualizações no quadro e uma **rotina na nuvem às 08:00, 12:00 e 18:00** (Brasília). A skill foi para a `main` pelos PRs #3 (`logitech/murilolss` → `dev`) e #4 (`dev` → `main`), ambos mergeados. O teste na nuvem funcionou. Nenhum código Java foi escrito.

## Decisões tomadas
- **Kanban em artefato do claude.ai com estado compartilhado (banco do artefato).** Quadro: https://claude.ai/artifact/F1QWFXCoJWQXo3HDSBbvhH. Por quê: os 3 marcam tarefas e veem o estado de todos. Alternativa descartada: página estática só de consulta, porque exigiria republicar a cada mudança.
- **Cartões iniciais sem responsável, todos em "A fazer".** Por quê: a divisão de áreas entre os 3 ainda não foi combinada. Alternativa descartada: eu sugerir um dono por tarefa.
- **Dados do quadro:** coleções `cartoes`, `prs` (um documento por PR) e `sincronizacoes` (histórico, mantém as 30 mais recentes). A página cruza o número do PR do cartão com `prs` e mostra estado, revisor pedido e quem aprovou.
- **Skill `/sincronizar-quadro`** (`.claude/skills/sincronizar-quadro/SKILL.md`): lê os PRs, grava em `prs`, vincula PR a cartão só quando o responsável tem exatamente um PR aberto, e **move sozinha para "Concluído" os cartões cujo PR foi mergeado** (decisão do Murilo). PR fechado sem merge não move nada. Alternativa descartada: só atualizar os dados e deixar a mudança de coluna sempre manual.
- **Plano B pela API REST sem token.** Na nuvem o `GH_TOKEN` do ambiente é inválido e o GraphQL do `gh pr list` é bloqueado (HTTP 403). Como o repositório é público, a skill lê os PRs por `gh api`/`curl` (limite de 60 chamadas por hora por IP). Alternativa descartada: depender do `gh` autenticado.
- **Rotina na nuvem** (https://claude.ai/code/routines/trig_01XQ2TurXDgT9vorBKWdQnV5), cron UTC `0 11,15,21 * * *`, modelo `claude-sonnet-5-5`, criada desligada e ligada só depois da skill estar na `main`, porque ela clona a `main`. Alternativa descartada: Agendador de Tarefas do Windows com `claude -p`, que só roda com o PC ligado.
- **Texto do quadro e do `CLAUDE.md` só diz "ativo" depois do teste passar.** O quadro foi atualizado. As mudanças locais no `CLAUDE.md` e no `SKILL.md` (rotina ativa, GraphQL bloqueado) **não serão commitadas**: o Murilo disse que isso é algo que só ele controla.

## Erros e rejeições da IA
- **Rejeição (processo):** o Claude propôs um quadro de consulta com checklist e tarefas só em parte criadas. O Murilo rejeitou duas vezes: queria um **Kanban com fase de PR e campo de responsável por tarefa**, e depois pediu que **a maioria das tarefas já viesse criada**. O plano foi refeito com as 4 colunas, o campo de responsável e os 47 cartões.
- **Erro (documentação):** o quadro dizia "Agendado: 08:00, 12:00 e 18:00" e o `CLAUDE.md` dizia que a rotina rodava, antes de ela existir. Percebido quando o `/schedule` avisou que o GitHub não estava conectado e a skill ainda não estava na `main`. O Claude trocou os dois textos por "ainda não ativada" e só os reverteu depois do teste passar.
- **Erro (premissa):** o plano supôs que o `gh` autenticado funcionaria na nuvem. Falhou no primeiro teste (`GH_TOKEN` inválido, depois GraphQL bloqueado). Corrigido com o plano B pela API REST na própria skill.

Nenhum desses é erro de projeto de classes. O relatório ainda precisa de casos assim, que devem vir da modelagem do Documento de Projeto.

## Pendências
- Combinar a **divisão de áreas** entre os 3 (continua em aberto) e cada um se atribuir nos cartões.
- A Liliane e o Alexandre precisam de acesso de **Colaborador ou superior** ao quadro para mover e editar cartões. O quadro apareceu como "Qualquer pessoa com o link"; o Murilo deve conferir se é isso que quer.
- **"Aprovado por" fica vazio** enquanto as aprovações não forem feitas pelo botão Review changes → Approve no GitHub. Os PRs #1, #3 e #4 não têm revisões registradas.
- Nenhum cartão tem número de PR, então a sincronização ainda não moveu cartão nenhum.
- Conferir a **primeira execução agendada** (por volta de 08:06 de Brasília) no histórico do quadro.
- A rotina roda na conta do Murilo e tem 2 conectores anexados por padrão (Claude Docs e Claude Code Remote), sem uso. Se a conta perder acesso, ela para.
- **Não commitado:** mudanças locais no `CLAUDE.md` e no `SKILL.md`, esta memória e as linhas novas de `docs/relatorio_ia_notas.md`. A `main` ainda diz no `CLAUDE.md` que a rotina "não está ativa".
- Continuam em aberto desde 06/11: formato do Documento de Projeto, JUnit, o que as aulas 8 e 9 permitem, avisar Liliane e Alexandre da regra dos 5 minutos, conferir o Mermaid de `contexto/projeto-exemplo.md`.

## Próximos passos
1. O Murilo commita esta memória e as notas do relatório de IA na `logitech/murilolss` e abre o PR para a `dev` (reviewer `alexsant22`).
2. Reunir os 3: dividir as áreas e atribuir os cartões do quadro.
3. Rodar `/sincronizar-quadro` depois de abrir ou mergear cada PR e conferir a rotina agendada.
4. Começar a modelagem do Documento de Projeto da Etapa 1 (prazo 27/11), usando o checklist da seção 10 de `contexto/projeto-exemplo.md` e os 12 cenários de evolução com o limite de 5 minutos.
