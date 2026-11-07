# Aula 05 — Arrays (arranjos)

Fonte: `contexto/pdfs/aula_5_slides.pdf`. Texto gerado automaticamente a partir do PDF: rodapés e sumário removidos, código em blocos ```java. Figuras e diagramas não são extraídos; se algo parecer truncado, consulte o PDF.

Índice de todas as aulas e resumo do que foi ensinado: [README.md](README.md).

## Revisão da aula anterior

- Construtor: mesmo nome da classe, sem retorno, executado no new
- Construtor com parâmetro obriga dependências na criação do objeto
- Sobrecarga: mesmo nome, listas de parâmetros diferentes this() delega para outro construtor, sempre na primeira linha
- Nosso projeto: Livro, Autor, Produto e CadastroDeLivros já encapsulados e com construtores.

## Uma nova classe: o carrinho de compras

- O cliente da livraria vai comprar vários livros de uma vez. Precisamos guardar todos eles.
```java
public class CarrinhoDeCompras {
  private double total;
  private Livro livro1;
  private Livro livro2;
  private Livro livro3;
  private Livro livro4;
}
```
- Quantos livros cabem nesse carrinho?
- E se o cliente comprar uma coleção inteira?

## O método adiciona vira uma escada

```java
public void adiciona(Livro livro) {
    if (this.livro1 == null) {
       this.livro1 = livro;
    } else if (this.livro2 == null) {
       this.livro2 = livro;
    } else if (this.livro3 == null) {
       this.livro3 = livro;
    } else if (this.livro4 == null) {
       this.livro4 = livro;
   } else {
      System.out.println("Nao tem mais espaco");
      return;
   }
   this.total += livro.getValor();
}
```

## E para mostrar os livros do carrinho?

- Seriam os mesmos ifs outra vez, agora para imprimir
- E de novo para calcular, de novo para remover, de novo para procurar...
- Cada livro a mais no carrinho = mais um atributo e mais um if em cada método
- Esse código é quase impossível de manter.

## Uma dívida da aula 01

```java
public static void main(String[] args) {
}
```
- Você digita isso desde a primeira aula
- Na aula 01 dissemos apenas: “args guarda os argumentos da linha de comando”
- E ficou faltando explicar aqueles colchetes
- String[] é um array. Hoje a dívida é paga.

## Hoje

- O que é um array e como criá-lo
- Guardando muitos objetos em um único atributo
- Percorrendo: for com índice e enhanced-for length, índices e o famoso ArrayIndexOutOfBoundsException
- Onde o array não ajuda — e o que vem depois

## Declarando um array

- Basta acrescentar [] depois do tipo:
```java
Livro livro;     // uma referencia para um livro
Livro[] livros;  // uma referencia para varios livros
```
- Livro[] é lido como “array de Livro”
- Funciona com qualquer tipo: int[], double[], String[], Produto[]
- Um array guarda elementos de um único tipo

## Um array é um objeto

- Declarar não basta — como todo objeto, o array precisa ser criado com new:
- 1 Livro[] livros = new Livro [10];
- Repare na sintaxe: o tamanho vai entre os colchetes
- Criamos aqui um array de 10 posições
- Antes do new, a variável livros vale null — como qualquer referência

## O tamanho é obrigatório e definitivo

```java
Livro[] livros = new Livro[];  // NAO COMPILA: falta o tamanho
Livro[] livros = new Livro [10]; // ok
```
- Ao criar um array, você é obrigado a informar quantas posições ele terá
- E esse tamanho não muda depois. Nunca.
- Encheu as 10 posições? Não existe “adicionar a 11a”
- Guarde essa limitação — voltaremos a ela no fim da aula.

## Os índices começam em zero

- [0] [1] [2] [3] . . . [9]
- Os índices vão de 0 até tamanho − 1
- Um array de 10 posições vai de 0 a 9
- A posição 1 é a segunda posição, não a primeira
- Não existe a posição 10 nesse array — e tentar acessá-la quebra o programa

## As posições nascem vazias

- Ao criar o array, todas as posições recebem o valor padrão do tipo:
```text
Tipo do array                    Cada posição começa com
int[], long[]                    0
double[]                         0.0
boolean[]                        false
Livro[], String[]                null
```
- É a mesma tabela de valores padrão da aula 04 new Livro[10] cria o array, mas não cria nenhum livro

## Lendo e escrevendo posições

```java
Livro[] livros = new Livro [10];

