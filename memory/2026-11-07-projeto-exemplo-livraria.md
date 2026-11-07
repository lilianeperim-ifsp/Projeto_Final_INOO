---
data: 2026-11-07
autor: Murilo Leandro
assunto: projeto de exemplo da Livraria (aulas 10 a 12)
---

## Resumo
O Murilo pediu a análise do projeto de exemplo da Livraria, que o professor desenvolve nas aulas 10 a 12 e o grupo usa como referência. A fonte é o `src.zip` em `Nunes\Aula10-09-10-2026\aula10`. O Claude leu os 18 `.java`, compilou e rodou os 4 `main` numa pasta temporária fora do repositório e escreveu `contexto/projeto-exemplo.md`. O arquivo traz estrutura de pacotes, diagrama de classes, explicação de cada classe, roteiros com a saída real, uma tabela de conceitos de aula e onde aparecem, o que reaproveitar e um checklist de 23 erros do exemplo que não podem se repetir no LogiTech. Tudo foi commitado na `logitech/murilolss` e foi aberto o PR #1 para a `dev` (reviewer `alexsant22`), junto com a regra dos 5 minutos registrada mais cedo na mesma sessão (`memory/2026-11-07-defesa-ao-vivo-5-minutos.md`).

## Decisões tomadas
- **Análise em `contexto/projeto-exemplo.md`, sem copiar o código para o repositório.** Por quê: o objetivo é ter uma referência de como o professor espera ver herança, classe abstrata, interface e polimorfismo; o zip continua sendo a fonte. Alternativa descartada: versionar o `src/` do exemplo dentro do repositório, o que misturaria código de outro projeto com o LogiTech.
- **Checklist de erros a não repetir como seção principal (seção 10).** Foi pedido pelo Murilo ao revisar o plano: o plano do Claude tinha só um resumo dos problemas. Cada linha traz onde está o erro no zip, o que acontece, a regra do LogiTech que ele viola e como fazer no LogiTech.
- **Bugs comprovados executando o código, não só pela leitura:**
  - o frete conta só o último livro físico (`frete =` em vez de `+=`);
  - a promoção conta desconto recusado;
  - o desconto acumula e o preço original se perde;
  - o getter devolve a lista interna;
  - `equals` lança `NullPointerException` com ISBN nulo;
  - `String.format` sem `Locale` imprime ponto em máquina com locale US.

  Por quê: no stress test a banca roda o código, então o grupo precisa saber como esses erros aparecem na saída.
- **Principais lições para a modelagem do LogiTech:**
  - polimorfismo em vez de `instanceof`: no exemplo, `calculaFrete()` está em `Livro` e não em `Produto`, por isso o carrinho precisa testar o tipo;
  - um único ponto para cada regra (o desconto está duplicado em 3 classes);
  - calcular a partir dos dados de entrada, sem gravar o resultado por cima. Isso ajuda nos cenários de troca e de simulação de perfil.
- **O arquivo fica visível pelo `CLAUDE.md`**, na tabela "Onde está o contexto", com a instrução de consultar o checklist antes de escrever ou revisar código, e pelo índice `contexto/slides/README.md`.
- **Uma memória e um PR para a sessão inteira:** esta memória entra no mesmo PR #1, para tudo ser aprovado de uma vez.

## Erros e rejeições da IA
- **Erro (documentação):** no diagrama de classes, o Claude escreveu os marcadores de método abstrato (`*`) e de `static` (`$`) antes do tipo de retorno (`+getTipo()* String`). No Mermaid, eles vão depois do tipo (`+getTipo() String*`). O próprio Claude percebeu ao revisar a sintaxe e corrigiu antes do commit.
- **Erro (processo):** no primeiro commit, que deveria ter só a regra dos 5 minutos, o Claude adicionou o `CLAUDE.md` inteiro, que já tinha as linhas do projeto de exemplo. O próprio Claude percebeu antes do push, desfez o commit (`git reset --soft`) e refez separando as mudanças.

Nenhum dos dois é erro de projeto de classes. O relatório ainda precisa de casos desse tipo, que devem surgir no Documento de Projeto.

## Pendências
- Aprovação e merge do PR #1 pelo Alexandre: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/1
- Conferir no GitHub se o diagrama Mermaid de `contexto/projeto-exemplo.md` renderiza (não foi validado localmente).
- Continuam em aberto: divisão de áreas entre os 3, formato do Documento de Projeto, configuração do JUnit.

## Próximos passos
1. Depois do merge, Liliane e Alexandre rodam `git pull origin dev` nas próprias branches e leem `contexto/projeto-exemplo.md`, principalmente a seção 10.
2. Usar o checklist da seção 10 e os 12 cenários de evolução (limite de 5 minutos) como critério na modelagem do Documento de Projeto da Etapa 1 (prazo 27/11).
