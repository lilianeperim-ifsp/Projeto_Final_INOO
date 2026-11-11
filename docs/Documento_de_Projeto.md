# Documento de Projeto: Sistema LogiTech

**Disciplina:** Introdução à Orientação a Objetos (IFSP) · **Etapa 1** (entrega em 27/11, sem código)
**Grupo:** Liliane, Murilo e Alexandre

> **Documento oficial do grupo, em construção (desde 2026-11-10).** Este arquivo é a versão oficial do Documento de
> Projeto. **Não pode ser apagado nem substituído por outro arquivo, apenas editado**, por PR, seção por seção.
>
> | Seção | Cartão | Responsável | Situação |
> |---|---|---|---|
> | 1. Análise do problema | T07 | Murilo | Escrita |
> | 2 a 8 | T08 a T19 | Ver `docs/divisao-projeto.md` | A fazer |
>
> A seção 1 diz **quais conceitos existem e o que cada um é**. Nomes de classes, a escolha entre interface e classe
> abstrata e os padrões adotados ficam para o T08 (catálogo), o T10 (estratégia de resolução) e o T11 (padrões).

## 1. Análise do problema

A LogiTech recebe encomendas em lote, calcula frete, tempo e CO₂ conforme o **modal** e o **perfil de precificação**,
acompanha o **transporte** de cada encomenda, **avisa** os interessados quando o status ou a posição mudam e emite um
**relatório consolidado**.

### 1.1 Método

Usamos a técnica que o enunciado cita: levantar os **substantivos e verbos** do texto do problema e decidir o que
cada um vira.

1. **Levantamento:** substantivos e verbos das regras de negócio (`contexto/regras-negocio.md`, seções 1 a 11).
2. **Classificação:** cada substantivo responde a 4 perguntas, nesta ordem. A primeira resposta "sim" decide o
   destino.

   | Pergunta | Se sim | Base nas aulas |
   |---|---|---|
   | Tem comportamento próprio ou varia entre tipos? | **Classe** ou, se varia, **hierarquia** | Aula 11 (classe abstrata como o que os tipos têm em comum) e aula 12 (interface como tipo comum) |
   | É uma parte que outro conceito "tem" e que vale como um todo? | **Composição** | Aula 10 ("tem um" × "é um") |
   | Só descreve outro conceito, como um número ou um texto? | **Atributo** de quem descreve | Aula 2 (classe × objeto) e aula 3 (encapsulamento) |
   | É contexto, ator externo ou sinônimo de outro conceito? | **Descartado** | — |

3. **Responsabilidades:** cada verbo é ligado a quem deve fazê-lo. É uma hipótese que o catálogo (T08) confirma.
4. **Pontos de variação:** marcamos onde o enunciado diz que algo novo vai surgir (os 12 cenários de evolução) e
   citamos o padrão **candidato** para cada um. A escolha é do T11.

**Alternativa descartada:** começar pelos padrões e encaixar os conceitos neles. Isso inverte a ordem que o enunciado
avalia (análise, depois projeto, depois estratégia) e leva a usar padrão sem justificativa, o que não rende pontos.

### 1.2 Substantivos: o que vira classe e o que é descartado

"Hierarquia" quer dizer uma abstração (interface ou classe abstrata, a decidir no T08) com um tipo concreto para
cada variação. A coluna "Onde aparece" indica a seção de `contexto/regras-negocio.md` (RN) ou de
`contexto/especificacoes-tecnicas.md` (ET).

