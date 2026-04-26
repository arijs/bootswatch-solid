# capture-leaf-screenshots

Playwright-based screenshot automation for the Bootswatch SolidJS cheatsheet.
Captures every leaf route of the app across all Bootswatch themes, at a
configurable viewport width, in both static and interactive states.

Run via the npm script or directly:

```
pnpm screenshots:capture [flags]
node scripts/capture-leaf-screenshots.mjs [flags]
```

Related architecture notes:

- [docs/ve-architecture.md](../docs/ve-architecture.md)

---

## Recent changes (April 2026)

### Vanilla Extract verification mode (`--verify-ve-rendering`)

A new verification mode was added to compare `ve-project` rendering against
existing baseline screenshots while preserving dimensions from the original
component `@screenshot` directives.

Key behavior:

- New flag: `--verify-ve-rendering`
- Optional fast flag: `--ve-missing-only` (automatically enables `--verify-ve-rendering`)
- Mutually exclusive with `--verify-css-rendering`
- Uses `ve-project` preview server for render capture
- Skips routes that are not implemented in `ve-project` with a warning
- Keeps directive source in original component files resolved from
  `src/index.tsx` (not from `ve-project` components)

`--ve-missing-only` is a migration-status pass:

- Does not build or run Playwright verification
- Skips routes already implemented in `ve-project`
- Logs only routes/components still missing VE migration
- Supports route narrowing via `--route=...`

VE artifacts are written beside baseline images:

- `ve-{width}x{height}.png` - captured Vanilla Extract rendering
- `ve-{width}x{height}.verify.png` - pixelmatch comparison image

### Two-phase CSS extraction and verification

The script now enforces a two-phase workflow when working with CSS extraction and verification:

- **Phase 1: CSS Extraction** — Run with CSS extraction enabled (default) to generate/update CSS artifacts
- **Phase 2: CSS Verification** — Run with `--no-css-extraction --verify-css-rendering` to verify CSS rendering against baseline screenshots

**Why two phases?** The dev server was previously used during verification to serve live CSS, but CSS extraction and verification cannot reliably run in the same pass. The two-phase approach ensures:
- CSS files are fully extracted and written before verification starts
- Verification always triggers a rebuild to ensure it uses the latest extracted CSS
- The Vite preview server is always used (more stable than dev server for screenshot capture)

**Error on simultaneous execution:** If you accidentally run with both `--no-css-extraction` is not set (extraction enabled) AND `--verify-css-rendering` is set, the script will fail immediately with a helpful error message.

### Quartz duplicate-selector restoration fix (`forms/sizing/large-controls`)

Root cause found in April 2026:

- Quartz CDN CSS defines duplicate selectors like `.form-control::-webkit-file-upload-button` and `.form-control::file-selector-button` more than once, where later occurrences intentionally override only a subset of properties.
- The extractor restore pass previously matched by "best declaration overlap" only, which could remap a later occurrence back to the first (full) declaration block.
- That caused extracted scenario CSS to re-inject padding/margin in later override rules, producing file-input sizing drift in local CSS verification.

Fix implemented:

- `restoreRulesFromSource` in `scripts/capture-leaf-screenshots/css-extraction.mjs` now tracks per-selector occurrence order.
- For each selector, the Nth extracted occurrence maps to the Nth source occurrence.
- Fallback to best-match is still used only when the indexed source occurrence does not exist.

Additional stabilization for native file inputs:

- When a scenario contains `input[type="file"]`, the generated scenario `style.css` now prepends:

```css
::file-selector-button { font: inherit; appearance: button; }
::-webkit-file-upload-button { font: inherit; -webkit-appearance: button; }
```

This keeps local-mode native button rendering aligned with CDN mode.

Validation command used for the specific case:

```
node scripts/capture-leaf-screenshots.mjs --theme=quartz --no-css-extraction --verify-css-rendering "--route=/forms/sizing/large-controls"
```

Expected result after the fix:

- `css OK 0.000000 - 0/74880` for `/forms/sizing/large-controls`.

### Theme safety limit (`--max-themes`)

A new `--max-themes=N` flag limits the number of themes processed in a single run:

