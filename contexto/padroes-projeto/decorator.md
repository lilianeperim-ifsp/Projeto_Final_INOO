# Decorator

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/decorator) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/decorator/java/example), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; o exemplo abaixo não é o do site.

## Intenção

Acrescentar responsabilidades a um objeto de forma dinâmica, envolvendo-o em outros objetos de mesma interface.

## Problema

É preciso combinar comportamentos opcionais. A herança é estática, e uma subclasse por combinação faz o número de classes explodir.

## Quando usar e quando evitar

- **Usar:** quando responsabilidades podem ser combinadas durante a execução, sem que o código cliente perceba, ou quando a herança é inviável.
- **Evitar:** quando existe só uma combinação fixa, ou quando o resultado depende fortemente da ordem dos envoltórios.
- **Custos:** é difícil remover um envoltório do meio da pilha, a ordem pode alterar o resultado e a montagem inicial pode ficar pouco legível.

## Participantes

| Papel | Responsabilidade |
|---|---|
| Componente | Interface comum |
| Componente concreto | O objeto base |
| Decorador base | Guarda um componente e delega a ele |
| Decoradores concretos | Fazem algo antes ou depois de delegar |
| Cliente | Monta a pilha |

## Exemplo mínimo

```java
interface Texto {
    String conteudo();
}

class TextoSimples implements Texto {
    private final String valor;

    TextoSimples(String valor) {
        this.valor = valor;
    }

    @Override
    public String conteudo() {
        return valor;
    }
}

abstract class TextoDecorator implements Texto {
    private final Texto envolvido;

    protected TextoDecorator(Texto envolvido) {
        this.envolvido = envolvido;
    }

    @Override
    public String conteudo() {
        return envolvido.conteudo();
    }
}

class EmMaiusculas extends TextoDecorator {
    EmMaiusculas(Texto envolvido) {
        super(envolvido);
    }

    @Override
    public String conteudo() {
        return super.conteudo().toUpperCase();
    }
}

class ComAssinatura extends TextoDecorator {
    ComAssinatura(Texto envolvido) {
        super(envolvido);
    }

    @Override
    public String conteudo() {
        return super.conteudo() + " -- equipe";
    }
}

class Demo {
    public static void main(String[] args) {
        // A ordem muda o resultado.
        System.out.println(new EmMaiusculas(new ComAssinatura(new TextoSimples("aviso"))).conteudo());
        System.out.println(new ComAssinatura(new EmMaiusculas(new TextoSimples("aviso"))).conteudo());
    }
}
```

## Como identificar

Um construtor recebe um objeto do **mesmo** tipo ou interface da própria classe. Na biblioteca padrão: `BufferedReader(Reader)` e `Collections.unmodifiableList()`.

## Padrões parecidos

- **Adapter:** muda a interface. O Decorator a mantém e pode ser empilhado.
- **Strategy:** o Decorator altera o objeto "por fora", envolvendo-o. O Strategy altera "por dentro", trocando uma parte do algoritmo.

## Pontos de atenção para o LogiTech

- Quando vários envoltórios somam ou multiplicam valores, a **ordem da pilha muda o resultado**. Se a ordem das regras estiver definida pelo enunciado, a montagem da pilha precisa garantir essa ordem.
- Avaliar se o comportamento é realmente opcional e combinável. Se ele vale sempre, para todos os objetos, o envoltório pode ser desnecessário.
