# Aula 01 — Ambientação Java: JDK/IntelliJ, primeiro programa, compilação e JVM

Fonte: `contexto/pdfs/aula_1_slides.pdf`. Texto gerado automaticamente a partir do PDF: rodapés e sumário removidos, código em blocos ```java. Figuras e diagramas não são extraídos; se algo parecer truncado, consulte o PDF.

Índice de todas as aulas e resumo do que foi ensinado: [README.md](README.md).

## Sobre a disciplina

- Introdução à Orientação a Objetos usando Java
- 17 semanas, projeto incremental construído semana a semana
- Duas provas + apresentação final do projeto
- Hoje: primeiro contato com a linguagem

## Por que Java?

- Uma das linguagens mais usadas no mercado
- Multiplataforma: “escreva uma vez, rode em qualquer lugar”
- Base sólida para aprender orientação a objetos
- Usada em sistemas corporativos, Android, backend web

## JDK, JRE e JVM

- JVM (Java Virtual Machine): máquina virtual que executa o bytecode
- JRE (Java Runtime Environment): JVM + bibliotecas necessárias para executar programas Java
- JDK (Java Development Kit): JRE + ferramentas para desenvolver (compilador javac, entre outras)
- JDK ⊃ JRE ⊃ JVM

## Do código-fonte à execução

- .java −j−av−a→c .class (bytecode) −j−a−v→a execução na JVM javac: compilador, traduz código-fonte em bytecode
- .class: arquivo com bytecode, independente de sistema operacional java: inicia a JVM, que interpreta/executa o bytecode

## Convenções básicas

- Nome da classe começa com letra maiúscula
- Palavras seguintes também iniciam maiúsculas: CamelCase
- Arquivo .java deve ter o mesmo nome da classe pública que contém
- Chaves {} delimitam o escopo da classe/método
- Toda instrução termina com ;
- Java é case sensitive: System ̸= system

## O método main

- Ponto de entrada de um programa Java:
```java
public static void main(String[] args) {
  // seu codigo aqui
}
```
- A JVM procura pelo método main dentro da classe executada
- String[] args: argumentos passados na linha de comando

## Meu primeiro programa

```java
class MeuPrimeiroPrograma {
  public static void main(String[] args) {
     System.out.println("O primeiro de muitos!");
  }
}
```
- Salvar como MeuPrimeiroPrograma.java

## Compilando e executando pelo terminal

1. $ javac MeuPrimeiroPrograma.java
2. $ java MeuPrimeiroPrograma
3. O primeiro de muitos!
- javac gera MeuPrimeiroPrograma.class java executa passando o nome da classe, sem extensão

## Erro de compilação

- Esquecer o ;:
- 1 System.out.println("sem ponto e virgula")
- Resultado:
- 1 Syntax error , insert ";" to complete BlockStatements
- Erros de compilação são normais, faz parte do aprendizado
- Ler a mensagem com atenção resolve a maioria dos casos

## Usando argumentos (args)

```java
class MeuPrimeiroPrograma {
  public static void main(String[] args) {
     System.out.println("Escrito em " + args[0]
     + " por " + args[1] + "!");
  }
}
$ java MeuPrimeiroPrograma Java Rodrigo
Escrito em Java por Rodrigo!
```

## Por que uma IDE?

- Editor de texto + terminal funciona, mas é trabalhoso
- IDE (Integrated Development Environment) oferece:
- syntax highlight code completion compilação automática (feedback imediato de erro)
- execução com um clique
- Usaremos o IntelliJ IDEA Community (gratuito)

## Criando um projeto no IntelliJ

1. New Project
2. Selecionar o JDK instalado na máquina
3. Nomear o projeto (ex: livraria)
4. Estrutura criada: pasta src (código-fonte)

## Criando a primeira classe

1. Botão direito em src → New → Java Class
2. Nomear: MeuPrimeiroPrograma
3. Dentro da classe, digitar main + Tab (code completion)
4. Dentro do main, digitar sout + Tab
5. Executar: Shift+F10 (ou clique direito → Run)

## O problema

- Pasta do projeto IntelliJ contém .idea/ e *.iml
- Esses arquivos guardam o caminho e a versão do SDK da máquina do laboratório
- Em outra máquina: SDK em outro caminho, ou versão diferente
- Resultado comum: "SDK not configured" ou projeto não abre corretamente

## A solução: levar só a pasta src

- Copiar apenas a pasta src (arquivos .java puros)
- Nenhum metadado de IDE viaja junto
- Em qualquer máquina com IntelliJ + JDK instalado, o código funciona

## Reabrindo em outra máquina

1. New Project → escolher o JDK instalado localmente
2. Preferir um JDK LTS recente (ex: 17 ou 21)
3. Copiar os arquivos .java trazidos para dentro da pasta src do novo projeto
4. Se necessário: botão direito em src → Mark Directory as → Sources Root
5. Executar normalmente

## Resumo da aula

- JDK / JRE / JVM e o papel de cada um
- Ciclo .java → javac → .class → java
- Convenções básicas de nomenclatura e sintaxe
- Primeiro programa: terminal e IntelliJ
- Como levar o projeto para casa sem conflito de SDK

## Próxima aula

- Tipos primitivos, variáveis e operadores
