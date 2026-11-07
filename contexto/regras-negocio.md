# Regras de negócio do LogiTech

Fonte: `contexto/pdfs/enunciado-logitech-v2.pdf`, seções 2 a 5. Em caso de divergência, o PDF vale mais. As restrições técnicas e de projeto ficam em `especificacoes-tecnicas.md`.

## 1. O problema

A LogiTech é uma operadora logística fictícia que transporta encomendas por três modais. O sistema recebe encomendas com peso, distância, origem e destino e, para cada uma, precisa:

1. escolher o **modal** (rodoviário, aéreo ou aquaviário), cada um com custos, velocidade e emissões próprios;
2. calcular **frete, tempo estimado e CO₂** segundo um **perfil de precificação** (econômico, rápido ou ecológico) que o operador pode trocar a qualquer momento, inclusive com o sistema em execução;
3. acompanhar o **status e a posição** de cada transporte;
4. **avisar automaticamente** a central de controle, a auditoria ambiental e o cliente quando status ou posição mudarem;
5. processar encomendas em **lote**, lidas da entrada padrão (uma por linha), rejeitando as inválidas sem interromper o processamento;
6. emitir um **relatório consolidado** (custo total, tempo médio, CO₂ total).

### Vocabulário (fixa os termos, não as classes)

| Termo | Significado |
|---|---|
| Modal | Rodoviário, aéreo ou aquaviário |
| Encomenda | Os dados do pedido: ID, peso, distância, origem, destino e perfil |
| Transporte | A entrega de uma encomenda em andamento, com status e posição |
| Perfil | Econômico, rápido ou ecológico |
| Interessado | Quem recebe os avisos: central de controle, auditoria ambiental, cliente e os que surgirem no futuro |

## 2. Parâmetros por modal (valores fictícios)

| Parâmetro | Rodoviário | Aéreo | Aquaviário |
|---|---|---|---|
| Custo por km (R$/km) | 1,50 | 4,00 | 0,60 |
| Custo por kg (R$/kg) | 0,40 | 2,50 | 0,15 |
| Velocidade média (km/h) | 60 | 800 | 30 |
| Tempo fixo de manuseio (h) | 2 | 6 | 24 |
| Fator de emissão (kg CO₂ por tonelada·km) | 0,062 | 0,602 | 0,016 |
| Capacidade máxima por encomenda (kg) | 20.000 | 5.000 | 100.000 |

Códigos de modal na entrada: `RODOVIARIO`, `AEREO`, `AQUAVIARIO`.

## 3. Valores base (dependem só do modal e da encomenda)

```
freteBase  = distanciaKm × custoPorKm + pesoKg × custoPorKg
```
Se `pesoKg > 1000`: `freteBase = freteBase × 1,05` (sobretaxa de carga pesada). A sobretaxa vale também quando a distância é 0.

```
tempoBaseH = distanciaKm / velocidadeMedia + tempoManuseio
co2BaseKg  = (pesoKg / 1000) × distanciaKm × fatorEmissao
```

## 4. Perfis de precificação

O perfil **não depende do modal**: as mesmas regras valem para os três. Cada perfil aplica multiplicadores aos valores base.

| Perfil | Código | Frete | Tempo | CO₂ |
|---|---|---|---|---|
| Econômico | `ECONOMICO` | × 0,85 | × 1,25 | × 1,00 |
| Rápido | `RAPIDO` | × 1,40 | × 0,80 | × 1,15 |
| Ecológico | `ECOLOGICO` | × 1,10 | × 1,10 | × 0,70 |

Códigos de modal e de perfil **diferenciam maiúsculas de minúsculas**: `rodoviario` não é `RODOVIARIO` e dá `codigo inexistente`.

## 5. Arredondamento

- Frete, tempo e CO₂ de cada encomenda são arredondados para **2 casas, HALF_UP, depois de aplicar o perfil**.
- Os agregados do relatório usam os valores **já arredondados** por encomenda.
- A **média de tempo é arredondada para 2 casas apenas no final**.
- Tolerância de correção: ±0,01 nos valores numéricos (`double` e `BigDecimal` são igualmente aceitos). O formato do texto é conferido exatamente.

## 6. Validação de encomendas

