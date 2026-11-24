---
data: 2026-11-23
autor: Alexandre Santos
assunto: T15, cenários de evolução 1 a 4 (seção 7) e formato comum da seção 7
---

## Resumo
Continua `memory/2026-11-23-revisao-e-merge-do-pr-58-t14.md`.

O Alexandre perguntou se o Murilo tinha sido avisado do merge do #58. O Claude conferiu os dois canais: o recado
`inbox/murilo/2026-11-23-de-ale-sincronizar-quadro-pr-58-mergeado.md` estava na `dev`, e o workflow
`inbox-avisos.yml` tinha aberto a issue #60, atribuída ao `Murilolss`.

Na T15, o Claude propôs a estrutura da seção 7 e o formato comum de cada cenário, que a Liliane (T16) e o Murilo (T17)
vão seguir. Também propôs três decisões do cenário 4. O Alexandre aprovou tudo. O Claude escreveu a seção 7 em
`docs/Documento_de_Projeto.md`:
- a abertura, com o quadro de quem escreve cada parte e o formato comum;
- as subseções 7.1 a 7.4;
- os espaços reservados 7.5 a 7.8 (T16) e 7.9 a 7.12 (T17);
- a linha nova no quadro de situação do topo.

O Alexandre revisou o texto. Commit `d9b32ea`, **PR #61** para a `dev`, com a Liliane e o Murilo de reviewers e a
descrição pedindo que os dois sigam o formato. Na `dev` (commit `8ade6f4`):
- o recado novo `inbox/murilo/2026-11-23-de-ale-sincronizar-quadro-pr-61.md`;
- o recado `inbox/ale/2026-11-22-de-murilo-pendencias-da-etapa-1.md` fechado como `concluido`, com a lista dos PRs.

Com isso, as quatro tarefas do Alexandre na Etapa 1 estão escritas: T10, T11 e T14 mergeadas, e T15 em revisão.

## Decisões tomadas
- **Estrutura da seção 7:** a subseção 7.N responde ao cenário N, na numeração da ET 4 (1 = ferroviário, 12 =
  separador). Os espaços reservados ficam com o título fixo e uma nota que cada um troca.
  - Por quê: os PRs da T16 e da T17 mexem em trechos separados pelo título, sem conflito.
  - Alternativa descartada: uma tabela-resumo única com as 12 linhas desde já. Linhas vizinhas editadas por duas
    pessoas dariam conflito. O resumo pode entrar depois, na T18.
- **Formato comum de cada cenário, nesta ordem:**
  1. exigência (ET 4);
  2. classes criadas;
  3. classes alteradas;
  4. o que não muda;
  5. por que funciona;
  6. alteração ao vivo, os passos no IntelliJ para a T18 cronometrar;
  7. testes;
  8. alternativa descartada.

  Por quê: a ET 6, item 7, pede as classes criadas e alteradas, e a defesa pede achar a resposta no mesmo lugar em
  qualquer cenário.
- **Cenário 1 (ferroviário):** cria `Ferroviario extends Modal`, com as seis etapas, e altera só a `FabricaDeCodigos`
  (uma linha no construtor, da camada de entrada). Os números são fictícios e escolhidos na hora. Alternativa
  descartada: estender `Rodoviario`, porque o trem não "é um" rodoviário e herdaria os números dele.
- **Cenário 2 (corporativo):** cria `Corporativo extends PerfilPorMultiplicadores` e altera só a `FabricaDeCodigos`.
  Se ele tiver piso ou desconto, sobrescreve o `aplicar...` e chama o `super`, como o PREMIUM (7.11). Alternativa
  descartada: implementar `Perfil` direto, que repetiria `base × fator` (erro 5 da Livraria).
- **Cenário 3 (troca do perfil ativo):** nenhuma classe criada nem alterada, porque já é o `trocarPerfil` (6.2). A
  demonstração é o teste da 8.6. Se o perfil vier pelo texto do código, passa pela fábrica (`existePerfil` e
  `criarPerfil`). Alternativa descartada: recriar o transporte.
- **Cenário 4 (SMS por região):** cria `AlertaSmsPorRegiao implements InteressadoEmPosicao` e não altera nenhuma
  classe. As decisões aprovadas pelo Alexandre foram:
  - o SMS sai **ao entrar** na região: o alerta guarda `estavaNaRegiao` e manda o SMS só na passagem de fora para
    dentro. Alternativa descartada: um SMS a cada posição dentro;
  - a região são **quatro limites** dentro da própria classe, inclusivos. Alternativa descartada: uma classe `Regiao`;
  - **um alerta por transporte**. Alternativa descartada: um alerta compartilhado com a lista de IDs.

  O Claude acrescentou que o SMS é uma mensagem guardada, como no `Cliente`, e que o alerta não atende a uma região
  que atravesse a longitude 180 (registrado como caso de borda).

## Erros e rejeições da IA
Nenhum

## Pendências
- **PR #61:** revisão da Liliane e do Murilo, que também precisam concordar com o formato comum da seção 7.
- **Quadro:** o Murilo precisa rodar `/sincronizar-quadro` para o T14 (Concluído, recado do PR 58 mergeado) e o T15
  (Em PR, recado do PR 61).
- **T16 (Liliane):** pode começar seguindo o formato, nos cenários 5 a 8. A T17 (Murilo) vem depois, e a T18 (Liliane)
  cronometra os 5 minutos.
- **Pendências anteriores:**
  - PNGs da seção 3 com as notas antigas;
  - as seções 3, 4 e 8 ainda como "Escrita, em revisão" no quadro do topo;
  - `docs/Documento_de_Projeto.pdf` no `.gitignore`, ainda sem decisão.
- **Branch:** a `logitech/alexsant22` tem um commit de merge local (`10c1a1c`), vindo da `dev`, que sobe no próximo
  push.

## Próximos passos
- Responder à revisão do #61 e mergear depois da aprovação, avisando o Murilo para sincronizar o quadro.
- Acompanhar a T16 e a T17 e ajudar a conferir se seguem o formato.
- Preparar a revisão cruzada da T20 (Murilo) antes da entrega de 27/11.
