---
data: 2026-11-16
autor: Alexandre Santos
assunto: revisão do PR 20 (T19) e ajustes da 2.2
---

## Resumo

O Alexandre atualizou a `logitech/alexsant22` com a `dev` (`/atualizar-branch`) e encontrou dois recados pendentes
do Murilo na `inbox/ale/`: revisar o PR #20 e o aviso de que o PDF do documento não é versionado (gera-se com
`/documento`).

Revisão do PR #20 (T19, seção 8, Plano de testes, do Murilo):

- Conferidos contra a RN 2, a RN 4, a RN 6, a RN 10, a RN 11 e a RN 12: o gabarito, o relatório (11220,50 / 55,18 /
  444,35), a sobretaxa em 1000 e 1001 kg, a distância 0 e os três perfis na mesma encomenda. Também a distância de
  1.000.000 km (1275000,34 / 20835,83 / 62,00), o caso da distância `-0.0` (3,40 / 2,50 / 0,00), a soma da
  auditoria (98,20) e a tabela de avisos da 8.7.
- Contas de `double` refeitas em Python: 79,865 é guardado como `79.86499999…`, a média da RN 11 dá
  `79.86500000000001`, 23,34 − 23,33 dá `0.0100000000000016` e 2,13 − 2,12 dá `0.0099999999999998`. A exceção de
  tolerância `1e-9` para os casos de arredondamento se justifica, porque o `assertEquals` do JUnit 5 compara com `<=`.
- Os nomes de classes e métodos da seção 8 batem com a 2.2 e a 6.1, e não havia conflito com a `dev`.
- PR aprovado no GitHub com três comentários e um opcional (ver "Pendências"). O Murilo mergeou em seguida
  (commit `c8f5b01`).
- Recado `inbox/ale/2026-11-16-de-murilo-revisar-pr-20-t19.md` fechado como `concluido` (commit `68127b3`, na `dev`).

Ajustes da 2.2 (T08) que ficaram com o Alexandre, no PR #21 (`logitech/alexsant22` → `dev`, commit `fac5260`,
revisores Liliane e Murilo):

- `ResultadoCalculo`: `static arredondar(valor)` passou a `public static arredondar(valor)`.
- `Status` (2.2.3): o `getNome()` passou a ser "usado só no texto do log e da mensagem e nos testes, que conferem o
  status por ele, sem `instanceof` (8.5)".

Recado `inbox/murilo/2026-11-16-de-ale-sincronizar-quadro-pr-21.md` enviado à `dev` (commit `471db7f`), pedindo o
`/sincronizar-quadro` e lembrando os pontos da revisão que ficaram com ele.

## Decisões tomadas

- **`ResultadoCalculo.arredondar` é `public static`.** Por quê: os testes ficam no pacote `testes` (8.1) e só usam o
  que é `public`, e a 8.2 chama o `arredondar` direto. Alternativa (não discutida na sessão, só apontada para a defesa): testar o arredondamento só pelo
  construtor do `ResultadoCalculo`, que perde os casos isolados (2,125 e 79,865) da 8.2.
- **Os testes conferem o status pelo `getNome()`.** Por quê: sem `instanceof`, é o único jeito de o teste saber em que
  status o transporte está. Alternativa (não discutida na sessão, só apontada para a defesa): um método só para teste, como `estaEntregue()`, que acrescentaria
  à API um método que nenhuma regra usa.
- **A frase da 2.1.2 ("num único método `static`") ficou como estava.** Por quê: a visibilidade é detalhe do catálogo
  (2.2). Alternativa descartada: repetir o `public` na 2.1.2.

## Erros e rejeições da IA

Nenhum.

## Pendências

- **PR #21:** aguarda a revisão da Liliane e do Murilo. Depois do merge, o Murilo roda o `/sincronizar-quadro`.
- **Com o Murilo (revisão do PR #20, que foi mergeado sem esses ajustes):**
  - dizer na 8.1 onde ficam os testes. Com `import org.junit…` em `LogiTech/src/testes`, um `javac` de todo o `src`
    falha sem o JAR do JUnit, e o enunciado exige código compilável com instruções. A sugestão foi uma pasta separada
    (ex.: `LogiTech/test/testes`, como *Test Sources Root*) e o `COMO_EXECUTAR.md` compilando só o `src`, ou deixar
    como "Em aberto" para o T21;
  - dizer na 8.5 que o teste confere o status pelo `getNome()`;
  - opcional: na 8.3, as bordas `10d`, `10f` e `0x1p3`, que o `parseDouble` aceita, como o `1e3`.
- **T29 (2.1.2):** o método de arredondamento continua em aberto. O caso `arredondar(79.865)` → 79,87 da 8.2 só
  passa com `BigDecimal.valueOf`.
- **JUnit:** avisar o professor antes do T21 (em aberto na 8.1).

## Próximos passos

- Acompanhar a revisão do PR #21 e responder aos comentários.
- Conferir no próximo `git pull origin dev` se o Murilo tratou os pontos da 8.1 e da 8.5.
- Rodar `/documento` para conferir o PDF com a seção 8, inclusive os diagramas.
