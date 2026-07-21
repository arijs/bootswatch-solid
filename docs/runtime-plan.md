# F7 — Runtime JS do Bootstrap para o pacote hasheado

Plano (não implementado) para permitir que os **componentes interativos do
Bootstrap** (modal, offcanvas, collapse, carousel, tooltip, popover, toast,
dropdown-via-JS) funcionem quando um consumidor instala o `@arijs/bootswatch-ve`
publicado. Hoje isso só funciona _dentro do monorepo_; o pacote publicado não
leva o runtime JS.

## O problema

No modelo hasheado, todas as classes e vars viram hashes (`.b1j3ahob0`,
`var(--b54j6y45)`). O JS oficial do Bootstrap procura elementos por nomes
_literais_ (`.modal`, `.dropdown-toggle`, `[data-bs-toggle]`) e lê `--bs-*` — nada
disso existe no CSS publicado, então o runtime oficial não acha nada.

A solução já existe no repo, em duas peças que **não são publicadas**:

1. **O fork do Bootstrap** (`bootstrap-fork/`, hoje `"bootstrap": "file:bootstrap-fork"`).
   Ele adiciona `extendDefaultConfig(config)` a cada plugin JS, permitindo
   sobrescrever os nomes de classe e seletores que o plugin usa (ex.:
   `CLASS_NAME_SHOW`, `SELECTOR_DIALOG`, `SELECTOR_DATA_TOGGLE`) — apontando-os
   para os hashes.
2. **Os 8 bridges `ve-*`** (`ve-project2/src/components/ui/*/ve-*.ts`). Cada um
   recebe os nomes hasheados e chama `bootstrap.<Plugin>.extendDefaultConfig({…})`
   + `destroy()`/`init()`. São **theme-agnostic** (os hooks vêm do `contract`,
   idêntico entre os 27 temas).

Por que sempre funcionou local: no monorepo, `import 'bootstrap'` resolve para o
fork (`file:bootstrap-fork`) e o app importa os `ve-*` do código-fonte. Um
consumidor do npm não recebe nenhum dos dois.

## Os dois artefatos a publicar

### 1. `@arijs/bootstrap-runtime` — o fork publicável

O `bootstrap-fork/package.json` tem hoje `name: "bootstrap"` (se passa pelo
oficial p/ o `import 'bootstrap'` resolver). **Não dá pra publicar por cima do
`bootstrap`** do npm. Renomear para `@arijs/bootstrap-runtime` e publicar só o
build JS.

Passos:

- `name: "@arijs/bootstrap-runtime"`, `publishConfig.access: "public"`.
- Versão: rastrear o upstream com sufixo VE — ex.: `5.3.8-ve.0` (deixa claro que
  é o Bootstrap 5.3.8 + patch VE) ou uma linha `0.x` própria. Escolha uma e
  documente.
- `files: ["dist/js"]` (só o JS compilado; o CSS do Bootstrap não vai — o CSS é o
  do `@arijs/bootswatch-ve`). `main`/`module`/`exports` já apontam p/
  `dist/js/bootstrap.esm.js`.
- Build: rodar o `js-compile` do fork (gera `dist/js/*`) antes do publish.
- `npm publish` a partir de `bootstrap-fork/` (subdir; publica normalmente).

### 2. `@arijs/bootswatch-ve/runtime` — os bridges `ve-*`

Novo entry-point no pacote que empacota os 8 bridges + o tipo
`BootstrapWithDefaults`. Importa o fork como **peer dependency**.

API (o que já existe nos `ve-*`, movida p/ o pacote):

| Módulo        | Exports                                   |
| ------------- | ----------------------------------------- |
| `ve-modal`    | `createVeModal`, `configureVeModal`       |
| `ve-offcanvas`| `createVeOffcanvas`, `configureVeOffcanvas` |
| `ve-collapse` | `configureVeCollapse`                     |
| `ve-carousel` | `createVeCarousel`, `configureVeCarousel` |
| `ve-dropdown` | `createVeDropdown`, `configureVeDropdown` |
| `ve-tooltip`  | `createVeTooltip`                         |
| `ve-popover`  | `createVePopover`                         |
| `ve-toast`    | `createVeToast`                           |

Mudança de fonte necessária: hoje os `ve-*` fazem `import * as bootstrap from
'bootstrap'`. Trocar para `import * as bootstrap from '@arijs/bootstrap-runtime'`
(sweep mecânico nos 8 arquivos) para que o bridge não dependa de o consumidor
_aliasar_ `bootstrap` no bundler dele. No próprio bootswatch-solid, trocar o
devDep `"bootstrap": "file:bootstrap-fork"` por
`"@arijs/bootstrap-runtime": "file:bootstrap-fork"` e renomear o
`bootstrap-fork/package.json`.

