# Especificações técnicas e entregáveis do LogiTech

Fonte: `contexto/pdfs/enunciado-logitech-v2.pdf`, seções 1 e 6 a 10, mais as decisões confirmadas pelo grupo. As regras de negócio ficam em `regras-negocio.md`.

## 1. Objetivos e avaliação

O enunciado descreve o problema e as regras, mas **não diz quais classes, interfaces ou padrões usar**: definir isso e justificar faz parte da tarefa. São avaliadas quatro competências:

- **análise do problema:** identificar conceitos, responsabilidades e relações a partir de linguagem natural;
- **projeto orientado a objetos:** decidir quais classes e interfaces existem, quem faz o quê e por quê;
- **estratégia de resolução:** escolher e justificar mecanismos (incluindo padrões GoF, se fizerem sentido) para variação e evolução;
- **uso crítico de IA:** instruir, revisar e corrigir ferramentas como Claude Code ou Antigravity.

Gerar código com IA é permitido e esperado. **Entregar código ou decisões que você não entende ou não validou não é.**

## 2. Cronograma

| Etapa | Data | O que entregar |
|---|---|---|
| Etapa 1 | **27/11** | Somente o Documento de Projeto, **sem código** |
| Etapa 2 | **04/12** (dia da apresentação) | Implementação, testes, Documento de Projeto revisado e relatório de uso de IA, seguidos de stress test e defesa oral |

## 3. Restrições obrigatórias

### 3.1 Coleções e recursos de Java

- **Enunciado:** em termos de coleções, só o que foi ensinado em sala.
- **Decisão confirmada pelo grupo:** usar **somente `List`/`ArrayList` e arrays**. **Proibido `enum`, `Map`/`HashMap` e `Set`.**
- Por cautela do grupo: sem `record`, streams e `Optional`; perguntar antes de usar recurso que não apareça nos slides.
- Os slides das aulas 7, 8 e 9 não foram fornecidos (ver `slides/README.md`).
- Classe principal clássica: `public class Main` com `public static void main(String[] args)`. Evitar o `main` de instância e `IO.println` do template do IntelliJ.

### 3.2 Extensibilidade

Fora da camada de entrada, **nenhum código pode testar qual modal ou qual perfil está em uso** (nem `instanceof`, nem `switch`, nem comparação de código ou de texto). Quando um novo modal ou perfil surgir, a lógica que já existe deve continuar valendo sem ser reescrita. O mecanismo é decisão do grupo, justificada no Documento de Projeto.

Consequência prática: modal, perfil e status são **classes/interfaces**, não enum; a camada de entrada traduz o código de texto para o objeto percorrendo uma `List`.

### 3.3 Encapsulamento

- Todos os atributos de instância são `private`. Constantes `public static final` são permitidas.
- Getters não expõem estado mutável (cópias defensivas ou listas não modificáveis).

### 3.4 Qualidade geral

- **Baixo acoplamento:** classes dependem de abstrações, não de implementações concretas.
- **Alta coesão:** cada classe tem uma responsabilidade clara.

## 4. Cenários de evolução (aplicados na defesa, possivelmente ao vivo)

Cada alteração deve levar **poucos minutos** em um projeto bem estruturado. Se levar muito mais, indica acoplamento, a ser explicado na defesa. O Documento de Projeto deve dizer, para cada cenário, **quais classes seriam criadas e quais alteradas**.

| Cenário | Exigência |
|---|---|
| Surge o modal **ferroviário** com parâmetros próprios | Adicionar o modal criando classes novas; só a camada de entrada pode ser alterada no código existente |
| Surge o perfil **"corporativo"** com outros multiplicadores | Adicionar o perfil sem alterar o cálculo dos modais |
| O operador **muda o perfil ativo** de uma encomenda em execução | A partir da troca, os valores usam o novo perfil, sem recriar o transporte |
| Surge um novo interessado (ex.: **alerta por SMS** ao atingir certa região) | Adicionar o interessado sem alterar a classe do transporte |
| O operador **simula** a mesma encomenda sob outro perfil | Obter frete, tempo e CO₂ reutilizando as regras de cálculo, sem duplicá-las, sem alterar o perfil ativo |
| O código de modal vem de **configuração externa** | Alterar só a camada de entrada |
| Surge o status **CANCELADO**, alcançável de `AGUARDANDO` e `EM_TRANSITO` | Depois de CANCELADO nenhuma transição nem troca de perfil é aceita. Central e cliente são avisados; a auditoria **não soma nada** |
| O **cliente cancela a assinatura** dos avisos em execução e outro interessado passa a recebê-los | Deixar de avisar o primeiro e avisar o segundo, sem recriar o transporte |
| Peso **abaixo de 0,5 kg** passa a ser rejeitado, motivo `peso minimo` | Nova validação, aplicada logo depois de `peso invalido` na ordem da tabela de validação |
| **Sobretaxa** de carga pesada passa a ser **8% acima de 2000 kg** | Alterar a regra em **um único ponto**, para todos os modais |
| Surge o perfil **PREMIUM**: frete × 1,20, tempo × 0,90, CO₂ × 1,00, **frete final nunca menor que R$ 50,00** | Adicionar o perfil sem alterar o cálculo dos modais nem os perfis existentes |
| A entrada passa a usar **`,`** como separador em vez de `;` | Alterar só a camada de entrada |

## 5. Padrões de projeto para estudo

