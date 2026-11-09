# Projeto Final INOO — Sistema LogiTech

Trabalho final da disciplina Introdução à Orientação a Objetos (IFSP), feito por **3 integrantes**. Simulador logístico em Java que calcula frete, tempo e CO₂ para três modais (rodoviário, aéreo, aquaviário) e três perfis de precificação, rastreia transportes, notifica interessados e processa lotes pela entrada padrão.

## Onde está o contexto (leia sob demanda, não carregue tudo)

| Arquivo | Quando consultar |
|---|---|
| `contexto/regras-negocio.md` | Fórmulas, perfis, validação, rastreamento, avisos, formato de entrada e saída, gabarito |
| `contexto/especificacoes-tecnicas.md` | Restrições técnicas, cenários de evolução, padrões GoF, conteúdo da Etapa 1 e da Etapa 2, stress test, defesa |
| `contexto/slides/` | O que foi ensinado em aula: um `.md` por PDF (`aula_01.md` … `aula_12.md`). Comece pelo `README.md`, que tem o índice e o resumo |
| `contexto/projeto-exemplo.md` | Projeto Livraria das aulas 10–12 (exemplo do professor): referência de herança, interfaces e polimorfismo, e **checklist de erros a não repetir** (seção 10). Consultar antes de escrever ou revisar código |
| `contexto/pdfs/` | Originais em PDF (enunciado e slides). Em caso de divergência, o enunciado vale mais |
| `memory/` | Histórico das sessões e decisões do grupo (ver "Memória do projeto") |
| `docs/` | Documento de Projeto, `relatorio_ia_notas.md` e `COMO_EXECUTAR.md` (a criar) |

As aulas 7, 8 e 9 **não foram fornecidas**.

## Prazos

- **Etapa 1 (27/11):** somente o Documento de Projeto, sem código.
- **Etapa 2 (04/12):** código, testes, documento revisado ("Do projeto ao código"), relatório de uso de IA, stress test e defesa oral.

## Regras de trabalho

1. **Idioma:** responder e documentar em português do Brasil. Identificadores de código seguem a convenção Java.
2. **Projeto antes do código.** Não escrever código de produção até o Documento de Projeto da Etapa 1 estar aprovado pelo grupo.
3. **Todos precisam entender tudo.** A defesa oral é individual e inclui alterar o código ao vivo: um cenário de evolução em **no máximo 5 minutos** (orientação do professor). Toda decisão de projeto vem com justificativa curta e uma alternativa descartada. Propor, explicar e esperar aprovação antes de mudanças estruturais.
4. **Registrar o uso de IA.** Quando o Claude errar ou o grupo rejeitar uma proposta dele, anotar em `docs/relatorio_ia_notas.md` (data, autor, o que foi proposto, por que estava errado ou foi rejeitado, correção). O relatório final exige no mínimo 3 erros e 1 rejeição.
5. **Mudanças de rumo** em relação ao Documento de Projeto são anotadas para a seção "Do projeto ao código".
6. **Não commitar nem dar push** sem o usuário pedir.

## Restrições técnicas obrigatórias (resumo; detalhes em `contexto/especificacoes-tecnicas.md`)

- **Coleções:** somente `List`/`ArrayList` e arrays. **Proibido `enum`, `Map`/`HashMap` e `Set`.**
- Sem `record`, streams nem `Optional`. Em dúvida sobre qualquer recurso de Java, perguntar antes.
- **Fora da camada de entrada, nenhum código testa qual modal ou perfil está em uso:** sem `instanceof`, `switch` ou comparação de código/texto. Variação resolvida por polimorfismo.
- Novo modal ou perfil = classes novas, sem reescrever a lógica existente. A sobretaxa de carga pesada fica em **um único ponto**, valendo para todos os modais.
- Modal, perfil e status são classes/interfaces, não enum.
- Todos os atributos de instância `private`. Getters não expõem estado mutável (cópia defensiva ou lista não modificável).
- Baixo acoplamento (depender de abstrações) e alta coesão.
- `public class Main` clássica com `public static void main(String[] args)`. Não usar o `main` de instância nem `IO.println` do template do IntelliJ.
- O núcleo de cálculo **não lê dados**: a leitura de `System.in` fica na classe de entrada, que entrega uma `List<String>`.
- Relatório em **uma passagem O(n)** e **nenhuma exceção não tratada**: linha inválida nunca interrompe o lote.
- Saída com vírgula decimal e 2 casas: `String.format(Locale.forLanguageTag("pt-BR"), "%.2f", valor)`.
- Execução: `java Main < entrada.txt`.

## Equipe (3 integrantes)

- **Autor sempre registrado.** Toda memória em `memory/` e toda nota em `docs/relatorio_ia_notas.md` traz o nome de quem a produziu.
- **Combinar antes de implementar.** Mudanças de modelagem (classes, interfaces, padrões) são acordadas entre os 3 e registradas em `memory/`.
- **Documentos compartilhados** (`docs/`, `contexto/`, `memory/`): evitar editar o mesmo arquivo ao mesmo tempo; em `memory/` cada sessão gera um arquivo novo, o que previne conflitos.