- **Default: 1** — Prevents accidental long runs when theme filtering is forgotten
- **To process all themes:** Explicitly set `--max-themes=27` (or higher)
- **Logging:** When themes are limited, output shows `(limited to N of TOTAL)` to indicate the active limit

This guard helps prevent hours-long unintended runs when the `--theme` flag is omitted or mistyped.

### Module refactoring

The screenshot script was refactored from one large file into focused modules.
Behavior is intended to remain the same unless explicitly noted below.

### Module index

| Module | Primary responsibility | Motivation |
|---|---|---|
| `scripts/capture-leaf-screenshots.mjs` | Thin entrypoint: discovery, preflight, server lifecycle, workflow call | Keep orchestration readable and reduce blast radius for changes |
| `scripts/capture-leaf-screenshots/cli.mjs` | Parse all CLI flags and normalize filter/width values | Centralize argument semantics and avoid duplicated parsing logic |
| `scripts/capture-leaf-screenshots/constants.mjs` | Global constants and script root paths | Single source of truth for runtime constants |
| `scripts/capture-leaf-screenshots/route-constants.mjs` | Curated route groups used by interactive scenarios | Keep long static route lists isolated from runtime logic |
| `scripts/capture-leaf-screenshots/interactive-scenarios.mjs` | Interactive scenario definitions and selectors | Separate data-heavy state definitions from scenario processing |
| `scripts/capture-leaf-screenshots/scenarios.mjs` | Build/filter scenario catalog and curated-route assertions | Isolate scenario composition and filter behavior |
| `scripts/capture-leaf-screenshots/discovery.mjs` | Parse routes/components/themes from app source files | Keep source-discovery parsing testable and independent |
| `scripts/capture-leaf-screenshots/directives.mjs` | Parse/format/resolve `@screenshot` directives | Encapsulate directive grammar and lookup precedence |
| `scripts/capture-leaf-screenshots/preview-server.mjs` | Build check, preview startup, readiness wait, teardown | Isolate server lifecycle, including Windows-specific handling |
| `scripts/capture-leaf-screenshots/folder-pruning.mjs` | Theme/route/state pruning and stale file cleanup helpers | Keep destructive filesystem logic in one module for safer review |
| `scripts/capture-leaf-screenshots/measurements.mjs` | Content-height measurement, retry, and clamping | Isolate viewport sizing logic and rendering heuristics |
| `scripts/capture-leaf-screenshots/playwright-actions.mjs` | Scenario interaction actions (hover/focus/click/type/visible) | Keep Playwright action logic focused and reusable |
| `scripts/capture-leaf-screenshots/persistence.mjs` | Component model cache loading, writeback queue recording, file persistence | Separate file I/O concerns from directive decision logic |
| `scripts/capture-leaf-screenshots/writeback.mjs` | Directive upsert/canonicalization/promotion/redundancy removal | Isolate highest-complexity writeback behavior |
| `scripts/capture-leaf-screenshots/workflow.mjs` | Main capture workflow loop and summary reporting | Keep runtime capture pipeline modular and maintainable |

### State filter pruning fix

Fixed a destructive edge case where state-filtered runs could prune legitimate
state folders not currently selected by `--state`.

#### Repro command

```
node scripts/capture-leaf-screenshots.mjs --theme=bootstrap --route=/ui/buttons/solid/primary-button --state=static --skip-existing --no-writeback
```

#### Previous incorrect behavior

- Route-scoped pruning computed keep-folders only from filtered scenarios.
- With `--state=static`, non-selected sibling states (for example
  `hover-buttons`) could be treated as orphaned and removed.

#### New behavior

- If a state filter is active, folder pruning is skipped for the current theme.
- This preserves all existing state folders, including unknown or currently
  unselected states.
- Target-state capture output and stale width/height cleanup inside the active
  destination state folder still proceed as before.

#### Why this policy

State-filtered runs are usually selective or iterative operations. During those
runs, preserving previously captured states is safer than aggressive cleanup.
Aggressive pruning remains available when no `--state` filter is active.

---

## How it works

### Execution phases

The script supports two execution phases when working with CSS verification:

