# Guia da Inbox do Projeto

## O que é e por que usar

A inbox é uma caixa de recados feita de arquivos, guardada dentro do próprio repositório do projeto. Cada recado é
um arquivo `.md` numa pasta, e ganha um status que diz se já foi tratado.

Num grupo de 3, ela resolve três problemas comuns:

- **Recado que se perde**: o que foi combinado no WhatsApp some na rolagem. Na inbox, fica num arquivo com data e autor.
- **"Achei que você ia fazer"**: cada recado tem dono e status, então dá para ver o que está parado.
- **Contexto longe do código**: o recado mora ao lado do código que ele cita e entra no histórico do git.

## Estrutura de pastas

São quatro pastas: uma para cada integrante (`ale`, `murilo` e `liliane`) e uma para o grupo (`grupo`).

```
inbox/
  README.md          ← este guia
  ale/               ← recados PARA Ale
  murilo/            ← recados PARA Murilo
  liliane/           ← recados PARA Liliane
  grupo/             ← recados para os três (decisões, avisos gerais)
```

**Nome do arquivo**: `AAAA-MM-DD-de-<autor>-<assunto>.md`

- Exemplo: `2026-11-09-de-murilo-revisar-diagrama-er.md`
- A data no começo deixa a pasta em ordem cronológica sozinha.
- **Um recado por arquivo.** Dois assuntos são dois arquivos, assim cada um pode ser fechado separadamente.

O Git não guarda pasta vazia. Coloquem um arquivo `.gitkeep` vazio em cada pasta para ela existir desde o início.

## Formato de um recado

Todo recado tem um cabeçalho curto (entre as linhas `---`) e o texto em seguida. O cabeçalho permite filtrar os
recados por status com um comando.

**Modelo para copiar:**

```markdown
---
para: murilo              # ale | murilo | liliane | grupo
de: ale
data: 2026-11-09
tipo: tarefa              # tarefa | duvida | decisao | aviso | bug
status: pendente          # pendente | aceito | concluido | descartado
prazo: 2026-11-12         # opcional
---

## O que é

[Uma ou duas frases dizendo o que você precisa ou o que aconteceu.]

## Contexto

[Arquivo, link, trecho do enunciado do professor, print. Só o necessário.]

## Resposta

[Quem recebeu escreve aqui ao responder ou fechar.]
```

**Exemplo preenchido** (`inbox/murilo/2026-11-09-de-ale-revisar-diagrama-er.md`):

```markdown
---
para: murilo
de: ale
data: 2026-11-09
tipo: tarefa
status: pendente
prazo: 2026-11-12
---

## O que é

Revisar o diagrama ER antes de eu começar as migrations.

## Contexto

Está em `docs/diagrama-er.png`. Dúvida principal: aluno e professor
viram uma tabela `usuario` só, ou duas?

## Resposta
```

## Ciclo de vida do recado

Todo recado nasce `pendente`, e **só quem recebeu muda o status**. Recado da pasta `grupo/` é fechado por quem
assumiu o assunto.

```
pendente → aceito → concluido
    ↘ descartado
```

| Status       | Significa                                        | Quem muda             |
| ------------ | ------------------------------------------------ | --------------------- |
| `pendente`   | Chegou e ninguém tratou ainda                    | Quem envia (ao criar) |
| `aceito`     | Vi e vou fazer                                   | Quem recebeu          |
| `concluido`  | Feito; a Resposta diz o que fechou               | Quem recebeu          |
| `descartado` | Não precisa mais ou é duplicado (com o motivo)   | Quem recebeu          |

## Rotina do dia a dia

O uso se resume a quatro ações: ler, enviar, responder e fechar. A inbox mora na `main`, mas o trabalho do dia a dia
fica na branch `logitech/<usuario>`, que não recebe sozinha o que vai para a `main`. Por isso, a leitura consulta a
`main` sem trocar de branch, e as outras três ações são feitas na `main`.

### 1. Ao começar a trabalhar: ler

Funciona igual no Git Bash e no PowerShell (troque `ale` pela sua pasta):

```bash
git fetch origin main
git grep -l "status: pendente" origin/main -- inbox/ale inbox/grupo
```

Para abrir um recado da lista sem sair da sua branch:

```bash
git show origin/main:inbox/ale/2026-11-09-de-murilo-revisar-diagrama-er.md
```