Encomenda inválida é rejeitada e registrada (ID e motivo), sem exceção não tratada e sem interromper o lote. Ela não entra nos totais. A ordem da tabela é a **ordem de validação**: com mais de um problema, vale o primeiro motivo.

| # | Situação | Motivo (texto exato, minúsculo, sem acento) |
|---|---|---|
| 1 | Número de campos diferente de 7; ID que não seja inteiro; peso ou distância não numéricos ou não finitos (`NaN`, `Infinity`) | `formato invalido` |
| 2 | Modal ou perfil desconhecidos | `codigo inexistente` |
| 3 | Origem ou destino vazio (após remover espaços das pontas) | `rota invalida` |
| 4 | peso ≤ 0 | `peso invalido` |
| 5 | distância < 0 | `distancia invalida` |
| 6 | peso acima da capacidade do modal (peso igual à capacidade é válido) | `capacidade excedida` |

Casos especiais:

| Situação | Tratamento |
|---|---|
| distância = 0 | **Válida.** Valem as fórmulas sem exceção (inclusive a sobretaxa): frete base = peso × custo por kg, tempo base = manuseio, CO₂ base = 0 |
| Linha em branco | **Ignorada**: não é rejeitada e não entra em nenhuma contagem |
| Lista vazia | Relatório com todos os valores 0, sem divisão por zero |
| Origem igual ao destino | Válida |

O ID é único em cada lote (não é preciso detectar repetidos). A base secreta usa distâncias de até 1.000.000 km e pesos finitos.

## 7. Rastreamento

O lote só calcula e imprime. O acompanhamento dos transportes é função do **núcleo**, exercitada pelos testes e pela defesa oral, sem formato de entrada.

O núcleo deve oferecer, em palavras suas: criar um transporte a partir de uma encomenda válida; mudar o status; atualizar a posição; trocar o perfil; simular outro perfil.

- **Status:** `AGUARDANDO`, `EM_TRANSITO`, `ENTREGUE`. Todo transporte nasce `AGUARDANDO` e **sem posição**.
- **Transições válidas:** `AGUARDANDO → EM_TRANSITO → ENTREGUE`. Qualquer outra (inclusive repetir o status atual) é rejeitada.
- **Troca de perfil:** permitida em `AGUARDANDO` e `EM_TRANSITO`. Depois de `ENTREGUE` também é rejeitada (para o CO₂ já somado pela auditoria não ficar inconsistente). A **simulação** continua permitida depois de `ENTREGUE`.
- **Simulação de outro perfil:** não altera o transporte e **não gera aviso**.
- **Posição:** par (latitude, longitude). Latitude em [-90, 90], longitude em [-180, 180], ambas finitas. Se um valor sair do intervalo, o **par inteiro** é rejeitado. A primeira posição atribuída **conta como mudança**. Atualizar a posição é permitido em qualquer status.
- **Operação rejeitada:** não altera o estado, não gera aviso a ninguém e **quem a solicitou consegue saber** que foi rejeitada. O mecanismo (valor de retorno ou exceção) é decisão do grupo, a justificar no Documento de Projeto e cobrir nos testes.

## 8. Avisos automáticos

Só ocorrem quando o status ou as coordenadas **realmente mudam** (atribuir o valor que já existe não é mudança).

| Interessado | Reação |
|---|---|
| Central de controle | Registra uma linha de log por evento (ID, status, coordenadas) |
| Auditoria ambiental | Ao receber `ENTREGUE`, soma o CO₂ da encomenda (com o perfil vigente nesse momento) ao acumulado auditado |
| Cliente | Recebe uma mensagem de texto a cada mudança de **status** (mudança de posição não o avisa) |

Novos interessados podem surgir no futuro (ver cenários em `especificacoes-tecnicas.md`).

## 9. Relatório consolidado

- **Custo total:** soma dos fretes das encomendas válidas.
- **Tempo médio:** soma dos tempos dividida pela quantidade de válidas.
- **CO₂ total:** soma das emissões das válidas.
- Informar também a quantidade de **válidas** e de **rejeitadas**.

## 10. Entrada (lote)

- Lê a **entrada padrão** (`System.in`), uma encomenda por linha, campos separados por `;`, sem cabeçalho:
  `ID;MODAL;PESO_KG;DISTANCIA_KM;ORIGEM;DESTINO;PERFIL`