livros[0] = new Livro(autor); // escreve na primeira posicao
livros[1] = new Livro(autor); // escreve na segunda

System.out.println(livros [0]. getValor()); // le a primeira
System.out.println(livros[5]);    // null: ninguem escreveu ainda
```
- Mesma sintaxe dos dois lados: array[indice]
- Cuidado ao ler uma posição null e chamar um método nela

## Quatro atributos viram um

```java
public class CarrinhoDeCompras {
  private double total;
  private Livro[] livros = new Livro [10];

  public void adiciona(Livro livro) {
     // precisamos adicionar no array
  }
}
```
- Sumiram livro1, livro2, livro3 e livro4
- O carrinho está limitado a 10 livros — uma decisão nossa, não uma imposição

## Primeira tentativa

```java
public void adiciona(Livro livro) {
  System.out.println("Adicionando: " + livro);
  this.livros[1] = livro;
  this.total += livro.getValor();
}
```
- Compila, executa e o total sai certo
- Mas todos os livros vão para a mesma posição
- Cada um sobrescreve o anterior: no fim, o carrinho tem um livro

## E se quem chama informar a posição?

```java
public void adiciona(Livro livro , int indice) {
  this.livros[indice] = livro;
  this.total += livro.getValor();
}
carrinho.adiciona(livro1 , 0);     // apagou o livro1!
carrinho.adiciona(livro2 , 0);
```
- Deixar esse controle na mão de quem chama o método é arriscado
- É o mesmo raciocínio do encapsulamento: a classe deve cuidar das próprias regras

## A solução: um contador

```java
public class CarrinhoDeCompras {
    private double total;
    private Livro[] livros = new Livro [10];
    private int contador = 0;

    public void adiciona(Livro livro) {
       System.out.println("Adicionando: " + livro);
       this.livros[contador] = livro;
       this . contador ++;
      this.total += livro.getValor();
   }

   public double getTotal() {
      return this.total;
   }
}
```

## Por que o contador funciona

```text
Chamada                          Escreve em  contador depois
livros[0]   1
1a adiciona                      livros[1]   2
2a adiciona                      livros[2]   3
```
- 3a adiciona
- O contador guarda a próxima posição livre
- Ele começa em 0, que é justamente o primeiro índice válido
- E também nos diz quantos livros já foram adicionados

## Ainda deixamos passar uma coisa

- O array tem 10 posições e o contador só cresce
- Na 11a chamada de adiciona, ele tenta escrever em livros[10]
- Essa posição não existe
- O que acontece? Vamos provocar o erro no próximo bloco.

## length: o tamanho do array

```java
Livro[] livros = new Livro [10];    // 10
System.out.println(livros.length);
```
- length devolve o tamanho do array, não a quantidade de posições preenchidas
- No nosso carrinho com 3 livros, livros.length continua valendo 10
- Quantos livros existem de verdade? Isso quem sabe é o contador

## Atenção: length x length()

1. livros.length  // ARRAY: atributo , sem parenteses
2. nome.length()  // STRING: metodo , com parenteses
- Escrita  O que é
- Array livros.length atributo
- String nome.length() método
- Trocar um pelo outro é erro de compilação — e é um dos mais comuns da linguagem.

## Percorrendo com for

```java
public void mostrarItens() {
  for (int i = 0; i < this.livros.length; i++) {
     Livro livro = this.livros[i];
     if (livro != null) {
        System . out . println ( livro . getValor () );
     }
  }
}
```
- i começa em 0, o primeiro índice
- A condição é i < length, e não i <= length

## O erro clássico

```java
for (int i = 0; i <= this.livros.length; i++) {
  System . out . println ( this . livros [i ]) ;
}
```
- Com <=, o i chega a 10 em um array de tamanho 10
- Mas os índices válidos vão só até 9
- O programa compila — e quebra na execução
- Erro de compilação o compilador acha. Esse aqui só aparece rodando.

## Lendo a stacktrace

1. Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException:
2. Index 10 out of bounds for length 10
3. at CarrinhoDeCompras.mostrarItens(CarrinhoDeCompras.java:24)
4. at TesteCarrinho.main(TesteCarrinho.java:12)
- Primeira linha: o nome do problema e o índice que estourou (10)
- Demais linhas: a classe, o método e a linha exata onde ocorreu
- Leia sempre de cima para baixo: o erro está no topo
- Parece assustador, mas a stacktrace está te entregando o endereço do problema.

## O enhanced-for (Java 5)

```java
for (Livro livro : this.livros) {
  if (livro != null) {
     System . out . println ( livro . getValor () );
  }
}
```
- Leia como: “para cada Livro livro dentro de livros”.
- Sem índice, sem length, sem i++
- Sem chance de escrever <= e estourar o array

## Qual dos dois usar?

```text
Preciso do índice                for clássico
```
- Preciso escrever nas posições for clássico
- Só quero ler os elementos enhanced-for
- O enhanced-for é mais curto e mais seguro — prefira quando der
- Ele não serve para trocar o conteúdo das posições do array
- Também funciona com outras estruturas, que veremos na aula 09

## Cuidado com as posições vazias

```java
Livro[] livros = new Livro [10];
livros[0] = new Livro(autor);

