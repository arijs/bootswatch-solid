# capture-leaf-screenshots

Playwright-based screenshot automation for the Bootswatch SolidJS cheatsheet.
Captures every leaf route of the app across all Bootswatch themes, at a
configurable viewport width, in both static and interactive states.

Run via the npm script or directly:

```
pnpm screenshots:capture [flags]
node scripts/capture-leaf-screenshots.mjs [flags]
```

---

## How it works

### 1. Route and theme discovery

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
  `ui/buttons/solid-primary-button`.
- **state-folder** — `static` for plain captures, or the state name for
  interactive captures, e.g. `hover-buttons`, `opened-modal`.
- **filename** — `{REQUESTED_WIDTH}x{measuredHeight}.png`.

Before writing (or skipping) the target file, the script scans the target
state folder and deletes any existing PNG files whose width matches
`REQUESTED_WIDTH` but whose height differs from the current measured height.
This keeps one canonical file per requested width in each route/state folder.

Additionally, before processing captures for a theme, the script performs an
aggressive prune of `screenshots/{theme-slug}`:

- It computes the mapped destination folders for that run from
  `{route}/{state}` pairs.
- It recursively deletes any file or directory that is not inside one of those
  mapped folders.

This keeps each theme folder aligned to the current scenario catalog and
active filters.

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

The script starts and manages its own Vite preview server (`pnpm serve`) on
`http://127.0.0.1:4173`. Any existing process on port 4173 is killed before
starting. The server is shut down when the script exits.

By default, the script **reuses existing build output** from `dist/`.
If `dist/index.html` is missing, the run fails fast with an instruction to run
with `--build` (or run `pnpm build`) first.

When `--build` is provided, the script runs `pnpm build` before starting
preview.

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
| `hover-buttons` | `/ui/buttons/solid-primary-button` | Mouse hover on `.btn-primary` |
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
| `--theme=a,b` | all themes | Comma-separated list of theme slugs or exact names to include. |
| `--route=/a,/b` | all leaf routes | Comma-separated list of route paths to include. |
| `--state=a,b` | all states | Comma-separated list of state names to include (`static` for plain captures). |
| `--build` | off | Rebuild the project (`pnpm build`) before capture. Default behavior reuses existing `dist/`. |
| `--skip-existing` | off | Skip captures whose output file already exists on disk. |
| `--no-writeback` | off | Do not modify any component source files after capturing. |
| `--dry-run-writeback` | off | Compute and log writeback changes but do not write them to disk. |

### Common invocation patterns

Full run across all themes, all routes, all states:

```
pnpm screenshots:capture
```

Re-capture only missing images (fast incremental update):

```
pnpm screenshots:capture --skip-existing
```

Even in `--skip-existing` mode, stale same-width files with different heights
in the target folder are still cleaned up.

Theme-level pruning still runs in `--skip-existing` mode, removing any
out-of-map files/folders inside each `screenshots/{theme}` directory.

Capture a single theme, preview writeback without touching files:

```
node scripts/capture-leaf-screenshots.mjs --theme=darkly --dry-run-writeback
```

Capture one route at two states for quick iteration:

```
node scripts/capture-leaf-screenshots.mjs --route=/ui/buttons/solid-primary-button --state=static,hover-buttons
```

Capture at a wider viewport:

```
node scripts/capture-leaf-screenshots.mjs --width=720
```

Force a rebuild before capture:

```
node scripts/capture-leaf-screenshots.mjs --build
```

Capture without updating component directives:

```
node scripts/capture-leaf-screenshots.mjs --no-writeback
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
    ui/buttons/solid-primary-button/
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
