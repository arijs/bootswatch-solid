# ve2 build performance: the 206-minute full build

**TL;DR.** The 27-theme `npm run ve2:build` took **206m 27s**; the same build completes in
**~1m 40s** once a one-line workaround is in place. 99% of the wall time was spent inside a
single `regex.test()` call in Vite's own `vite:build-html` plugin — catastrophic backtracking
of `entirelyImportRE` against the minified index entry chunk. The vanilla-extract plugin, the
original suspect, accounts for none of the blow-up (it costs ~60s, linear in theme count).
The workaround ships in `ve-project2/vite.config.ts` as `defuseEmptyCssRegexBombPlugin`.

## Symptom

| Build | Reported time (Windows dev machine) |
| --- | --- |
| `ve2:build` (all 27 themes) | **206m 27s** |
| `ve2:build -- --theme=bootstrap` | 2m 20s (vite) / 184s wall |

The ~90× gap for 27× the literal themes made the vanilla-extract compiler the natural suspect.
It is innocent.

## Methodology

All measurements on a 4-core Linux container (roughly 2.3–2.7× faster than the dev machine on
this workload; ratios are what matter).

1. **Instrumented the VE compiler** (`@vanilla-extract/compiler` dist, temporary local patch)
   to log per-file `executeFile` / `scanModule` / `transformCss` / babel timings.
2. **`node --cpu-prof`** on the single-theme build for a self-time breakdown.
3. The full build never left the bundle phase, and even ignored SIGTERM — the JS thread was
   blocked inside one synchronous operation. Attached the inspector to the stuck process
   (`kill -USR1` + a raw DevTools-protocol client) and sampled 25s of CPU.

## Root cause

The stuck-phase profile is unambiguous: **39,832 of 39,833 samples** sit in one frame —

```
generateBundle (vite:build-html)
  └─ isEntirelyImport            ← 100% of samples, for 15+ minutes
```

`vite:build-html` asks "is the HTML entry chunk made only of side-effect imports?" by running
one anchored regex over the entire minified entry chunk:

```js
const entirelyImportRE =
  /^(?:import\s*(?:"[^"\n]*[^\\\n]"|'[^'\n]*[^\\\n]');*|\/\*[\s\S]*?\*\/|\/\/.*[$\n])*$/
```

Our entry chunk (207KB, single minified line) begins with **27 consecutive
`/* empty css */` markers** — one per theme, left behind by Rolldown for the pure-CSS
`scope.css` modules that `theme-runtime.ts` statically imports — followed by real code
containing ~30 more `//`/`/*` sequences.

Each comment boundary is a backtracking choice point for the lazy `\/\*[\s\S]*?\*\/`
alternative (one "comment" match can lazily extend across any number of following comment
blocks). When the overall match *fails* (the chunk has real code, so it always fails), the
engine explores the combinatorial space. Measured growth on the synthetic prefix
`"/* empty css */".repeat(N) + "const x=1;"`:

| N markers | `regex.test()` time |
| --- | --- |
| 16 | 6.6ms |
| 20 | 32.7ms |
| 24 | 530ms |
| 26 | 2.2s |
| 28 | 8.4s |
| 30 | 33.3s |

**×4 per +2 markers — O(2^N).** At N=27 plus the extra choice points in the 200KB tail, the
single `test()` call runs for hours. This also explains why the theme filter "fixed" it:
`--theme=bootstrap` strips 26 font links from `index.html` and stubs 26 literal modules, so
the entry chunk has too few markers to detonate.

The regex is unchanged in Vite `main` as of this writing — worth an upstream issue with the
table above as the repro (affects both Rollup- and Rolldown-based Vite; both emit
`/* empty css */` markers).

## The fix

`defuseEmptyCssRegexBombPlugin` in `ve-project2/vite.config.ts`. User plugins'
`generateBundle` runs before `vite:build-html`'s, and the regex is anchored at `^` — so
prepending a lone `;` (a no-op statement, valid before import declarations) to entry chunks
makes the very first alternative mismatch and the test fail in O(1). The verdict is unchanged
(the chunk was never "entirely imports"), and `vite:css-post` rewrites the chunk afterwards
anyway.

An earlier attempt that only stripped the `/* empty css */` markers was **not** sufficient —
the ~30 `//` choice points in the minified tail still blew up. The `^`-mismatch approach kills
every path at once.

### Verified results (same container, `--quiet`)

| Build | Before | After |
| --- | --- | --- |
| Full 27 themes | killed after 17+ min stuck (dev machine: 206m 27s) | **1m 40s** |
| `--theme=bootstrap` | 1m 09s | 1m 09s (unchanged) |

Full build emits the expected 2,114 assets; `ve2:preview` serves the app normally.

## Where the remaining ~100s goes (secondary findings)

From the instrumentation of the single-theme build (69s wall), for future optimization work.
Note: **even with `--theme=bootstrap`, all 925 `.css.ts` files across all 27 themes are
compiled** — the filter only stubs the 27 `literal/` monoliths; every theme's
`utilities`/`forms`/`ui/*` families still flow through the VE compiler because
`theme-runtime.ts` imports them (dynamically, but build-time-reachable).

The VE vite-plugin evaluates every `.css.ts` through a child Vite server + vite-node runner,
**fully serialized behind a global lock**:

| Stage (925 files, serial) | Total |
| --- | --- |
| `executeFile` (vite-node eval, includes babel) | 35.5s |
| — of which babel `@vanilla-extract/babel-plugin-debug-ids` + filescope (949 calls, 14MB source) | 13.3s |
| `transformCss` (872 calls) | 25.9s |
| — of which rebuilding the `modern-ahocorasick` automaton from ~2,300 local class names **per call** | ~17s |
| GC (driven by the above churn) | 13.1s |

Levers, in rough value order — none urgent now that the build is ~100s:

1. **Aho-Corasick rebuild** (`@vanilla-extract/css` `Stylesheet` constructor): the class-name
   set is near-identical across calls; caching the automaton would cut ~25% of the VE phase.
   Upstream-PR-sized change.
2. **Babel debug-ids run only because `identifiers` resolves to `'debug'`** (build runs with
   `mode: 'development'`). `identifiers: 'short'` skips babel entirely, but our asset naming
   (`scope_<theme>Scope__` sniffing) and tooling rely on debug names — a custom `identifiers`
   function deriving names from `filePath` could keep both.
3. **Extend the theme filter to stub all non-selected themes' `.css.ts`** (not just
   `literal/`): would drop ~850 of 925 files from filtered builds (~70s → ~15–20s).
4. **Parallelism**: the global lock means one file at a time; sharding across worker threads
   is the "rewrite the plugin" option — no longer justified by the numbers.

The original hypothesis — rewriting the vanilla-extract plugin from scratch — is **not
warranted**: its cost is linear and modest; the 3.5-hour build was Vite's regex.
