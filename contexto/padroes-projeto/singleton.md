# Singleton

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/singleton) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/singleton/java/example), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; o exemplo abaixo não é o do site.

## Intenção

Garantir que uma classe tenha uma única instância, com ponto de acesso global a ela.

## Problema

Alguns recursos compartilhados precisam ser únicos, e uma variável global comum pode ser sobrescrita por qualquer parte do código.

## Quando usar e quando evitar

- **Usar:** quando deve existir exatamente uma instância, compartilhada por todo o programa.
- **Evitar:** quando o objeto pode simplesmente ser criado uma vez e passado a quem precisa. Na página de Java, o site observa que muitos desenvolvedores o consideram um antipadrão.
- **Custos:** acumula duas responsabilidades, cria dependência escondida, dificulta testes e exige cuidado com múltiplas threads.

## Participantes

Uma única classe, com construtor privado, um campo estático com a instância e um método estático que a devolve.

## Exemplo mínimo

```java
class GeradorProtocolo {
    private static final GeradorProtocolo INSTANCIA = new GeradorProtocolo();

    private int proximo = 1;

    private GeradorProtocolo() {
    }

    static GeradorProtocolo getInstancia() {
        return INSTANCIA;
    }

    int gerar() {
        return proximo++;
    }
}

class Demo {
    public static void main(String[] args) {
        System.out.println(GeradorProtocolo.getInstancia().gerar());
        System.out.println(GeradorProtocolo.getInstancia().gerar());
    }
}
```

A instância é criada quando a classe é carregada. O site mostra também a criação tardia e a versão segura para threads, com `volatile` e `synchronized`.

## Como identificar

Um método estático de criação que devolve sempre o mesmo objeto. Na biblioteca padrão: `Runtime.getRuntime()`.

## Padrões parecidos

- **Classe só com métodos estáticos:** também é única, mas não implementa interface nem pode ser passada como objeto.
- **Injeção pelo construtor** (não é padrão da lista): cria-se uma instância e ela é passada a quem precisa. A unicidade passa a ser uma decisão de quem monta o sistema, e a dependência fica visível.

## Pontos de atenção para o LogiTech

- Quem chama `getInstancia()` depende da **classe concreta**, o que contraria a exigência de depender de abstrações. Se o padrão for usado, é preciso justificar.
- Estado mutável no Singleton continua vivo entre testes dentro da mesma execução, o que pode fazer um teste influenciar outro.
- Perguntar sempre: "o que dá errado se existirem duas instâncias?". Se a resposta for "nada", o padrão não tem problema a resolver.
