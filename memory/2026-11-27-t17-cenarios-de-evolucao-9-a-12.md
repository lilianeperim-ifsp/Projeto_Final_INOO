---
data: 2026-11-27
autor: Murilo Leandro
assunto: T17, cenários de evolução 9 a 12 (seções 7.9 a 7.12) e PR #69
---

## Resumo
O Murilo fez a T17 no `docs/Documento_de_Projeto.md`: as seções 7.9 a 7.12 (peso mínimo, sobretaxa de 8%, PREMIUM e
separador `,`), no formato comum da seção 7, e as cinco correções que ficaram com ele na aprovação do PR #65.

O Claude apresentou o plano, e o Murilo aprovou. Depois de escrito, o texto foi conferido com `/documento`, que
gerou o PDF (2,5 MB). O documento inteiro não foi mostrado na conversa, porque 196 KB não cabem numa resposta, e a
conferência foi feita pelo trecho alterado e pelo PDF.

Commits na `logitech/murilolss`:
- `4d57392`: a T17 e as correções;
- `ef3b9ba`: o número do PR no quadro de situação da seção 7.

O PR #69 foi aberto para a `dev`, com o Alexandre de reviewer e os rótulos `prioridade-maxima` e `documentation`.

Na `dev` (`e3373d6`, exceção da inbox):
- o recado `inbox/ale/2026-11-27-de-murilo-revisar-pr-69-t17.md`, com `prioridade: maxima`;
- a resposta ao recado da Liliane sobre a T18, que passou para `concluido`.

No quadro, rodando `/sincronizar-quadro`:
- o PR #69 entrou (`s-202611271354`);
- o cartão da T17 foi movido à mão de "A fazer" para "Em PR", ligado ao #69, com o revisor `alexsant22`.

## Decisões tomadas
- **7.9 Peso mínimo:**
  - Decisão: muda só o `InterpretadorDeLinha`, com a constante `PESO_MINIMO_KG = 0.5` e um `if` logo depois do
    `peso invalido`. Como a comparação é `<`, 0,5 kg é válido. Nenhum teste atual quebra.
  - Por quê: o mínimo é o mesmo para todos os modais.
  - Alternativa descartada: um `modal.abaixoDoPesoMinimo(peso)`, como o `excedeCapacidade`.
- **7.10 Sobretaxa de 8% acima de 2000 kg:**
  - Decisão: mudam só as duas constantes do `Modal` (`LIMITE_CARGA_PESADA_KG` para 2000 e `FATOR_SOBRETAXA` para
    1,08), e a regra nova **substitui** a antiga.
  - Por quê: o enunciado diz "passa a ser".
  - Alternativa descartada: faixas de 5% e de 8%.
  - Consequência importante: a encomenda 3 do gabarito tem 2000 kg exatos e perde a sobretaxa (2425,50 → 2310,00).
    A 7.10 traz a tabela dos valores novos, com as contas conferidas por um script.
- **7.11 PREMIUM:**
  - Decisão: a classe `Premium extends PerfilPorMultiplicadores` sobrescreve `aplicarFrete`, chama o `super` e aplica
    o piso de R$ 50,00 num `if`, com a constante `FRETE_MINIMO` no próprio `Premium`. O piso vem antes do
    arredondamento. A `FabricaDeCodigos` ganha uma linha, e o `Transporte` não muda.
  - Por quê: o `if` aparece nos slides, e o `Math.max` não.
  - Alternativa descartada: aplicar o piso na `Encomenda` ou no `ResultadoCalculo`, o que fere a ET 3.2.
- **7.12 Separador `,`:**
  - Decisão: muda só o `split` do `InterpretadorDeLinha`. A saída continua com `;`, e o `modais.txt` da 7.6 também.
  - Por quê: a saída usa vírgula decimal, e `,` como separador da saída ficaria ambíguo.
  - Alternativas descartadas: trocar o separador da saída; aceitar os dois separadores.
