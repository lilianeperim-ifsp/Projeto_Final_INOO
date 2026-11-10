# Divisão do projeto entre os 3 (T01)

**Status:** proposta para revisão do Murilo. Ainda sem commit e sem PR.
**Autor:** Murilo, com o Claude. **Data:** 2026-11-10.

## O que foi dividido

Os **45 cartões** da coluna "A fazer" do quadro que estavam **sem responsável** (T03 a T47). Ficaram de fora:

- **T01** (esta divisão): já é do Murilo e está em andamento.
- **T02** (formato do Documento de Projeto): concluída pelo Murilo no PR #12.

Resultado: **15 cartões para cada integrante.**

## Critério: cada um cuida de uma fatia vertical

Em vez de separar por tipo de trabalho (um só escreve documento, outro só programa, outro só testa), cada integrante
cuida de **uma parte do sistema de ponta a ponta**: o projeto dela no documento, o código e os testes. Isso serve à
defesa oral individual, em que cada um precisa explicar e alterar ao vivo, em até 5 minutos, a sua parte.

| Integrante | Fatia | Padrões que mais aparecem (hipóteses do T11) |
|---|---|---|
| **Liliane** | Cálculo: modais, perfis de precificação, sobretaxa e arredondamento | Strategy |
| **Alexandre** | Vida do transporte: status, rastreamento e avisos aos interessados | State, Observer |
| **Murilo** | Entrada, validação, relatório, saída e configuração do projeto | Factory |

## Cartões de cada um

### Murilo (15)

| Cartão | Título | Etapa | Área |
|---|---|---|---|
| T03 | Avisar Liliane e Alexandre da regra dos 5 minutos | 1 | Organização |
| T07 | Análise do problema | 1 | Documento |
| T12 | Fluxo: processamento de uma linha do lote | 1 | Documento |
| T17 | Cenários de evolução 9 a 12 | 1 | Documento |
| T19 | Plano de testes | 1 | Documento |
| T21 | Configurar o projeto: Main clássica, pacotes e JUnit | 2 | Implementação |
| T22 | Camada de entrada: ler System.in | 2 | Implementação |
| T23 | Interpretar as linhas e criar os objetos | 2 | Implementação |
| T24 | Validação de encomendas | 2 | Implementação |
| T33 | Relatório consolidado em uma passagem O(n) | 2 | Implementação |
| T34 | Saída no formato exato, com vírgula decimal | 2 | Implementação |
| T35 | Tratar linha inválida sem interromper o lote | 2 | Implementação |
| T38 | Testes de borda da validação | 2 | Testes |
| T41 | Simular o stress test com java Main < entrada.txt | 2 | Testes |
| T47 | PR da dev para a main e conferência da entrega final | 2 | Entrega |

### Liliane (15)

| Cartão | Título | Etapa | Área |
|---|---|---|---|
| T04 | Atualizar a branch e ler o projeto de exemplo | 1 | Organização |
| T05 | Conferir se o diagrama Mermaid do exemplo renderiza | 1 | Organização |
| T08 | Catálogo de classes e interfaces | 1 | Documento |
| T10 | Estratégia de resolução dos pontos de variação | 1 | Documento |
| T13 | Fluxo: troca de perfil em tempo de execução | 1 | Documento |
| T15 | Cenários de evolução 1 a 4 | 1 | Documento |
| T20 | Revisão cruzada e entrega da Etapa 1 | 1 | Entrega |
| T25 | Modais rodoviário, aéreo e aquaviário | 2 | Implementação |
| T26 | Valores base de frete, tempo e CO₂ | 2 | Implementação |
| T27 | Sobretaxa de carga pesada em um único ponto | 2 | Implementação |
| T28 | Perfis de precificação e troca em execução | 2 | Implementação |
| T29 | Arredondamento | 2 | Implementação |
| T37 | Testes dos cálculos com o gabarito | 2 | Testes |
| T39 | Teste da troca de perfil em execução | 2 | Testes |
| T42 | COMO_EXECUTAR.md | 2 | Entrega |

### Alexandre (15)

