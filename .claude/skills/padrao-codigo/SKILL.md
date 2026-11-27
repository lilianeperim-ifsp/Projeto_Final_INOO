---
name: padrao-codigo
description: Padrão de código do LogiTech, tirado dos slides do professor (contexto/slides/) e do projeto-exemplo da Livraria (contexto/projeto-exemplo.md). Use sempre, sem esperar pedido, antes de escrever, alterar ou revisar qualquer código Java do projeto (LogiTech/src ou LogiTech/test), inclusive testes, correções pequenas e cenários de evolução.
---

# Padrão de código do LogiTech

Todo código Java do projeto segue o estilo que o professor usou nos slides e evita os erros apontados no projeto-exemplo
da Livraria. Onde o enunciado do LogiTech é mais rígido que o código das aulas, vale o enunciado (ver "Onde o LogiTech é
mais rígido que as aulas").

## Antes de escrever

1. **Conferir o projeto.** A classe, os atributos e os métodos vêm do `docs/Documento_de_Projeto.md` (catálogo na
   seção 2.2, diagramas na 3, mecanismos na 4 e 5, fluxos na 6). Se o código precisar divergir do documento, parar,
   explicar ao usuário e anotar a mudança para a seção "Do projeto ao código" (regra 5 do `CLAUDE.md`).
2. **Ler o checklist** da seção 10 de `contexto/projeto-exemplo.md` (23 erros a não repetir).
3. **Usar só o que foi ensinado.** O índice do que cada aula ensinou está em `contexto/slides/README.md`. Recurso fora
   dos slides: perguntar antes de usar.
4. **Mudança estrutural** (classe, interface ou padrão novo): propor, justificar com uma alternativa descartada e
   esperar a aprovação do grupo (regra 3 do `CLAUDE.md`).

## Pacotes e MVC

**Pacote base:** `br.edu.ifsp.logitech` (domínio `ifsp.edu.br` invertido, tudo minúsculo, aula 6), na pasta
`LogiTech/src/br/edu/ifsp/logitech/`. Cada ponto do nome é uma pasta. A partir da base, o código segue o **MVC**:

| Pacote | Papel no MVC | Classes (catálogo da seção 2.2 do Documento) |
|---|---|---|
| `br.edu.ifsp.logitech` | ponto de entrada | `Main` |
| `...model.calculo` | Model | `Modal`, `Rodoviario`, `Aereo`, `Aquaviario`, `PerfilPorMultiplicadores`, `Economico`, `Rapido`, `Ecologico`, `ResultadoCalculo` |
| `...model.calculo.interfaces` | Model (contrato) | `Perfil` |
| `...model.transporte` | Model | `Encomenda`, `Transporte`, `Posicao` |
| `...model.status` | Model | `Status`, `Aguardando`, `EmTransito`, `Entregue` |
| `...model.aviso` | Model | `CentralDeControle`, `AuditoriaAmbiental`, `Cliente`, `Aviso` |
| `...model.aviso.interfaces` | Model (contrato) | `InteressadoEmStatus`, `InteressadoEmPosicao` |
| `...model.lote` | Model | `Rejeicao`, `Relatorio` |
| `...view` | View | `FormatadorDeSaida` |
| `...controller` | Controller | `ProcessadorDeLote`, `InterpretadorDeLinha`, `LinhaInterpretada`, `FabricaDeCodigos`, `CodigoDeModal`, `CodigoDePerfil` |

```
LogiTech/src/br/edu/ifsp/logitech/
├── Main.java
├── model/
│   ├── calculo/
│   │   ├── interfaces/
│   │   │   └── Perfil.java
│   │   ├── Modal.java                     (abstrata)
│   │   ├── Rodoviario.java, Aereo.java, Aquaviario.java
│   │   ├── PerfilPorMultiplicadores.java  (abstrata, implements Perfil)
│   │   ├── Economico.java, Rapido.java, Ecologico.java
│   │   └── ResultadoCalculo.java
│   ├── transporte/   Encomenda, Transporte, Posicao
│   ├── status/       Status (abstrata), Aguardando, EmTransito, Entregue
│   ├── aviso/
│   │   ├── interfaces/
│   │   │   ├── InteressadoEmStatus.java
│   │   │   └── InteressadoEmPosicao.java
│   │   ├── CentralDeControle.java, AuditoriaAmbiental.java, Cliente.java
│   │   └── Aviso.java
│   └── lote/         Rejeicao, Relatorio
├── view/             FormatadorDeSaida
└── controller/       ProcessadorDeLote, InterpretadorDeLinha, LinhaInterpretada,
                      FabricaDeCodigos, CodigoDeModal, CodigoDePerfil
```

(`...` = `br.edu.ifsp.logitech`. Os subpacotes do `model` repetem os grupos 2.2.1 a 2.2.5 do Documento, para quem
procura uma classe na defesa achar o pacote pelo número da seção.)

**Interfaces em subpacote próprio:** toda `interface` fica no subpacote `interfaces` do assunto a que pertence, como
o `produtos.interfaces` da Livraria do professor. As classes abstratas (`Modal`, `PerfilPorMultiplicadores`,
`Status`) **não** vão para lá: são classes e ficam ao lado das filhas. Interface nova segue a mesma regra (ex.: uma
interface de avisos por SMS entraria em `model.aviso.interfaces`).

- Quem implementa ou usa a interface faz o `import`: `PerfilPorMultiplicadores` importa
  `br.edu.ifsp.logitech.model.calculo.interfaces.Perfil`; `CentralDeControle`, `AuditoriaAmbiental` e `Cliente`
  importam as interfaces de `model.aviso.interfaces`.
- Alternativa descartada: um único `model.interfaces` com as três. Fica fácil de achar, mas separa o `Perfil` do
  cálculo e os interessados dos avisos, e mistura contratos de assuntos diferentes num pacote só.
- Alternativa descartada: interface no mesmo pacote das implementações. Dispensa `import`, mas foge do modelo da
  Livraria e deixa o contrato misturado às classes concretas.

**Sentido das dependências:**

- **Model** não importa nada de `view` nem de `controller`, não lê `System.in` e não escreve em `System.out`. É o
  núcleo de cálculo, rastreamento e avisos.
- **View** só transforma dados do model em texto (`FormatadorDeSaida`, com o único `String.format` em `pt-BR`). Não
  calcula e não decide nada.
- **Controller** é a camada de entrada: interpreta e valida a linha, traduz o código de texto em objeto (o **único**
  lugar onde comparar código de modal ou perfil é permitido) e coordena model e view.
- **`Main`** só lê `System.in` para uma `List<String>`, chama o `ProcessadorDeLote` e imprime o que ele devolve.

**Visibilidade entre pacotes (aula 6):** classe, construtor ou método usado em outro pacote precisa ser `public`. As
etapas `protected` de `Modal` e `PerfilPorMultiplicadores` continuam visíveis para as filhas, que ficam no mesmo
pacote. Sem modificador (visibilidade de pacote) só o que é usado dentro do próprio pacote.

**Caso novo na defesa:** o modal ou perfil novo entra em `model.calculo`. Como estende `Modal` ou
`PerfilPorMultiplicadores`, que estão no mesmo pacote, não precisa de `import`. A linha nova da fábrica entra em
`controller.FabricaDeCodigos`, com o `import` da classe nova.

**Testes:** pacote `br.edu.ifsp.logitech.testes`, na pasta `LogiTech/test/br/edu/ifsp/logitech/testes/` (separada do
`src`, como decidido no Documento 8.1, que hoje diz só `testes`).

**Execução com pacote:** compila-se o `src` com `javac -encoding UTF-8 -d out` e roda-se
`java -cp out br.edu.ifsp.logitech.Main < entrada.txt`. O comando exato fica no `docs/COMO_EXECUTAR.md`, que a banca
segue no stress test (ET 7 e 8.1).

## Regras de estilo (dos slides)

### Nomes

| O quê | Convenção | Exemplo | Aula |
|---|---|---|---|
| Classe e interface | `PascalCase`, arquivo com o mesmo nome da classe | `PerfilPorMultiplicadores` | 1, 2 |
| Método, atributo, variável, parâmetro | `camelCase` | `calculaFrete`, `pesoKg` | 1, 3 |
| Getter e setter | `get`/`set` + nome do atributo | `getValor()`, `setValor(double valor)` | 3 |
| Constante | `MAIUSCULAS_COM_UNDERSCORE`, `static final` | `LIMITE_CARGA_PESADA_KG` | 6 |
| Pacote | tudo minúsculo, a partir de `br.edu.ifsp.logitech` | `br.edu.ifsp.logitech.model.calculo` | 6 |

- Nome diz o significado, não copia o de outra classe (bug 6 do exemplo: `Revista.DESCONTO_MAXIMO_EBOOK`).
- Identificadores sem acento, em português, como nos slides.

### Formatação

- Indentação de 4 espaços; chave `{` na mesma linha da declaração.
- `if`, `for` e `while` **sempre com chaves**, mesmo com uma linha só, como em todos os slides.
- Ordem do arquivo: `package` → `import`s → declaração da classe (aula 6). Dentro da classe: constantes, atributos,
  construtores, métodos.
- Um `import` por classe usada (`import java.util.List;`), sem `import java.util.*;`.

### Encapsulamento (aula 3)

- **Todo atributo de instância é `private`.** Só constantes `public static final` ficam públicas.
- Getters e setters **só os necessários**: "get/set não é obrigação". Sem setter quando o valor não deve mudar por fora
  (o slide `retiraDoEstoque` não tem `setQuantidadeEmEstoque` de propósito).
- Operação que pode ser recusada devolve `boolean` (aula 3, `retiraDoEstoque`); quem chama **sempre** confere o retorno
  (bug 2).
- Getter de lista não expõe a lista interna: `Collections.unmodifiableList(lista)` ou `new ArrayList<>(lista)` (bug 7).

### `this` e construtores (aulas 2 e 4)

- Usar `this.atributo` ao acessar atributo, "boa prática mesmo quando não há ambiguidade" (aula 2).
- Dado obrigatório entra pelo construtor; `this(...)` para delegar a outro construtor, sempre na primeira linha.
- Sobrecarga só para operações intimamente relacionadas (aula 4, "cuidado com o exagero").

### Constantes e `static` (aula 6)

- Nenhum número mágico: todo valor fixo da regra de negócio vira constante `static final` com nome, declarada **uma
  vez** (o "0.3 de quê?" da aula 6).
- `static` não é variável global: nada de atributo `static` mutável no núcleo (aula 6 e bug 19). Pergunta-teste: "esse
  dado é do objeto ou da classe?".

### Herança, classe abstrata e interface (aulas 10, 11 e 12)

- **`@Override` em todo método sobrescrito ou implementado** ("opcional, mas vale sempre usar", aula 11).
- Filha chama `super(...)` no construtor e reaproveita a regra da mãe com `super.metodo()`, sem copiar a lógica.
- Classe `abstract` quando "não existe um qualquer" dela; método `abstract` quando cada filha tem resposta própria.
- Classe abstrata para base comum com estado e código; interface para capacidade de classes sem parentesco (aula 12).
- Em interface, os métodos são declarados sem `public abstract` (já são implícitos, como no slide de `Produto`); quem
  implementa declara `public`.
- Prefira composição a herança: herança só com "é um" de fato e comportamento a reaproveitar (aula 10).

### Polimorfismo (aulas 11 e 12)

- Variáveis, atributos, parâmetros e listas declarados pelo **tipo abstrato**: `Modal modal`, `List<Transporte>`,
  `public void adiciona(Produto produto)`.
- Lista: `List<Tipo> nome = new ArrayList<>();` e percorrida com enhanced-`for` (aulas 10 e 11).
- O método que o cliente precisa chamar fica **na abstração que o cliente usa** (bug 4).

### `toString` e `equals` (aula 11)

- `toString` **devolve** o texto; nunca imprime (bug 9).
- Texto se compara com `equals`, nunca com `==`.
- Só sobrescrever `equals` se o projeto precisar; se sobrescrever, sobrescrever `hashCode` também e cuidar do `null`
  (bugs 13 e 14).

### Esqueleto de referência (só estilo, não é modelagem)

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CarrinhoDeCompras {
    public static final int LIMITE_DE_ITENS = 50;

    private List<Produto> produtos = new ArrayList<>();

    public boolean adiciona(Produto produto) {
        if (this.produtos.size() >= LIMITE_DE_ITENS) {
            return false;
        }
        this.produtos.add(produto);
        return true;
    }

    public double getTotal() {
        double total = 0;
        for (Produto produto : this.produtos) {
            total += produto.getValor();
        }
        return total;
    }

    public List<Produto> getProdutos() {
        return Collections.unmodifiableList(this.produtos);
    }
}
```

O exemplo é da Livraria e por isso não tem `package`. No LogiTech, todo arquivo começa com o `package` da tabela
"Pacotes e MVC".

## Onde o LogiTech é mais rígido que as aulas

O código dos slides é didático. Nestes pontos, o LogiTech **não** segue o slide:

| Nos slides | No LogiTech | Por quê |
|---|---|---|
| `instanceof` e casting para escolher comportamento (aula 11, etapa 3; aula 12) | **proibido** fora da camada de entrada, assim como `switch` e comparação de código ou texto de modal/perfil | enunciado (ET 3.2); polimorfismo resolve |
| `instanceof` com padrão (Java 16+), citado como "curiosidade" | não usar | não foi ensinado (bug 17) |
| `String.format("R$ %.2f", valor)` sem `Locale` | `String.format(Locale.forLanguageTag("pt-BR"), "%.2f", valor)`, num único método de formatação | o resultado não pode depender da máquina da banca (bug 12) |
| setter que valida e imprime "Nome invalido" (aula 3, aula 6) | o domínio **não imprime nem lê**: devolve `boolean` ou o motivo da rejeição; só a camada de saída escreve e só a de entrada lê `System.in` | núcleo de cálculo não lê dados; relatório separado (bug 10) |
| desconto grava o valor novo por cima (`this.valor -= ...`) | dados de entrada imutáveis; frete, tempo e CO₂ **calculados** a cada pedido | trocar ou simular perfil sem perder o original (bug 21) |
| regra copiada em cada filha, só o limite muda | regra comum num **único ponto**; a filha só fornece o parâmetro (a sobretaxa de carga pesada vale para todos os modais) | enunciado; cenários 9 e 10 da defesa (bug 5) |
| "testes" com `main` + `println` (pacote `testes`) | JUnit 5 com asserção em `br.edu.ifsp.logitech.testes`, pasta `LogiTech/test` (Documento 8.1, a confirmar com o professor) | o gabarito é conferido automaticamente (bug 20) |
| `@FunctionalInterface`, `default` e `static` em interface | não usar sem necessidade | não são necessários ao projeto (`slides/README.md`) |
| um `main` por roteiro, no pacote `testes` | um único `public class Main` clássico, `public static void main(String[] args)`, em `br.edu.ifsp.logitech`, rodando pelo comando do `COMO_EXECUTAR.md` | enunciado; sem o `main` de instância nem `IO.println` do template do IntelliJ |

## Restrições do projeto (resumo do `CLAUDE.md`)

- Coleções: só `List`/`ArrayList` e arrays. **Proibido `enum`, `Map`/`HashMap`, `Set`.** Duplicata se evita com
  `List.contains` (como `adicionaCategoria` do exemplo).
- Sem `record`, streams, `Optional`, lambda.
- Modal, perfil e status são classes/interfaces. Novo modal ou perfil = classe nova, sem reescrever a lógica existente.
- Nenhuma exceção não tratada: linha inválida vira rejeição com motivo e o lote continua. `parseDouble` e `parseInt`
  ficam dentro de `try/catch (NumberFormatException e)` na camada de entrada (bug 15); `trim` e padronização dos campos
  uma vez só, na entrada (bug 22).
- Relatório em uma passagem O(n); acumulador soma com `+=` (bug 1).
- **Em aberto com o professor** (não usar até a resposta): `final` em método (Documento 2.1.1), `BigDecimal` com
  `RoundingMode.HALF_UP` (2.1.2) e JUnit (8.1).

## Testes

- Uma classe `...Test` por classe testada, no pacote `br.edu.ifsp.logitech.testes` (pasta
  `LogiTech/test/br/edu/ifsp/logitech/testes`).
- Todo acumulador testado com **2 ou mais itens** (bug 1); toda operação recusável com o `boolean` conferido e o efeito
  da recusa verificado (bug 2).
- Cada teste cria os próprios objetos e não depende da ordem (bug 19). Nenhum teste só imprime.
- Texto da saída comparado caractere a caractere com a `String` esperada (bug 11).

## Conferência antes de entregar o código

Rodar esta lista no código escrito e dizer ao usuário o resultado:

- [ ] Cada classe no pacote da tabela "Pacotes e MVC"; toda `interface` no subpacote `interfaces` do seu assunto; o
      `model` não importa `view` nem `controller`.
- [ ] Todos os atributos de instância `private`; getters de lista protegidos.
- [ ] `@Override` em toda sobrescrita e implementação.
- [ ] Nenhum `instanceof`, `switch` ou comparação de código/texto de modal ou perfil fora da camada de entrada.
- [ ] Nenhum `enum`, `Map`, `Set`, `record`, stream, `Optional`, lambda.
- [ ] Nenhum número mágico; constantes `static final` com nome, num lugar só.
- [ ] Nenhum `System.out`/`System.in` no núcleo; `toString` não imprime.
- [ ] Números de saída formatados com `Locale.forLanguageTag("pt-BR")`, pelo método único de formatação.
- [ ] Todo `boolean` de validação conferido; nenhuma exceção escapa.
- [ ] Acumuladores com `+=`; nenhum resultado gravado por cima dos dados de entrada.
- [ ] Nomes na convenção (tabela "Nomes") e coerentes com o Documento de Projeto.
- [ ] Testes cobrindo o que mudou, com asserção.

Se o Claude errar uma dessas regras e o grupo perceber, anotar o caso em `docs/relatorio_ia_notas.md` (regra 4 do
`CLAUDE.md`).