- **Testes do cenário 12 (escolha do Murilo):**
  - Decisão: a 7.12 registra o custo. Depois da troca, as linhas de entrada dos testes de lote são reescritas com
    `,`, fora dos 5 minutos, e as saídas esperadas continuam com `;`.
  - Alternativa descartada: um método auxiliar nos testes que monta a linha com o separador. Criaria um segundo
    ponto com o separador, e a 4.2 já tinha descartado a constante `SEPARADOR`.
- **Exceções de regressão:**
  - Decisão: a abertura da seção 7 e o item "Testes de regressão" da 8.1 passam a dizer que os cenários 10 e 12 são
    exceções à regra "tudo continua passando sem nenhuma mudança".
  - Por quê: os dois mudam uma regra do enunciado, e não só acrescentam classes.
- **Correções do PR #65:**
  - 6.1: o gancho cita as quatro classes da 7.6, e a "Eficiência" deixa de falar em "lista de tamanho fixo".
  - 7.6, decisão 6: a alternativa descartada ganhou um argumento novo. O `Main` montar a fábrica não poupa nenhuma
    classe e faria o `Main` depender da `FabricaDeCodigos`.
  - 7.5, decisão 2: a remissão agora é "construtores com parâmetro da `LinhaInterpretada` (3.7, decisão 5)".
  - 7.6: a "Eficiência" passou para "Por que funciona", e duas linhas longas foram quebradas.
  - Quadro da seção 7: a 7.5 a 7.8 passou a "Escrita (PR #65)", e a 7.9 a 7.12, a "Escrita, em revisão (PR #69)".
- **5.2.5 e 5.3 (escolha do Murilo):**
  - Decisão: as duas frases do Alexandre que dizem que a configuração externa "muda só a fábrica" ficam fora do PR.
    O recado de prioridade máxima pede a ele que as ajuste.
  - Por quê: as seções são do Alexandre.
  - Alternativa descartada: corrigir no PR da T17, que era a recomendação do Claude.
- **"Prioridade máxima":**
  - Decisão: o Murilo pediu prioridade máxima. O Claude aplicou isso no recado ao Alexandre (`prioridade: maxima`) e
    no PR (rótulo `prioridade-maxima` e aviso no início da descrição).
  - Por quê: o PR em si não tem campo de prioridade.
  - Simplificação do plano: um recado só, que junta a revisão do #69 e o pedido da 5.2.5 e da 5.3, em vez de dois.

## Erros e rejeições da IA
- **Rejeição (processo):** o Claude recomendou corrigir também a 5.2.5 e a 5.3 no PR da T17. O Murilo preferiu
  mandar um recado ao Alexandre, que é o dono das seções. Registrado em `docs/relatorio_ia_notas.md`.

## Pendências
- **Alexandre:**
  - revisar o PR #69 hoje (27/11), que é o prazo da Etapa 1;
  - ajustar a 5.2.5 e a 5.3, conforme o recado `inbox/ale/2026-11-27-de-murilo-revisar-pr-69-t17.md`.
- **Liliane:** fazer a T18 (conferir se os 12 cenários cabem nos 5 minutos). Ela já foi avisada pelo recado.
- **Grupo:** continuam abertas a confirmação de `Objects`, `File` e `FileNotFoundException` (7.5 e 7.6) e a do
  `BigDecimal` e do `RoundingMode` (2.1.2).
- **Branch:** o recado da Liliane só aparece como `concluido` na `logitech/murilolss` depois do próximo
  `git pull origin dev`.

## Próximos passos
- Acompanhar a revisão do Alexandre no PR #69 e corrigir o que ele pedir.
- Depois do merge, rodar `/sincronizar-quadro`, que leva a T17 para "Concluído".
- Fazer a T20 (revisão cruzada), que depende da T18 da Liliane.
- Gerar de novo o PDF com `/documento` depois dos merges do #69 e da T18.