**Phase 1: Screenshot capture and CSS extraction (default)**
- Captures screenshots for all selected routes and themes
- Extracts CSS artifacts for each scenario
- Generates/updates `@screenshot` directives in component files
- Uses Vite preview server with built/existing code

**Phase 2: CSS verification (optional)**
- Runs verification against baseline screenshots using extracted CSS
- Cannot be combined with Phase 1 in a single execution
- Automatically triggers a rebuild to ensure latest CSS is used
- Requires Phase 1 to have completed first

**Why separate phases?** CSS extraction and verification have conflicting requirements:
- Extraction needs to write CSS files first
- Verification needs those files to be static and finalized
- Combining them causes race conditions and inconsistent results

Use `--no-css-extraction --verify-css-rendering` to run Phase 2. Running with both flags enabled in Phase 1 will error immediately.

### Step-by-step breakdown

Routes are parsed from `src/index.tsx` by scanning every
`<Route path="..." component={...} />` element. Only routes whose paths begin
with `/contents`, `/forms`, or `/ui` are included. From that set, only **leaf
routes** are kept — routes that have no child routes in the same set.

Themes are parsed from `src/logic/themes.ts` by scanning every
`` name: `...` `` backtick literal.

### 2. Component file resolution

For each route, the script resolves the component symbol referenced in the
router back to its source file by parsing the `import` statements at the top of
`src/index.tsx`. The resolved `.tsx` file is where `@screenshot` directives are
read from and written back to.

### 3. Scenario catalog

