# Padrões de projeto — notas de estudo

Notas sobre os 11 padrões listados no enunciado (`contexto/especificacoes-tecnicas.md`, seção 5), feitas com Claude Code a pedido do Alexandre em 09/11/2026.

**Fonte:** [Refactoring.Guru — Padrões de Projeto em Java](https://refactoring.guru/pt-br/design-patterns/java). Cada arquivo traz o link da página específica.

**Estas notas não são cópia do site.** O repositório é público e a [política de uso](https://refactoring.guru/pt-br/content-usage-policy) só permite citar partes não substanciais dos textos, por isso o conteúdo foi reescrito com palavras próprias, os exemplos foram escritos do zero e as ilustrações ficam no site. Para ver os diagramas e os exemplos completos, abra o link.

## Como usar

- O enunciado diz que **nenhum padrão é obrigatório** e que relacionar cada um aos pontos de variação, ou descartá-lo, faz parte da tarefa. Estas notas não fazem essa relação: os exemplos usam domínios neutros de propósito.
- Para cada padrão **usado ou considerado e descartado**, o Documento de Projeto precisa registrar: o problema que ele resolve aqui, as classes envolvidas e o motivo da escolha ou do descarte. Usar um padrão sem justificar não rende pontos.
- Padrões fora da lista também valem, se justificados. A referência citada pelo enunciado é FREEMAN et al., *Use a cabeça! Padrões de projetos*.

## Índice

| Padrão | Categoria | Intenção (enunciado) | Costuma ser confundido com |
|---|---|---|---|
| [Adapter](adapter.md) | Estrutural | Converter a interface de uma classe na interface que o cliente espera | Decorator |
| [Builder](builder.md) | Criacional | Separar a construção de um objeto complexo da sua representação | Factory Method |
| [Command](command.md) | Comportamental | Encapsular uma solicitação como objeto | Strategy |
| [Decorator](decorator.md) | Estrutural | Acrescentar responsabilidades a um objeto de forma dinâmica | Adapter, Strategy |
| [Factory Method / Simple Factory](factory-method.md) | Criacional | Delegar a criação de objetos a um método ou classe dedicados | Template Method |
| [Observer](observer.md) | Comportamental | Definir uma dependência um-para-muitos entre objetos | Command |
| [Prototype](prototype.md) | Criacional | Criar objetos a partir da cópia de uma instância existente | Factory Method |
| [Singleton](singleton.md) | Criacional | Garantir uma única instância, com ponto de acesso global | Classe só com métodos estáticos |
| [State](state.md) | Comportamental | Alterar o comportamento de um objeto conforme seu estado interno | Strategy |
| [Strategy](strategy.md) | Comportamental | Definir uma família de algoritmos intercambiáveis | State, Template Method |
| [Template Method](template-method.md) | Comportamental | Definir o esqueleto de um algoritmo, adiando etapas para subclasses | Strategy |

## Cuidado ao consultar os exemplos do site

Os exemplos em Java do Refactoring.Guru não seguem as restrições do nosso projeto. Os exemplos destas notas seguem. Não copiar do site sem adaptar:

| Exemplo do site | Recurso proibido ou a evitar aqui | Onde |
|---|---|---|
| Builder | `enum` | `CarType`, `Transmission` |
| Command | `java.util.Stack` (só `List`/`ArrayList` e arrays) | `CommandHistory` |
| Observer | `Map`/`HashMap` | `EventManager` |
| Prototype | `Map`/`HashMap`; `instanceof` nos `equals` | `BundledShapeCache`, `Shape`, `Circle`, `Rectangle` |
| Strategy | `Map`/`HashMap` | `PayByPayPal`, `Demo` |

Lambdas aparecem no exemplo de State (só na interface gráfica) e são sugeridas como alternativa na página de Strategy. O enunciado não as cita diretamente, então vale a regra do grupo: em dúvida sobre um recurso de Java, perguntar antes.

Adapter, Decorator, Factory Method, Singleton e Template Method não usam nenhum desses recursos.
