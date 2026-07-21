# F7 — Runtime JS do Bootstrap (`@arijs/bootstrap-runtime`)

Plano (não implementado) para os **componentes interativos do Bootstrap**
(modal, offcanvas, collapse, carousel, tooltip, popover, toast, dropdown-via-JS)
funcionarem quando um consumidor instala o CSS hasheado do `@arijs/bootswatch-ve`.
Hoje isso só funciona _dentro do monorepo_.

**Decisão (a pedido do Rafael):** um pacote só. O fork do Bootstrap e os pequenos
bridges `ve-*` são publicados **juntos** em `@arijs/bootstrap-runtime`. O
`@arijs/bootswatch-ve` segue puro (CSS + contract + preset + solid), sem entry de
runtime JS e sem peer dep de Bootstrap.

## O problema

No modelo hasheado, classes e vars viram hashes (`.b1j3ahob0`, `var(--b54j6y45)`).
O JS oficial do Bootstrap procura elementos por nomes _literais_ (`.modal`,
`.dropdown-toggle`, `[data-bs-toggle]`) — que não existem no CSS publicado. A
solução já existe no repo, em duas peças hoje **não publicadas**:

1. **O fork do Bootstrap** (`bootstrap-fork/`, hoje `"bootstrap": "file:bootstrap-fork"`).
   Adiciona `extendDefaultConfig(config)` a cada plugin JS, deixando sobrescrever
   os nomes de classe/seletores que o plugin usa (`CLASS_NAME_SHOW`,
   `SELECTOR_DIALOG`, `SELECTOR_DATA_TOGGLE`, …) — apontando-os para os hashes.
2. **Os 8 bridges `ve-*`** (`ve-project2/src/components/ui/*/ve-*.ts`). Cada um
   recebe os nomes hasheados e chama `bootstrap.<Plugin>.extendDefaultConfig({…})`
   + `destroy()`/`init()`. São **theme-agnostic** (os hashes são idênticos nos 27
   temas), então um único runtime serve todos.

Por que sempre funcionou local: no monorepo `import 'bootstrap'` resolve para o
fork e o app importa os `ve-*` do código-fonte. Um consumidor do npm não recebe
nenhum dos dois.

## O pacote `@arijs/bootstrap-runtime`

= o fork (JS compilado) **+** os 8 bridges `ve-*` + o tipo `BootstrapWithDefaults`.

### Fork

O `bootstrap-fork/package.json` tem hoje `name: "bootstrap"` (se passa pelo
oficial p/ o `import 'bootstrap'` resolver local). **Não dá pra publicar por cima
do `bootstrap`** do npm. Renomear para `@arijs/bootstrap-runtime`,
`publishConfig.access: "public"`, e:

- Versão: rastrear o upstream com sufixo VE — ex.: `5.3.8-ve.0` (Bootstrap 5.3.8 +
  patch VE) ou uma linha `0.x` própria. Escolha uma e documente.
- `files: ["dist/js", "ve"]` — o JS compilado do fork + os bridges. O **CSS do
  Bootstrap não vai** (o CSS é o do `@arijs/bootswatch-ve`).
- Build: rodar o `js-compile` do fork (gera `dist/js/*`) antes do publish.

### Bridges

Mover os 8 `ve-*` (+ `bootstrapWithDefaults.ts`) para dentro do pacote, num
`ve/`, e expô-los por um subpath: `@arijs/bootstrap-runtime/ve`. API (já existe):

| Módulo         | Exports                                       |
| -------------- | --------------------------------------------- |
| `ve-modal`     | `createVeModal`, `configureVeModal`           |
| `ve-offcanvas` | `createVeOffcanvas`, `configureVeOffcanvas`   |
| `ve-collapse`  | `configureVeCollapse`                         |
| `ve-carousel`  | `createVeCarousel`, `configureVeCarousel`     |
| `ve-dropdown`  | `createVeDropdown`, `configureVeDropdown`     |
| `ve-tooltip`   | `createVeTooltip`                             |
| `ve-popover`   | `createVePopover`                             |
| `ve-toast`     | `createVeToast`                               |

Sweep de imports nos bridges:

- `import * as bootstrap from 'bootstrap'` → import relativo ao JS do próprio fork
  (agora eles vivem dentro do pacote do fork). Assim o bridge não depende de o
  consumidor _aliasar_ `bootstrap`.
- Os imports de hashes do `theme-contract` (ver abaixo) resolvem via peer dep.

### Acoplamento com os hashes — duas opções

