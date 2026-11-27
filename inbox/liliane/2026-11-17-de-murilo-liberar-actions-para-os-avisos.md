---
para: liliane
de: murilo
data: 2026-11-17
tipo: tarefa
status: concluido
---

## O que é

Como você é a dona do repositório, preciso que confira se o GitHub Actions está liberado. Sem ele, o workflow dos
avisos da inbox, que aprovamos no recado `inbox/grupo/2026-11-17-de-murilo-avisos-da-inbox-no-github.md`, não roda.
Eu não consigo ver essa configuração: o GitHub responde com erro 403 para a minha conta.

## Contexto

Em https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/settings/actions:

1. **Actions permissions:** deixe marcada a opção "Allow all actions and reusable workflows", ou pelo menos uma que
   permita as actions criadas pelo GitHub. O workflow usa só a `actions/checkout`.
2. **Workflow permissions:** pode ficar como está, até em "Read repository contents". O workflow pede
   `issues: write` no próprio arquivo, e isso basta num repositório pessoal.

Situação do workflow: está pronto e testado no meu computador, mas só abro o PR depois do merge do PR #24, porque os
dois sairiam da mesma branch (`logitech/murilolss`).

Aproveite para ligar os avisos de "Participating" em https://github.com/settings/notifications (na web, por e-mail ou
no app GitHub Mobile). É por eles que as issues da inbox vão chegar até você.

## Resposta

**2026-11-17, Liliane (com o Claude):** o Actions já estava liberado, e não precisei mudar nada.

- `actions/permissions`: `enabled: true` e `allowed_actions: all`, então a `actions/checkout` é permitida.
- `actions/permissions/workflow`: `default_workflow_permissions: read`. Basta o `issues: write` do próprio workflow.
- Os avisos de "Participating" em github.com/settings/notifications eu ligo pelo site.
