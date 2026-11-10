# Factory Method / Simple Factory

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/factory-method) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/factory-method/java/example) · [comparação de fábricas](https://refactoring.guru/pt-br/design-patterns/factory-comparison), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; os exemplos abaixo não são os do site.

## Intenção

Delegar a criação de objetos a um método ou classe dedicados, para que o restante do código dependa de abstrações, e não de `new ClasseConcreta()`.

## Os dois não são a mesma coisa

| | Simple Factory | Factory Method |
|---|---|---|
| Forma | Uma classe com um método de criação | Método declarado no criador e sobrescrito nas subclasses |
| Quem decide o tipo | Um condicional sobre um parâmetro | A subclasse escolhida |
| Mecanismo | Sem herança de criadores | Herança |
| Novo tipo exige | Alterar o condicional da fábrica | Uma nova subclasse, sem alterar o existente |
| Origem | *Use a cabeça!*, não é padrão GoF | Padrão GoF |

Método estático de criação **não** é Factory Method, pois método estático não pode ser sobrescrito.

## Problema

Quando o `new` de classes concretas está espalhado pelo código, cada tipo novo obriga a mexer em vários lugares.

## Quando usar e quando evitar

- **Usar Simple Factory:** para concentrar em um único ponto a decisão de qual classe criar.
- **Usar Factory Method:** quando quem estende o sistema precisa trocar o objeto criado, mantendo a lógica que o usa.
- **Evitar Factory Method:** quando os criadores só existiriam para criar um produto. É uma subclasse a mais por tipo.

## Participantes (Factory Method)

| Papel | Responsabilidade |
|---|---|
| Produto | Interface comum |
| Produtos concretos | As implementações |
| Criador | Declara o método fábrica e contém a lógica que usa o produto |
| Criadores concretos | Sobrescrevem o método fábrica |

## Exemplo mínimo

```java
interface Documento {
    String abrir();
}

class DocumentoPdf implements Documento {
    @Override
    public String abrir() {
        return "abrindo PDF";
    }
}

class DocumentoTexto implements Documento {
    @Override
    public String abrir() {
        return "abrindo texto";
    }
}

// Factory Method: cada subclasse decide o produto.
abstract class Editor {
    protected abstract Documento criarDocumento();

    final String abrirNovo() {
        return "Editor: " + criarDocumento().abrir();
    }
}

class EditorPdf extends Editor {
    @Override
    protected Documento criarDocumento() {
        return new DocumentoPdf();
    }
}

// Simple Factory: um único ponto decide o tipo por condicional.
class FabricaDocumento {
    static Documento criar(String tipo) {
        if (tipo.equals("PDF")) {
            return new DocumentoPdf();
        }
        if (tipo.equals("TXT")) {
            return new DocumentoTexto();
        }
        throw new IllegalArgumentException("Tipo desconhecido: " + tipo);
    }
}

class Demo {
    public static void main(String[] args) {
        System.out.println(new EditorPdf().abrirNovo());
        System.out.println(FabricaDocumento.criar("TXT").abrir());

        try {
            FabricaDocumento.criar("XYZ");
        } catch (IllegalArgumentException erro) {
            System.out.println("Ignorado: " + erro.getMessage());
        }
    }
}
```

## Como identificar

Um método cria classes concretas, mas devolve um tipo abstrato ou interface. No Factory Method, ele também pode ser sobrescrito. O site cita `Calendar.getInstance()` e `NumberFormat.getInstance()` como exemplos, embora sejam métodos estáticos.

## Padrões parecidos

- **Template Method:** o Factory Method é uma especialização dele, em que a etapa adiada é a criação de um objeto.
- **Builder:** monta em etapas. A fábrica entrega o objeto em uma única chamada.
- **Prototype:** cria por cópia, sem herança de criadores.

## Pontos de atenção para o LogiTech

- O condicional da Simple Factory **compara código ou texto**. Isso só é permitido na **camada de entrada**, então a fábrica precisa estar lá, e o restante do sistema só recebe a abstração.
- Código desconhecido ou inválido não pode interromper o lote: quem chama a fábrica precisa tratar o caso, como no `try/catch` acima.
- Com Simple Factory, um modal ou perfil novo altera o condicional da fábrica. Comparar isso com a exigência de "classes novas, sem reescrever a lógica existente" e justificar a escolha no documento, porque a pergunta é provável na defesa.
- A página conceitual do site usa logística (caminhão e navio) como motivação. Isso não indica que o padrão seja o mais adequado para o nosso caso.
