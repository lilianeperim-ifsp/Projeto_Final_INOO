# Slides das aulas

Um arquivo `.md` por PDF de `contexto/pdfs/`, gerado automaticamente: rodapés e sumários foram removidos, e o código está em blocos ```java. Figuras e diagramas não são extraídos. Se algo parecer truncado, consulte o PDF original.

**As aulas 7, 8 e 9 não foram fornecidas**, então o que elas ensinaram não está aqui e não deve ser presumido.

## Índice

| Aula | Tema | Arquivo | PDF |
|---|---|---|---|
| 1 | JDK/JRE/JVM, `javac`/`java`, `main`, args, IntelliJ | [aula_01.md](aula_01.md) | `aula_1_slides.pdf` |
| 2 | Tipos primitivos, casting, `if`/`else`, ternário, `while`, `for`, `break`/`continue`; classe x objeto, métodos, `this`, `return`, composição, referência e `==` | [aula_02.md](aula_02.md) | `aula_2_slides.pdf` |
| 3 | `private`/`default`/`protected`/`public`, encapsulamento, getters e setters (setter pode validar) | [aula_03.md](aula_03.md) | `aula_3_slides.pdf` |
| 4 | Construtores, sobrecarga, `this(...)`, valores default | [aula_04.md](aula_04.md) | `aula_4_slides.pdf` |
| 5 | Arrays (tamanho fixo, `length`, `for` e enhanced-`for`, `ArrayIndexOutOfBoundsException`) | [aula_05.md](aula_05.md) | `aula_5_slides.pdf` |
| 6 | Pacotes e `import`, visibilidade entre pacotes, `final`, `static final`, atributos e métodos `static` | [aula_06.md](aula_06.md) | `aula_6_slides.pdf` |
| 7–9 | *Não fornecidas* | — | — |
| 10 | Composição ("tem um") x herança ("é um"), `extends`, `super(...)`, ordem dos construtores | [aula_10.md](aula_10.md) | `aula_10_slides.pdf` |
| 11 | Sobrescrita, `@Override`, `toString`, `equals` x `==`, polimorfismo, `instanceof` e casting, `abstract` | [aula_11.md](aula_11.md) | `aula_11_slides.pdf` |
| 12 | `interface`, `implements` múltiplo, interface como tipo, `default`/`static`/`private` em interface, interface funcional | [aula_12.md](aula_12.md) | `aula_12_slides.pdf` |

## Resumo do que foi ensinado

Síntese feita a partir dos slides, para apoiar a regra do enunciado de usar só o que foi ensinado em sala.

### Lacuna: aulas 7, 8 e 9

Não foram fornecidos os slides. O que se sabe, só por indício dos slides que existem:
- A aula 6 anuncia "Revisão geral e Prova 1" para a semana 7.
- A aula 10 diz que, "na aula 09", a classe `Livro` já usava `LocalDate` e `List<Livro> ... = new ArrayList<>()` (em `Catalogo` e `CarrinhoDeCompras`). Ou seja, `List`/`ArrayList` e `LocalDate` foram vistos entre as aulas 8 e 9.
- Nada além disso deve ser presumido (exceções, `Scanner`, `String.format`, `Math`, `BigDecimal` etc. não aparecem explicados nos slides disponíveis).

### Coleções

- **Permitido pelo projeto:** arrays e `List`/`ArrayList` (a aula 5 ensina arrays; `List`/`ArrayList` aparecem usados a partir da aula 10).
- **Proibido pelo projeto** (confirmado pelo grupo): `enum`, `Map`, `Set`.

### Atenção a conflitos com as regras do LogiTech

- `instanceof` e casting **foram ensinados** (aulas 11 e 12), mas o enunciado **proíbe** usá-los para descobrir qual modal ou perfil está em uso. A aula 12 termina perguntando se dá para fazer sem perguntar o tipo; a resposta do projeto é polimorfismo.
- Os slides citam `instanceof` com padrão (Java 16+), sinalizado como "curiosidade". Não foi ensinado, então evitar.
- Interfaces funcionais e `default` em interface foram apresentadas na aula 12, mas não são necessárias ao projeto.