| Conceito | Onde aparece | Destino | Motivo |
|---|---|---|---|
| Modal (rodoviário, aéreo, aquaviário) | RN 1, 2 | **Hierarquia** | Cada modal tem custos, velocidade, manuseio, emissão e capacidade próprios. O cenário do **ferroviário** exige um modal novo sem reescrever o que existe, então ninguém pode perguntar qual é o modal. |
| Perfil de precificação (econômico, rápido, ecológico) | RN 1, 4 | **Hierarquia** | Cada perfil aplica multiplicadores diferentes e pode ser trocado em execução. Os cenários **corporativo** e **PREMIUM** exigem perfis novos sem alterar os existentes. O perfil não depende do modal. |
| Encomenda | RN 1, 10 | **Classe** | Reúne os dados do pedido. Existe antes de qualquer transporte: é ela que se valida e que se simula. Seus dados não mudam depois de criada. |
| Transporte | RN 1, 7 | **Classe** | A entrega em andamento. Tem estado que muda (status, posição e perfil vigente). Separar da encomenda permite trocar o perfil ou simular **sem gravar o resultado por cima dos dados originais**. |
| Status (aguardando, em trânsito, entregue) | RN 7 | **Hierarquia** | Cada status aceita transições diferentes e decide se a troca de perfil é permitida. O cenário **CANCELADO** exige um status novo. O enunciado proíbe `enum`. |
| Posição | RN 7 | **Composição** (o transporte tem uma posição) | Latitude e longitude só valem juntas: se um valor sai do intervalo, o par inteiro é rejeitado. O próprio par concentra essa validação. Começa ausente. |
| Interessado (central de controle, auditoria ambiental, cliente) | RN 1, 8 | **Hierarquia** | Cada um reage ao aviso de um jeito. Os cenários do **SMS por região** e da **troca de assinatura** exigem acrescentar e remover interessados em execução, sem alterar o transporte. |
| Resultado do cálculo (frete, tempo e CO₂) | RN 3 a 5, 11 | **Classe** | Os três valores nascem juntos, já arredondados, e andam juntos na saída, na simulação e no relatório. |
| Rejeição (ID e motivo) | RN 6, 11 | **Classe** | A encomenda inválida é registrada com o ID (ou `LINHA<n>`) e o motivo e não interrompe o lote. Um objeto de rejeição evita usar exceção para o fluxo normal da validação. |
| Relatório consolidado | RN 9 | **Classe** | Acumula custo, tempo, CO₂, válidas e rejeitadas em uma única passagem e calcula a média só no final. |
| Entrada (lote lido de `System.in`) | RN 10 | **Classe** (camada de entrada) | A leitura fica fora do núcleo, que recebe uma `List<String>`. É o único lugar que conhece os códigos de texto e o separador. |
| Saída | RN 11 | **Classe** (camada de saída) | Monta cada linha no formato exato, com vírgula decimal. O núcleo não imprime. |
| Aviso (evento de mudança) | RN 8 | **A decidir (T14)** | Pode ser só os parâmetros da notificação ou um objeto com ID, status e coordenadas. A resposta depende do fluxo de avisos. |
| Sobretaxa de carga pesada | RN 3, ET 4 | **Regra em um único ponto (lugar a decidir no T10)** | Vale igual para todos os modais e o cenário dos **8% acima de 2000 kg** a altera em um só lugar. Não pode ser copiada em cada modal. |
| Linha do lote | RN 10 | **Descartado como classe** | É só um texto até ser interpretada. Depois vira encomenda ou rejeição. |
| Cliente (como classe à parte) | RN 8 | **Descartado** | Já é um tipo de interessado. Uma segunda classe "Cliente" duplicaria o conceito. |
| Operador | RN 1, ET 4 | **Descartado** | Ator externo: troca o perfil e pede simulações chamando o núcleo, mas não tem estado no sistema. |
| Operadora LogiTech | RN 1 | **Descartado** | É o contexto do problema, não um objeto com comportamento. |
| Lote | RN 1, 10 | **Descartado como classe** | É a lista de linhas que a entrada entrega. Seu processamento é uma responsabilidade (ver 1.4), não um conceito com estado próprio. |

### 1.3 Atributos

| Atributo | De quem | Observação |
|---|---|---|
| ID | Encomenda | Inteiro, único no lote. |
| Peso (kg) e distância (km) | Encomenda | Números finitos, lidos com ponto decimal. |
| Origem e destino | Encomenda | Texto sem espaços nas pontas e não vazio. Origem igual ao destino é válida. |
| Custo por km, custo por kg, velocidade média, tempo de manuseio, fator de emissão, capacidade máxima | Modal | Constantes de cada modal, com nome próprio. |
| Multiplicadores de frete, tempo e CO₂ | Perfil | Constantes de cada perfil. |
| **Código de texto** (`RODOVIARIO`, `ECONOMICO`…) | **Só a entrada** | Fora da entrada, ninguém compara o código: o objeto é quem responde. |
| Status atual, posição atual e perfil vigente | Transporte | Os três podem mudar. A posição começa ausente. |
| Interessados | Transporte | Lista privada. Nenhum getter devolve a lista original. |
| Latitude e longitude | Posição | Latitude em [-90, 90] e longitude em [-180, 180], ambas finitas. |
| CO₂ auditado acumulado | Auditoria ambiental | Soma só ao receber `ENTREGUE`. |
| Linhas de log | Central de controle | Uma por evento (ID, status, coordenadas). |
| Mensagens recebidas | Cliente | Uma por mudança de **status**. |
| Custo total, soma dos tempos, CO₂ total, válidas e rejeitadas | Relatório | Somados a partir dos valores já arredondados. |
| Número da linha física | Entrada | Para o `LINHA<n>`, contando as linhas em branco. |

### 1.4 Verbos: responsabilidades

