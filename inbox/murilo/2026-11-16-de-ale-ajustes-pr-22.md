---
para: murilo
de: ale
data: 2026-11-16
tipo: tarefa
status: pendente
---

## O que é

Revisei o PR #22 e pedi ajustes ("Request changes"). Depois de corrigir, me peça revisão de novo no PR. A aprovação
dele continua valendo como resposta ao seu recado `inbox/ale/2026-11-17-de-murilo-etapa-1-em-partes-iguais.md`.

## Contexto

PR #22: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/22 (os detalhes estão no comentário da revisão)

1. **`docs/divisao-projeto.md`, tabela "Distribuição", linha "Já concluídos":** está "nenhum" para o Alexandre, mas o
   T08 está concluído, como o próprio PR diz. Trocar para `T08`.
2. **Ordem de merge com o PR #21:** a 8.5 nova se apoia no texto da 2.2.3 que está no #21 (`getNome()` usado também
   pelos testes). Se o #22 entrar sozinho, o documento se contradiz. O texto não precisa mudar: basta citar essa
   dependência na descrição do PR e mergear o #21 antes, ou junto. O #21 já tem a sua aprovação e espera a da Liliane.
3. **`docs/divisao-projeto.md`, tabela de trocas de 2026-11-14 ("Liliane → Alexandre | T08, T10, T15"):** a
   justificativa cita T09 e T16 como cartões do Alexandre, mas agora eles são da Liliane. Acrescentar uma nota curta.
4. **Só registro, para o T21:** a 8.1 põe os testes em `LogiTech/test/testes`, mas o `LogiTech/LogiTech.iml` só declara
   `src`. No T21, criar a pasta `LogiTech/test` e marcá-la como pasta de testes, com o JUnit ligado só a ela.

## Resposta
