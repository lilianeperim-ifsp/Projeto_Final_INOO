---
name: atualizar-branch
description: Atualiza a branch de trabalho do integrante com a dev, rodando git pull origin dev. Use quando o usuário pedir para atualizar a branch ou puxar as novidades da dev.
disable-model-invocation: true
---

# Atualizar a branch com a dev

Traz para a branch `logitech/<usuario>` o que o grupo já integrou na `dev`, inclusive recados da inbox e memórias.

## Passos

1. **Conferir a branch:** execute `git branch --show-current`. Se o resultado não começar com `logitech/`, pare e avise o usuário.
2. **Atualizar:** execute `git pull --no-edit origin dev`.
3. **Se houver conflito ou erro:** pare e mostre ao usuário os arquivos afetados e a mensagem do Git. Não resolva o conflito, não descarte alterações nem aborte o merge sem o usuário pedir.
4. **Responder em português do Brasil:** informe o commit atual (`git log -1 --format="%h %s"`) e o que chegou, ou diga que a branch já estava atualizada.

## Regras

- Esta skill não faz commit manual, push nem abre PR. O `git pull` pode criar sozinho um commit de merge na branch local.
