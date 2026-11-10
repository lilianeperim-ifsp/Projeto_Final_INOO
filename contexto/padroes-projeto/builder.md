# Builder

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/builder) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/builder/java/example), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; o exemplo abaixo não é o do site.

## Intenção

Separar a construção de um objeto complexo da sua representação, montando o objeto em etapas.

## Problema

Um objeto tem muitos campos opcionais. O construtor com muitos parâmetros ("telescópico") fica ilegível, e criar uma subclasse para cada combinação não escala.

## Quando usar e quando evitar

- **Usar:** para eliminar construtores longos, para gerar representações diferentes com as mesmas etapas, ou para impedir que o cliente veja o objeto incompleto.
- **Evitar:** em objetos com poucos campos, todos obrigatórios. Um construtor comum basta.
- **Custo:** mais classes para manter.

## Participantes

| Papel | Responsabilidade |
|---|---|
| Builder | Declara as etapas de construção |
| Builders concretos | Implementam as etapas de formas diferentes |
| Produto | O objeto resultante |
| Diretor (opcional) | Define a ordem das etapas para configurações conhecidas |
| Cliente | Escolhe o builder e pega o resultado |

O exemplo abaixo usa a variante comum em Java: um único builder aninhado, com métodos encadeados e sem diretor. O site mostra a forma completa, com interface e diretor.

## Exemplo mínimo

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Pizza {
    private final String tamanho;
    private final boolean bordaRecheada;
    private final List<String> coberturas;

    private Pizza(Builder builder) {
        this.tamanho = builder.tamanho;
        this.bordaRecheada = builder.bordaRecheada;
        this.coberturas = new ArrayList<>(builder.coberturas);
    }

    List<String> getCoberturas() {
        return Collections.unmodifiableList(coberturas);
    }

    @Override
    public String toString() {
        return "Pizza " + tamanho + ", borda recheada: " + bordaRecheada + ", " + coberturas;
    }

    static class Builder {
        private final String tamanho;
        private boolean bordaRecheada;
        private final List<String> coberturas = new ArrayList<>();

        Builder(String tamanho) {
            this.tamanho = tamanho;
        }

        Builder comBordaRecheada() {
            this.bordaRecheada = true;
            return this;
        }

        Builder comCobertura(String cobertura) {
            this.coberturas.add(cobertura);
            return this;
        }

        Pizza construir() {
            return new Pizza(this);
        }
    }
}

class Demo {
    public static void main(String[] args) {
        Pizza pizza = new Pizza.Builder("grande")
                .comBordaRecheada()
                .comCobertura("milho")
                .comCobertura("tomate")
                .construir();
        System.out.println(pizza);
    }
}
```

## Como identificar

Uma classe com um método final de criação e vários métodos que configuram o resultado, em geral encadeados. Na biblioteca padrão: `StringBuilder.append()`.

## Padrões parecidos

- **Factory Method:** devolve o objeto pronto em uma única chamada. O Builder permite executar etapas antes de obter o resultado.
- É comum um projeto começar com Factory Method e migrar para Builder quando a criação fica mais complexa.

## Pontos de atenção para o LogiTech

- O exemplo do site usa `enum` (`CarType`, `Transmission`), que é proibido aqui.
- Se o objeto construído tiver lista, copiá-la no construtor do produto, para que o builder não continue alterando um objeto já pronto. Os getters seguem a regra de não expor estado mutável.
- Validar no método final de construção concentra a validação em um ponto. Lembrar que **linha inválida nunca pode interromper o lote**, então qualquer exceção lançada ali precisa ser tratada.