Every leaf route produces a **static scenario** (no interaction). On top of
that, a fixed curated list of **interactive scenarios** is appended for specific
routes (see [Interactive states](#interactive-states) below).

### 4. Height resolution

Before each screenshot the script determines the intended viewport height using
this precedence order, stopping at the first match:

| Priority | Source |
|---|---|
| 1 | `@screenshot` directive — exact theme + state |
| 2 | `@screenshot` directive — wildcard theme (`*`) + state |
| 3 | `@screenshot` directive — exact theme, no state |
| 4 | `@screenshot` directive — wildcard theme, no state |
| 5 | Runtime measurement (see below) |

When a configured height is found, the viewport is pre-sized to that height
before navigation, which prevents layout reflows caused by scrollbars appearing
during load.

### 5. Page load and interaction

The page is navigated with `waitUntil: 'networkidle'` and then held for 150 ms.
For interactive scenarios, the relevant Playwright action is performed (hover,
focus, fill, click, etc.) and a further 180 ms settling delay is applied before
measurement.

### 6. Runtime height measurement

After the page settles the script measures the content height in the browser:

```js
Math.max(
  root.getBoundingClientRect().height,
  root.scrollHeight,
  document.documentElement.scrollHeight,
  document.documentElement.offsetHeight,
  document.body.scrollHeight,
)
```

The result is clamped to the range **120–1800 px**.

The viewport is then resized to the measured height and the screenshot is taken
at that exact size (`fullPage: false`), so the image contains only the content
with no wasted whitespace.

### 7. Screenshot output

```
screenshots/{theme-slug}/{route-path}/{state-folder}/{width}x{height}.png
```

- **theme-slug** — theme name lowercased and hyphenated, e.g. `bootstrap`,
  `dark-ly`.
- **route-path** — the route without the leading `/`, e.g.
  `ui/buttons/solid/primary-button`.
- **state-folder** — `static` for plain captures, or the state name for
  interactive captures, e.g. `hover-buttons`, `opened-modal`.
- **filename** — `{REQUESTED_WIDTH}x{measuredHeight}.png`.

Before writing (or skipping) the target file, the script scans the target
state folder and deletes any existing PNG files whose width matches
`REQUESTED_WIDTH` but whose height differs from the current measured height.
This keeps one canonical file per requested width in each route/state folder.

Additionally, before processing captures for a theme, the script prunes
orphaned files/folders according to the active filters:

- Without `--route`, it performs an aggressive prune of
  `screenshots/{theme-slug}`. It computes mapped destination folders from
  `{route}/{state}` pairs and recursively deletes any file or directory not
  inside those mapped folders.
- With `--route`, pruning is **route-scoped**. Only the selected route folders
  under `screenshots/{theme-slug}` are pruned, and only against the mapped
  state folders for those selected routes. Other route folders in the same
  theme are left untouched.

During processing, progress logs are emitted as:

- `Theme {current}/{total}: {theme-slug}` at the start of each theme.
- `[current/total] Saved ...` for successful captures.
- `[current/total] Skipped ...` when `--skip-existing` skips an existing file.

### 8. Height writeback

After all captures finish, measured heights are persisted back to the route
component files as `@screenshot` directives (unless `--no-writeback` is set).
See [`@screenshot` directives](#screenshot-directives) for the format and
writeback rules.

### 9. Browser lifecycle

A Chromium browser is launched once and reused across captures. The browser is
fully recreated every 120 successful captures (`RESTART_BROWSER_EVERY`) to
prevent memory accumulation. On any capture failure the browser is also
immediately recreated before the retry attempt (up to 3 attempts per capture).

The script always starts and manages its own **Vite preview server** (`pnpm serve`) on
`http://127.0.0.1:4173`. Any existing process on port 4173 is killed before
starting. The server is shut down when the script exits.

By default, the script **reuses existing build output** from `dist/`.
If `dist/index.html` is missing, the run fails fast with an instruction to run
with `--build` (or run `pnpm build`) first.

When `--build` is provided, the script runs `pnpm build` before starting
preview.

When `--verify-css-rendering` is provided (Phase 2), a rebuild is automatically
triggered to ensure the latest extracted CSS artifacts are used for verification.

On Windows, preview startup is invoked through the shell to avoid
`spawn EINVAL` issues with direct `pnpm.cmd` spawning.

---

## `@screenshot` directives

Directives are plain comments that can appear anywhere in a route component
file. They are read before each capture and written back at the end of the run.

### Syntax

```
// @screenshot {theme}[/{state}]: {token} {token} ...
```

- **theme** — a slugified theme name (e.g. `bootstrap`, `darkly`) or `*` to
  match any theme.
- **state** — optional; the interactive state name (e.g. `hover-buttons`,
  `opened-modal`). Omit for the static capture.
- **tokens** — a space-separated list of zero or more **width mappings** and
  zero or more **fallback heights**:
  - Width mapping: `{width}x{height}` — applies when viewport width ≤ `width`.
  - Fallback height: a plain integer — used when no width mapping matches.
  - Multiple fallbacks are allowed; only the **first** is used at runtime. Extra
    fallbacks are preserved as-is on writeback.

### Width selection at runtime

Width mappings are evaluated in ascending order. The first mapping whose
`width` value is **≥ the requested viewport width** is selected. If none
match, the first fallback is used. If no fallback exists either, the height
falls through to runtime measurement.

When rendering an interactive state, if no explicit `{theme}/{state}` directive
matches, runtime resolution falls back to the static directive (`{theme}` or
`*`) using the normal precedence rules.

### Examples

```ts
// Applies to all themes at any width when no more specific directive matches:
// @screenshot *: 360x420 420

// Applies only to the darkly theme, static capture:
// @screenshot darkly: 360x540 720x800 800

// Applies to the bootstrap theme for the opened-modal interactive state:
// @screenshot bootstrap/opened-modal: 360x576 576

// Applies to all themes for the hover-buttons interactive state:
// @screenshot */hover-buttons: 360x380 380
```

### Writeback rules

Before applying any create/update action, writeback first **canonicalizes** the
theme key:

- If the component file has no `@screenshot` directives yet, writeback uses
  `*` as the theme key for the new directive.
- If the component file has no wildcard (`*`) directives, and at least one
  named-theme directive for the same state already has directive values exactly
  equal to the post-update values (same width mappings and fallbacks), that
  matching directive is promoted to `*` and writeback targets `*`.

After canonicalization, the standard create/update rules are applied:

At the end of each run, for every (component file, theme, state) combination
that was measured:

**Directive missing** — a new directive is appended at the end of the file:

```
// @screenshot {canonical-theme}[/{state}]: {width}x{measuredHeight} {measuredHeight}
```

**Directive exists, exact width already present** — the height for that width
mapping is updated in place.

**Directive exists, width not yet present** — the new `{width}x{height}` token
is inserted in ascending width order, before any fallback tokens. If the
inserted width is now the largest width in the directive, the first fallback
value is also updated to the measured height. If no fallback existed, one is
appended.

**Redundant state directive** — when writing a non-static state, if the
resulting state directive values would be exactly equal to the resolved static
directive values (same width mappings and fallbacks), writeback does not keep a
separate state directive. If one already exists, it is removed.

Writeback preserves the file's original line endings (`\r\n` or `\n`).
Non-directive lines are never modified.

On every writeback pass, trailing blank lines are stripped from the file and
exactly one final newline is written, preventing blank-line accumulation across
repeated runs.

---

## Interactive states

The following curated scenarios are captured in addition to the static
screenshot for their respective routes. Each runs from a fresh navigation so
states do not bleed across captures.

| State name | Route | Interaction |
|---|---|---|
| `hover-buttons` | `/ui/buttons/solid/primary-button` | Mouse hover on `.btn-primary` |
| `hover-dropdown` | `/ui/dropdowns/normal-dropdown` | Mouse hover on `[data-bs-toggle="dropdown"]` |
| `hover-table-row` | `/contents/tables/hover-variants` | Mouse hover on first `tbody tr` in `.table-hover` |
| `hover-list-group` | `/ui/list-group/contextual-list-group` | Mouse hover on `.list-group-item-action` |
| `focus-text-input` | `/forms/overview/basic-form` | Focus on `input.form-control` |
| `focus-checkbox` | `/forms/overview/checkbox` | Check + focus `input[type="checkbox"]` |
| `focus-radio` | `/forms/overview/radio-buttons` | Check + focus `input[type="radio"]` |
| `focus-switch` | `/forms/overview/switch-checkbox` | Check + focus `input[type="checkbox"]` (switch) |
| `focus-file-input` | `/forms/overview/file-input` | Focus on `input[type="file"]` |
| `typed-text-input` | `/forms/overview/basic-form` | Type `"Sample text"` into `input.form-control` |
| `opened-tooltip` | `/ui/tooltips/top-tooltip` | Hover trigger; wait for `.tooltip.show` |
| `opened-popover` | `/ui/popovers/basic-popover` | Click trigger; wait for `.popover.show` |
| `opened-modal` | `/ui/modal/default-modal` | Click trigger; wait for `.modal.show` |

---

## CLI flags

| Flag | Default | Description |
|---|---|---|
| `--width=N` | `360` | Viewport width in pixels for all captures. |
| `--max-themes=N` | `1` | Maximum number of themes to process. Set to `27` to process all themes. Prevents accidental long runs. |
| `--theme=a,b` | all themes | Comma-separated list of theme slugs or exact names to include. |
| `--route=/a,/b` | all leaf routes | Comma-separated list of route filters to include; supports exact paths and glob patterns (for example, `/ui/buttons/**`). |
| `--state=a,b` | all states | Comma-separated list of state names to include (`static` for plain captures). |
| `--build` | off | Rebuild the project (`pnpm build`) before capture. Default behavior reuses existing `dist/`. |
| `--skip-existing` | off | Skip captures whose output file already exists on disk. |
| `--no-writeback` | off | Do not modify any component source files after capturing. |
| `--dry-run-writeback` | off | Compute and log writeback changes but do not write them to disk. |
| `--no-css-extraction` | off | Disable CSS extraction. Use in Phase 2 verification runs: `--no-css-extraction --verify-css-rendering`. |
| `--verify-css-rendering` | off | Enable CSS rendering verification against baseline screenshots. Requires Phase 2 execution (use with `--no-css-extraction`). Automatically triggers a rebuild to ensure CSS artifacts are current. |
| `--verify-max-diff-ratio=N` | `0.001` | Maximum allowed pixel difference ratio for CSS verification (0.0–1.0). Only applies when `--verify-css-rendering` is set. |
| `--strict-scenarios` | off | Fail fast if any leaf route is missing from curated scenario routes. |

### Common invocation patterns

**Full run across all themes, all routes, all states:**

```
pnpm screenshots:capture --max-themes=27
```

(Default `--max-themes=1` processes only the first theme; use `--max-themes=27` to include all themes.)

**Re-capture only missing images (fast incremental update):**

```
pnpm screenshots:capture --max-themes=27 --skip-existing
```

Even in `--skip-existing` mode, stale same-width files with different heights
in the target folder are still cleaned up.

Pruning still runs in `--skip-existing` mode. With `--route`, it is limited to
the selected route folders; otherwise it applies to the whole theme folder.

**Two-phase CSS extraction and verification:**

Phase 1 — Extract/update CSS files:
```
node scripts/capture-leaf-screenshots.mjs --max-themes=27
```

Phase 2 — Verify CSS rendering against baselines:
```
node scripts/capture-leaf-screenshots.mjs --max-themes=27 --no-css-extraction --verify-css-rendering
```

(Phase 2 automatically triggers a rebuild to ensure the latest CSS is used for verification.)

**Capture a single theme, preview writeback without touching files:**

```
node scripts/capture-leaf-screenshots.mjs --theme=darkly --max-themes=1 --dry-run-writeback
```

**Capture one route at two states for quick iteration:**

```
node scripts/capture-leaf-screenshots.mjs --max-themes=27 --route=/ui/buttons/solid/primary-button --state=static,hover-buttons
```

**Capture at a wider viewport:**

```
node scripts/capture-leaf-screenshots.mjs --max-themes=27 --width=720
```

**Force a rebuild before capture:**

```
node scripts/capture-leaf-screenshots.mjs --max-themes=27 --build
```

**Capture without updating component directives:**

```
node scripts/capture-leaf-screenshots.mjs --max-themes=27 --no-writeback
```

---

## Output structure

```
screenshots/
  {theme-slug}/
    {section}/{sub-section}/{leaf}/
      static/
        {width}x{height}.png
      {state-name}/
        {width}x{height}.png
```

Example:

```
screenshots/
  bootstrap/
    ui/buttons/solid/primary-button/
      static/
        360x576.png
      hover-buttons/
        360x576.png
    forms/overview/basic-form/
      static/
        360x420.png
      focus-text-input/
        360x420.png
      typed-text-input/
        360x420.png
  darkly/
    ui/buttons/solid-primary-button/
      static/
        360x592.png
```

---

## Adding a new interactive scenario

Edit the `INTERACTIVE_SCENARIOS` array in
`scripts/capture-leaf-screenshots.mjs`. Each entry is an object with these
fields:

| Field | Required | Description |
|---|---|---|
| `route` | yes | Exact leaf route path. Must exist in `src/index.tsx`. |
| `state` | yes | State name used as the output subfolder and directive key. |
| `kind` | yes | Interaction type — see table below. |
| `selector` | yes | CSS selector for the primary element to interact with. |
| `value` | `type` only | Text to type into the element. |
| `visibleSelector` | `hover-visible`, `click-visible` | CSS selector that must become visible after the action. |

**Interaction kinds:**

| Kind | Action |
|---|---|
| `hover` | Move the mouse over the element. |
| `focus` | Call `.focus()` on the element. |
| `focus-check` | Check (or click) the element, then focus it. |
| `type` | Clear the element and type `value` with a 10 ms key delay. |
| `hover-visible` | Hover the element, then wait for `visibleSelector` to appear. |
| `click-visible` | Click the element, then wait for `visibleSelector` to appear. |

After adding a scenario, run the script once to generate the screenshots and
persist the measured heights as `@screenshot` directives in the component file.

---

## Constants reference

These values are defined at the top of the script and can be adjusted there:

| Constant | Value | Description |
|---|---|---|
| `BASE_URL` | `http://127.0.0.1:4173` | URL of the managed Vite preview server. |
| `DEFAULT_VIEWPORT` | `360×576` | Width and initial height used when no directive is found. |
| `MIN_HEIGHT` | `120` | Minimum clamped screenshot height in pixels. |
| `MAX_HEIGHT` | `1800` | Maximum clamped screenshot height in pixels. |
| `TARGET_PREFIXES` | `/contents`, `/forms`, `/ui` | Route path prefixes included in the capture set. |
| `MAX_ATTEMPTS_PER_SCREENSHOT` | `3` | Retry limit per individual capture before marking it failed. |
| `RESTART_BROWSER_EVERY` | `120` | Number of successful captures between forced browser restarts. |
