# Memória do projeto

Registro compartilhado das sessões de trabalho e das discussões do grupo (3 integrantes). Fica no repositório para todos acompanharem as decisões, já que a defesa oral é individual e cada um precisa saber explicar o projeto inteiro.

## Como usar

Ao fim de cada sessão com o Claude Code, rode:

```
/salvar-memoria
```

(opcionalmente com o assunto: `/salvar-memoria estrutura do projeto`). A skill resume a sessão e cria um arquivo novo aqui. Depois, **commite o arquivo** para o grupo ver.

`/memory` é o comando interno do Claude Code e não grava nesta pasta.

## Formato

- Um arquivo por sessão: `AAAA-MM-DD-assunto-principal.md` (minúsculas, sem acento, hifens).
- Nome único: se já existir arquivo com o mesmo nome no dia, a skill acrescenta `-2`, `-3`… Isso evita conflito de merge entre os integrantes.
- Cada arquivo começa com `data`, `autor` e `assunto` e traz as seções: Resumo, Decisões tomadas, Erros e rejeições da IA, Pendências e Próximos passos.

## Regras

- Não edite memórias de outra pessoa. Para corrigir algo, crie uma nova entrada citando a anterior.
- Casos de erro ou rejeição da IA também vão para `docs/relatorio_ia_notas.md` (o relatório final exige pelo menos 3 erros e 1 rejeição).
