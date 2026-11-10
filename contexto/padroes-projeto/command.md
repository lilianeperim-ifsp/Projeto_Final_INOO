# Command

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/command) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/command/java/example), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; o exemplo abaixo não é o do site.

## Intenção

Encapsular uma solicitação como objeto, com tudo o que é preciso para executá-la. Assim, a solicitação pode ser guardada, enfileirada, repetida ou desfeita.

## Problema

A mesma operação é disparada de vários lugares (botão, menu, atalho). Colocar a lógica em quem dispara gera duplicação e acopla a interface à regra de negócio.

## Quando usar e quando evitar

- **Usar:** para associar ações configuráveis a objetos, para enfileirar ou agendar operações, para registrar histórico e para implementar desfazer e refazer.
- **Evitar:** quando a operação é sempre executada na hora, de um único lugar, e não precisa de histórico. A camada extra só complica.
- **Ganho:** quem invoca não conhece quem executa, e novos comandos entram sem mudar o invocador.

## Participantes

| Papel | Responsabilidade |
|---|---|
| Invocador (remetente) | Dispara o comando que recebeu pronto |
| Comando | Interface, em geral com um método de execução sem parâmetros |
| Comandos concretos | Guardam o destinatário e os parâmetros, e fazem a chamada |
| Destinatário | Contém a lógica que faz o trabalho |
| Cliente | Cria e liga destinatários, comandos e invocadores |

## Exemplo mínimo

```java
import java.util.ArrayList;
import java.util.List;

class Lampada {
    private boolean ligada;

    void ligar() {
        ligada = true;
    }

    void desligar() {
        ligada = false;
    }

    boolean isLigada() {
        return ligada;
    }
}

interface Comando {
    void executar();
    void desfazer();
}

class LigarLampada implements Comando {
    private final Lampada lampada;

    LigarLampada(Lampada lampada) {
        this.lampada = lampada;
    }

    @Override
    public void executar() {
        lampada.ligar();
    }

    @Override
    public void desfazer() {
        lampada.desligar();
    }
}

class ControleRemoto {
    private final List<Comando> historico = new ArrayList<>();

    void acionar(Comando comando) {
        comando.executar();
        historico.add(comando);
    }

    void desfazerUltimo() {
        if (!historico.isEmpty()) {
            historico.remove(historico.size() - 1).desfazer();
        }
    }
}

class Demo {
    public static void main(String[] args) {
        Lampada lampada = new Lampada();
        ControleRemoto controle = new ControleRemoto();

        controle.acionar(new LigarLampada(lampada));
        System.out.println("Ligada: " + lampada.isLigada());

        controle.desfazerUltimo();
        System.out.println("Ligada: " + lampada.isLigada());
    }
}
```

## Como identificar

Um objeto chama um método de uma interface e, por trás dela, outro objeto faz o trabalho, com os dados guardados em campos desde a criação. Na biblioteca padrão: implementações de `Runnable`.

## Padrões parecidos

- **Strategy:** os dois parametrizam um objeto com um comportamento. O Command transforma **uma operação** em objeto, para guardar ou adiar. O Strategy oferece **formas diferentes de fazer a mesma coisa**.
- **Observer:** o Command liga um remetente a um destinatário. No Observer, vários destinatários se inscrevem durante a execução.

## Pontos de atenção para o LogiTech

- O exemplo do site guarda o histórico em `java.util.Stack`. Aqui, usar `ArrayList`, como acima.
- Ao avaliar o padrão, perguntar se o sistema precisa guardar, adiar ou desfazer operações. Se cada linha é processada e descartada, sem nada disso, o descarte é uma justificativa válida.
