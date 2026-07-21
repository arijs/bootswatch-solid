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

Plano (decisão §9.6 — tudo hasheado pelo MESMO mecanismo do VE, sem literal e **sem namespace/prefixo próprio**; nomes de var caem no mesmo `--bsve_…` das classes):

1. **Estender o contract VE com as vars públicas que faltam** (as 55) como `createVar()`, num **arquivo novo** `theme-contract/_public-vars.css.ts` (arquivo separado para NÃO deslocar os hashes de `_vars.css.ts` e manter os componentes verificados). Elas passam a ser hasheadas exatamente como o resto (`--bsve_<hash>`), e viram exports JS no manifesto.
2. **Scope de cada tema atribui os valores** dessas vars (mesmo padrão das vars já existentes: `globalStyle(`${scope}${vars}`, { vars: { [varBsPrimaryRgb]: '13,110,253', … } })`), com os valores extraídos do `:root` do `screenshots/{theme}/bootstrap.css`.
3. **generate-preset lê o mapa `--bs-<nome> → hash`** (dos exports do contract compilado + os comentários que documentam o nome Bootstrap) e **substitui** cada `var(--bs-…)`/`--bs-…:` das utilities pelo nome hasheado. Assim `.text-primary { color: rgba(var(--bsve_XXXX), var(--bsve_YYYY)) }`.

Como o contract é compartilhado pelos 27 temas e os identifiers são determinísticos, o preset segue único e theme-agnostic; e como sai tudo no mesmo pacote/versão, nunca dessincroniza. As vars que a utility **seta e lê na mesma regra** (opacidades) também passam pelo mapa, por consistência — um nome hasheado por var do Bootstrap, válido para componentes e utilities.

**FEITO e validado (20/07).** 65 vars públicas; 59 atribuídas no scope de cada tema (do `:root`), 6 utility-local (opacidades). Pipeline (ordem importa): `gen-public-vars.mjs` (gera `_public-vars.css.ts` + `themes/*/public-vars.css.ts` + `public-vars.names.json`) → `gen-var-hashes.mjs` (compila `_public-vars` sozinho → `public-vars.hash.json`) → `generate-preset.mjs` (substitui `--bs-*` pelos hashes) → `build-package.mjs`. Verificado: o preset usa `var(--bsve_54j6y419)` para primary-rgb e o scope atribui `--bsve_54j6y419: 13, 110, 253` (o mesmo hash, valor do tema); `preset-probe` dá 46/46 de fidelidade (mapeando a referência) e **nenhum `--bs-*` literal** no CSS. Rough edge herdado: `scope.css.ts.css` (naming) segue para a F2.

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
6. **Vars 100% hasheadas pelo MESMO mecanismo do VE, sem `--bs-*` literal e sem namespace/prefixo próprio** (colisão em projetos do consumidor). As vars caem no mesmo `--bsve_…` das classes; **prefixo só existe (opcional) nas classes de utility do preset**. Exige estender o contract VE com as vars públicas que faltam (§3.3-bis) e o preset referenciar os nomes hasheados compilados. ✔

## 10. Roteiro de implementação (fases)

Ordem revista (20/07/2026, a pedido do Rafael): fazer **F3 + F4 antes** de F1/F2, para já compilar com o preset de utilities integrado nos componentes de exemplo. A espinha de CSS de componente + contract (o núcleo da F1) **já está provada** — ver `scripts/build-package.mjs` e o commit da Fase 1.

Nota de ambiente: o build do **app** (`ve2:build`) não roda no sandbox do agente — `index.tsx` importa `@arijs/stream-xml-parser` → `css-selector-parser`, bloqueado pela política de pacotes do sandbox (403). Não afeta o build do **pacote** (compila só os `.css.ts`). No ambiente local do Rafael tudo instala normalmente.

