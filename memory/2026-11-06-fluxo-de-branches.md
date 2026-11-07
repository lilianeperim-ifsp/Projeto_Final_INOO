---
data: 2026-11-06
autor: Murilo Leandro
assunto: fluxo de branches
---

## Resumo
Continuação da sessão de estrutura do projeto. O `contexto/slides.md` foi dividido em um `.md` por PDF de aula (`contexto/slides/`). Depois foi definido e criado no GitHub o fluxo de branches `main` → `dev` → `logitech/<usuario>`, com o Alexandre (`alexsant22`) como reviewer de todo PR. O GitHub CLI foi instalado e autenticado (conta `Murilolss`), a base do projeto foi commitada na `main` (commit `b074eea`) e as branches foram criadas e enviadas ao remoto.

## Decisões tomadas
- **Slides divididos por aula:** `contexto/slides/aula_01.md` … `aula_12.md` (9 arquivos, um por PDF) e um `contexto/slides/README.md` com o índice e o "Resumo do que foi ensinado". O `contexto/slides.md` antigo foi **apagado**. Por quê: um arquivo de ~120 KB é caro de consultar. Alternativa descartada: manter o `slides.md` como índice.
- **O enunciado não ganhou `.md` próprio.** Ele já está coberto por `contexto/regras-negocio.md` e `contexto/especificacoes-tecnicas.md`. Alternativa descartada: transcrição integral, que duplicaria conteúdo.
- **Fluxo de branches:**
  - `main` é a versão estável e só recebe PR da `dev`;
  - `dev` é para integração e testes e só recebe PR das branches de integrante;
  - `logitech/lilianeperim-ifsp`, `logitech/murilolss` e `logitech/alexsant22` saem da `dev`.
  - Substitui o fluxo anterior do `CLAUDE.md` (`nome/assunto` com PR direto na `main`).
- **Reviewer:** todo PR tem `alexsant22`. Como o GitHub não deixa o autor revisar o próprio PR, nos PRs do Alexandre os reviewers são `lilianeperim-ifsp` e `murilolss`.
- **Só documentação, sem proteção de branch nem CODEOWNERS.** O Murilo tem permissão `write`, não admin, e o grupo preferiu combinar por regra. Alternativa descartada: proteger `main` e `dev` exigindo PR e aprovação. Ficou o template `.github/pull_request_template.md` com o checklist.
- **Base inicial commitada direto na `main`**, antes de criar as branches, para todas nascerem iguais. Alternativa descartada: fazer a base passar pelo fluxo completo de PR.
- **Usuário do Alexandre:** `alexsant22`. A grafia `alexsante22` não existe no GitHub.
- **Colaboradores verificados:** `alexsant22` e `murilolss` são colaboradores (API retornou 204).

## Erros e rejeições da IA
- **Rejeição (processo):** o Claude tinha proposto no `CLAUDE.md` um fluxo com branches `nome/assunto` e PR direto na `main`. O grupo definiu outro fluxo, com `dev` intermediária e branches `logitech/<usuario>`, e o `CLAUDE.md` foi reescrito.
- **Rejeição (processo):** o Claude recomendou proteger `main` e `dev` no GitHub e usar CODEOWNERS. O grupo escolheu só documentar.
- **Rejeição (processo):** o Claude recomendou que a base inicial passasse pelo fluxo de PR. O grupo preferiu commit direto na `main`.
- **Rejeição (organização):** o Claude recomendou manter o `slides.md` como índice. O grupo preferiu apagá-lo e usar um `README.md` na pasta.

Nenhum desses é rejeição de **projeto de classes**. O relatório de IA ainda precisa de pelo menos 1 caso desse tipo e de 3 erros da IA, que devem surgir no Documento de Projeto e na implementação.

## Pendências
- Avisar a Liliane e o Alexandre para rodarem `git fetch` e `git switch logitech/<usuario>`.
- Combinar a divisão de áreas entre os 3 (continua em aberto desde a sessão anterior).
- Definir o formato do Documento de Projeto e a configuração de testes (JUnit), ainda em aberto.
- Esta memória e a entrada em `docs/relatorio_ia_notas.md` foram criadas na branch `logitech/murilolss` e **ainda não foram commitadas**.

## Próximos passos
1. Commitar esta memória na `logitech/murilolss` e testar o fluxo com o primeiro PR para a `dev` (reviewer `alexsant22`).
2. Reunião dos 3 para dividir as áreas e discutir a modelagem.
3. Começar o Documento de Projeto da Etapa 1 (prazo 27/11).
