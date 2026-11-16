# Divisão do projeto entre os 3 (T01)

**Status:** redistribuída em 2026-11-14. A proposta está em `inbox/ale/2026-11-14-de-murilo-redistribuicao-das-tarefas.md`
e aguarda a aprovação do Alexandre neste PR. A divisão original (2026-11-10, PR #14) está resumida em
"Histórico", no fim deste arquivo.
**Autor:** Murilo, com o Claude. **Data:** 2026-11-10, revisada em 2026-11-14.

## O que foi dividido

Os **43 cartões em aberto** do quadro: de T04 a T47, sem o T07. Ficaram de fora os cartões já concluídos:

- **T01** (esta divisão), **T02** (formato do Documento de Projeto), **T03** (aviso da regra dos 5 minutos) e
  **T07** (análise do problema), todos do Murilo.

Resultado: **Murilo 14, Alexandre 15, Liliane 14.**

## Critério: quem trava a cadeia são o Murilo e o Alexandre

Quase todo cartão está numa cadeia de dependências (campo `dependeDe` do quadro). A divisão segue duas regras:

- **Murilo e Alexandre** ficam com os cartões que travam outros cartões, que formam a "espinha" do projeto: o
  documento da Etapa 1 e o código de produção.
- **Liliane** fica com os cartões **independentes** e com os do **fim da cadeia**, que dependem do trabalho do Murilo e do
  Alexandre e só travam outros cartões dela.

Na prática, **nenhum cartão do Murilo ou do Alexandre depende de um cartão da Liliane**. Os pré-requisitos dos
cartões dela são do Murilo, do Alexandre ou dela mesma (T37 a T40 → T45 → T46, e T42, T43 e T44 → T47).

## Cartões de cada um

### Murilo (14)

| Cartão | Título | Etapa | Área |
|---|---|---|---|
| T12 | Fluxo: processamento de uma linha do lote | 1 | Documento |
| T13 | Fluxo: troca de perfil em tempo de execução | 1 | Documento |
| T17 | Cenários de evolução 9 a 12 | 1 | Documento |
| T19 | Plano de testes | 1 | Documento |
| T20 | Revisão cruzada e entrega da Etapa 1 | 1 | Entrega |
| T21 | Configurar o projeto: Main clássica, pacotes e JUnit | 2 | Implementação |
| T22 | Camada de entrada: ler System.in | 2 | Implementação |
| T23 | Interpretar as linhas e criar os objetos | 2 | Implementação |
| T24 | Validação de encomendas | 2 | Implementação |
| T29 | Arredondamento | 2 | Implementação |
| T33 | Relatório consolidado em uma passagem O(n) | 2 | Implementação |
| T34 | Saída no formato exato, com vírgula decimal | 2 | Implementação |
| T35 | Tratar linha inválida sem interromper o lote | 2 | Implementação |
| T41 | Simular o stress test com java Main < entrada.txt | 2 | Testes |

### Alexandre (15)

| Cartão | Título | Etapa | Área |
|---|---|---|---|
| T08 | Catálogo de classes e interfaces | 1 | Documento |
| T09 | Diagrama de classes UML | 1 | Documento |
| T10 | Estratégia de resolução dos pontos de variação | 1 | Documento |
| T11 | Padrões escolhidos e descartados | 1 | Documento |
| T14 | Fluxo: mudança de status e avisos | 1 | Documento |
| T15 | Cenários de evolução 1 a 4 | 1 | Documento |
| T16 | Cenários de evolução 5 a 8 | 1 | Documento |
| T18 | Conferir se cada cenário cabe em 5 minutos | 1 | Documento |
| T25 | Modais rodoviário, aéreo e aquaviário | 2 | Implementação |
| T26 | Valores base de frete, tempo e CO₂ | 2 | Implementação |
| T27 | Sobretaxa de carga pesada em um único ponto | 2 | Implementação |
| T28 | Perfis de precificação e troca em execução | 2 | Implementação |
| T30 | Status do transporte e transições | 2 | Implementação |
| T32 | Avisos automáticos aos interessados | 2 | Implementação |
| T36 | Encapsulamento: atributos private e getters seguros | 2 | Implementação |

### Liliane (14)

| Cartão | Título | Etapa | Área | Depende de |
|---|---|---|---|---|
| T04 | Atualizar a branch e ler o projeto de exemplo | 1 | Organização | — |
| T05 | Conferir se o diagrama Mermaid do exemplo renderiza | 1 | Organização | — |
| T06 | Confirmar com o professor o que as aulas 8 e 9 permitem | 1 | Organização | — |
| T31 | Rastreamento do transporte | 2 | Implementação | T30 (Alexandre) |
| T37 | Testes dos cálculos com o gabarito | 2 | Testes | T26, T27, T28 (Alexandre), T29 (Murilo) |
| T38 | Testes de borda da validação | 2 | Testes | T24, T35 (Murilo) |
| T39 | Teste da troca de perfil em execução | 2 | Testes | T28 (Alexandre) |
| T40 | Teste dos avisos automáticos | 2 | Testes | T32 (Alexandre) |
| T42 | COMO_EXECUTAR.md | 2 | Entrega | T41 (Murilo) |
| T43 | Documento de Projeto revisado: Do projeto ao código | 2 | Entrega | T36 (Alexandre) |
| T44 | Relatório de uso de IA (máx. 3 páginas) | 2 | Entrega | — |
| T45 | Ensaiar a implementação ao vivo de cenários de evolução | 2 | Defesa | T37 a T40 (Liliane) |
| T46 | Preparar a defesa oral individual | 2 | Defesa | T43, T45 (Liliane) |
| T47 | PR da dev para a main e conferência da entrega final | 2 | Entrega | T41 (Murilo), T42 a T44 (Liliane) |

## Trocas de dono em relação à divisão de 2026-11-10

| De → Para | Cartões | Por quê |
|---|---|---|
| Liliane → Alexandre | T08, T10, T15 | Cada um vem logo antes de um cartão do Alexandre (T09, T11, T16) |
| Liliane → Alexandre | T25, T26, T27, T28 | Núcleo do cálculo, que trava o T33 e os testes |
| Liliane → Murilo | T13, T20, T29 | O T13 vem depois do T12, o T20 é a revisão cruzada da Etapa 1, e o T29 está ligado à saída do T34 |
| Alexandre → Liliane | T06, T31, T40, T43, T44, T45, T46 | Independentes ou no fim da cadeia |
| Murilo → Liliane | T38, T47 | No fim da cadeia |

Continuam com o dono anterior: T12, T17, T19, T21 a T24, T33 a T35 e T41 (Murilo); T09, T11, T14, T16, T18, T30, T32
e T36 (Alexandre); T04, T05, T37, T39 e T42 (Liliane).

## Distribuição

| Medida | Murilo | Liliane | Alexandre |
|---|---|---|---|
| Cartões em aberto | 14 | 14 | 15 |
| Etapa 1 (documento, sem código) | 5 | 3 | 8 |
| Etapa 2 (código, testes, entrega, defesa) | 9 | 11 | 7 |
| Cartões de código (Implementação) | 8 | 1 | 7 |
| Cartões de testes | 1 | 4 | 0 |
| Cartões de entrega e defesa (Etapa 2) | 0 | 6 | 0 |
| Já concluídos | T01, T02, T03, T07 | nenhum | nenhum |

Pontos de atenção:

- **A Liliane tem só um cartão de código de produção (T31)** e nenhum documento da Etapa 1. Na defesa individual ela
  precisa alterar o código ao vivo. Os testes (T37 a T40), o T43 ("Do projeto ao código") e o ensaio (T45) dão
  a ela contato com o código de todos, e a regra "todos precisam entender tudo" continua valendo.
- **O Alexandre concentra a Etapa 1** (8 cartões até 27/11). Em troca, ele sai dos cartões finais (T43 a T46), que
  antes acumulavam a carga dele em 04/12, somada à revisão de todos os PRs.
- **T35:** continua com o Murilo, como o Alexandre decidiu na revisão do PR #14. Tratar linha inválida faz parte
  da camada de entrada e validação.
- **T08:** as duas dúvidas do recado `inbox/liliane/2026-11-10-de-murilo-t07-pronto-para-o-t08.md` (onde ficam a
  sobretaxa e o arredondamento) e os dois pontos do comentário do PR #16 (quem guarda o modal e o CO₂ no aviso)
  passam para o Alexandre, junto com o cartão.
- **O Alexandre é revisor de todos os PRs** do grupo, e **o Murilo é o único que roda `/sincronizar-quadro`**:
  trabalho extra que não aparece nos cartões.

## Cartões que os três executam

Quatro cartões valem para os três, mas o quadro aceita um responsável só. O responsável **coordena e confere** que
os três fizeram:

- **T04** (Liliane): cada um atualiza a própria branch e lê `contexto/projeto-exemplo.md`.
- **T20** (Murilo): revisão cruzada do documento. Cada um lê as partes dos outros e confirma que entende tudo.
- **T45** (Liliane): cada um ensaia um cenário de evolução em até 5 minutos.
- **T46** (Liliane): cada um prepara a própria defesa oral.

## Como as partes se encontram

- **Documento de Projeto (Etapa 1):** cada cartão tem um responsável que consolida e padroniza o texto. Quem tem o
  código de uma parte confere a descrição dela no catálogo, nos fluxos e nos cenários.
- **Interfaces:** `Modal` e `Perfil` (Alexandre, T08 e T25 a T28) são usados pelo transporte (Alexandre) e criados pela
  entrada (Murilo). Essas interfaces são combinadas entre os 3 no T08, antes de qualquer código.
- **Ordem de dependência:** o T07 (concluído) destrava o T08 (Alexandre), que destrava T09, T10, T12 e T19. O T21
  (Murilo) é a raiz de todo o código da Etapa 2 e só começa depois do T20 (Murilo). Os cartões da Liliane começam
  quando os pré-requisitos dela estão concluídos; vale ela acompanhar esses cartões e combinar os prazos na inbox.

## Decisão e alternativa descartada

- **Escolhida (2026-11-14):** o Murilo e o Alexandre ficam com a espinha da cadeia de dependências, e a Liliane com
  os cartões independentes e os do fim da cadeia, que nunca travam os outros dois.
- **Descartada:** a leitura estrita, em que a Liliane fica só com os cartões que não dependem de nenhum outro e que
  nenhum outro espera (T04, T05, T06, T31 e T46). Seriam 5 cartões para ela e 38 para os outros dois.
- **Substituída:** a divisão por fatias verticais de 2026-11-10 (ver "Histórico").

## Histórico

- **2026-11-10 (PR #14):** divisão por **fatias verticais**, uma parte do sistema por pessoa, de ponta a ponta, com 15
  cartões para cada um: Liliane com o cálculo (modais, perfis, sobretaxa, arredondamento), Alexandre com a vida do
  transporte (status, rastreamento, avisos) e Murilo com a entrada, a validação, o relatório e a saída. Naquela
  divisão, a alternativa descartada foi a divisão por tipo de trabalho (um escreve, um programa, um testa).
- **2026-11-14:** redistribuição pelo critério da cadeia de dependências, descrito acima.

## Situação e próximos passos

1. **Feito:** proposta enviada ao Alexandre em `inbox/ale/2026-11-14-de-murilo-redistribuicao-das-tarefas.md`.
2. Falta a aprovação do Alexandre no PR que leva este arquivo para a `dev`.
3. Depois da aprovação, o Murilo atualiza o responsável de cada cartão no quadro e avisa a Liliane na inbox.
4. Qualquer troca de dono daqui em diante é combinada na inbox e anotada neste arquivo.
