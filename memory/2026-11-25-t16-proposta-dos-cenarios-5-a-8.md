---
data: 2026-11-25
autor: lilianeperim-ifsp
assunto: T16, proposta dos cenários de evolução 5 a 8 (seção 7.5 a 7.8)
---

## Resumo
A Liliane rodou `/atualizar-branch`: a `logitech/lilianeperim-ifsp` avançou por fast-forward até `8316cc9`, trazendo da
`dev` a seção 7 da T15 (cenários 1 a 4, PR #61 mergeado), as memórias de 23 e 24/11 e recados novos. A branch está 42
commits à frente da `origin/logitech/lilianeperim-ifsp` (ainda sem push). Inbox: nenhum recado de prioridade máxima
pendente; continuam abertos `inbox/liliane/2026-11-22-de-murilo-pendencias-da-etapa-1.md` (pendente) e
`inbox/liliane/2026-11-17-de-murilo-novos-cartoes-da-etapa-1.md` (aceito).

Começou a T16. O Claude leu a seção 7 (formato comum definido na T15), os ganchos do fim da 6.1, 6.2 e 6.3, o catálogo
(2.2) e as seções 4 e 5, e apresentou uma proposta para as subseções 7.5 a 7.8, ainda **não escrita** no
`docs/Documento_de_Projeto.md`, à espera da aprovação da Liliane.

## Decisões tomadas
Nenhuma aprovada ainda. A proposta apresentada, para aprovar na próxima sessão:

- **7.5 Simulação:** nenhuma classe criada nem alterada; já é `Transporte.simular(perfil)` (6.2, bloco 3), que chama
  `encomenda.calcular(outro)` sem mexer no perfil vigente (Strategy). Permitida em qualquer status, inclusive `ENTREGUE`
  e `CANCELADO`. Alternativa descartada: copiar o transporte, trocar o perfil na cópia e calcular (duplica estado, pode
  gerar avisos).
- **7.6 Configuração externa (a única escolha nova):** um arquivo (ex.: `modais.txt`) com linhas
  `codigoExterno;CODIGO_CONHECIDO` (ex.: `RODO;RODOVIARIO`). O `Main` lê o arquivo para uma `List<String>`, e a
  `FabricaDeCodigos` acrescenta à lista única um par novo com o mesmo `Modal` do código conhecido. Sem o arquivo, tudo
  funciona como hoje (gabarito intacto). Alteradas: `Main` e `FabricaDeCodigos`, só a camada de entrada. Alternativas
  descartadas: a configuração substituir os códigos fixos (sem o arquivo o gabarito quebra, e passa de 5 minutos);
  `Class.forName` (reflexão, fora das aulas).
- **7.7 CANCELADO:** organiza no formato o que a 2.2.3 e a 6.3 já decidiram. Cria `Cancelado extends Status`
  (`permiteTrocaDePerfil()` = não, `getNome()`); altera `Status` (`cancelar()` devolve `this`), `Aguardando` e
  `EmTransito` (devolvem `new Cancelado()`) e `Transporte` (`cancelar()` de uma linha com `aplicarTransicao`).
  `AuditoriaAmbiental` não muda: herda `contaParaAuditoria()` = não. Ponto novo proposto: a posição continua podendo
  mudar depois do `CANCELADO` (RN 7), porque a exigência só proíbe transição e troca de perfil.
- **7.8 Troca de assinatura:** nenhuma classe criada nem alterada; `removerInteressadoEmStatus(cliente)` e
  `adicionarInteressadoEmStatus(outro)`. Quem se remove dentro do `statusMudou` ainda recebe o aviso atual (cópia da
  lista, decisão 6 da 6.3).

## Erros e rejeições da IA
Nenhum

## Pendências
- **Liliane aprovar a proposta**, em especial: (1) no 7.6, a configuração **acrescenta** códigos ou **substitui** os
  fixos; (2) a posição livre depois do `CANCELADO`.
- **7.6:** o documento não diz quem cria a `FabricaDeCodigos`, e isso define por onde as linhas da configuração chegam
  até ela. Confirmar com o Alexandre (dono da 2.2.6) e o Murilo (fluxo 6.1).
- Push da `logitech/lilianeperim-ifsp` (42 commits à frente da origem).
- Recados abertos da inbox: pendências da Etapa 1 (22/11) e novos cartões (17/11).
- Prazo da Etapa 1: 27/11. Depois da T16 vêm a T17 (Murilo), a T18 (Liliane) e a T20.

## Próximos passos
- Responder às duas perguntas, escrever as subseções 7.5 a 7.8 no formato comum, atualizar o quadro de situação da
  abertura da seção 7 e abrir o PR para a `dev` (com recado ao Murilo para `/sincronizar-quadro`).