for (Livro livro : livros) {
  System . out . println ( livro . getValor () );  // quebra na segunda volta
}
```
- O array tem 10 posições, mas só 1 livro
- Nas outras 9, livro vale null — e null não tem getValor()
- Por isso o if (livro != null) aparece em todos os exemplos

## Criando o array já preenchido

```java
int[] notas = {7, 8, 10, 6};
String[] nomes = {"Maria", "Joao", "Ana"};
```
- Não escrevemos new, nem o tamanho
- O tamanho é deduzido pela quantidade de elementos: notas.length vale 4
- Muito útil para valores fixos e conhecidos

## Fora da declaração, o new volta

```java
int[] notas;
notas = {7, 8, 10, 6};         // NAO COMPILA
notas = new int[]{7, 8, 10, 6}; // ok
```
- A forma curta só vale na mesma linha da declaração
- Nos demais casos, escreva new int[]{...} — sem o tamanho entre colchetes

## Uma sintaxe alternativa (que você não deve usar)

```java
int[] notas;  // recomendado: o tipo e "array de int"
int notas[];  // tambem compila , herdado do C
```
- As duas formas fazem exatamente a mesma coisa
- A primeira deixa claro que o tipo da variável é “array de int”
- Mostramos a segunda só para você conseguir ler código dos outros

## Array é uma referência

```java
int[] a = {1, 2, 3};           // 99 !
int[] b = a;

b[0] = 99;

System.out.println(a[0]);
```
- A atribuição não copia o array a e b são dois nomes para o mesmo objeto na memória
- Alterar por um nome altera para o outro

## Por que isso importa

- É o mesmo comportamento de qualquer objeto, desde a aula 02
- Um getLivros() que devolve o array deixa quem chamou mexer no array de dentro do carrinho
- Encapsulamento não é só private: é também não entregar suas estruturas internas
- Um array private devolvido por um getter não é mais privado.

## Arrays de duas dimensões (leitura complementar)

```java
int[][] matriz = new int [3][4]; // 3 linhas , 4 colunas

matriz [0][1] = 5;

