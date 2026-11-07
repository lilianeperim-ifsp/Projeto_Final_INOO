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
   - Se o arquivo já existir, **não sobrescreva**: acrescente `-2`, `-3`, … antes de `.md`.
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
7. **Não faça commit nem push.** Avise o usuário o caminho do arquivo criado e lembre que ele precisa commitar para o grupo ver.

## Regras

- Registre apenas o que realmente aconteceu na sessão. Não invente decisões.
- Seja específico: nomes de classes, padrões e regras do enunciado citados nas discussões.
- Não copie código longo; descreva a ideia e aponte os arquivos.