Cada bridge referencia alguns hashes de estado do `contract` (ex.: `modalFade`,
`collapsed`/`collapsing`, `show`, `active`, `varBsPosition`, `toastFade`/`toastShow`/
`toastShowing`/`toastHide`, `popoverShow`, `tooltipShow`, `hiding`/`showing`,
`fade`). Duas formas de o runtime obtê-los:

- **(Recomendado) Peer dep de `@arijs/bootswatch-ve`.** Os bridges importam esses
  hashes de `@arijs/bootswatch-ve/contract` (import re-apontado de
  `'../../../theme-contract/…'` → `'@arijs/bootswatch-ve/contract'`). Como é
  **peer** (não bundlado), resolve p/ a MESMA cópia do `@arijs/bootswatch-ve` do
  consumidor — os hashes sempre batem, sem risco de skew de versão. Menor mudança
  (assinaturas dos bridges intactas) e call-sites enxutos. Custo: o
  `@arijs/bootstrap-runtime` passa a ter `@arijs/bootswatch-ve` como peer (é um
  acoplamento honesto — os `ve-*` são específicos daquele contract).
- **(Alternativa) Tudo por argumento.** Mover esses hashes para o objeto de
  `runtime` de cada `configureVe*`/`createVe*`, sem nenhum import de contract.
  Aí `@arijs/bootstrap-runtime` fica **zero-dep** e agnóstico a design system (o
  consumidor passa todos os nomes). Custo: assinaturas mudam (ex.: `createVeToast`
  ganha um arg) e as chamadas ficam maiores.

## Uso no consumidor (depois de publicado)

```sh
npm install @arijs/bootswatch-ve @arijs/bootstrap-runtime
```

```tsx
import '@arijs/bootswatch-ve/themes/bootstrap/index.css'
import { modal, modalBackdrop, modalBody, modalDialog, modalOpenHook, modalShowHook }
  from '@arijs/bootswatch-ve/contract'
import { configureVeModal } from '@arijs/bootstrap-runtime/ve'
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
    /* …markup do modal com cx(modalDialog), etc. */
  )
}
```

Os nomes hasheados vêm do `/contract` (theme-agnostic); o `configureVe*` roda uma
vez (`destroy()`+`init()` no plugin do fork).

## Passos de implementação (checklist)

1. Renomear `bootstrap-fork/package.json` → `@arijs/bootstrap-runtime`;
   `access: public`; definir a linha de versão; `files: ["dist/js", "ve"]`;
   adicionar `exports` p/ `.` (o JS do fork) e `./ve` (os bridges).
2. Mover os 8 `ve-*` + `bootstrapWithDefaults.ts` p/ `bootstrap-fork/ve/`; sweep
   de imports (`'bootstrap'` → JS local do fork; contract → peer
   `@arijs/bootswatch-ve/contract`, opção recomendada).
3. `@arijs/bootstrap-runtime`: peer dep opcional `@arijs/bootswatch-ve`.
4. Build: `js-compile` do fork + compilar os bridges (tsc/esbuild → `ve/*.js` +
   `.d.ts`). Script `pkg:build:runtime`.
5. Publicar `@arijs/bootstrap-runtime` (trusted publishing OIDC, como o
   `publish.yml`; novo workflow/job, a partir de `bootstrap-fork/`).
6. No monorepo: trocar o devDep `"bootstrap": "file:bootstrap-fork"` por
   `"@arijs/bootstrap-runtime": "file:bootstrap-fork"` e ajustar os imports do
   app que hoje puxam os `ve-*` do `ve-project2/src/...` p/ o pacote (ou manter
   os dois enquanto migra).
7. Smoke test: página que monta um modal/dropdown via `/ve` e valida no Chromium
   que abre/fecha (o pixel-diff não cobre comportamento JS).

## Fora de escopo / notas

- **O DDSOFT não precisa disto.** Reimplementa a interatividade em Solid puro
  (`Dropdown.tsx` etc.) e não importa `bootstrap` em lugar nenhum. Esta fase é
  para consumidores que queiram os componentes JS do Bootstrap contra o CSS
  hasheado.
- Não bloqueia a **0.1.0**: publique o `@arijs/bootswatch-ve` atual primeiro; a F7
  é incremento posterior. O `@arijs/bootstrap-runtime` versiona à parte (não
  precisa de bump do `@arijs/bootswatch-ve`, que segue puro).
- O fork é um checkout completo do Bootstrap; publicar só `dist/js` (+ `ve`)
  mantém o tarball enxuto. Manter o fork em dia com o upstream é custo recorrente
  à parte (rebase do patch `extendDefaultConfig`).
