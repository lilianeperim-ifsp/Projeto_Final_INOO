---
name: salvar-memoria
description: Salva um resumo da sessão atual e das discussões sobre o projeto LogiTech em memory/AAAA-MM-DD-assunto.md, para o grupo de 3 integrantes compartilhar. Use quando o usuário pedir para salvar a memória da sessão ou ao encerrar uma sessão de trabalho.
disable-model-invocation: true
---

# Salvar memória da sessão

Registra, em um arquivo versionado na pasta `memory/` (raiz do repositório), o que foi discutido e decidido nesta sessão. O grupo tem 3 integrantes e a defesa oral é individual, então este registro precisa permitir que qualquer um entenda as decisões sem ter participado da sessão.

`/memory` é o comando interno do Claude Code e não faz isto. Esta skill é a do projeto.

## Passos

1. **Autor:** execute `git config user.name`. Se vier vazio, pergunte o nome ao usuário.
2. **Data:** use a data de hoje no formato `AAAA-MM-DD`.
3. **Assunto principal:** escolha o tema central da sessão em poucas palavras. Se o usuário passou um assunto como argumento, use-o.
4. **Nome do arquivo:** `memory/AAAA-MM-DD-assunto-principal.md`, com o assunto em minúsculas, sem acento, sem caracteres especiais e com hifens (ex.: `2026-11-06-estrutura-do-projeto.md`).
   - Antes de gravar, crie uma cópia temporária da `dev`, para não tocar na branch de trabalho: `git fetch origin dev` e `git worktree add --detach "<pasta temporária>" origin/dev`. Os passos 5 e 6 gravam **nessa cópia**.
   - Se o arquivo já existir nessa cópia, **não sobrescreva**: acrescente `-2`, `-3`, … antes de `.md`.
5. **Conteúdo:** escreva em português do Brasil, usando exatamente este modelo:

```markdown
---
data: AAAA-MM-DD
autor: <nome do git>
assunto: <assunto principal>
---

## Resumo
O que foi discutido e feito na sessão, em poucas frases.

## Decisões tomadas
Para cada decisão: o que foi decidido, o porquê e a alternativa descartada.

## Erros e rejeições da IA
Casos em que o Claude errou (violou restrição, propôs modelo acoplado, gerou código incorreto) ou em que o grupo rejeitou uma sugestão dele, com como foi percebido e corrigido. Escreva "Nenhum" se não houve.

## Pendências
Dúvidas em aberto e coisas que dependem de outro integrante ou do professor.

## Próximos passos
O que fazer na próxima sessão.
```

6. **Relatório de IA:** se a seção "Erros e rejeições da IA" não for "Nenhum", acrescente também uma linha para cada caso na tabela de `docs/relatorio_ia_notas.md` (crie o arquivo a partir do modelo existente se faltar). Isso evita ter que reconstruir os casos no fim do projeto.
7. **Enviar direto para a `dev`.** Rodar esta skill já é o pedido para enviar a memória (exceção do `CLAUDE.md`). Dentro da cópia temporária:
   - Adicione somente o arquivo da memória e, se foi alterado, `docs/relatorio_ia_notas.md`. Confira com `git diff --cached --name-only` que não há mais nada; se houver, pare e avise.
   - Faça o commit com a mensagem `Memória da sessão: <assunto>` e dê `git push origin HEAD:dev`.
   - Se o push for rejeitado porque alguém enviou antes, rode `git pull --rebase origin dev` e tente de novo. Nunca use `--force`.
   - Se o push falhar por outro motivo, ou houver conflito, pare e avise o usuário. Mantenha a cópia temporária, para o conteúdo não se perder.
   - Com o push feito, remova a cópia: `git worktree remove "<pasta temporária>"`.
8. **Avisar o usuário:** informe o caminho do arquivo e o commit enviado. O arquivo chega à branch de trabalho no próximo `git pull origin dev`.

## Regras

- Registre apenas o que realmente aconteceu na sessão. Não invente decisões.
- Seja específico: nomes de classes, padrões e regras do enunciado citados nas discussões.
- Não copie código longo; descreva a ideia e aponte os arquivos.
