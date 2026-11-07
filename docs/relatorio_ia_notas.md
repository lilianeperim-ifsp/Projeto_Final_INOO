# Notas para o Relatório de Uso de IA

Registro contínuo dos casos que o relatório final exige. O relatório final tem **no máximo 3 páginas** e deve conter:

- os principais prompts usados, incluindo como o projeto foi descrito à ferramenta;
- pelo menos **3 casos em que a IA errou** (violou restrição, propôs modelo acoplado ou gerou código incorreto), com como foram identificados e corrigidos;
- pelo menos **1 caso em que a sugestão de projeto da IA foi rejeitada** e a do grupo mantida, com o motivo.

Preencha uma linha por caso, assim que ele acontecer. A skill `/salvar-memoria` também alimenta esta tabela.

## Casos

| Data | Autor | Tipo | O que a IA propôs ou fez | Por que estava errado ou foi rejeitado | Correção ou decisão |
|---|---|---|---|---|---|
| 2026-11-06 | Murilo Leandro | rejeicao (processo) | Fluxo de git com branches `nome/assunto` e PR direto na `main` | O grupo quis uma `dev` intermediária para testar antes da `main` e uma branch fixa por integrante | Fluxo `main` → `dev` → `logitech/<usuario>`, reviewer `alexsant22` |
| 2026-11-06 | Murilo Leandro | rejeicao (processo) | Proteger `main`/`dev` no GitHub e usar CODEOWNERS | O grupo preferiu só documentar; o Murilo não é admin do repositório | Regras no `CLAUDE.md` e template de PR |
| 2026-11-06 | Murilo Leandro | rejeicao (processo) | Base inicial passar pelo fluxo completo de PR | O grupo preferiu commit direto na `main` para todas as branches nascerem iguais | Commit `b074eea` na `main` e branches criadas a partir dele |
| 2026-11-06 | Murilo Leandro | rejeicao (organização) | Manter `contexto/slides.md` como índice após dividir por aula | O grupo preferiu apagar o arquivo | Índice e resumo em `contexto/slides/README.md` |

**Tipo:** `erro` (IA errou) ou `rejeicao` (sugestão rejeitada, projeto do grupo mantido).

## Prompts principais

| Data | Autor | Objetivo | Prompt (resumido) |
|---|---|---|---|
| | | | |
