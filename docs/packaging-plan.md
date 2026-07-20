# Plano de empacotamento, compilação e publicação — `@arijs/bootswatch-ve`

Status: **proposta** (decisões de arquitetura fechadas com Rafael em 20/07/2026). Este doc define COMO transformar o que já funciona no repo (conversão VE element-owned + carregamento granular por família/tema, verificado com zero-mismatch) em um pacote npm publicável, organizado e testável.

## 1. Decisões fechadas

1. **Um único pacote monolítico `@arijs/bootswatch-ve`.** Nada de 27 pacotes de tema + auxiliares — versionar e sincronizar 29 publicações seria dor de cabeça. Uma pasta por tema, CSS separado por família dentro, tudo numa versão só.
   - *Benefício colateral:* o CSS pré-compilado (com hashes do VE) e o **contract** (nomes de classe hasheados) saem juntos, na mesma versão — nunca dessincronizam. O problema de "identidade de hash entre builds" desaparece por construção.
2. **Componentes = CSS pré-compilado (VE) + manifesto de contratos.** O consumidor importa o `.css` já compilado (com os hashes) e aplica as classes de contrato exportadas em JS. Não precisa rodar VE para os componentes.
3. **Utilities = UnoCSS (JIT), classes-string.** Abandonado o Sprinkles. Queremos JIT de verdade (só o que é usado é gerado) e autoria por string (`class="mb-3 text-primary"`, copiar/colar). Entregamos um **preset UnoCSS próprio** para os utilities do Bootstrap.
   - **Sem estilos padrão** (sem reset/reboot no preset).
   - **Componível** com o preset Tailwind/Wind do UnoCSS, se o consumidor quiser os utilitários populares junto.
   - **Prefixo configurável — SÓ nas utilities.** Padrão `""` (→ `mb-3`, fiel ao Bootstrap); custom, ex. `bsu-` (→ `bsu-mb-3`). **Scope e classes de componente NÃO levam prefixo:** já são hashes do VE (sem colisão), e prefixá-los só incharia o CSS e não seria configurável (o consumidor importa o CSS compilado pronto). O prefixo é exclusivo do preset de utilities.
   - **Caminho principal das utilities = o preset (JIT).** Por completude, a família `utilities` também é exportada como CSS pré-compilado por tema (`themes/{theme}/utilities.css`, como as outras famílias), para quem quiser importar direto ou processar por conta própria — mas é a versão baked/grande (§1 do problema), secundária ao preset.
   - **Vars 100% hasheadas (decisão §9.6).** Nada de `--bs-*` literal no CSS publicado (risco de colisão no projeto do consumidor). O preset **referencia os nomes hasheados compilados** — o que continua theme-agnostic porque o mapa de vars é compartilhado pelos 27 temas (cada tema só atribui valores aos mesmos nomes hasheados), e preset+temas+contract saem do mesmo build/versão do pacote, então os hashes sempre casam. Requer uma **camada de vars públicas** (ver §3.3-bis).
   - Utilities de cor **referenciam** as vars públicas do tema (hasheadas) (como o Bootstrap 5.3 já faz: `.text-primary { color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) }`), logo o preset é **theme-agnostic** — um só serve os 27 temas; a cor vem do scope ativo.
4. **Prefixo chega aos componentes via context** (`createContext`/`useContext`): os componentes (de exemplo, e os do DDSOFT) leem o prefixo ativo e o scope de tema do contexto, em vez de hard-coded.
5. **Componentes SolidJS só como exemplo/demonstração** dentro do pacote (fonte + JS compilado + HTML renderizado) — **não** são API reutilizável. Componentes genéricos de verdade (ex.: uma `<Table>` configurável) não são práticos de manter aqui.
6. **O frontend do DDSOFT cria os próprios componentes SolidJS**, usando os nomes de classe exportados nos contracts de `@arijs/bootswatch-ve` + as classes utilitárias do preset.

### Não-objetivos

