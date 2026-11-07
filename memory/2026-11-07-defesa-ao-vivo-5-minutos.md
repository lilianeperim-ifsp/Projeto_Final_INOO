---
data: 2026-11-07
autor: Murilo Leandro
assunto: limite de 5 minutos para a alteração ao vivo na defesa
---

## Resumo
O Murilo trouxe uma orientação do professor: na defesa oral (04/12), a implementação ao vivo de um cenário de evolução deve ficar pronta em **no máximo 5 minutos**. O enunciado (seção 8.2 e seção 4 de `contexto/especificacoes-tecnicas.md`) fala só em "poucos minutos". A regra foi acrescentada à regra 3 do `CLAUDE.md`.

## Decisões tomadas
- **Limite de 5 minutos como critério de projeto.** Cada um dos 12 cenários da seção 4 precisa ser resolvido em até 5 minutos, de preferência criando uma classe nova ou alterando um único ponto. Por quê: a defesa é individual, e um cenário que exige mexer em várias classes indica acoplamento e reduz a nota. Consequência: no Documento de Projeto (item 7, "Resposta aos cenários de evolução"), conferir para cada cenário se a lista de classes alteradas é curta o bastante para caber nesse tempo.
- **A regra fica na memória do projeto (`memory/`) e no `CLAUDE.md`, não na memória local do Claude Code.** Por quê: assim fica versionada e o grupo inteiro tem acesso. Alternativa descartada: memória local do Claude Code no computador do Murilo.
- **`contexto/especificacoes-tecnicas.md` não foi alterado.** A pasta `contexto/` reflete o enunciado; a orientação verbal do professor fica registrada aqui e no `CLAUDE.md`.

## Erros e rejeições da IA
- **Rejeição (processo):** o Claude salvou a regra dos 5 minutos na memória local do Claude Code (`~/.claude/projects/.../memory/`). O Murilo preferiu a memória do projeto, versionada no repositório. As entradas locais foram apagadas e a regra foi registrada neste arquivo.

## Pendências
- Avisar a Liliane e o Alexandre sobre o limite de 5 minutos.
- Continuam em aberto desde 06/11: divisão de áreas entre os 3, formato do Documento de Projeto, configuração do JUnit, primeiro PR `logitech/murilolss` → `dev`.
- Analisar um `src.zip` que o Murilo vai enviar (caminho e objetivo ainda não informados).

## Próximos passos
1. Commitar esta memória e a alteração do `CLAUDE.md` na `logitech/murilolss` e abrir o PR para a `dev` (reviewer `alexsant22`).
2. Usar os 12 cenários e o limite de 5 minutos como critério ao discutir a modelagem do Documento de Projeto.
