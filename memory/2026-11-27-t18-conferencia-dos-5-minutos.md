---
data: 2026-11-27
autor: lilianeperim-ifsp
assunto: T18, conferência dos 5 minutos dos 12 cenários
---

## Resumo

A Liliane atualizou a `logitech/lilianeperim-ifsp` com a `dev` pelo `/atualizar-branch`. Chegaram a T17 do Murilo
(7.9 a 7.12, PR #69, já mergeado), as memórias da revisão e do merge do #69 e recados para o Alexandre e o Murilo. Com
a T17 na `dev`, a Liliane fez a **T18**: a subseção nova **7.13 Conferência dos 5 minutos** do
`docs/Documento_de_Projeto.md`. Ela traz:

- o método da estimativa;
- a tabela dos 12 cenários;
- os três cenários apertados;
- a decisão da 7.6;
- o teste de rodar o lote no Windows.

Também ajustou a nota da 7.1 e a frase da 7.6 sobre os 5 minutos, que agora remetem à 7.13, e os dois quadros de
situação (o do topo do documento e o da abertura da seção 7). O commit `e21fe04` está no **PR #73**, com o Alexandre de
revisor. O recado `inbox/murilo/2026-11-27-de-liliane-sincronizar-quadro-pr-73.md` pede ao Murilo o
`/sincronizar-quadro`. O recado das pendências da Etapa 1 (`inbox/liliane/2026-11-22-de-murilo-pendencias-da-etapa-1.md`)
foi fechado como `concluido`: T09 (PR #40) e T16 (PR #65) mergeados, T18 no PR #73.

## Decisões tomadas

- **Onde fica a T18:** numa subseção nova, a 7.13, depois da 7.12. Ela também faz o papel da tabela-resumo dos 12
  cenários, adiada na T15.
  - Por quê: a 7.N continua respondendo ao cenário N, e a conferência fica num lugar só.
  - Alternativa descartada: espalhar a estimativa no campo "Alteração ao vivo" de cada cenário. Mexeria em doze
    trechos de três donos diferentes.
- **Método: estimativa por ação, e não cronômetro.** Ainda não há código. Cada ação no IntelliJ tem um tempo fixo:
  - criar uma classe: 20 s; abrir uma que já existe: 10 s;
  - "Implement methods", "Override methods" ou "Generate": 10 s;
  - linha simples: 15 s; linha com lógica: 30 s; método de uma linha escrito do zero: 30 s;
  - compilar: 15 s; rodar o lote e conferir a saída: 60 s;
  - escrever um teste curto e rodá-lo: 90 a 120 s.

  A conta supõe que o projeto já compila, que o Run do `Main` está configurado e que a explicação oral acompanha a
  digitação. O cronômetro de verdade é a T45, na Etapa 2. A Liliane aprovou o método.
- **Resultado:** nove cenários cabem. A 7.7 (CANCELADO) fica no limite, com ~5 min 30 s. A 7.4 (SMS por região) é
  arriscada, com ~6 min. A 7.6 (configuração externa) não cabe, com ~9 min 30 s.
- **7.4 e 7.7:** na defesa, escreve-se só o teste mínimo:
  - 7.4: uma posição fora e outra dentro da região, conferindo 1 mensagem;
  - 7.7: cancelar em `AGUARDANDO` e conferir o `true` e o nome.

  A alteração em si fica em cerca de 4 min nos dois. A 7.4 é a prioridade do ensaio da T45.
- **7.6: o projeto fica como está, e o acoplamento é explicado na defesa** (opção 1, escolhida pela Liliane).
  - A causa: a lista lida pelo `Main` atravessa os construtores do `ProcessadorDeLote`, do `InterpretadorDeLinha` e da
    `FabricaDeCodigos`. Isso acontece porque cada classe cria o próprio colaborador (3.7, decisão 4) e a leitura fica
    no `Main` (7.6, decisão 2).
  - Por quê: a entrega é hoje, e as alternativas mexem na 2.2.6 e na 3, o que é mudança estrutural e pede o aval dos
    três. A ET 4 aceita uma alteração mais longa, desde que o acoplamento seja explicado.
  - Alternativa descartada, a reavaliar na Etapa 2: as três classes já nascerem com o construtor que recebe a lista,
    vazia por padrão. A conta cai para ~4 a 5 min. Se for adotada, vai para "Do projeto ao código".
  - Alternativa descartada: a `FabricaDeCodigos` ler o arquivo sozinha (já descartada na 7.6, decisão 2).
- **Teste de rodar o lote no Windows** (JDK 26 do IntelliJ, `openjdk-26.0.2`, e Windows PowerShell 5.1). O programa
  de teste ficou fora do projeto e lia com `new Scanner(System.in)`. A entrada foi uma linha com `São Paulo` e
  `Maceió`, em UTF-8 sem BOM. Resultados:
  - `java Main < entrada.txt` no PowerShell: erro de sintaxe ("Operador '<' reservado para uso futuro");
  - `Get-Content entrada.txt | java Main`: acentos quebrados e o **BOM (U+FEFF) antes do primeiro campo**. Com o
    BOM, o ID não é inteiro, e o `trim` não o remove. A primeira linha sairia `REJEITADA;LINHA1;formato invalido`, e
    o gabarito falharia;
  - `Get-Content -Encoding UTF8 ... | java Main`: os acentos só saem certos com o console em UTF-8, e no padrão do
    PS 5.1 (`$OutputEncoding` em ASCII) viram `?`. O BOM aparece sempre;
  - `cmd /c "java -cp <pasta> Main < entrada.txt"`: a linha chega idêntica ao arquivo, também com a página de código
    850. Desde o JDK 18, o `Scanner` sem charset lê em UTF-8;
  - o mesmo `cmd /c` com o arquivo salvo com BOM: o BOM aparece. O `entrada.txt` precisa ser UTF-8 sem BOM, que é o
    padrão do IntelliJ;
  - sem teste: o "Redirect input from" do IntelliJ, que fica para a T42 (`COMO_EXECUTAR.md`). O `cmd /c` fica como
    reserva.

## Erros e rejeições da IA

- **Conta errada na 7.13.** O Claude escreveu que o código da 7.6, sem compilar e rodar, dá "cerca de 7 min e 40 s",
  deixando o `modais.txt` de fora. A soma da própria tabela dá 490 s, cerca de 8 min. Ele percebeu ao conferir as
  contas antes do commit e corrigiu.
- **BOM invisível gravado no texto.** Para explicar o BOM, o Claude escreveu a notação de escape do caractere U+FEFF,
  e a edição gravou o próprio caractere, invisível, no documento. Isso aconteceu duas vezes: na 7.13 e, de novo, na
  linha do relatório de IA sobre esse erro. Ele percebeu pela saída de uma busca, conferiu os bytes e trocou pelo
  texto "o `1` precedido do BOM" no documento e pela notação escrita byte a byte no relatório.

Os dois casos estão em `docs/relatorio_ia_notas.md`.

## Pendências

- **Alexandre:** revisar o PR #73.
- **Murilo:**
  - rodar o `/sincronizar-quadro` para o T18 passar a "Em PR" (recado na inbox dele);
  - fazer a T20 (revisão cruzada e entrega), que pode começar com a T18 no PR.
- **A estimativa não foi cronometrada.** Os tempos por ação são suposições do Claude, aprovadas pela Liliane, e
  precisam ser conferidos no ensaio da T45.
- **Etapa 2:** os três reavaliam a alternativa da 7.6 (o construtor que recebe a lista). A T42 confere o "Redirect
  input from" do IntelliJ e fixa o comando no `COMO_EXECUTAR.md`.

## Próximos passos

- Responder à revisão do PR #73, se o Alexandre pedir ajustes, e avisar o Murilo depois do merge.
- Na Etapa 2 (04/12): as tarefas de código e testes da Liliane e o ensaio da T45, começando pela 7.4 e pela 7.6.
