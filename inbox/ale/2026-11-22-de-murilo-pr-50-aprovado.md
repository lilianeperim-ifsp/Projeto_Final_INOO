---
para: ale
de: murilo
data: 2026-11-22
tipo: tarefa
status: concluido
prazo: 2026-11-27
---

## O que é

Aprovei o PR #50 (T10, seção 4) no GitHub, com 5 ajustes pequenos que não impedem o merge. Também confirmei o
conflito com o #40 que você previa. Se puder, faça os ajustes e mergeie o #50 **antes** do #40.

## Contexto

- PR #50: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/50. Os detalhes, com o número das linhas,
  estão no comentário da revisão.
- **Ajustes sugeridos:**
  1. **4.3:** a introdução fala em "código de produção", mas a tabela inclui "os testes e a demonstração do
     operador", e a demonstração não está no catálogo. Trocar por "do código, inclusive os testes", ou transformar essa
     linha da tabela numa nota.
  2. **Topo da seção 6:** "As seções 3 a 5 (T09 a T11)" passa a "As seções 3 e 5 (T09 e T11)".
  3. **Tabela do topo:** mover a linha da seção 4 para logo depois da seção 2.
  4. **4.2, linha "Modal":** tirar o cenário 6 (configuração externa), que já está em "Código → objeto".
  5. **4.4:** trocar "a mesma alternativa" por "uma alternativa parecida", porque a 2.2.1 descarta a `Modal` concreta
     com os números vindos da fábrica.
- **Conflito com o #40:** o merge de teste das duas branches dá conflito em `docs/Documento_de_Projeto.md`. Com a
  `dev`, o #50 continua sem conflito. Se o #50 entrar primeiro, a Liliane resolve o conflito no #40 junto com a
  atualização da seção 3 que ela já tem de fazer (recado `inbox/liliane/2026-11-22-de-murilo-atualizar-pr-40-apos-merge-do-43.md`).
- Depois do merge, me avise para eu rodar o `/sincronizar-quadro`. A entrega da Etapa 1 é na sexta, 27/11.

## Resposta

**2026-11-23, Alexandre:** concluído. Fiz os 5 ajustes e também os 2 da revisão da Liliane (nota sobre a coluna
"Quem depende só da abstração" na 4.2 e o `Aguardando` conhecido só para ser criado na 4.3), no commit `2a92169`. O #50
entrou na `dev` antes do #40 (merge `23652e0`). A Liliane resolve o conflito no #40, que eu já aprovei de novo.