- Publicar componentes UI reutilizáveis.
- Manter compatibilidade de "colar HTML do Bootstrap" para os **componentes** (as classes de componente são hashes do VE, não `.btn`); para **utilities** a compatibilidade de string é preservada (via preset UnoCSS).
- Forçar o consumidor a usar VE (só usa UnoCSS, que ele já teria para os utilities).

## 2. Anatomia do pacote

```
@arijs/bootswatch-ve/
  package.json            # exports map; version única; sideEffects corretos
  dist/
    contract/             # JS+dts: nomes de classe/vars hasheados (compilado de theme-contract/**)
      index.js  index.d.ts
    themes/
      {theme}/            # ×27
        scope.css         # atribuição dos --bs-* + classe de scope do tema (side-effect)
        scope.js/.d.ts    # export const {theme}Scope = "<hash>"
        {family}.css      # ×~33 — regras .scope.contract da família (side-effect)
        index.css         # conveniência: todas as famílias do tema
        literal.css       # conveniência: monólito literal do tema
    preset/               # UnoCSS: presetBootswatch({ prefix })  (JS+dts)
      index.js  index.d.ts
    solid/                # runtime mínimo: BootswatchProvider + useUtilityPrefix + helper u()
      index.js  index.d.ts
  examples/               # demo (src Solid + JS compilado + HTML renderizado) — FORA do exports
```

### `exports` (esboço)

```jsonc
{
  "exports": {
    "./contract": { "types": "./dist/contract/index.d.ts", "default": "./dist/contract/index.js" },
    "./preset":   { "types": "./dist/preset/index.d.ts",   "default": "./dist/preset/index.js" },
    "./solid":    { "types": "./dist/solid/index.d.ts",    "default": "./dist/solid/index.js" },
    "./themes/*/scope":     "./dist/themes/*/scope.js",
    "./themes/*/scope.css": "./dist/themes/*/scope.css",
    "./themes/*/*.css":     "./dist/themes/*/*.css",
    "./themes/*":           "./dist/themes/*/index.css"
  },
  "sideEffects": ["*.css"]
}
```

`sideEffects: ["*.css"]` garante que os `.css` importados nunca sejam tree-shaken (são efeito colateral desejado), mas o JS de contract/preset/solid permanece tree-shakeable.

## 3. As três camadas

### 3.1 Componentes (famílias) — CSS pré-compilado + contract

- Fonte: o pipeline atual (`generate-ve-literal --families`) já emite `themes/{theme}/{family}/styles.css.ts` no modelo element-owned (`.scope.contract`), verificado com zero-mismatch.
- **Compilação:** uma única passada VE (Vite/rollup em modo lib) compila `theme-contract/**` + todos os `themes/**` → `dist/themes/{theme}/{family}.css` (+ `scope.css`, `index.css`, `literal.css`).
- **Contract manifesto:** os `.css.ts` de `theme-contract/**` já **exportam** os nomes hasheados como JS (`export const varBsBadgePaddingX = createVar()`, `export const btn = style(...)`). Basta compilar esses módulos para JS e agrupá-los em `dist/contract/index.js` — o "manifesto" é literalmente esse JS. Zero trabalho de mapeamento manual.
- **Determinismo:** fixar `identifiers` do `@vanilla-extract/vite-plugin` para uma função estável, de modo que rebuilds reproduzam os mesmos hashes (importante para diffs de versão limpos e para o consumidor confiar nos nomes).

### 3.2 Utilities — preset UnoCSS `presetBootswatch`

