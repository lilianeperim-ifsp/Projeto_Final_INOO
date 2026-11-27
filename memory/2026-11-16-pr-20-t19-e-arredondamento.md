---
data: 2026-11-16
autor: Murilo Leandro
assunto: PR 20 (T19, plano de testes) e os casos de arredondamento
---

## Resumo

- **Inbox:** havia um recado pendente, `inbox/murilo/2026-11-16-de-ale-sincronizar-quadro-pr-19.md`, que só aparecia
  na `dev` (a branch estava 6 commits atrás). O `/atualizar-branch` trouxe a `dev` por fast-forward até `5d0a8f0`.
- **`/sincronizar-quadro` (`s-202611162244`):** o PR #19 foi gravado como mergeado (16/11, 22:13 UTC) e aprovado pelo
  Alexandre, e o T12 foi para Concluído. Nos PRs #9, #10 e #16, o GitHub devolveu os revisores em outra ordem, com os
  mesmos nomes, e eles não foram regravados. O registro mais antigo do histórico foi apagado, para manter 30.
- **Recado do PR #19 fechado e erro do T29 registrado:** o Alexandre conferiu no `jshell` que `11191.949999999999` dá
  11191,95 com os três métodos de arredondamento. A análise de 11191,94 tinha vindo do Claude, em 15/11. Commits
  `5ce81df` e `2e205eb` na `dev`, este com o erro de processo do envio (ver abaixo).
- **T19 revisado antes do PR:** a seção 8 foi conferida contra a 2.2 e a 6.1 mergeadas. Os nomes de classes e métodos
  batiam. Entraram 4 ajustes e 1 opcional:
  1. tabela do topo: o T12 passa a "Escrita";
  2. 8.2: o caso `arredondar(79.865)` ficou marcado como "depende do T29", e entrou o caso `arredondar(2.125)` → 2,13;
  3. 8.1: tolerância `1e-9` nos casos de arredondamento;
  4. 8.3: testes do contrato da `FabricaDeCodigos`, em que `criar*("ZZZ")` lança `IllegalArgumentException`, e da
     lista única de códigos, em que, para os seis códigos, `existe*` dá `true` e `criar*` não lança;
  5. opcional, 6.1: a linha do `AEREO;5000` agora diz que 11191,95 sai com qualquer método.
- **Conta que mudou a explicação do 79,865:** no exemplo da RN 11, a média calculada é `(23.33 + 136.40) / 2 =
  79.86500000000001`, um pouco **acima** de 79,865, e dá 79,87 com os três métodos. Só o 79,865 escrito direto no teste
  (`79.8649999999999948…`) separa os métodos: `BigDecimal.valueOf` dá 79,87, e `new BigDecimal(double)` e `Math.round`
  dão 79,86. A 8.2 ganhou essa explicação.
- **PDF:** gerado com `/documento` (904 KB), sem versionar.
- **PR #20 aberto:** https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/20, da `logitech/murilolss` para a
  `dev`, com o Alexandre de revisor. O commit `0d3965a` leva o `Documento_de_Projeto.md` e a linha do erro do 79,865 em
  `docs/relatorio_ia_notas.md`.
- **Quadro:** o T19 foi movido para "Em PR", ligado ao PR #20, com o Alexandre de revisor. O PR #20 foi gravado em `prs`
  e a mudança ficou registrada como `s-202611162309`.
- **Recados enviados à `dev` (`d84f1c5`):**
  - `inbox/ale/2026-11-16-de-murilo-revisar-pr-20-t19.md`, pedindo a revisão do PR #20;
  - `inbox/ale/2026-11-16-de-murilo-pdf-do-documento.md` e `inbox/liliane/2026-11-16-de-murilo-pdf-do-documento.md`:
    o PDF não é versionado, e para vê-lo é preciso rodar `/documento`. O da Liliane lembra que falta o Node na
    máquina dela.
- **`/atualizar-branch` interrompido:** depois dos recados, o Murilo recusou o `git pull origin dev` na
  `logitech/murilolss`. A branch continua sem o commit `d84f1c5`, e o PR #20 segue sem commit de merge.

## Decisões tomadas

- **Caso 79,865 marcado como "depende do T29", com o caso 2,125 para testar o HALF_UP em si** (aprovado pelo Murilo).
  - Por quê: o 79,865 escrito direto no código separa os métodos de arredondamento, então é o caso que o T29 precisa
    para escolher. O 2,125 é exato em `double` e dá 2,13 em qualquer método.
  - Alternativa descartada: manter 79,865 → 79,87 como resultado certo. Isso já escolheria o `BigDecimal.valueOf` sem
    o T29 decidir.