for (int i = 0; i < matriz.length; i++) {
    for (int j = 0; j < matriz[i].length; j++) {
       System.out.print(matriz[i][j] + " ");
    }
    System . out . println () ;
}
```
- Um array de duas dimensões é, na verdade, um array de arrays
- Por isso matriz.length é o número de linhas e matriz[i].length, o de colunas
- Conteúdo de leitura: não será cobrado na lista nem na prova.

## Limitação 1: o tamanho é fixo

- Nosso carrinho aceita 10 livros. O 11o não entra.
- Aumentar significa criar um array maior e copiar tudo na mão
- Escolher um tamanho grande “por garantia” desperdiça memória
- Quantos livros um cliente vai comprar? Ninguém sabe na hora de escrever o código.

## Limitação 2: remover deixa buraco

- 1 livros[1] = null; // removi o segundo livro livro A null livro C null
- O array não “fecha” o espaço sozinho
- Ou você convive com buracos, ou move todos os elementos seguintes na mão
- E o contador passa a mentir sobre a próxima posição livre

## Limitação 3: o controle é todo manual

- Você escreve o contador
- Você verifica se ainda cabe
- Você testa null em cada volta do laço
- Você move os elementos ao remover
- Todo esse controle é código repetido em toda classe que guarda coleções.
- E código repetido é lugar onde bug mora.

## Então por que aprender array?

- É a estrutura mais básica: tudo o que vem depois é construído sobre ela
- Aparece na API o tempo todo — a começar pelo String[] args
- É rápido e direto quando o tamanho é conhecido e fixo
- A solução para as três limitações se chama List.
- Ela chega na aula 09 — e é construída sobre arrays.

## Um estoque de produtos

- Retomando a Produto das aulas anteriores:
```java
public class Produto {
  private String nome;
  private double preco;

  public Produto(String nome , double preco) { ... }
  public String getNome() { ... }
  public double getPreco() { ... }
}
```
- Crie a classe EstoqueDeProdutos:
1. um array de 5 produtos, um contador e o método adiciona(Produto)
2. getValorTotal(), somando o preço de todos, com enhanced-for
3. getProdutoMaisCaro(), devolvendo o produto de maior preço
4. chame adiciona seis vezes e explique o que acontece

## Solução — a classe e o adiciona

```java
public class EstoqueDeProdutos {
    private Produto[] produtos = new Produto [5];
    private int contador = 0;
    public void adiciona(Produto produto) {
       this.produtos[contador] = produto;
       this . contador ++;
    }
    public double getValorTotal() {
       double total = 0;
      for (Produto produto : this.produtos) {
         if (produto != null) {
            total += produto.getPreco();
         }
      }
      return total;
   }
}
```

## Solução — o produto mais caro

```java
public Produto getProdutoMaisCaro () {
    Produto maisCaro = null;
    for (Produto produto : this.produtos) {
       if (produto == null) {
          continue;
       }
       if (maisCaro == null || produto.getPreco() > maisCaro.getPreco()) {
          maisCaro = produto;
       }
   }
   return maisCaro;
}
```
- Começar com null evita chutar um “preço mínimo” errado
- Estoque vazio devolve null — e quem chamar precisa tratar isso

## Solução — o item 4 era uma armadilha

1. Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException:
2. Index 5 out of bounds for length 5
3. at EstoqueDeProdutos.adiciona(EstoqueDeProdutos.java:7)
4. at TesteEstoque.main(TesteEstoque.java:15)
- Na sexta chamada, contador vale 5 — e o array vai de 0 a 4
- É exatamente o problema que deixamos em aberto no CarrinhoDeCompras
- Correção possível: testar if (contador < produtos.length) antes de escrever

## Resumo da aula

- Array guarda vários elementos do mesmo tipo em uma única variável
- É um objeto: precisa de new e de um tamanho — que nunca muda
- Índices vão de 0 a length - 1; as posições nascem null ou zeradas length é atributo do array; length() é método da String enhanced-for para ler, for com índice quando o índice importa
- ArrayIndexOutOfBoundsException: leia a stacktrace, ela dá o endereço
- Tamanho fixo e controle manual são as fronteiras do array

## Próxima aula

- Pacotes, constantes e membros estáticos
- Nosso projeto vai deixar de ser um monte de arquivos soltos
- Vamos entender de vez os modificadores default e protected
- Atenção: a Prova 1 é na semana 7.
- Tarefa: lista de exercícios da aula 05.