| Verbo | Quem faz (hipótese) | Regra que limita |
|---|---|---|
| Ler a entrada padrão | Entrada | O núcleo não lê dados. |
| Separar os campos e traduzir os códigos em objetos | Entrada | Único lugar com comparação de código e com o separador `;`. |
| Validar a encomenda | Validação, na ordem da tabela | Vale o primeiro motivo. Nenhuma exceção escapa. |
| Rejeitar e registrar | Processamento do lote | A linha inválida não interrompe o lote nem entra nos totais. |
| Calcular os valores base | Modal | Dependem só do modal e da encomenda. |
| Aplicar a sobretaxa | Um único ponto, comum a todos os modais | Alterável em um só lugar. |
| Aplicar os multiplicadores | Perfil | O mesmo para qualquer modal. |
| Arredondar | Um único ponto do cálculo | 2 casas, HALF_UP, depois do perfil. |
| Criar o transporte | A partir de uma encomenda válida | Nasce `AGUARDANDO` e sem posição. |
| Mudar o status | Transporte, com o status vigente decidindo | Só `AGUARDANDO → EM_TRANSITO → ENTREGUE`. Repetir o status é rejeitado. |
| Atualizar a posição | Transporte, com a posição validando o par | Permitido em qualquer status. A primeira posição conta como mudança. |
| Trocar o perfil | Transporte | Sem recriar o transporte. Rejeitado depois de `ENTREGUE`. |
| Simular outro perfil | Transporte, reaproveitando o cálculo | Não altera o perfil vigente e não gera aviso. |
| Avisar os interessados | Transporte (só notifica) | Só quando o valor realmente muda. Operação rejeitada não avisa ninguém. |
| Reagir ao aviso | Cada interessado | Log, soma de CO₂ ou mensagem. |
| Consolidar o relatório | Relatório | Uma passagem, O(n). Lista vazia dá zeros, sem divisão por zero. |
| Formatar e imprimir | Saída | Formatação em um único método, `pt-BR`, 2 casas. O domínio não imprime. |

### 1.5 Pontos de variação e padrões candidatos

Cada cenário de evolução (`contexto/especificacoes-tecnicas.md`, seção 4) cai em um ponto de variação. Os padrões
abaixo são **candidatos**: a escolha, com a alternativa descartada, é do T11 e o mecanismo é do T10.

| Ponto de variação | Cenários que o exigem | Padrão candidato |
|---|---|---|
| Parâmetros e cálculo base do modal | ferroviário | Strategy, ou Template Method com a fórmula comum numa classe abstrata |
| Multiplicadores do perfil e troca em execução | corporativo, PREMIUM, troca de perfil, simulação | Strategy. Para o piso de R$ 50,00 do PREMIUM, avaliar também o Decorator. |
| Regra da sobretaxa | sobretaxa de 8% acima de 2000 kg | Template Method (a regra fica no esqueleto comum) ou uma classe só para ela |
| Transições do status | CANCELADO | State |
| Reação de cada interessado | SMS por região, troca de assinatura, CANCELADO sem soma na auditoria | Observer |
| Criação de modal e perfil a partir do código | código vindo de configuração externa | Simple Factory na entrada |
| Formato da linha | separador `,` | Nenhum padrão: isolado na entrada |
| Regras de validação | peso mínimo de 0,5 kg | Nenhum padrão obrigatório: a regra nova entra na sequência da validação, logo depois de `peso invalido` |

### 1.6 Lições do projeto de exemplo (Livraria)

O checklist de `contexto/projeto-exemplo.md` (seção 10) orientou estas decisões de análise:

- **Item 3 (`instanceof` para decidir comportamento):** modal, perfil, status e interessado viram hierarquias porque
  quem os usa não pode perguntar o tipo.
- **Item 5 (regra copiada em várias classes):** a sobretaxa é tratada como regra única, e não como atributo de cada
  modal.
- **Item 7 (getter que expõe a lista):** os interessados do transporte são uma lista privada, sem acesso direto.
- **Item 13 (exceção não tratada):** a rejeição é um conceito próprio, e não uma exceção que interrompe o lote.
- **Item 21 (cálculo gravado por cima do dado):** encomenda e transporte são separados. Os dados de entrada não
  mudam, e frete, tempo e CO₂ são recalculados a cada pedido, o que permite trocar de perfil e simular.

### 1.7 Dúvidas para o grupo

| Dúvida | Onde se resolve |
|---|---|
| A sobretaxa mora na abstração comum dos modais ou numa classe própria? | T08 e T10 (Liliane) |
| O aviso é um objeto próprio ou só parâmetros? | T14 (Alexandre) |
| A operação rejeitada devolve um valor ou lança uma exceção? | T12 (Murilo) e T14 (Alexandre) |
| Onde mora o arredondamento, para que o cálculo normal e a simulação usem o mesmo ponto? | T10 (Liliane) |