- A leitura fica na classe de entrada (ex.: `main`), que monta uma `List<String>` com as linhas e a entrega ao restante do sistema. **O núcleo não lê dados diretamente.**
- Execução: `java Main < entrada.txt`.

Exemplo de leitura:

```java
Scanner entrada = new Scanner(System.in);
List<String> linhas = new ArrayList<>();
while (entrada.hasNextLine()) {
    linhas.add(entrada.nextLine());
}
```

Regras de leitura, para toda linha:

1. `linha.split(";", -1)` (mantém campos vazios no fim) e `trim` em cada campo.
2. Linha vazia ou só com espaços é linha em branco (ignorada).
3. Deve ter exatamente 7 campos; senão, `formato invalido`.
4. ID: `Integer.parseInt`. Peso e distância: `Double.parseDouble`, valor finito. Falha dá `formato invalido`.
5. Códigos de modal e perfil diferenciam maiúsculas de minúsculas.
6. Origem igual ao destino é válida.
7. Peso e distância usam **ponto decimal** na entrada.

## 11. Saída

Uma linha por encomenda, na ordem de leitura, e uma única linha de relatório no final. Sem cabeçalhos.

```
VALIDA;ID;FRETE;TEMPO_H;CO2_KG
REJEITADA;ID;MOTIVO
RELATORIO;CUSTO_TOTAL;TEMPO_MEDIO_H;CO2_TOTAL;VALIDAS;REJEITADAS
```

- Números com **vírgula decimal, 2 casas e sem separador de milhar** (ex.: `1445,00`).
- Formato fixo no código: `String.format(Locale.forLanguageTag("pt-BR"), "%.2f", valor)`.
- Se o primeiro campo de uma linha rejeitada não for um inteiro legível, imprimir `LINHA<n>` no lugar do ID, com `<n>` = número da linha **física** na entrada, contando as em branco (a primeira é 1).
- Os avisos de status e posição **não** fazem parte da saída do lote.

Exemplo completo (a terceira linha da entrada está em branco):

```
1;RODOVIARIO;500;1000;Curitiba;Recife;ECONOMICO
2;AEREO;-5;1000;Sao Paulo;Manaus;RAPIDO

abc
3;AQUAVIARIO;2000;3000;Santos;Belem;ECOLOGICO
```
Saída:
```
VALIDA;1;1445,00;23,33;31,00
REJEITADA;2;peso invalido
REJEITADA;LINHA4;formato invalido
VALIDA;3;2425,50;136,40;67,20
RELATORIO;3870,50;79,87;98,20;2;2
```

## 12. Exemplo resolvido (gabarito)

| Encomenda | Frete base | Frete final | Tempo base (h) | Tempo final (h) | CO₂ base (kg) | CO₂ final (kg) |
|---|---|---|---|---|---|---|
| 1: rodoviário, 500 kg, 1000 km, ECONOMICO | 1700,00 | **1445,00** | 18,67 | **23,33** | 31,00 | **31,00** |
| 2: aéreo, 500 kg, 1000 km, RAPIDO | 5250,00 | **7350,00** | 7,25 | **5,80** | 301,00 | **346,15** |
| 3: aquaviário, 2000 kg, 3000 km, ECOLOGICO | 2205,00 (já com sobretaxa de 5%) | **2425,50** | 124,00 | **136,40** | 96,00 | **67,20** |

Casos de borda (todos ECONOMICO; não entram no relatório abaixo):

| Encomenda | Observação | Frete final | Tempo final (h) | CO₂ final (kg) |
|---|---|---|---|---|
| aquaviário, 2000 kg, 0 km | distância zero: a sobretaxa se aplica (300,00 × 1,05 × 0,85) | 267,75 | 30,00 | 0,00 |
| rodoviário, 1000 kg, 100 km | 1000 kg exatos: sem sobretaxa | 467,50 | 4,58 | 6,20 |
| rodoviário, 1001 kg, 100 km | acima de 1000 kg: com sobretaxa | 491,23 | 4,58 | 6,21 |

Relatório esperado para as três primeiras encomendas:

| Custo total (R$) | Tempo médio (h) | CO₂ total (kg) | Válidas | Rejeitadas |
|---|---|---|---|---|
| 11.220,50 | 55,18 | 444,35 | 3 | 0 |
