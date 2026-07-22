# @arijs/bootswatch-ve v0.2.0

Utilities are now a faithful, per-theme family — no UnoCSS preset, no `u()` API — trimmed per-consumer by a purge Vite plugin. Each class is imported from its own family entry, and the theme provider is reactive.

## Breaking changes

- **`u()` removed.** Utilities are no longer applied through a runtime prefix helper. Import each class from its family and compose with `cx(...)`:
  ```ts
  import { dFlex, mb3, textBgSecondary } from '@arijs/bootswatch-ve/utilities'
  cx(dFlex, mb3, textBgSecondary)
  ```
- **UnoCSS preset removed.** The `./preset` entry and the `unocss`/preset wiring are gone. Consumers no longer configure a preset.
- **Per-family entry points.** Classes are imported from their family (`@arijs/bootswatch-ve/buttons`, `/alerts`, `/utilities`, …) and vars from `<family>/vars`. There is no `.` barrel.
- **`utilities/used` retired.** The demo-only tree-shake split is gone; there is one authoritative `utilities` family. Consumers who imported from a `used` path should import from `/utilities`.

## New

- **Purge Vite plugin** (`@arijs/bootswatch-ve/vite`). Add `bootswatchPurge()` to your Vite `plugins`; it reads the static family imports that survive tree-shaking and drops every unused CSS rule per theme chunk (≈ −84% in the ddsoft app). Theme scope and vars are always kept.
- **Reactive `BootswatchProvider`.** `scope` now accepts an accessor and updates reactively on theme change: `<BootswatchProvider scope={scope}>`. `useBootswatch()` returns `{ scope, cx }`.
- **Faithful per-theme utilities.** Every utility class is baked with the active theme's real values instead of a shared computed shim. Themes that diverge from Bootstrap render correctly — e.g. Lux `text-bg-secondary` bakes `color: #000` (legible) where Bootstrap bakes `#fff`.

## Notes

- 27 themes, 30 contract entries; 0 residual literal `--bs-*` across all themes.
- Published via GitHub Actions trusted publishing (OIDC) with provenance.
