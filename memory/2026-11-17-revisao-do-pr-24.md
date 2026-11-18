---
data: 2026-11-17
autor: Alexandre Santos
assunto: revisão do PR 24 (seção 6.2) e aprovação dos avisos da inbox no GitHub
---

## Resumo

Sessão do Alexandre. A branch `logitech/alexsant22` estava 8 commits atrás da `dev` e foi atualizada com
`/atualizar-branch`, sem conflitos e sem mudanças de código. Na inbox, o Alexandre respondeu o recado de prioridade
máxima do Murilo (`inbox/grupo/2026-11-17-de-murilo-avisos-da-inbox-no-github.md`), concordando com a proposta e
aceitando revisar o PR do workflow (commit `cb87824`, direto na `dev`).

Em seguida, ele revisou o PR #24 do Murilo (T13, seção 6.2 "Troca de perfil em tempo de execução" do
`docs/Documento_de_Projeto.md`) e pediu alterações em dois pontos. Os outros cinco foram deixados como comentário
opcional.

O que a revisão conferiu e achou certo:

- **Valores do exemplo:** rodoviário, 500 kg, 1000 km. A base é 1700 / 18,6667 / 31. ECONOMICO dá 1445,00 / 23,33 /
  31,00, RAPIDO 2380,00 / 14,93 / 35,65 e ECOLOGICO 1870,00 / 20,53 / 21,70, iguais aos da 8.2. Na entrega, a
  auditoria soma 21,70, o CO₂ do perfil vigente (ECOLOGICO).
- **Nomes:** os métodos e as classes são os da 2.2.1 a 2.2.3: `trocarPerfil`, `simular`, `calcularAtual`,
  `permiteTrocaDePerfil` e `Encomenda.calcular(perfil)`.
- **Regras e Mermaid:** as regras RN 7, RN 8 e ET 4 são respeitadas, e o Mermaid está válido.
- **Cartões e merge:** a citação "T15 a T17" nos ganchos está certa (cenários 1 a 4, 5 a 8 e 9 a 12), e o PR mescla
  sem conflito.

## Decisões tomadas

- **Avisos da inbox no GitHub aprovados pelos três.** Um workflow do GitHub Actions vai abrir uma issue atribuída a
  quem recebe cada recado novo da inbox, com o repositório público. O Alexandre revisa o PR do workflow, que vem da
  `logitech/murilolss`. O recado continua `pendente`, porque um recado de `grupo/` é fechado por quem assume o assunto,
  que é o Murilo.
  - Alternativa descartada (pelo Murilo, antes desta sessão): deixar o repositório privado até a entrega.
- **PR #24 com pedido de alterações em 2 pontos**, por serem justificativas que a banca pode cobrar na defesa:
  1. **Decisão 2 da 6.2:** a frase "A ET 3.2 proíbe isso" está imprecisa, porque a ET 3.2 trata de modal e perfil, e
     não de status. A justificativa correta é a da 2.2.3: nenhum `if` sobre qual é o status atual (State). Além disso,
     o cenário CANCELADO obrigaria a alterar o `Transporte`.
  2. **Decisão 3 da 6.2:** falta o motivo principal. A RN 8 só avisa mudança de status ou de posição, então avisar na
     troca de perfil contraria a regra e faria falhar o caso "Nenhum aviso a ninguém" da 8.6.
  - Alternativa descartada: aprovar com tudo como comentário. Os dois pontos são frases que alguém repetiria na
    defesa.
- **Pontos opcionais (comentário no PR #24):**
  - Escrever "(hoje, só ENTREGUE)" no `else` do diagrama, pensando no CANCELADO.
  - Limitar o caso "trocar para o próprio perfil" a `AGUARDANDO` e `EM_TRANSITO`.
  - Registrar que `trocarPerfil(null)` fica com o T14.
  - No passo 4, citar a RN 7 no lugar da 8.6.
  - Citar o cenário 3 ("muda o perfil ativo") nos ganchos.

## Erros e rejeições da IA

Nenhum.

## Pendências

- **Murilo:** ajustar os pontos 1 e 2 do PR #24 e decidir sobre os opcionais. Depois disso, o Alexandre confere e
  aprova.
- **Murilo:** escrever o workflow dos avisos da inbox e abrir o PR, com o Alexandre de reviewer. Também é ele quem
  fecha o recado de `inbox/grupo/`.
- **Alexandre (T14):** o mecanismo da operação rejeitada no `Status` e no `Transporte` (valor de retorno ou exceção),
  agora também o caso do perfil nulo em `trocarPerfil(null)`, se o Murilo acatar o ponto 5.
- **Recado ainda pendente:** `inbox/ale/2026-11-16-de-murilo-pdf-do-documento.md`, um aviso de que o PDF é gerado com
  `/documento` e não vai para o git.
- **Cada integrante:** conferir em github.com/settings/notifications se os avisos de "Participating" estão ligados.

## Próximos passos

- Quando o Murilo subir os ajustes, revisar de novo o PR #24 e aprovar. Depois do merge, avisar o Murilo para rodar
  `/sincronizar-quadro`.
- Revisar o PR do workflow da inbox quando ele chegar.
- Seguir com o T14 (fluxo da mudança de status e avisos, seção 6.3), que depende da 6.2 aprovada.
