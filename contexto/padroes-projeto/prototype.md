# Prototype

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/prototype) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/prototype/java/example), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; o exemplo abaixo não é o do site.

## Intenção

Criar objetos a partir da cópia de uma instância existente, deixando que o próprio objeto saiba se copiar.

## Problema

Copiar "de fora" exige conhecer a classe concreta e acessar campos privados. Às vezes só se tem a referência para a interface.

## Quando usar e quando evitar

- **Usar:** quando o código precisa copiar objetos sem depender de suas classes concretas, ou quando há muitas subclasses que diferem apenas na configuração inicial.
- **Evitar:** quando criar o objeto com `new` é simples, e nada precisa ser copiado.
- **Custo:** copiar objetos com referências entre si, principalmente circulares, é trabalhoso.

## Participantes

| Papel | Responsabilidade |
|---|---|
| Protótipo | Declara o método de cópia |
| Protótipo concreto | Implementa a cópia, incluindo os objetos internos que precisam ser duplicados |
| Cliente | Pede a cópia sem conhecer a classe concreta |
| Registro (opcional) | Guarda protótipos prontos e devolve cópias |

## Exemplo mínimo

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

abstract class Ficha {
    private final String titulo;
    private final List<String> itens;

    protected Ficha(String titulo) {
        this.titulo = titulo;
        this.itens = new ArrayList<>();
    }

    // Cópia profunda: a nova ficha tem a própria lista.
    protected Ficha(Ficha outra) {
        this.titulo = outra.titulo;
        this.itens = new ArrayList<>(outra.itens);
    }

    abstract Ficha copiar();

    void adicionarItem(String item) {
        itens.add(item);
    }

    List<String> getItens() {
        return Collections.unmodifiableList(itens);
    }

    String getTitulo() {
        return titulo;
    }
}

class FichaCurso extends Ficha {
    private final int cargaHoraria;

    FichaCurso(String titulo, int cargaHoraria) {
        super(titulo);
        this.cargaHoraria = cargaHoraria;
    }

    private FichaCurso(FichaCurso outra) {
        super(outra);
        this.cargaHoraria = outra.cargaHoraria;
    }

    @Override
    Ficha copiar() {
        return new FichaCurso(this);
    }

    int getCargaHoraria() {
        return cargaHoraria;
    }
}

class Demo {
    public static void main(String[] args) {
        Ficha original = new FichaCurso("Java", 80);
        original.adicionarItem("Classes");

        Ficha copia = original.copiar();
        copia.adicionarItem("Interfaces");

        System.out.println(original.getItens());
        System.out.println(copia.getItens());
    }
}
```

## Como identificar

Métodos chamados `copiar`, `clone` ou similares, que devolvem um novo objeto com os mesmos dados. Na biblioteca padrão: `Object.clone()` com `Cloneable`.

## Padrões parecidos

- **Factory Method:** usa herança e cria do zero. O Prototype dispensa criadores, mas o objeto copiado às vezes precisa de ajustes depois.
- **Cópia defensiva:** não é o padrão em si. Copiar uma lista dentro de um getter apenas protege o estado interno, sem que o cliente peça uma cópia polimórfica.

## Pontos de atenção para o LogiTech

- O registro do exemplo do site usa `Map<String, Shape>`, e os `equals` usam `instanceof`. Os dois são recursos a evitar aqui.
- Cópia rasa de uma lista faz original e cópia compartilharem o mesmo estado mutável. É o erro clássico deste padrão.
- Avaliar se o sistema realmente precisa copiar objetos já existentes. Se cada linha da entrada gera um objeto novo, com dados próprios, o padrão pode não ter problema a resolver.
