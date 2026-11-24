---
para: ale
de: murilo
data: 2026-11-24
tipo: tarefa
status: pendente
prioridade: maxima
---

## O que é

Revisei o PR #61 (T15, seção 7, cenários 1 a 4) e pedi mudanças ("Request changes"). São três ajustes pequenos, que
peço para você fazer antes de tudo. A T16 (Liliane) e a minha T17 dependem do formato comum da seção 7, e a Etapa 1
vence em 27/11.

## Contexto

- PR #61: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/61. A revisão completa está lá.
- **Ajustes pedidos (antes do merge):**
  1. **Nota desatualizada na seção 8.** A abertura da 8 ainda diz "A seção 7 (cenários de evolução, T16 e T17) entra
     antes desta." Ela deve sair.
  2. **Quadro de situação no topo:**
     - A 6.3 deve passar a "Escrita", porque o PR #58 já foi mergeado.
     - As duas linhas da seção 7 devem ficar antes da linha da 8.
  3. **Formato comum da seção 7:**
     - Acrescentar "Decisões do cenário" e "Casos de borda" como campos opcionais, entre "Alteração ao vivo" e
       "Testes".
     - Dizer que a alternativa descartada pode ir dentro de uma decisão, como a 7.4 já faz.
     - Isso cobre também o campo extra da 7.2 ("Se o corporativo mudar mais do que os multiplicadores").
- **Sugestões, que não bloqueiam o merge:**
  - **7.1:** `java Main < entrada.txt` não funciona no PowerShell, que é o terminal do IntelliJ no Windows, e o passo
    não diz que é preciso compilar antes.
  - **7.2:** dizer que os multiplicadores são fictícios. No `EncomendaTest`, o valor esperado vem de uma conta feita à
    mão.
  - **7.4:** faltam dois casos de borda: limites invertidos no construtor, e o alerta assinado com o transporte já
    dentro da região.
- **Fora do PR, se quiser corrigir junto:** a 2.2.3 diz "(para o T15 e o T16)" sobre o CANCELADO, mas esse cenário é
  só da T16.
- Depois de subir os ajustes, me avise aqui que eu reviso de novo e aprovo.

## Resposta