- **API:** `presetBootswatch({ prefix = '' }): Preset`. O consumidor põe no `uno.config.ts`; UnoCSS gera **só** as classes que aparecem no código (JIT).
- **Regras (decidido, §9.2):** derivadas do mapa `$utilities` do Sass do `bootstrap-fork` (fonte primária) e **validadas** contra a seção Utilities do `screenshots/{theme}/bootstrap.css` (verificação cruzada, mesma fonte que o literal já confia).
- **Breakpoints infix:** Bootstrap usa `mb-md-3` (infix), não `md:mb-3` (prefixo). Implementar como **variant** UnoCSS que reconhece `-{sm|md|lg|xl|xxl}-` e embrulha em `@media (min-width: …)`.
- **Cores → vars:** átomos de cor emitem `var(--bs-*)`; não embutem valor de tema → o preset é único e theme-agnostic. O valor vem do `scope.css` do tema ativo.
- **Sem reset:** o preset não injeta reboot/normalize. Reboot (se desejado) vem da família `global`/`reboot` dos componentes, que o consumidor importa explicitamente.
- **Composição:** documentar `presets: [presetBootswatch({ prefix: 'bsu-' }), presetWind3()]` para quem quiser Tailwind junto; o prefixo evita colisão.
- **Prefixo:** `''` → tokens idênticos ao Bootstrap; `'bsu-'` → `bsu-mb-3`. (Formato do token preservado: `mb-3`, não `mb3` — ver Aberto #1.)

### 3.3 Runtime Solid mínimo (`/solid`) — contexto do prefixo/scope

Não são componentes UI; é o mínimo para os componentes do consumidor ficarem agnósticos:

- `BootswatchProvider` — provê `{ scope, utilityPrefix }`.
- `useUtilityPrefix()` / `u(...classes)` — helper que prefixa strings de utility (`u('mb-3','text-primary')` → `'bsu-mb-3 bsu-text-primary'` conforme o prefixo do contexto).
- Assim os componentes de exemplo (e os do DDSOFT) escrevem utilities sem hard-coard o prefixo.

### 3.3-bis Camada de vars públicas (o elo preset ↔ tema)

Achado (20/07): o contract VE hasheia **todas** as `--bs-*`, mas cobre só as vars **internas de componente** (`--bs-btn-*`…). Das **65 vars que as utilities usam**, só **10** estão no contract; as outras **55 são as globais de `:root`** do Bootstrap 5.3 (`--bs-primary-rgb`, `--bs-*-bg-subtle`, `--bs-*-text-emphasis`, `--bs-border-radius*`, `--bs-box-shadow*`, `--bs-focus-ring-*`, `--bs-gradient`, `--bs-body-*-rgb`…). Hoje elas não têm um nome hasheado compartilhado.

Plano (decisão §9.6 — tudo hasheado, sem literal): criar um **mapa único de vars públicas** `--bs-<nome> → <hash determinístico>` (ex.: `--bsvev-<hash8>`), usado por DOIS lados que precisam concordar:

1. **Scope de cada tema emite as vars públicas hasheadas com valores.** Extrai o bloco `:root` do `screenshots/{theme}/bootstrap.css` (os valores por tema já existem lá) e emite `${scope} { --bsvev-XXXX: <valor do tema> }`. Uma vez por tema, ~65 linhas.
2. **generate-preset substitui** cada `var(--bs-…)`/`--bs-…:` das utilities pelo hash do mapa. Assim `.text-primary { color: rgba(var(--bsvev-XXXX), var(--bsvev-YYYY)) }`.

Como o mapa é o mesmo para os 27 temas (contract compartilhado) e determinístico, o preset segue único e theme-agnostic; e como sai tudo no mesmo pacote/versão, nunca dessincroniza. As vars que a utility **seta e lê na mesma regra** (opacidades) também são hasheadas pelo mapa, por consistência.

## 4. Como o DDSOFT consome (receita)

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetBootswatch } from '@arijs/bootswatch-ve/preset'
export default defineConfig({
  presets: [ presetBootswatch({ prefix: 'bsu-' }) /*, presetWind3() se quiser */ ],
})
```

```tsx
// carrega scope do tema + SÓ as famílias usadas (side-effect CSS)
import '@arijs/bootswatch-ve/themes/flatly/scope.css'
import '@arijs/bootswatch-ve/themes/flatly/buttons.css'
import { flatlyScope } from '@arijs/bootswatch-ve/themes/flatly/scope'
import { btn, btnPrimary } from '@arijs/bootswatch-ve/contract'
import { u } from '@arijs/bootswatch-ve/solid'

