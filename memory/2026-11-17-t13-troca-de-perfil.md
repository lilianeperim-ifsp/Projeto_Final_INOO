---
data: 2026-11-17
autor: Murilo Leandro
assunto: T13, fluxo da troca de perfil (seção 6.2), e fechamento da inbox
---

## Resumo

- **Inbox e quadro:** a sessão começou com 5 recados pendentes na inbox do Murilo. Eram os avisos do Alexandre sobre
  os PRs #21, #22 e #23, todos pedindo `/sincronizar-quadro`.
  - A branch foi atualizada com a `dev` (`/atualizar-branch`, merge `0a34579`).
  - O `/sincronizar-quadro` das 10:07 (`s-202611171307`) não achou diferença: a rotina das 08:15 já tinha gravado os
    merges.
  - Os 5 recados foram fechados como `concluido`, e a nota da linha 69 de `docs/relatorio_ia_notas.md` (data
    2026-11-17 na divisão) foi completada com a correção do PR #23. Commit `eb16084`, enviado direto à `dev` pela
    exceção da inbox e da memória.
- **T13:** o Murilo pediu o plano, aprovou e o Claude escreveu a seção **6.2, Troca de perfil em tempo de execução**,
  em `docs/Documento_de_Projeto.md`. A seção traz:
  - um diagrama de sequência em três blocos: troca, valores atuais e simulação;
  - o passo a passo em 8 passos;
  - 4 decisões, cada uma com uma alternativa descartada;
  - um exemplo percorrido com a encomenda da 8.6;
  - casos de borda, eficiência e ganchos para os cenários de evolução.

  Também foram atualizadas a tabela de situação do topo e a nota do início da seção 6. O PDF foi gerado com
  `/documento`.
- **PR #24:** commit `91a99bb` na `logitech/murilolss` e PR #24 para a `dev`, com o Alexandre de reviewer. O T13 está
  em "Em PR" ligado ao #24, e o `/sincronizar-quadro` das 10:51 (`s-202611171351`) gravou o PR no quadro.

## Decisões tomadas

1. **A 6.2 não decide o mecanismo da rejeição do `trocarPerfil`.** Escreve só "aceita ou rejeita" e o efeito: quem
   pediu fica sabendo, o estado não muda e ninguém é avisado.
   - Por quê: o mecanismo é do Alexandre no T14. Ele aceitou isso no recado
     `inbox/ale/2026-11-14-de-murilo-operacao-rejeitada-no-t14.md`, e a 2.2 e a 8.6 já tratam a rejeição do mesmo
     jeito.
   - Descartado: propor `boolean` já na 6.2, o que anteciparia a decisão do T14.
2. **A simulação entra na 6.2,** como terceiro bloco do diagrama.
   - Por quê: é o mesmo cálculo da troca, e mostrar os dois juntos deixa claro que `simular` não toca no perfil
     vigente (RN 7, 8.6).
   - Descartado: deixar a simulação fora da 6.2, já que o ET 6 só pede a troca.
3. **As 4 decisões da 6.2,** cada uma com a alternativa descartada:
   - **A troca grava só o perfil, e não os valores** (item 21 da Livraria). Descartado: guardar um `ResultadoCalculo`
     no transporte, que seriam dois estados para manter iguais.
   - **Quem decide se a troca pode é o status,** com `permiteTrocaDePerfil()`. Descartado: o `Transporte` testar se o
     status é `Entregue`, o que a ET 3.2 proíbe e o CANCELADO quebraria.
   - **Troca e simulação não avisam ninguém** (RN 8). A troca aparece no aviso de `ENTREGUE` seguinte, que leva o CO₂
     do perfil vigente (2.1.4). Descartado: avisar na troca, o que exigiria uma terceira interface de interessado.
   - **A troca não cria um transporte novo** (ET 4). Descartado: recriar o transporte, que perderia o status, a
     posição e as assinaturas.
4. **O operador aparece como participante externo** no diagrama, porque é um ator descartado como classe na 1.2. No
   código, quem chama é um teste ou uma demonstração, e o `Transporte` recebe um objeto `Perfil`, nunca o código de
   texto.

## Erros e rejeições da IA

- **Contagem de linhas errada no `/documento`.** O Claude contou o tamanho do `docs/Documento_de_Projeto.md` com
  `Measure-Object -Line` no PowerShell, e o resultado foi 796 linhas. Esse comando ignora as linhas em branco: o
  arquivo tinha 961.
  - Como foi percebido: o próprio Claude percebeu ao ler o arquivo inteiro, porque a leitura indicou 961 linhas.
  - Correção: o número informado ao Murilo foi o certo (961), e o errado não chegou à resposta nem a nenhum arquivo.

## Pendências

- **PR #24 (T13):** espera a revisão do Alexandre.
  - Ele também pode conferir se a 6.2 bate com a 2.2.2 e a 2.2.3, que são dele.
  - Depois do merge, rodar `/sincronizar-quadro` para o T13 ir para "Concluído". A rotina agendada também faz isso.
- **T14 (Alexandre):** o mecanismo da rejeição em `Status` e `Transporte`. Quando sair, o passo 4 da 6.2 e os casos da
  8.5 a 8.7 ganham a forma exata da rejeição.
- **Diagrama da 6.2 no PDF:** o Claude não conseguiu ver o PDF, porque falta o `pdftoppm` na máquina. O Murilo abre o
  PDF e confere que o diagrama não saiu como caixa vermelha de erro.
- **Avisar o professor do JUnit 5:** continua pendente desde 14/11, antes do T21.
- **O `docs/Documento_de_Projeto.pdf`** continua sem commit na máquina do Murilo, como combinado.

## Próximos passos

- Acompanhar a revisão do PR #24 e fazer os ajustes que o Alexandre pedir.
- Próximos cartões do Murilo na Etapa 1:
  - T17 (cenários 9 a 12), que depende do T16 da Liliane;
  - T20 (revisão cruzada e entrega), que depende do T18 dela.

  Vale combinar com a Liliane, na inbox, os prazos do T16 e do T18, porque a entrega é em 27/11.
- No início da próxima sessão: `/atualizar-branch` (para trazer esta memória) e ler a inbox.