Empacotamento (estender `scripts/pack-dist.mjs`):

- Novo `assembleRuntime()`: esbuild dos `ve-*` num `runtime/index.js` (ESM),
  externalizando `@arijs/bootstrap-runtime`, `solid-js` e — importante — os
  contracts (as classes hasheadas NÃO entram no bundle do runtime; o consumidor
  as importa do `/contract` e as passa por argumento). Na prática o bundle do
  runtime é só a lógica dos bridges.
- `exports`: adicionar `"./runtime": { types: "./runtime/index.d.ts", default: "./runtime/index.js" }`.
- `files`: adicionar `"runtime"`.
- `peerDependencies`: adicionar `"@arijs/bootstrap-runtime": ">=5.3.8-ve.0"` (ou a
  linha escolhida) como **opcional** (`peerDependenciesMeta`) — só quem usa
  `/runtime` precisa.
- `.d.ts` do runtime: escrito à mão no pack-dist (como o do `/solid`), tipando
  cada `configureVe*`/`createVe*` com sua interface de `runtime classes`.

## Uso no consumidor (depois de publicado)

```sh
npm install @arijs/bootswatch-ve @arijs/bootstrap-runtime
```

```tsx
import '@arijs/bootswatch-ve/themes/bootstrap/index.css'
import { modal, modalBackdrop, modalBody, modalDialog, modalOpenHook, modalShowHook }
  from '@arijs/bootswatch-ve/contract'
import { configureVeModal } from '@arijs/bootswatch-ve/runtime'
import { useBootswatch } from '@arijs/bootswatch-ve/solid'

function Modal() {
  const { scope, cx } = useBootswatch()
  // Liga o JS do fork aos hashes. `modal` (hash) vira o nome do data-bs-toggle.
  configureVeModal({
    name: modal,
    modalBackdrop: `${scope()} ${modalBackdrop}`,
    modalBody,
    modalDialog,
    modalOpenHook: `${scope()} ${modalOpenHook}`,
    modalShowHook,
  })
  return (
    <button class={cx(/* btn… */)} data-bs-toggle={modal} data-bs-target="#m1">
      Abrir
    </button>
    /* …markup do modal com as classes de cx(modalDialog), etc. */
  )
}
```

Os nomes hasheados vêm do `/contract` (theme-agnostic); o `configureVe*` roda uma
vez (faz `destroy()`+`init()` no plugin do fork). Como os hashes são idênticos
entre temas, o mesmo runtime serve todos os 27.

## Passos de implementação (checklist)

1. Renomear `bootstrap-fork/package.json` → `@arijs/bootstrap-runtime`;
   `access: public`; definir a linha de versão; `files: ["dist/js"]`.
2. Sweep: `import 'bootstrap'` → `'@arijs/bootstrap-runtime'` nos 8 `ve-*`; ajustar
   o devDep no `package.json` da raiz.
3. `pack-dist.mjs`: `assembleRuntime()` + `./runtime` nos `exports` + `runtime` em
   `files` + peer opcional + `.d.ts` à mão.
4. Scripts: `pkg:build:fork` (roda `js-compile` no fork) e incluir no `pkg:ci`
   quando o `/runtime` entrar.
5. Publicar `@arijs/bootstrap-runtime` (trusted publishing, mesmo esquema OIDC do
   `publish.yml`; novo workflow ou job).
6. Bumpar `@arijs/bootswatch-ve` (minor: `0.2.0`) com o novo entry `/runtime`.
7. Smoke test: uma página que monta um modal/dropdown via `/runtime` e valida no
   Chromium que abre/fecha (o pixel-diff não cobre comportamento JS).

## Fora de escopo / notas

- **O DDSOFT não precisa disto.** Ele reimplementa a interatividade em Solid puro
  (o `Dropdown.tsx` etc.) e não importa `bootstrap` em lugar nenhum. Esta fase é
  para consumidores que queiram os componentes JS do Bootstrap contra o CSS
  hasheado.
- Não bloqueia a **0.1.0**: publique o pacote atual (CSS + contract + preset +
  solid) primeiro; a F7 é um incremento posterior (`0.2.0` + o fork publicado).
- O fork é um checkout completo do Bootstrap; publicar só `dist/js` mantém o
  tarball enxuto. Manter o fork em dia com o upstream é um custo recorrente à
  parte (rebase do patch `extendDefaultConfig`).
