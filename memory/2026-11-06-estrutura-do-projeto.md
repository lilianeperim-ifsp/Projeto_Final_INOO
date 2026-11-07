---
data: 2026-11-06
autor: Murilo Leandro
assunto: estrutura do projeto, contexto em markdown e regras da equipe
---

## Resumo
Primeira sessão. O Claude analisou a pasta (enunciado em PDF, slides das aulas 1–6 e 10–12, projeto IntelliJ ainda com o `Main.java` de template) e o grupo definiu a organização do repositório: contexto em `.md`, memória compartilhada em `memory/`, `CLAUDE.md` com regras para os 3 integrantes e fluxo de git. Nenhum código de produção foi escrito.

## Decisões tomadas
- **Sem `enum`, `Map` e `Set`; só `List`/`ArrayList` e arrays.** Por quê: o enunciado limita as coleções ao que foi ensinado em sala e o grupo definiu o que isso significa. Consequência: modal, perfil e status viram classes/interfaces. Alternativa descartada: usar enum para status e perfil.
- **Slides 7, 8 e 9 não existem para o grupo.** Não presumir seu conteúdo. Pelos indícios, a aula 7 foi revisão/Prova 1 e as aulas 8–9 trouxeram `List`/`ArrayList` e `LocalDate`.
- **Contexto em `contexto/*.md`:** `regras-negocio.md`, `especificacoes-tecnicas.md` e `slides.md` (texto dos 9 PDFs, gerado por script). Por quê: o Claude lê markdown com menos custo e sem erros de encoding. Os PDFs continuam como fonte oficial.
- **`CLAUDE.md` enxuto**, apontando para os arquivos de contexto sob demanda em vez de importá-los (o `slides.md` tem ~120 KB). Alternativa descartada: `@import` de tudo, que pesaria em toda sessão.
- **Memória compartilhada em `memory/` na raiz, versionada,** gravada pela skill de projeto `/salvar-memoria`. Por quê: `/memory` é comando interno do Claude Code e não pode ser sobrescrito. Um arquivo por sessão evita conflito de merge entre os 3.
- **Equipe:** autor registrado em toda memória e nota de IA; fluxo de git com branch `nome/assunto`, Pull Request revisado por outro integrante, sem push direto na `main`.
- **Regras extras sugeridas pelo Claude e aceitas:** registrar erros e rejeições da IA em `docs/relatorio_ia_notas.md` ao longo do projeto; sem `record`/streams/`Optional`; `Main` clássica; nenhum commit sem pedido.

## Erros e rejeições da IA
Nenhum nesta sessão.

## Pendências
- Combinar entre os 3 a divisão de áreas (modais, perfis, notificações, entrada/validação, testes, documento). Não foi definida.
- Confirmar com o professor se o conteúdo das aulas 8 e 9 (`List`/`ArrayList`, `LocalDate`) autoriza algo além do que já está permitido.
- Definir o formato do Documento de Projeto (Markdown, Word etc.) e o local (`docs/`).
- Configurar JUnit ou outra forma de teste: o enunciado exige testes unitários e o projeto não tem nada configurado.
- `LogiTech/` ainda é o template do IntelliJ e o `Main.java` precisa virar `public class Main` clássica.
- Os arquivos novos ainda **não foram commitados** (`CLAUDE.md`, `contexto/`, `docs/`, `memory/`, `.claude/`, `LogiTech/`).

## Próximos passos
1. Revisar os arquivos de `contexto/` e o `CLAUDE.md` e commitar em uma branch.
2. Reunir os 3 para dividir as áreas e discutir a modelagem (Strategy para modal/perfil, Observer para interessados, State para status, Factory na entrada são hipóteses a avaliar, não decisões).
3. Escrever o Documento de Projeto da Etapa 1 (prazo 27/11).
