# State

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/state) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/state/java/example), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; o exemplo abaixo não é o do site.

## Intenção

Alterar o comportamento de um objeto conforme seu estado interno, representando cada estado por uma classe.

## Problema

Sem o padrão, o comportamento vira uma máquina de estados feita de `if` e `switch` repetidos em vários métodos, e qualquer transição nova obriga a alterar todos eles.

## Quando usar e quando evitar

- **Usar:** quando o comportamento depende do estado, há vários estados, ou a classe tem condicionais grandes sobre os próprios campos.
- **Evitar:** quando há poucos estados que quase não mudam, ou quando o estado é apenas um dado exibido, sem alterar o comportamento.
- **Ganho:** cada estado fica em uma classe, e estados novos entram sem mudar os existentes.

## Participantes

| Papel | Responsabilidade |
|---|---|
| Contexto | Guarda o estado atual e delega a ele |
| Estado | Interface com os métodos que dependem do estado |
| Estados concretos | Implementam o comportamento e podem disparar transições |

## Exemplo mínimo

```java
interface EstadoPorta {
    String abrir(Porta porta);
    String fechar(Porta porta);
    String alternarTranca(Porta porta);
}

class Porta {
    private EstadoPorta estado = new PortaFechada();

    void alterarEstado(EstadoPorta novoEstado) {
        this.estado = novoEstado;
    }

    String abrir() {
        return estado.abrir(this);
    }

    String fechar() {
        return estado.fechar(this);
    }

    String alternarTranca() {
        return estado.alternarTranca(this);
    }
}

class PortaAberta implements EstadoPorta {
    @Override
    public String abrir(Porta porta) {
        return "Ja esta aberta";
    }

    @Override
    public String fechar(Porta porta) {
        porta.alterarEstado(new PortaFechada());
        return "Fechou";
    }

    @Override
    public String alternarTranca(Porta porta) {
        return "Feche antes de trancar";
    }
}

class PortaFechada implements EstadoPorta {
    @Override
    public String abrir(Porta porta) {
        porta.alterarEstado(new PortaAberta());
        return "Abriu";
    }

    @Override
    public String fechar(Porta porta) {
        return "Ja esta fechada";
    }

    @Override
    public String alternarTranca(Porta porta) {
        porta.alterarEstado(new PortaTrancada());
        return "Trancou";
    }
}

class PortaTrancada implements EstadoPorta {
    @Override
    public String abrir(Porta porta) {
        return "Esta trancada";
    }

    @Override
    public String fechar(Porta porta) {
        return "Ja esta fechada";
    }

    @Override
    public String alternarTranca(Porta porta) {
        porta.alterarEstado(new PortaFechada());
        return "Destrancou";
    }
}

class Demo {
    public static void main(String[] args) {
        Porta porta = new Porta();
        System.out.println(porta.alternarTranca());
        System.out.println(porta.abrir());
        System.out.println(porta.alternarTranca());
        System.out.println(porta.abrir());
    }
}
```

## Como identificar

Métodos cujo comportamento muda conforme um objeto interno, e esse objeto é trocado pelas próprias transições, sem o cliente escolher.

## Padrões parecidos

- **Strategy:** a estrutura é quase igual. As estratégias são independentes e escolhidas de fora. Os estados podem se conhecer e disparar a troca entre si.

## Pontos de atenção para o LogiTech

- O enunciado exige que status seja classe ou interface, e não `enum`. Isso, sozinho, **não obriga o uso de State**: o padrão só se justifica se o comportamento mudar conforme o status, por exemplo nas transições válidas.
- Transição inválida precisa de uma resposta definida. Um estado pode recusar a operação sem lançar exceção não tratada.
- Comparar o status por texto para decidir o comportamento, fora da camada de entrada, seria o tipo de teste que o padrão evita.
