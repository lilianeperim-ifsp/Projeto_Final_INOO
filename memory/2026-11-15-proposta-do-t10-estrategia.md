---
data: 2026-11-15
autor: Alexandre Santos
assunto: Proposta do T10 (estratégia de resolução dos pontos de variação)
---

## Resumo
Depois da revisão do PR #19 (ver `memory/2026-11-15-revisao-do-pr-19-t12.md`), o Alexandre quis começar o T10, que
será a seção 4 do `docs/Documento_de_Projeto.md` e corresponde ao item 4 da ET 6. O enunciado pede "como o projeto lida
com cada ponto de variação (o que muda entre modais, entre perfis e entre interessados) e o mecanismo escolhido para
isolar cada um".

O Claude levantou o escopo nas seções 1.5, 1.7 e 2 e propôs a estrutura abaixo. **Nada foi escrito no documento.** O
Alexandre decidiu esperar o merge do PR #19 e pediu um recado ao Murilo para ele priorizar os ajustes
(`inbox/murilo/2026-11-15-de-ale-priorizar-ajustes-pr-19.md`).

Também ficou registrado que o **T14 depende do T12**, porque a 6.3 entra depois da 6.1 e do título da seção 6, que só
existem no PR #19. Essa dependência não aparece na "Ordem de dependência" de `docs/divisao-projeto.md`.

## Decisões tomadas
- **Esperar o merge do PR #19 para escrever o T10.**
  - Por quê: a seção 4 entra no mesmo trecho em que o PR #19 insere a seção 6, logo depois da 2.2.6, e os dois mexem
    na tabela de situação do topo. A tabela da seção 4 também cita a `FabricaDeCodigos` com a lista única de códigos,
    que é um dos ajustes pedidos no review.
  - Alternativa descartada: escrever agora e resolver o conflito no `git pull origin dev` antes do PR.
- **Fronteira entre os cartões:**
  - o T10 descreve o **mecanismo** de cada ponto de variação;
  - o T11 dá o **nome do padrão** a cada mecanismo, com a alternativa descartada;
  - o T15 a T17 listam as **classes criadas e alteradas** de cada cenário.

  A sobretaxa (2.1.1) e o arredondamento (2.1.2), que a 1.7 punha no T10, já estão resolvidos, e o T10 só os cita.
- **Ainda não aprovadas:** a estrutura proposta e duas decisões novas, a constante `SEPARADOR` e a seção 4.3. As duas
  estão descritas em "Pendências".

### Estrutura proposta para a seção 4
- **4.1 Três regras que valem para todos os pontos:**
  1. O que varia fica atrás de uma abstração, e quem usa depende só dela (aulas 11 e 12).
  2. A regra comum é escrita uma vez, na abstração.
  3. O tipo concreto é escolhido em poucos lugares, todos conhecidos, e nenhum outro lugar pergunta o tipo (ET 3.2).
- **4.2 Tabela por ponto de variação**, com as colunas: o que muda, o que fica igual e onde, mecanismo, quem depende
  da abstração e cenários atendidos. Os pontos e o mecanismo de cada um:
  - **Modal:** classe abstrata com as fórmulas e 6 etapas `protected`. A `Encomenda` depende de `Modal`.
  - **Perfil:** interface mais composição. A `Encomenda` recebe o perfil em `calcular(perfil)`, e o `Transporte`
    guarda a referência do perfil vigente. Trocar o perfil é trocar essa referência.
  - **Status:** classe abstrata cujo comportamento padrão é rejeitar. O status atual devolve o próximo, e o
    `Transporte` troca o objeto.
  - **Interessados:** duas interfaces e duas listas no `Transporte`, com adicionar e remover em execução. O
    `Transporte` só percorre as listas.
  - **Sobretaxa:** uma regra só, em `Modal.freteBase`, com duas constantes (remete à 2.1.1).
  - **Arredondamento:** um método só, `ResultadoCalculo.arredondar` (remete à 2.1.2).
  - **Código para objeto:** `FabricaDeCodigos`, com a lista única de códigos.
  - **Separador, validação e formato da saída:** isolados na entrada e na saída, sem padrão. São a constante
    `SEPARADOR` e a sequência de validação no `InterpretadorDeLinha`, e o `FormatadorDeSaida.numero`.
- **4.3 Onde o tipo concreto aparece:** a lista completa, que serve de prova da ET 3.2 na defesa. Criar o objeto não é
  testar o tipo.
  - a `FabricaDeCodigos`, para o modal e o perfil;
  - o `Transporte`, para o `Aguardando` inicial;
  - o `Aguardando` e o `EmTransito`, para o próximo status;
  - quem monta os interessados, ou seja, os testes e o operador.
- **4.4 Alternativa descartada para o mecanismo geral:** um cálculo único com condicionais sobre o código, ou com
  parâmetros guardados em arrays indexados pelo modal. Ele fere a ET 3.2 ou espalha a regra de negócio pela entrada.

## Erros e rejeições da IA
Nenhum.

## Pendências
- **Murilo:** subir os ajustes do PR #19. O recado foi enviado nesta sessão.
- **Alexandre:** aprovar a estrutura da seção 4 e as duas decisões novas antes de escrever o T10:
  - a constante `SEPARADOR` no `InterpretadorDeLinha`, no lugar do `";"` direto no `split`, para o cenário da vírgula
    virar a troca de uma linha;
  - a seção 4.3, que é nova e não estava no catálogo.
- Registrar a dependência T12 → T14 em `docs/divisao-projeto.md`. O Claude ofereceu, e o Alexandre ainda não decidiu.
  Como é edição fora da inbox e da memória, iria por PR.

## Próximos passos
- Quando o PR #19 for mesclado:
  1. `/atualizar-branch`;
  2. confirmar a estrutura acima;
  3. escrever a seção 4 em `docs/Documento_de_Projeto.md`, atualizando a tabela de situação do topo;
  4. abrir o PR para a `dev`, com Liliane e Murilo como revisores, e deixar o recado para o Murilo sincronizar o quadro.
- Depois do T10, seguir para o T14, que também espera o PR #19, e para o T11.
