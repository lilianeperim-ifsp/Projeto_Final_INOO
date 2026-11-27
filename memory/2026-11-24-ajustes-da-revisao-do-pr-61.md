---
data: 2026-11-24
autor: Alexandre Santos
assunto: ajustes da revisão do PR 61 (T15, seção 7)
---

## Resumo

O Murilo revisou o PR #61 (T15, seção 7, cenários de evolução 1 a 4) e pediu mudanças, com um recado de prioridade
máxima em `inbox/ale/2026-11-24-de-murilo-ajustes-do-pr-61.md`. O Alexandre pediu os três ajustes obrigatórios e todas
as sugestões. Antes de editar, a branch recebeu a `dev` (`git pull origin dev`), que trouxe esse recado. As mudanças em
`docs/Documento_de_Projeto.md` foram enviadas no commit `46ffeac`, na `logitech/alexsant22`, e já aparecem no PR #61.
O recado foi fechado como `concluido` na `dev` (commit `3ac3e17`), com a seção "Resposta" listando o que foi feito.

O que mudou no documento:

- **Quadro de situação no topo:** a 6.3 passou a "Escrita", porque o PR #58 já foi mergeado. As linhas da seção 7
  ficaram antes da linha da 8.
- **Seção 8:** saiu a nota "A seção 7 (cenários de evolução, T16 e T17) entra antes desta."
- **Formato comum da seção 7:** a tabela ganhou "Decisões do cenário" e "Casos de borda" como campos opcionais, entre
  "Alteração ao vivo" e "Testes". Um parágrafo novo diz três coisas:
  - os dois campos aparecem só quando o cenário tem escolhas ou situações-limite próprias;
  - a alternativa descartada de uma decisão fica dentro da própria decisão;
  - o campo "Alternativa descartada" fica para a alternativa ao cenário como um todo.
- **7.1 (ferroviário):** a "Alteração ao vivo" ganhou o passo de compilar (Build Project, Ctrl+F9) e agora tem 6 passos.
  Entrou também uma nota "Atenção ao rodar no Windows":
  - o PowerShell (terminal do IntelliJ) não aceita o `<`;
  - o `Get-Content entrada.txt | java Main` troca os acentos por `?` no PowerShell 5.1;
  - as saídas seguras são o "Redirect input from" na configuração de execução do `Main` e o
    `cmd /c "java -cp <pasta das classes> Main < entrada.txt"`;
  - o comando exato fica no `COMO_EXECUTAR.md`, e a T18 confere se ele cabe nos 5 minutos.
- **7.2 (corporativo):**
  - os multiplicadores são fictícios e escolhidos na hora, como os do ferroviário;
  - no `EncomendaTest`, o valor esperado é uma conta feita à mão (o valor base do gabarito vezes o multiplicador),
    nunca copiada da saída do programa (8.1);
  - o campo extra "Se o corporativo mudar mais do que os multiplicadores" virou a decisão 1, no campo "Decisões do
    cenário", antes de "Testes".
- **7.4 (SMS por região):** entraram dois casos de borda e um teste (limites invertidos: 0 mensagens). As decisões dos
  dois casos estão na seção seguinte.
- **2.2.3:** "(para o T15 e o T16)" passou a "(para o T16)", porque o cenário CANCELADO é só da T16.

## Decisões tomadas

1. **Alerta assinado com o transporte já dentro da região (7.4).**
   - **Decisão:** o grupo aceita que o alerta mande o SMS na próxima posição, mesmo sem o transporte ter entrado. Quem
     monta o transporte assina o alerta antes de mover o transporte.
   - **Por quê:** o alerta só conhece as posições que recebe e começa "fora".
   - **Alternativa descartada:** o transporte avisar a posição atual no momento da assinatura. Isso altera o
     `Transporte`, o que a exigência do cenário 4 proíbe.
2. **Limites invertidos no construtor do alerta (7.4).**
   - **Decisão:** quem cria o alerta (os testes, 4.3) é responsável por passar mínimo ≤ máximo, como no caso da
     longitude 180. Com limites invertidos, o alerta nunca dispara, sem aviso.
   - **Alternativa descartada:** um `regiaoValida(...)` estático, chamado antes de criar, como `Posicao.posicaoValida`
     (validar antes de criar, 2.2.2). É coerente com o projeto, mas põe mais um método nos 5 minutos da defesa sem que
     a exigência peça. Entra junto com a classe `Regiao`, se ela surgir (decisão 2 da 7.4).
   - As duas decisões foram propostas pelo Claude, e o Alexandre autorizou o envio. O Murilo confere na nova revisão do
     PR #61.
3. **Rodar o lote no Windows (7.1).**
   - **Decisão:** a defesa usa o "Redirect input from" do IntelliJ ou o `cmd /c`, nunca o `<` direto no PowerShell.
   - **Por quê:** o PowerShell não aceita o `<`, e o `Get-Content | java` estraga os acentos.
   - **Pendente:** o comando exato fica para o `COMO_EXECUTAR.md` e a T18.
4. **Status do recado da inbox.** O recado do Murilo foi fechado como `concluido`, e não `respondido`. O
   `inbox/README.md` só tem `pendente`, `aceito`, `concluido` e `descartado`, e a tarefa pedida foi feita.

## Erros e rejeições da IA

- **Erro (processo):** no primeiro commit dos ajustes, a mensagem foi passada por here-string do PowerShell com aspas
  duplas, e o `git commit` e o `git push` foram encadeados com `;`.
  - No PowerShell 5.1, as aspas quebraram a mensagem em vários argumentos, e o commit falhou.
  - O `push` rodou mesmo assim e enviou só o merge da `dev` (`092737b`), sem dano, porque o merge trazia só arquivos de
    `inbox/` e `memory/`.
  - O próprio Claude percebeu pela saída e refez o commit com `git commit -F` lendo a mensagem de um arquivo
    (`46ffeac`), com o `push` condicionado a `if ($?)`.
  - Registrado em `docs/relatorio_ia_notas.md`.

## Pendências

- O Murilo revisar o PR #61 de novo e aprovar. O recado fechado na `dev` avisa que os ajustes estão no PR.
- **Afirmação não testada:** a nota da 7.1 diz que o `Get-Content | java` troca os acentos por `?` no PowerShell 5.1.
  Isso vem do conhecimento do Claude e não foi testado, porque ainda não há código. A T18 (Liliane) deve testar e
  fixar o comando no `COMO_EXECUTAR.md`.
- A T16 (Liliane) e a T17 (Murilo) devem seguir o formato comum da 7, com os campos opcionais novos.
- Depois do merge do PR #61, avisar o Murilo para rodar `/sincronizar-quadro`.

## Próximos passos

- No início da próxima sessão, rodar `git pull origin dev` para trazer a resposta do recado e esta memória para a
  `logitech/alexsant22`.
- Acompanhar a nova revisão do PR #61 e, se aprovado, fazer o merge na `dev`.
- Etapa 1 vence em 27/11: conferir o que falta da seção 7 (T16, T17 e T18) e o quadro de situação.
