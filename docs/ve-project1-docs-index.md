# ve-project (v1) Documentation Index

> **Historical Context**
>
> All documents listed here describe the **first** Vanilla Extract sub-project (`ve-project`).
> That project is superseded by `ve-project2`, which uses the element-owned scope architecture
> described in [`docs/ve-architecture.md`](./ve-architecture.md).
>
> These files are kept for historical context and to preserve the reasoning behind decisions
> that were later revised.

---

## Documents

| File | Description |
|------|-------------|
| [`ve-architecture-v1-history.md`](./ve-architecture-v1-history.md) | Full architecture specification for ve-project (v1): CSS variable contracts (`createVar`), class-only styling constraints, Bootstrap JS override layer, UI family migration playbook, and component patterns. |
| [`ve-theme-selection-strategy.md`](./ve-theme-selection-strategy.md) | Strategy document for URL-driven VE theme selection, typed theme registries, and skip-with-warning behavior for partial theme coverage in ve-project (v1). |
| [`ve-next-work-verification.md`](./ve-next-work-verification.md) | Playbook for picking the next highest-priority theme/family migration slice in ve-project (v1) using runtime coverage output. |
| [`ve-theme-selection-changelog.md`](./ve-theme-selection-changelog.md) | Changelog of ve-project (v1) implementation decisions and milestones, extracted from `ve-theme-selection-strategy.md`. |

---

## Summary of ve-project (v1) approach

- **Theme tokens** declared as `createVar()` CSS custom properties in `ve-project/src/theme-contract/**`.
- **Theme scope class** (`bsTheme`) carried CSS properties directly inside `style({})`.
- **Family contracts** — typed TypeScript interfaces for each component family (buttons, dropdowns, modals, etc.).
- **Runtime resolver** — central `VeThemeRuntimeProvider` read the URL `?theme=` param and resolved typed contracts.
- **Skip-with-warning** — routes with unsupported theme coverage rendered empty with a console warning.
- **Component migration** — each component consumed resolved runtime contracts; direct Bootstrap imports were replaced incrementally.

This model was superseded because:

1. Embedding styles in the scope class created global-scope-like coupling that conflicted with the class-only philosophy.
2. The runtime contract layer added significant complexity for incremental multi-theme rollout.
3. Element-owned scope (`ve-project2`) delivers the same goals more directly: every element carries its scope + contract classes, no ancestor matching required.