- **F1 — bootstrap completo:** `scripts/build-package.mjs` compila **todas as ~33 famílias** do bootstrap + `scope` + `public-vars` + `contract.js` (~586 nomes hasheados), só com o plugin VE, identifiers determinísticos (`bsve_`), naming normalizado. `utilities` baked excluída (o caminho é o preset). **Verificação de pixel:** o harness oficial (`capture-leaf-screenshots.mjs`) roda o pixel-diff — no ambiente do Rafael (fontes batem com os baselines); no sandbox do agente o diff acusa só AA/fonte de texto (caixa/cor idênticas, confirmado). **Sweep de port — FEITO (20/07):** hasheados os `--bs-*` literais residuais declarando os vars que faltavam nos `_vars.css.ts` (com o comentário `// --bs-x` que o registry lê): `gray-100..900`, `secondary/tertiary-color-rgb`, `breakpoint-xs..xxl`, `border-radius-2xl` (global); `breadcrumb-font-size` (ui/breadcrumb), `scroll-height` (ui/navbar), `dropdown-item-border-radius` (ui/dropdowns). Resultado: **0 literal `--bs-*` no artefato** (34 CSS, 189.1 KB, `emitted=2977 skipped=0`), só `--bsve_…` + o atributo HTML `data-bs-theme`. Três bugs do gerador corrigidos no caminho: (a) `symbolToCssVarName` perdia o hífen antes de dígito (`varBsGray100` → `--bs-gray100`); resolvido com o comentário explícito. (b) vars declarados em `_vars.css.ts` **e** `_public-vars.css.ts` (56 símbolos) tinham a família decidida pela ordem do `readdir` — se `_public-vars` (family=null) vinha primeiro, o import do var era descartado e o VE quebrava com `ReferenceError`; `contract-registry.mjs` agora torna `global` autoritativo p/ compartilhados e dá família `public-vars` (+ import `_public-vars.css`) aos exclusivos. (c) `emitKeyframes` não traduzia `var()` nos valores (vazava `var(--bs-progress-height)` no `@keyframes progress-bar-stripes`); passou a usar o mesmo `parseVeValue/formatVeValue`. **Empacotamento — FEITO (20/07):** `scripts/pack-dist.mjs` monta a raiz publicável `package/` no layout do §2 a partir do build VE + preset + `/solid` compilado. Contract tornado **theme-agnostic** (sem o re-export do scope). Dois bugs a mais achados e corrigidos: (d) o barrel incluía `literal/**` (monólito que re-declara os contracts por família) → nomes duplicados viravam **ambíguos p/ `export *`** e o ES os omitia silenciosamente (`btn`, `btnPrimary`, … sumiam); excluído o `literal/` → manifesto passou de 586 p/ **743 nomes**. (e) `exports` só aceita **um** `*` por padrão, então `./themes/*/*.css` era inválido e `buttons.css` resolvia p/ `…/buttons.css/index.css`; trocado por `./themes/*.css` (o `*` cruza barras, com prioridade sobre `./themes/*`). **Pacote verificado:** `@arijs/bootswatch-ve@0.1.0`, 43 arquivos, 62.9 kB tarball / 531.9 kB desempacotado, 0 literal, 0 CSS de demo; todos os `exports` resolvem (contract/preset/solid/themes) e os `.d.ts` passam no `tsc`. **F1 COMPLETO.**
- **F3 — FEITO:** `presetBootswatch({ prefix })` gerado por `scripts/generate-preset.mjs` (compila `bootstrap-utilities.scss` com `sass` → **autoprefixer** com o browserslist do Bootstrap → parseia em **482 utilities atômicas** + variants responsiva/print). `preset/preset-bootswatch.mjs` consome os dados gerados. Cores via `--bs-*` (theme-agnostic); prefixo só nas utilities. **Validado: 46/46 classes batem com `bootstrap.css`; 891 variantes responsivas com 0 mismatch** (`scripts/preset-probe.mjs`). Gaps conhecidos: RFS fluido de `fs-1..4` nas media, estados `:hover/:focus` dos link-utilities, `.clearfix::after`/`.ratio::before`. Empacotado como `package/preset` (`index.js` + `preset-bootswatch.mjs` + dados gerados + `index.d.ts`) na F1. Falta ainda: documentar composição com Tailwind.
- **F4 — FEITO:** runtime `/solid` (`BootswatchProvider` + `useBootswatch` + `useUtility`/`u()`; `prefixClasses` puro testado). O preset ganhou um **extractor** que reconhece `u('...')` e entrega os tokens já prefixados ao UnoCSS (senão o JIT, que varre a fonte, não geraria a classe prefixada que o `u()` emite em runtime). Demo integrada em `examples/demo/` (Solid + UnoCSS+preset prefixo `bsu-` + CSS do `dist-pkg`), **compilada e renderizada no Chromium**: botão com scope+contract (VE hasheado) + `bsu-mb-3`/`bsu-me-2` (JIT, só as usadas) + fundo `rgb(13,110,253)` vindo da var pública **hasheada**. Descoberta (já resolvida): restavam `--bs-*` literais no port (escala `--bs-gray-*`, `--bs-breakpoint-*`, uns rgb) — varridos no **sweep de port** da F1 (20/07); artefato hoje com **0 literal**.
- **F2 — Todos os temas — FEITO (20/07):** `generate-ve-literal --all-themes --families` regenerou os 27 temas (todos `skipped=0`, aplicando sweep + fix split-caret). `build-package.mjs` generalizado: itera os 27 temas (contract compilado UMA vez, theme-agnostic, junto do 1º tema; scope+public-vars+famílias por tema), e CONTA o literal residual por tema (falha se >0). Resultado: **0 literal `--bs-*` em TODOS os 27 temas** (5.23 MB de CSS granular; ~190–234 KB/tema). Dois temas tinham resíduo específico (`yeti`: `--bs-primary-color`; `zephyr`: `--bs-primary-bg`+`--bs-primary-color` — referenciadas mas nunca setadas no tema, como no original), resolvido declarando `varBsPrimaryColor`/`varBsPrimaryBg` no `_vars.css.ts` (manifesto: 743→745 nomes). `pack-dist` monta os 27 → `package/` (901 arquivos, 948.9 kB tarball / 11.1 MB desempacotado). **Theme-agnostic confirmado:** `contract`/`preset`/`solid` são únicos e compartilhados; `btn`=`bsve_xm6f6u1` idêntico em todos os temas (bootstrap e darkly usam os mesmos hashes de classe/var — só os VALORES em `scope`/`public-vars`/famílias mudam). Cada tema tem seu `scope.js` próprio (`darklyScope` ≠ `bootstrapScope`). Verificação de pixel definitiva por tema fica p/ o ambiente do Rafael (rodar a captura por tema; o bootstrap já deu 45/45).
- **Fix de fidelidade — split-dropdowns (20/07):** o Rafael rodou a captura no ambiente original e viu 23 mismatches, todos em `ui/dropdowns/split-*-dropdown` (~0.0035, determinísticos). Diagnóstico (medido por geometria de DOM no app ao vivo, independente de fonte): o override do caret `.dropdown-toggle-split::after {margin-left:0}` morava na família `ui/buttons`, mas sua BASE `.dropdown-toggle::after {margin-left:0.255em}` está em `ui/dropdowns`. Mesma especificidade (0,2,1) → empate resolvido por ORDEM DE FONTE. No monólito resolve (base antes do override, como no bootstrap.css); no **granular** `ui/dropdowns` carrega DEPOIS de `ui/buttons`, a base vence e o caret do split ganha `0.255em` em vez de `0` → deslocado ~4px, botão ~6px mais largo. **Fix:** `partSubjectFamily` (emit.mjs) co-loca o override do caret do split em `ui/dropdowns` (mesmíssimo padrão já usado p/ `[type=checkbox]→forms`), então o empate resolve por fonte. Verificado: caret `4.08px → 0px` (medição no app ao vivo); no sandbox do agente o ratio do split-primary caiu ~148px (o componente estrutural), o resto é font-AA do ambiente. **Nota metodológica:** o pixel-diff absoluto É dependente de ambiente (font-AA) — no sandbox do agente TODAS as folhas divergem por fonte (não-split `normal-dropdown` deu 0.028 > split 0.017); a verificação definitiva é no ambiente do Rafael (fontes batem). O bug estrutural, por ser de cascata CSS, reproduz em qualquer ambiente.
- **F5 — CI + publish — FEITO (workflows) / pendente (1ª publicação):** dois workflows do GitHub Actions.
  - `.github/workflows/ci.yml` (push/PR em `main`): gates **determinísticos** (independentes de ambiente) — `pkg:build` (compila os 27 temas só com o VE; falha se sobrar literal `--bs-*`), `pkg:pack` (monta a raiz publicável), `pkg:probe` (fidelidade 46/46 do preset), `npm pack --dry-run`; job `generated-up-to-date` regenera as famílias e falha se divergir do commit (confirmado determinístico); job `lint` (biome, informativo). **A verificação por screenshots NÃO está no CI** — o pixel-diff absoluto depende das fontes (font-AA); roda na máquina do mantenedor ou num runner com as fontes dos baselines (ver nota do fix split-caret).
  - `.github/workflows/publish.yml` (ao publicar um Release `vX.Y.Z`, ou manual): roda os gates, monta `package/` com a versão da tag (`BSVE_VERSION`) e faz `npm publish` de dentro via **trusted publishing (OIDC)** — **sem `NPM_TOKEN`**. Optamos por OIDC porque os tokens "bypass 2FA" do npm estão sendo depreciados (ago/2026 param de pular 2FA em ops sensíveis; ~jan/2027 perdem o publish direto); o OIDC usa tokens efêmeros assinados, funciona com 2FA na conta e gera provenance automática. **Pré-requisitos p/ a 1ª publicação:** configurar o trusted publisher no npmjs.com (repo `arijs/bootswatch-solid`, workflow `publish.yml`); como o pacote ainda não existe, fazer UM publish manual (`npm publish` local com OTP) p/ criá-lo e então ativar o trusted publisher; requer npm ≥ 11.5.1 no runner (o workflow atualiza o CLI). `access: public` já está no `package.json` gerado. Scripts novos no `package.json` da raiz: `pkg:generate|build|pack|probe|ci`.
  - **Fluxo de release:** ajustar a versão (a `package/package.json` deriva de `BSVE_VERSION`; a tag `vX.Y.Z` é a fonte) → criar um GitHub Release com tag `vX.Y.Z` → o workflow publica. Semver: minor p/ temas/famílias/utilities novos, patch p/ correções de fidelidade, major se um hash de contract mudar (por isso os `identifiers` estáveis).