Nenhum é obrigatório e nenhum é indicado para algum ponto específico: relacionar cada padrão aos pontos de variação, ou descartá-lo, faz parte da tarefa. Padrões fora da lista também valem, se justificados. Referência: FREEMAN et al., *Use a cabeça! Padrões de projetos*, 2. ed., Alta Books, 2009.

| Padrão | Intenção (resumo) |
|---|---|
| Adapter | Converter a interface de uma classe na interface que o cliente espera |
| Builder | Separar a construção de um objeto complexo da sua representação |
| Command | Encapsular uma solicitação como objeto |
| Decorator | Acrescentar responsabilidades a um objeto de forma dinâmica |
| Factory Method / Simple Factory | Delegar a criação de objetos a um método ou classe dedicados |
| Observer | Definir uma dependência um-para-muitos entre objetos |
| Prototype | Criar objetos a partir da cópia de uma instância existente |
| Singleton | Garantir uma única instância, com ponto de acesso global |
| State | Alterar o comportamento de um objeto conforme seu estado interno |
| Strategy | Definir uma família de algoritmos intercambiáveis |
| Template Method | Definir o esqueleto de um algoritmo, adiando etapas para subclasses |

Para cada padrão **usado, ou considerado e descartado**, registrar no Documento de Projeto: o problema que resolve aqui, as classes envolvidas e o motivo da escolha ou do descarte. **Usar um padrão sem justificá-lo não rende pontos.**

## 6. Etapa 1 — Documento de Projeto (27/11, sem código)

Entregar **antes de implementar**. Ele fixa as decisões e será comparado com o código final. Mudanças de rumo são normais, mas devem ser registradas e justificadas na Etapa 2. O documento deve conter:

1. **Análise do problema:** conceitos identificados (substantivos e verbos relevantes), indicando quais viraram classes, quais viraram atributos e quais foram descartados, com o motivo.
2. **Catálogo de classes e interfaces:** nome, responsabilidade em uma frase, principais atributos e métodos e colaboradores (cartões CRC ou tabela equivalente).
3. **Diagrama de classes UML** com hierarquias, interfaces e dependências (pode ser Mermaid ou PlantUML).
4. **Estratégia de resolução:** como o projeto lida com cada ponto de variação (o que muda entre modais, entre perfis e entre interessados) e o mecanismo escolhido para isolar cada um.
5. **Padrões e mecanismos escolhidos:** para cada padrão, o problema que resolve, as classes que o compõem e **uma alternativa considerada e descartada**. Justificar também onde se decidiu **não** usar um padrão.
6. **Fluxos principais** (diagrama de sequência ou texto passo a passo): (a) processamento de uma linha do lote; (b) troca de perfil em tempo de execução; (c) mudança de status de um transporte e os avisos resultantes.
7. **Resposta aos cenários de evolução** (seção 4): classes criadas e classes alteradas, para cada um.
8. **Plano de testes:** casos a cobrir, incluindo os de borda da validação.

## 7. Etapa 2 — Implementação e entregáveis finais (04/12)

Implementar em Java o projeto da Etapa 1 e entregar:

1. **Código-fonte** completo e compilável, com instruções de compilação e execução. Deve funcionar com entrada redirecionada: `java Main < entrada.txt`. Se usar pacotes, entregar `COMO_EXECUTAR.md` com versão do JDK, classe principal e comandos exatos de compilação e execução.
2. **Testes unitários** cobrindo: cálculos (incluindo o gabarito da seção 12 de `regras-negocio.md`), casos de borda da validação, troca de perfil em tempo de execução e avisos automáticos.
3. **Documento de Projeto revisado**, com a seção **"Do projeto ao código"** listando cada divergência em relação à Etapa 1 e o motivo.
4. **Relatório de uso de IA** (máximo **3 páginas**) contendo:
   - os principais prompts usados, incluindo como o projeto foi descrito à ferramenta;
   - pelo menos **3 casos em que a IA errou** (violou restrição, propôs modelo acoplado ou gerou código incorreto) e como foram identificados e corrigidos;
   - pelo menos **1 caso em que a sugestão de projeto da IA foi rejeitada** e a do grupo mantida, com o motivo.

## 8. Stress test e defesa oral

### 8.1 Stress test

Os projetos rodam contra uma **base secreta em lote** via `< base.txt` (a banca segue o `COMO_EXECUTAR.md`), com volume reduzido e casos de borda: peso zero, distância zero, distâncias grandes, lista vazia, entradas inválidas. Observa-se:

- **eficiência:** relatório em **uma única passagem pela lista (O(n))**, sem varreduras aninhadas nem ordenações desnecessárias;
- **robustez:** nenhuma exceção não tratada; linhas inválidas nunca interrompem o lote;
- **consistência:** texto no formato exato da seção de saída e valores iguais ao gabarito, dentro de ±0,01.

### 8.2 Defesa oral (individual)

Cada aluno ou grupo defende o projeto em arguição individual e pode ser solicitado a:

- explicar qualquer decisão do Documento de Projeto e defender uma alternativa descartada;
- **implementar ao vivo** um dos cenários de evolução (alteração de poucos minutos);
- apontar no código onde cada padrão escolhido aparece.

### 8.3 Integridade acadêmica

O uso de IA é permitido e esperado, mas **o aluno é responsável por todo o projeto e todo o código entregue**. A incapacidade de explicar ou modificar o que foi entregue reduz a nota.
