# Observer

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/observer) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/observer/java/example), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; o exemplo abaixo não é o do site.

## Intenção

Definir uma dependência um-para-muitos entre objetos: quando um muda, todos os interessados são avisados, sem que ele conheça as classes concretas deles.

## Problema

Sem um mecanismo de aviso, os interessados precisam ficar perguntando se algo mudou, ou o objeto avisa todo mundo, inclusive quem não quer saber.

## Quando usar e quando evitar

- **Usar:** quando mudanças em um objeto devem refletir em outros, e esse conjunto é desconhecido ou muda durante a execução.
- **Evitar:** quando há sempre um único interessado, conhecido e fixo. Uma chamada direta é mais simples.
- **Ganho:** novos assinantes entram sem alterar o publicador.
- **Custo:** o site aponta que a ordem de notificação não é garantida. Com `ArrayList` ela será a ordem de inscrição, mas a lógica não deve depender disso sem deixar essa regra explícita.

## Participantes

| Papel | Responsabilidade |
|---|---|
| Publicador | Mantém a lista de assinantes, inscreve, cancela e notifica |
| Assinante | Interface com o método de atualização |
| Assinantes concretos | Reagem ao aviso |
| Cliente | Cria e inscreve os assinantes |

## Exemplo mínimo

```java
import java.util.ArrayList;
import java.util.List;

interface Assinante {
    void atualizar(String novidade);
}

class Canal {
    private final List<Assinante> assinantes = new ArrayList<>();

    void inscrever(Assinante assinante) {
        assinantes.add(assinante);
    }

    void cancelar(Assinante assinante) {
        assinantes.remove(assinante);
    }

    void publicar(String novidade) {
        // Percorre uma cópia: um assinante pode se cancelar durante o aviso.
        for (Assinante assinante : new ArrayList<>(assinantes)) {
            assinante.atualizar(novidade);
        }
    }
}

class AssinanteConsole implements Assinante {
    private final String nome;

    AssinanteConsole(String nome) {
        this.nome = nome;
    }

    @Override
    public void atualizar(String novidade) {
        System.out.println(nome + " recebeu: " + novidade);
    }
}

class Demo {
    public static void main(String[] args) {
        Canal canal = new Canal();
        Assinante ana = new AssinanteConsole("Ana");
        Assinante bruno = new AssinanteConsole("Bruno");

        canal.inscrever(ana);
        canal.inscrever(bruno);
        canal.publicar("episodio 1");

        canal.cancelar(ana);
        canal.publicar("episodio 2");
    }
}
```

## Como identificar

Métodos de inscrição guardam objetos em uma lista, e um método percorre essa lista chamando a atualização de cada um. Na biblioteca padrão: implementações de `java.util.EventListener`. O site observa que `java.util.Observer` e `Observable` são raramente usados.

## Padrões parecidos

- **Command:** liga um remetente a um destinatário. No Observer, os destinatários são vários e se inscrevem durante a execução.
- **Mediator** (fora da lista): centraliza a comunicação em um objeto. O Observer cria um aviso unidirecional.

## Pontos de atenção para o LogiTech

- O exemplo do site usa `Map<String, List<EventListener>>` em `EventManager`, que é proibido aqui. Uma `List` de assinantes, como acima, resolve o caso básico.
- O exemplo do site lança `NullPointerException` para evento não registrado. Aqui, **nenhuma exceção pode ficar sem tratamento**.
- O exemplo do site chama sua interface de `EventListener`, mesmo nome de `java.util.EventListener`. Evitar nomes que colidam com a biblioteca.
- Decidir o que o método de atualização recebe: dados prontos, ou o próprio objeto (cujos getters não podem expor estado mutável).
