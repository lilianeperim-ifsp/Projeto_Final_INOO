# Adapter

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/adapter) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/adapter/java/example), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; o exemplo abaixo não é o do site.

## Intenção

Converter a interface de uma classe na interface que o cliente espera. O adaptador fica no meio e traduz chamadas e dados, sem que nenhum dos dois lados precise mudar.

## Problema

Duas classes precisam colaborar, mas suas interfaces não combinam, e alterar uma delas é inviável porque ela é de terceiros, é legada ou tem muitos usuários.

## Quando usar e quando evitar

- **Usar:** para reaproveitar uma classe existente cuja interface não combina com o restante do código, ou para isolar uma dependência externa.
- **Evitar:** quando a classe é nossa e alterá-la diretamente é simples. O adaptador só acrescentaria classes.
- **Ganho:** a conversão fica separada da regra de negócio, e novos adaptadores entram sem mudar o cliente.

## Participantes

| Papel | Responsabilidade |
|---|---|
| Cliente | Contém a regra de negócio e só conhece a interface alvo |
| Interface alvo | O contrato que o cliente espera |
| Serviço | A classe útil, com interface incompatível |
| Adaptador | Implementa a interface alvo e guarda o serviço, traduzindo as chamadas |

Em Java, a forma usual é a composição (o adaptador guarda o serviço). O exemplo do site usa herança, com o adaptador estendendo a classe esperada.

## Exemplo mínimo

```java
interface SensorCelsius {
    double lerCelsius();
}

// Serviço com interface incompatível, que não podemos alterar.
class TermometroImportado {
    private final double fahrenheit;

    TermometroImportado(double fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    double getFahrenheit() {
        return fahrenheit;
    }
}

class TermometroAdapter implements SensorCelsius {
    private final TermometroImportado termometro;

    TermometroAdapter(TermometroImportado termometro) {
        this.termometro = termometro;
    }

    @Override
    public double lerCelsius() {
        return (termometro.getFahrenheit() - 32) * 5 / 9;
    }
}

class Demo {
    public static void main(String[] args) {
        SensorCelsius sensor = new TermometroAdapter(new TermometroImportado(212));
        System.out.println(sensor.lerCelsius() + " graus Celsius");
    }
}
```

## Como identificar

Um construtor recebe um objeto de **outro** tipo, e os métodos convertem os parâmetros e encaminham a chamada a esse objeto. Na biblioteca padrão: `Arrays.asList()` e `InputStreamReader(InputStream)`.

## Padrões parecidos

- **Decorator:** mantém a mesma interface e pode ser empilhado. O Adapter oferece uma interface diferente e não empilha.
- **Strategy e State:** a estrutura é parecida, baseada em composição e delegação. A diferença está na intenção: o Adapter resolve uma incompatibilidade.

## Pontos de atenção para o LogiTech

- O padrão pressupõe uma incompatibilidade real. Se todas as classes forem escritas pelo grupo, é preciso apontar qual interface não pode mudar, ou o descarte é a justificativa natural.
- O cliente deve depender da interface alvo, nunca do adaptador concreto, em linha com a exigência de depender de abstrações.
