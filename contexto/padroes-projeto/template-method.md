# Template Method

> **Fonte:** [conceito](https://refactoring.guru/pt-br/design-patterns/template-method) · [exemplo em Java](https://refactoring.guru/pt-br/design-patterns/template-method/java/example), Refactoring.Guru (acesso em 09/11/2026). Notas de estudo com palavras próprias; o exemplo abaixo não é o do site.

## Intenção

Definir o esqueleto de um algoritmo na superclasse, adiando etapas para as subclasses, sem que elas alterem a ordem geral.

## Problema

Várias classes têm algoritmos quase idênticos, com o código comum duplicado, e só algumas etapas realmente mudam.

## Quando usar e quando evitar

- **Usar:** quando várias classes seguem os mesmos passos, ou quando se quer permitir a extensão de partes do algoritmo, mantendo a estrutura.
- **Evitar:** quando as etapas variam de forma independente, porque a combinação por herança multiplica as subclasses, ou quando o comportamento precisa mudar durante a execução.
- **Custos:** o esqueleto limita as subclasses, e quanto mais etapas, mais difícil de manter. Uma subclasse que anula uma etapa padrão pode violar o princípio de substituição.

## Participantes

| Papel | Responsabilidade |
|---|---|
| Classe abstrata | Tem o método-modelo (`final`), que chama as etapas em ordem |
| Etapas abstratas | Obrigatórias nas subclasses |
| Etapas com corpo padrão | Opcionais |
| Gancho (*hook*) | Etapa opcional, em geral vazia, usada como ponto de extensão |
| Classes concretas | Implementam as etapas, sem tocar no método-modelo |

## Exemplo mínimo

```java
import java.util.ArrayList;
import java.util.List;

abstract class Exportador {
    final String exportar(List<String> linhas) {
        StringBuilder saida = new StringBuilder(cabecalho());
        for (String linha : linhas) {
            saida.append(formatarLinha(linha));
        }
        saida.append(rodape());
        return saida.toString();
    }

    protected abstract String cabecalho();

    protected abstract String formatarLinha(String linha);

    // Gancho: as subclasses sobrescrevem só se precisarem.
    protected String rodape() {
        return "";
    }
}

class ExportadorTexto extends Exportador {
    @Override
    protected String cabecalho() {
        return "RELATORIO\n";
    }

    @Override
    protected String formatarLinha(String linha) {
        return "- " + linha + "\n";
    }
}

class ExportadorHtml extends Exportador {
    @Override
    protected String cabecalho() {
        return "<ul>\n";
    }

    @Override
    protected String formatarLinha(String linha) {
        return "<li>" + linha + "</li>\n";
    }

    @Override
    protected String rodape() {
        return "</ul>\n";
    }
}

class Demo {
    public static void main(String[] args) {
        List<String> linhas = new ArrayList<>();
        linhas.add("primeira");
        linhas.add("segunda");

        System.out.print(new ExportadorTexto().exportar(linhas));
        System.out.print(new ExportadorHtml().exportar(linhas));
    }
}
```

## Como identificar

Um método da classe base chama, em sequência, métodos abstratos ou sobrescrevíveis. Na biblioteca padrão: os métodos não abstratos de `java.io.InputStream` e `java.util.AbstractList`.

## Padrões parecidos

- **Strategy:** é a comparação mais importante. O Template Method usa herança, atua na classe e é fixo. O Strategy usa composição, atua no objeto e pode ser trocado.
- **Factory Method:** é uma especialização do Template Method, em que a etapa adiada é a criação de um objeto.

## Pontos de atenção para o LogiTech

- O método-modelo fica em **um único ponto** e vale para todas as subclasses. Considerar essa propriedade ao analisar regras que precisam valer para todas as variantes.
- O site recomenda `final` no método-modelo, embora seu exemplo em Java não o declare. Aqui, declarar, para impedir que uma subclasse quebre a sequência.
- O Java só permite herdar de uma classe. Se a hierarquia já usa a herança para outra finalidade, avaliar como as duas se combinam.