### 2. Enviar um recado

Antes de trocar de branch, faça commit do que está em andamento ou guarde com `git stash`.

1. Vá para a `main` atualizada: `git switch main` e `git pull`.
2. Copie o modelo para a pasta de quem vai receber, com o nome no padrão.
3. Preencha e salve.
4. Faça o commit e o push, adicionando somente a inbox, e volte para a sua branch:

```bash
git add inbox/
git commit -m "inbox murilo: revisar diagrama ER"
git push
git switch logitech/<usuario>
```

### 3. Responder

Na `main` atualizada, quem recebeu escreve na seção **Resposta** do próprio arquivo e muda o status, de `pendente`
para `aceito`, por exemplo. Depois, faz o commit e o push como no envio. Se a resposta for uma pergunta de volta, crie
um recado novo na pasta de quem enviou.

### 4. Fechar

Na `main` atualizada, mude para `concluido` e diga na Resposta **o que** fechou: o commit, o arquivo ou a decisão. Não
apague o arquivo; ele vira histórico.

```bash
git add inbox/
git commit -m "inbox: fecha revisar diagrama ER"
git push
git switch logitech/<usuario>
```

## Regras combinadas

1. **Recado de inbox vai direto na `main`**, sem pull request, em commit que altera somente arquivos de `inbox/`.
   Código continua seguindo o fluxo normal do grupo. Não traga a `main` para a sua branch só para ler recados.
2. **Só edite o seu lado**: crie recados na pasta dos outros, mas o status e a Resposta são de quem recebeu.
3. **Nunca apague um recado.** Feche com `concluido` ou `descartado`.
4. **Conflito no push?** Rode `git pull --rebase` e depois `git push`. Como cada recado é um arquivo, quase nunca dá
   conflito.
5. **Nada de senha ou token** nos recados. O repositório guarda tudo para sempre.

**Inbox ou WhatsApp?**

| Use a inbox para                              | Use o WhatsApp para                          |
| --------------------------------------------- | -------------------------------------------- |
| Tarefa com dono e prazo                       | "Tá online?", "chego 10 min atrasado"        |
| Decisão que alguém vai consultar depois       | Discussão rápida em tempo real               |
| Dúvida sobre um arquivo do projeto            | Avisar que mandou recado na inbox            |
| Aviso do professor que muda o trabalho        | Conversa que não precisa ficar registrada    |

Uma regra prática: se alguém precisar achar a informação daqui a duas semanas, ela vai para a inbox.

## Opcional: com o Claude Code

Se alguém do grupo usa o Claude Code, dá para fazer o agente ler a inbox sozinho no começo de cada sessão. Basta
acrescentar este trecho ao `CLAUDE.md` na raiz do repositório:

```markdown
## Inbox

Ao iniciar uma sessão:
1. Rodar `git fetch origin main`.
2. Descobrir quem está usando pelo `git config user.name` e achar a pasta
   correspondente em `inbox/` (ale, murilo ou liliane).
3. Mostrar os recados com `status: pendente` dessa pasta e de `inbox/grupo/`,
   consultando `origin/main` com `git grep`, sem trocar de branch.

Para deixar um recado, seguir o modelo de `inbox/README.md`, criar o arquivo
na pasta de quem recebe e fazer commit e push direto na main.
```

Com isso, dá para pedir "deixa um recado para Murilo revisar o diagrama", e o agente cria o arquivo no formato certo.

## Como começar

As pastas `ale/`, `murilo/` e `liliane/` já existem. Falta pouco:

1. Se a pasta `grupo/` ainda não existir, crie-a:

   ```bash
   mkdir -p inbox/grupo && touch inbox/grupo/.gitkeep
   ```

2. Salve este guia como `inbox/README.md`.
3. Na `main` atualizada (`git switch main` e `git pull`), faça o commit e o push:
   `git add inbox && git commit -m "inbox: estrutura inicial" && git push`.
4. Mande o primeiro recado em `inbox/grupo/` pedindo que cada um confirme que leu o guia. Cada pessoa muda o status
   para `concluido` quando ler.

- [ ] Pasta `grupo/` criada e enviada
- [ ] Guia salvo em `inbox/README.md`
- [ ] Os três fecharam o primeiro recado