- **F6 — Integração DDSOFT:** o frontend consome o pacote publicado; feedback real fecha o ciclo.
```
- **Prefixo de hash `bsve_` → `b` (21/07, a pedido do Rafael):** os identifiers do VE passaram de `bsve_${hash}` para `b${hash}` (`build-package.mjs`, `gen-var-hashes.mjs`). Motivo: o prefixo de 5 letras não agregava valor (os hashes já são únicos/estáveis) e só inchava o CSS. **Prefixo zero é inviável:** muitos hashes começam com dígito (`1ki2kjo2`, `17c3vgbe3`, `54j6y45`) e classe/var CSS não pode iniciar com dígito — por isso a menor forma válida é uma única letra (`b`). Regenerados os artefatos versionados (`preset/public-vars.hash.json`, `preset/bootstrap-utilities.generated.mjs`); o `generate-preset.mjs` já era prefix-agnostic (`h.slice(4,-1)`). Verificado: 0 `bsve_` residual em `preset/` e no `dist-pkg` dos 27 temas; classes agora `.b<hash>` (ex.: `badge=b1j3ahob0`) e vars `var(--b<hash>)` (ex.: `varBsBorderColor=var(--b54j6y45)`). **Impacto de versão:** todos os hashes de contract mudam de nome (`bsve_x`→`bx`) — é breaking p/ quem já importava, mas como o pacote ainda não foi publicado (F5 pendente), entra na 1ª release sem bump de major.
