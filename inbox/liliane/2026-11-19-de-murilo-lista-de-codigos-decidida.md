---
para: liliane
de: murilo
data: 2026-11-19
tipo: aviso
status: concluido
---

## O que é

A lista única de códigos está decidida e documentada na 2.2.6, no PR #43. Falta só a aprovação do Alexandre. Depois
do merge, dá para atualizar o diagrama do T09 no PR #40.

## Contexto

- PR #43: https://github.com/lilianeperim-ifsp/Projeto_Final_INOO/pull/43
- A resposta completa, com o que muda em cada diagrama, está no seu recado:
  `inbox/murilo/2026-11-18-de-liliane-lista-unica-de-codigos.md`.
- **Resumo para o diagrama:**
  - classes novas `CodigoDeModal` (`-String codigo`, `-Modal modal`) e `CodigoDePerfil` (`-String codigo`,
    `-Perfil perfil`), com construtor e getters;
  - setas `FabricaDeCodigos` → `CodigoDeModal`/`CodigoDePerfil` e de cada par → `Modal`/`Perfil`;
  - na 3.6, a fábrica ganha `-List~CodigoDeModal~ modais`, `-List~CodigoDePerfil~ perfis`,
    `-indiceDoModal(String codigo) int` e `-indiceDoPerfil(String codigo) int`;
  - nas notas da 3.1 e da 3.6 e na decisão 6 da 3.7, a pendência sai. Depois, gerar os PNGs de novo.

## Resposta

**2026-11-22, Liliane:** ciente. O #43 foi mergeado, e o diagrama do T09 foi atualizado no PR #40 (commit `dc3a990`), como pede o recado `2026-11-22-de-murilo-atualizar-pr-40-apos-merge-do-43.md`.