| Cartão | Título | Etapa | Área |
|---|---|---|---|
| T06 | Confirmar com o professor o que as aulas 8 e 9 permitem | 1 | Organização |
| T09 | Diagrama de classes UML | 1 | Documento |
| T11 | Padrões escolhidos e descartados | 1 | Documento |
| T14 | Fluxo: mudança de status e avisos | 1 | Documento |
| T16 | Cenários de evolução 5 a 8 | 1 | Documento |
| T18 | Conferir se cada cenário cabe em 5 minutos | 1 | Documento |
| T30 | Status do transporte e transições | 2 | Implementação |
| T31 | Rastreamento do transporte | 2 | Implementação |
| T32 | Avisos automáticos aos interessados | 2 | Implementação |
| T36 | Encapsulamento: atributos private e getters seguros | 2 | Implementação |
| T40 | Teste dos avisos automáticos | 2 | Testes |
| T43 | Documento de Projeto revisado: Do projeto ao código | 2 | Entrega |
| T44 | Relatório de uso de IA (máx. 3 páginas) | 2 | Entrega |
| T45 | Ensaiar a implementação ao vivo de cenários de evolução | 2 | Defesa |
| T46 | Preparar a defesa oral individual | 2 | Defesa |

## Por que a divisão é igualitária e justa

| Medida | Murilo | Liliane | Alexandre |
|---|---|---|---|
| Cartões desta divisão | 15 | 15 | 15 |
| Etapa 1 (documento, sem código) | 5 | 7 | 6 |
| Etapa 2 (código, testes, entrega, defesa) | 10 | 8 | 9 |
| Cartões de código (Implementação) | 7 | 5 | 4 |
| Cartões de testes | 2 | 2 | 1 |
| Outros já feitos ou em andamento | T01 e T02 | nenhum | nenhum |

Pontos de atenção para o Murilo decidir:

- **O Murilo tem a maior carga de código** (7 cartões de Implementação, contra 5 e 4) e já carrega a T01 e a T02. Em
  compensação, a Liliane e o Alexandre têm mais cartões de documento e de modelagem, que pedem mais decisão de
  projeto. Se preferir equilibrar mais, a troca natural é passar o **T35** (tratar linha inválida) para o Alexandre,
  que fica com 5 cartões de código e o Murilo com 6.
- **O Alexandre é revisor de todos os PRs** do grupo, por isso não recebe mais de 15 cartões.
- **O Murilo é o único que roda `/sincronizar-quadro`**, trabalho extra que não aparece nos cartões.

## Cartões que os três executam

Quatro cartões valem para os três, mas o quadro aceita um responsável só. O responsável **coordena e confere** que
os três fizeram:

- **T04** (Liliane): cada um atualiza a própria branch e lê `contexto/projeto-exemplo.md`.
- **T20** (Liliane): revisão cruzada do documento. Cada um lê as partes dos outros e confirma que entende tudo.
- **T45** (Alexandre): cada um ensaia um cenário de evolução em até 5 minutos.
- **T46** (Alexandre): cada um prepara a própria defesa oral.

## Como as fatias se encontram

- **Documento de Projeto (Etapa 1):** cada cartão tem um responsável que consolida, mas **cada um escreve as classes
  da sua fatia** nos cartões de catálogo, fluxos e cenários. O responsável do cartão junta e padroniza.
- **Interfaces entre as fatias:** `Modal` e `Perfil` (Liliane) são usados pelo transporte (Alexandre) e criados pela
  entrada (Murilo). Essas interfaces são combinadas entre os 3 no T08, antes de qualquer código.
- **Ordem de dependência:** o T07 (Murilo) destrava o T08 (Liliane), que destrava T09, T10, T12 e T19. O T21
  (Murilo) é a raiz de todo o código da Etapa 2 e só começa depois do T20. Quem atrasa um cartão desses trava os
  outros dois, então vale combinar os prazos intermediários na inbox.

## Decisão e alternativa descartada

- **Escolhida:** fatias verticais, uma parte do sistema por pessoa, de ponta a ponta.
- **Descartada:** divisão por tipo de trabalho (um escreve o documento, um programa, um testa). Parece mais simples,
  mas na defesa individual quem só escreveu documento não consegue alterar o código ao vivo em 5 minutos, e quem só
  programou não consegue defender as alternativas descartadas.

## Depois da aprovação do Murilo

1. O Murilo revisa este arquivo e autoriza o commit e o PR.
2. O Claude abre o PR para a `dev` com o Alexandre como revisor, anota o número do PR no cartão T01 e deixa o
   recado em `inbox/ale/`.
3. Depois que os três aprovarem e o PR for mergeado, o Murilo preenche o responsável de cada cartão no quadro e roda
   `/sincronizar-quadro`.
4. Qualquer troca de dono depois disso é combinada na inbox e anotada neste arquivo.