// componente do DDSOFT, dono do próprio JSX:
<button class={`${flatlyScope} ${btn} ${btnPrimary} ${u('mb-3')}`}>Salvar</button>
```

Regras: (1) só importa a CSS das famílias que renderiza → granularidade real; (2) UnoCSS gera só as utilities usadas → JIT; (3) contract e CSS vêm da **mesma versão** do pacote → hashes sempre casam.

## 5. Pipeline de build (organizado)

Passos, orquestrados por um `scripts/build-package.mjs` novo:

1. `generate-ve-literal --families --all-themes` (já existe) → `.css.ts` por família/tema atualizados.
2. **Compilar componentes:** Vite lib/rollup + `@vanilla-extract/vite-plugin` (identifiers estáveis) → `dist/themes/**` (.css) + `dist/contract/index.js|d.ts`.
3. **Compilar preset e /solid:** `tsup`/rollup → `dist/preset`, `dist/solid` (ESM + d.ts).
4. **Montar o pacote:** gerar `package.json` (version, exports, files, sideEffects), copiar `examples/`.
5. **Publicar:** ver §7.

Cada passo é idempotente e verificável isolado.

## 6. Testabilidade (reusar o harness que já existe)

O repo já tem verificação madura (Playwright pixel-diff em 433 cenários, markup parity, family-closure). O plano **aponta esse harness para os artefatos empacotados**, não para o `src`:

- **Componentes:** um app-fixture importa `dist/themes/**` + `dist/contract` (como o DDSOFT faria) e roda o pixel/markup diff contra o baseline do Bootstrap. Prova que o `.css` publicado + os hashes do contract renderizam idênticos.
- **Preset utilities:** página-fixture que usa um conjunto amplo de strings de utility (com e sem prefixo) compilada pelo UnoCSS, diff pixel contra o equivalente Bootstrap. Cobre a "reexpressão semântica" das utilities (que sai da garantia literal — ver §8).
- **CI gate:** `npm test` = build do pacote → fixtures → diffs. `publish` só passa com o gate verde.

## 7. Versionamento e publicação

- **Versionamento (decidido, §9.5):** `npm version` + CHANGELOG manual (changesets é overkill para 1 pacote). Semver: **minor** para novos temas/famílias/utilities; **patch** para correções de fidelidade; **major** se um hash de contract mudar de forma incompatível (por isso identifiers estáveis importam).
- **Escopo `@arijs`:** publicar sob o org no npm (acesso ao registry a resolver na hora — separado do GitHub).
- **CI:** GitHub Actions no `arijs/bootswatch-solid`: build + test (§6) em PR; publish em tag/release, gated no test.
- **`bootstrap-fork` (decidido, §9.3):** vira pacote npm próprio (ex.: `@arijs/bootstrap`), publicado em separado; o `bootswatch-ve` depende dele normalmente (sai o `file:`). Necessário para a Fase 3 (preset via Sass), não para a Fase 1.

## 8. Riscos e trade-offs (explícitos)

- **Fidelidade das utilities:** o preset UnoCSS é uma **reexpressão** do Bootstrap, não a cópia regra-a-regra verificada. Baixo risco (utilities são mecânicas; cores mapeiam para os mesmos vars), mas essa camada passa a ser garantida pelo harness de screenshot, não pela prova literal. Os **componentes** seguem literal-verificados.
- **Autoria mista:** componentes = classes hasheadas do contract; utilities = strings legíveis. É intencional, mas o consumidor precisa entender as duas naturezas.
- **UnoCSS obrigatório no consumidor** (para utilities). Aceitável: o DDSOFT é SolidJS+Vite, `@unocss/vite` é trivial.
- **Tamanho do pacote:** inclui 27 temas × ~33 famílias de CSS + examples. Grande no disco do node_modules, mas o consumidor só **importa** o que usa; o resto não entra no bundle. Avaliar publicar `examples/` só no repo e não no tarball (via `files`) se o peso incomodar.

## 9. Decisões (fechadas 20/07/2026)

1. **Token com prefixo:** preservar os nomes EXATOS do Bootstrap — prefixo apenas prepende. `''` → `mb-3`; `'bsu-'` → `bsu-mb-3` (com hífen). ✔
2. **Fonte das regras do preset:** derivar do mapa `$utilities` do Sass do `bootstrap-fork` e **validar** contra a seção Utilities do `bootstrap.css` de referência. ✔
3. **`bootstrap-fork`:** **publicar como pacote npm próprio** (ex.: `@arijs/bootstrap`) e depender dele normalmente — sai o `file:`. É pré-requisito da **Fase 3** (o preset precisa do Sass `$utilities`); a Fase 1 (CSS+contract) não depende dele. ✔
4. **`examples/` no tarball:** **incluir** — medição mostrou que examples são desprezíveis (~KB) perto do CSS (dezenas de MB). O cuidado real de tamanho é **excluir `screenshots/` (241M de PNGs de baseline) via `files`/`.npmignore`**, e decidir se o **`literal.css` (monólito) vai ou fica opt-in** (dobra o CSS por tema). Confirmar o número do tarball ao fim da Fase 1. ✔ (com sub-item a confirmar)
5. **Tooling de versão:** `npm version` simples + CHANGELOG manual. ✔
6. **Vars 100% hasheadas, sem `--bs-*` literal** (colisão em projetos do consumidor). O preset referencia os nomes hasheados compilados; exige a **camada de vars públicas** da §3.3-bis (mapa único `--bs-* → hash`, emitido no scope de cada tema e substituído no preset). ✔

## 10. Roteiro de implementação (fases)

Ordem revista (20/07/2026, a pedido do Rafael): fazer **F3 + F4 antes** de F1/F2, para já compilar com o preset de utilities integrado nos componentes de exemplo. A espinha de CSS de componente + contract (o núcleo da F1) **já está provada** — ver `scripts/build-package.mjs` e o commit da Fase 1.

Nota de ambiente: o build do **app** (`ve2:build`) não roda no sandbox do agente — `index.tsx` importa `@arijs/stream-xml-parser` → `css-selector-parser`, bloqueado pela política de pacotes do sandbox (403). Não afeta o build do **pacote** (compila só os `.css.ts`). No ambiente local do Rafael tudo instala normalmente.

- **F1 (espinha) — FEITO:** `scripts/build-package.mjs` compila `dist-pkg/themes/bootstrap/{scope,global,buttons}.css` + `contract.js` só com o plugin VE, identifiers determinísticos (`bsve_`). Verificado: seletores `.scope.contract`, hashes do manifesto casam com o CSS, e md5 estável entre builds. **Falta:** `package.json`/exports, fix do naming `scope.css.ts.css`, e o pixel-diff do artefato.
- **F3 — FEITO:** `presetBootswatch({ prefix })` gerado por `scripts/generate-preset.mjs` (compila `bootstrap-utilities.scss` com `sass` → **autoprefixer** com o browserslist do Bootstrap → parseia em **482 utilities atômicas** + variants responsiva/print). `preset/preset-bootswatch.mjs` consome os dados gerados. Cores via `--bs-*` (theme-agnostic); prefixo só nas utilities. **Validado: 46/46 classes batem com `bootstrap.css`; 891 variantes responsivas com 0 mismatch** (`scripts/preset-probe.mjs`). Gaps conhecidos: RFS fluido de `fs-1..4` nas media, estados `:hover/:focus` dos link-utilities, `.clearfix::after`/`.ratio::before`. Falta ainda: documentar composição com Tailwind e empacotar como `dist-pkg/preset`.
- **F4 — `/solid` + exemplos:** `BootswatchProvider` + `u()`; portar os componentes de exemplo para usar o preset + os contracts; incluir em `examples/`. Compilar a demo integrada.
- **F2 — Todos os temas:** estender o build de componentes aos 27; validar granular por família; completar `package.json`/exports do §1 (parte restante da F1).
- **F5 — CI + publish:** Actions com gate de teste; primeira publicação `@arijs/bootswatch-ve` (`npm version` + token npm do `@arijs`).
- **F6 — Integração DDSOFT:** o frontend consome o pacote publicado; feedback real fecha o ciclo.
```