- **Tolerância `1e-9` nos casos de arredondamento** (8.1).
  - Por quê: com 0,01, uma diferença de um centavo passa ou falha só pela representação do `double` (2,13 − 2,12 dá
    0,0099999999999998 e passa; 23,34 − 23,33 dá 0,0100000000000016 e falha).
  - Alternativa descartada: 0,01 em todos os testes, como a RN 5.
- **O contrato da `FabricaDeCodigos`, definido na revisão do PR #19, entra no plano de testes (8.3).**
- **O PDF do documento não é versionado** (decisão do Murilo). Cada um gera o seu com `/documento`, e o grupo foi
  avisado por recado.
  - Alternativa descartada: commitar o `docs/Documento_de_Projeto.pdf`.
- **A linha do erro do 79,865 vai no PR #20** (decisão do Murilo), e não direto à `dev`.
  - Alternativa descartada: enviá-la direto à `dev`. Seria mais rápido para o grupo ver, mas exigiria outra troca de
    branch.
- **Na sincronização, PRs cuja única diferença é a ordem dos revisores não são regravados.**
  - Alternativa descartada: regravar os três, o que mudaria a versão dos documentos sem mudança real.

## Erros e rejeições da IA

- **Erro (dados), T29:** o recado de 15/11 dizia que 11191,949999999999 daria 11191,94 com `new BigDecimal(double)`.
  A conta não tinha sido feita: o terceiro decimal já é 9. O Alexandre percebeu, e a linha está no relatório
  (`5ce81df`).
- **Erro (processo):** troca de branch, commit e push foram rodados num único comando, contando com o `set -e`. Com os
  pipes em `| tail`, o `git switch dev` falhou e o script seguiu: o commit caiu na `logitech/murilolss`, e o push da
  `dev` antiga foi recusado. O Claude percebeu pela saída e enviou o commit, que estava logo acima da `origin/dev`, com
  `git push origin 5ce81df:refs/heads/dev`. Daí em diante, cada etapa foi conferida antes da seguinte (`2e205eb`).
- **Erro (dados), T19:** no plano de testes de 14/11, o caso `arredondar(79.865)` → 79,87 aparecia como certo, e a
  tolerância de 0,01 valia também para o arredondamento. O próprio Claude percebeu ao revisar a seção 8. A linha está no
  PR #20 e chega à `dev` com o merge.
- **Erro (dados), contagem:** o Claude disse que o relatório tinha "6 erros e 3 rejeições" na conta do Murilo sem
  contar. Eram 13 erros e 8 rejeições na `dev`. O próprio Claude percebeu neste `/salvar-memoria`, e a linha entrou no
  relatório antes das outras de 16/11, para não conflitar com a do PR #20.

## Pendências

- **Revisão do PR #20** pelo Alexandre (recado na inbox dele).
- **T29 (arredondamento, 2.1.2):** escolher o método. O caso 79,865 da 8.2 é o que separa `BigDecimal.valueOf` de
  `new BigDecimal(double)` e `Math.round`. Também falta tratar o `-0,00` do caso de distância `-0.0` (8.3).
- **Avisar o professor de que o grupo vai usar JUnit 5**, antes do T21. Continua pendente desde 14/11.
- **T14 (Alexandre):** o mecanismo da operação rejeitada no `Status` e no `Transporte`. Os casos da 8.5 a 8.7 ganham a
  asserção exata depois.
- **A `logitech/murilolss` não tem o commit `d84f1c5` da `dev`** (os recados), porque o `/atualizar-branch` foi
  interrompido. O motivo não foi informado.
- **O `docs/Documento_de_Projeto.pdf`** fica sem commit na máquina do Murilo, como combinado.

## Próximos passos

- Depois do merge do PR #20: rodar `/sincronizar-quadro` para o T19 ir para Concluído e atualizar a branch com
  `/atualizar-branch`.
- Próximo cartão do Murilo: o **T13** (fluxo da troca de perfil, seção 6.2), liberado pelo merge do T12. A 8.6 já tem
  os valores esperados: rodoviário, 500 kg, 1000 km, com ECONOMICO 1445,00 / 23,33 / 31,00, RAPIDO 2380,00 / 14,93 /
  35,65 e ECOLOGICO 1870,00 / 20,53 / 21,70.
- No início da próxima sessão: ler a inbox e as memórias de 16/11.
