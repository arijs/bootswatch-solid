# 2026-07-20 — Granular mode: lazy per-theme scope loading

## Prompt original

> When I open this page from dev server:
> `http://localhost:5175/ui/offcanvas/default-offcanvas?style-loader=granular`
> I see many network requests that in theory should not be needed, like scope
> files for all themes beyond the current theme ("bootstrap" by default). They
> seem to be loaded by Ve2Shell.tsx, but the page should only execute
> Ve2GranularShell in theory from the url. Am I missing something?

Follow-up: proceed with **Option A** (runtime-only async scope resolution), then
document + commit + push.

## O que foi implementado

Em `--style-loader=granular` a página carregava os 27 `themes/*/scope.css` (um por
tema) mesmo usando um só. Havia **duas** fontes de import estático:

1. **`theme-runtime.ts`** (gerado) importava os 27 `scope.css` estaticamente para
   montar o mapa `themeScopes`, consumido por `resolveVe2ThemeClass()` de forma
   síncrona. Um lookup de uma chave arrastava os 27 módulos de efeito colateral.
2. **`Ve2ShellRuntime.tsx`** importava `Ve2Shell` estaticamente; como `Ve2Shell`
   também importa os 27 `scope.css`, o módulo do fallback carregava tudo mesmo no
   branch granular do `<Show>` (o `<Show>` controla renderização, não import).

Correções (Option A — só runtime, sem mexer no emitter/contract):

- **Gerador `generate-granular-loaders.mjs`**: substituído o mapa estático
  `themeScopes` + `resolveVe2ThemeClass` por `ve2ThemeScopeLoaders`
  (`() => import('../themes/<t>/scope.css').then(m => m.<t>Scope)`) + a função
  `loadVe2ThemeScope()`. `theme-runtime.ts` regenerado.
- **`Ve2GranularShell.tsx`**: resolve a scope class de forma assíncrona via
  `createEffect(themeKey, …)` (forma de 2 args do Solid 2.0) para um signal, com
  guarda de resolução obsoleta, e só renderiza a subárvore atrás de `<Show>`
  quando o único `scope.css` do tema ativo carrega. Espelha o padrão `themeReady`
  já existente em `Ve2Shell`.
- **`Ve2ShellRuntime.tsx`**: `Ve2Shell` agora é `lazy()`, então os 27 imports de
  scope só carregam quando o modo theme/literal é realmente usado.

Detalhe do Solid: a versão do projeto é **solid-js 2.0.0-beta.7**, onde `on` e
`createResource` não existem e escrever signal síncrono dentro de
`createRenderEffect` viola `SIGNAL_WRITE_IN_OWNED_SCOPE`. A forma de 2 args do
`createEffect(source, effectFn)` roda o callback fora do escopo "owned", que é o
que permite o write — como já fazia o `Ve2Shell`.

## Antes / depois

Requests de `scope.css` na rota `/ui/offcanvas/default-offcanvas`:

| Página | Antes | Depois |
|---|---:|---:|
| granular (bootstrap) | 27 | **1** (`bootstrap`) |
| granular (`&theme=darkly`) | 27 | **1** (`darkly`) |
| theme mode (inalterado) | 27 | 27 |

Theme/literal mode continua carregando 27 — é o caminho do monólito `Ve2Shell`,
fora do escopo desta correção.

## Como foi testado

Verificação funcional via Playwright contra um dev server limpo (porta alternativa,
pois o do usuário estava com deps otimizadas defasadas):

- Contou requests casando `/themes/<t>/scope.css` por rota.
- Asseverou que `.bd-example` renderiza (scope aplicado) e que não há `pageerror`.
- Resultado: granular default → 1 scope; granular `&theme=darkly` → 1 scope
  (darkly, troca de tema funciona); theme mode → 27; todos renderizam, 0 erros.

`biome check` limpo nos arquivos alterados. `tsc` sem erros nos arquivos alterados
(os ~11k erros do `tsc` raiz são ruído pré-existente do monorepo: `node_modules`
do astro e `.css.ts` do vanilla-extract sob o tsconfig raiz frouxo).

## Testes criados/alterados

Nenhum teste automatizado permanente adicionado — a verificação foi um script
Playwright descartável (o projeto verifica o caminho granular pela suíte de
screenshots `capture-leaf-screenshots.mjs`, não por unit tests de runtime). O
invariante contínuo é a métrica de contagem de scope requests descrita acima.

## Arquivos

- `scripts/generate-ve-theme/generate-granular-loaders.mjs`
- `ve-project2/src/theme-runtime/theme-runtime.ts` (regenerado)
- `ve-project2/src/components/shell/Ve2GranularShell.tsx`
- `ve-project2/src/components/shell/Ve2ShellRuntime.tsx`

> Nota: `ve-project2/index.html` aparece como modificado no working tree, mas é uma
> mudança **pré-existente** a esta sessão (reordenação dos `<link>` de fontes para
> dentro do `<head>`), não incluída neste commit.