## Fluxo de git

Repositório: `https://github.com/lilianeperim-ifsp/Projeto_Final_INOO`

| Integrante | Usuário GitHub | Branch de trabalho |
|---|---|---|
| Liliane | `lilianeperim-ifsp` | `logitech/lilianeperim-ifsp` |
| Murilo | `murilolss` | `logitech/murilolss` |
| Alexandre | `alexsant22` | `logitech/alexsant22` |

### Branches

```
main                       versão estável (o que será entregue)
 └── dev                   integração e testes antes da main
      ├── logitech/lilianeperim-ifsp
      ├── logitech/murilolss
      └── logitech/alexsant22
```

- `main`: só recebe PR vindo da `dev`, depois de testado (única exceção: recados da inbox, ver abaixo).
- `dev`: só recebe PR vindo das branches `logitech/<usuario>`.
- `logitech/<usuario>`: cada integrante trabalha **só na própria branch**, criada a partir da `dev`.
- **Nada de push direto em `main` ou `dev`.**
- **Exceção da inbox:** um commit que altera **somente** arquivos dentro de `inbox/` pode ir direto para a `main`, sem PR (ver `inbox/README.md`). Se o commit tocar em qualquer arquivo fora de `inbox/`, segue o fluxo normal.

### Passo a passo

1. Antes de começar: `git switch logitech/<usuario>` e `git pull origin dev`, para trazer o que os outros já integraram.
2. Trabalhar e commitar na própria branch, em commits pequenos com mensagem em português descrevendo o que mudou.
3. Antes do PR, atualizar de novo com a `dev` (`git pull origin dev`), resolver conflitos e conferir que compila e que os testes passam.
4. `git push` e abrir o PR para a `dev`:
   `gh pr create --base dev --head logitech/<usuario> --reviewer alexsant22`
5. Depois do merge e dos testes na `dev`, abrir o PR da `dev` para a `main`:
   `gh pr create --base main --head dev --reviewer alexsant22`

### Revisão

- **Todo PR tem o Alexandre (`alexsant22`) como reviewer.**
- Exceção: o GitHub não deixa o autor revisar o próprio PR. Nos PRs abertos pelo Alexandre, os reviewers são os outros dois integrantes (`lilianeperim-ifsp` e `murilolss`).
- O repositório não tem proteção de branch configurada: essas regras valem por combinação do grupo. Use o checklist do template de PR (`.github/pull_request_template.md`).

### Regras para o Claude

- Só commitar, dar push ou abrir PR quando o usuário pedir.
- Antes de commitar, confirmar em qual branch está; nunca commitar em `main` ou `dev`, salvo commit só com arquivos de `inbox/` na `main` (exceção da inbox), e ainda assim apenas quando o usuário pedir.
- Ao abrir PR, usar a base correta (`dev` para branch de integrante, `main` só a partir da `dev`) e sempre incluir o reviewer.
- O `gh` foi instalado em `C:\Program Files\GitHub CLI\gh.exe`; se não estiver no PATH do terminal, use o caminho completo.

## Quadro Kanban do grupo

- O grupo acompanha tarefas, responsáveis e PRs num artefato do claude.ai: https://claude.ai/artifact/F1QWFXCoJWQXo3HDSBbvhH (precisa de acesso de Colaborador ou superior para editar).
- O quadro puxa os PRs do GitHub com **`/sincronizar-quadro`** (skill do projeto em `.claude/skills/sincronizar-quadro/`). Está planejada uma rotina na nuvem que roda a skill todo dia às 08:00, 12:00 e 18:00 (Brasília), mas **ainda não está ativa** (falta conectar o GitHub à conta e levar a skill para a `main`). Por enquanto, **rode a skill depois de abrir ou mergear um PR**.
- A skill só lê o GitHub e escreve no banco do artefato: não faz commit, push nem abre PR.

## Memória do projeto

- Ao fim de cada sessão, rodar **`/salvar-memoria`** (skill do projeto em `.claude/skills/salvar-memoria/`). Ela grava `memory/AAAA-MM-DD-assunto-principal.md` com resumo, decisões, erros da IA, pendências e próximos passos, e depois o arquivo é commitado.
- `/memory` é o comando interno do Claude Code (edita arquivos de memória do próprio Claude) e **não** grava nessa pasta.
- No início de uma sessão nova, ler os arquivos mais recentes de `memory/` para retomar de onde o grupo parou.

## Estrutura do repositório

- `LogiTech/` — projeto IntelliJ (JDK 26), código em `LogiTech/src`. `Main.java` ainda é o template do IntelliJ.
- `contexto/` — regras em `.md`, `projeto-exemplo.md` (Livraria das aulas 10–12), `pdfs/` (originais) e `slides/` (um `.md` por aula); somente leitura, salvo correção
- `memory/` — memória compartilhada das sessões
- `docs/` — Documento de Projeto, notas do relatório de IA, `COMO_EXECUTAR.md`
- `.claude/skills/` — skills do projeto (`salvar-memoria`, `sincronizar-quadro`)
