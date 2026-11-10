# Strategy

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/strategy) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/strategy/java/example), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; o exemplo abaixo não é o do site.

## Intenção

Definir uma família de algoritmos intercambiáveis, cada um em sua classe, e deixar o objeto que os usa independente de qual está em uso.

## Problema

A cada nova variante de um algoritmo, a classe principal cresce, ganha condicionais, e um ajuste em uma variante arrisca afetar as outras.

## Quando usar e quando evitar

- **Usar:** quando há variantes do mesmo algoritmo, quando classes parecidas diferem só no comportamento, ou para eliminar condicionais que escolhem a variante.
- **Evitar:** quando há só uma ou duas variantes que quase nunca mudam.
- **Custo:** o cliente precisa conhecer as estratégias para escolher a certa.

## Participantes

| Papel | Responsabilidade |
|---|---|
| Contexto | Guarda a estratégia e delega o trabalho, sem saber qual é |
| Estratégia | Interface comum |
| Estratégias concretas | Cada uma é uma variante do algoritmo |
| Cliente | Escolhe a estratégia e a entrega ao contexto |

## Exemplo mínimo

```java
import java.util.ArrayList;
import java.util.List;

interface CalculoMedia {
    double calcular(List<Double> notas);
}

class MediaAritmetica implements CalculoMedia {
    @Override
    public double calcular(List<Double> notas) {
        double soma = 0;
        for (double nota : notas) {
            soma += nota;
        }
        return soma / notas.size();
    }
}

class MediaSemMenorNota implements CalculoMedia {
    @Override
    public double calcular(List<Double> notas) {
        if (notas.size() == 1) {
            return notas.get(0);
        }
        double soma = 0;
        double menor = notas.get(0);
        for (double nota : notas) {
            soma += nota;
            menor = Math.min(menor, nota);
        }
        return (soma - menor) / (notas.size() - 1);
    }
}

class Boletim {
    private final List<Double> notas = new ArrayList<>();
    private CalculoMedia calculo;

    Boletim(CalculoMedia calculo) {
        this.calculo = calculo;
    }

    void trocarCalculo(CalculoMedia novoCalculo) {
        this.calculo = novoCalculo;
    }

    void adicionarNota(double nota) {
        notas.add(nota);
    }

    double media() {
        if (notas.isEmpty()) {
            return 0;
        }
        return calculo.calcular(notas);
    }
}

class Demo {
    public static void main(String[] args) {
        Boletim boletim = new Boletim(new MediaAritmetica());
        boletim.adicionarNota(4);
        boletim.adicionarNota(6);
        boletim.adicionarNota(8);
        System.out.println(boletim.media());

        boletim.trocarCalculo(new MediaSemMenorNota());
        System.out.println(boletim.media());
    }
}
```

## Como identificar

Um método deixa um objeto interno fazer o trabalho real, e esse objeto pode ser substituído. Na biblioteca padrão: `Comparator` usado em `Collections.sort()`.

## Padrões parecidos

- **State:** as estratégias não se conhecem e são escolhidas de fora. Os estados podem disparar a troca entre si.
- **Template Method:** usa herança, atua na classe e é fixo. O Strategy usa composição, atua no objeto e pode ser trocado durante a execução.
- **Command:** transforma uma operação em objeto. O Strategy oferece formas diferentes de fazer a mesma coisa.
- **Decorator:** altera o objeto envolvendo-o. O Strategy altera uma parte interna.

## Pontos de atenção para o LogiTech

- O exemplo do site usa `HashMap` em `PayByPayPal` e `Demo`, que é proibido aqui. O `Demo` também escolhe a estratégia com `if/else` sobre texto, o que só seria aceitável na camada de entrada.
- O site cita lambdas como alternativa às classes. Como modal e perfil precisam ser classes ou interfaces, e em dúvida sobre recursos de Java o grupo combinou perguntar, o exemplo acima usa classes.
- Se o objeto nunca troca de algoritmo depois de criado, o método de troca é desnecessário: o algoritmo pode ser recebido só no construtor.
- Uma regra que vale para **todas** as variantes deve ficar fora delas, para não ser repetida em cada classe.
