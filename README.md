## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Vanilla Extract Architecture

Bootstrap/Bootswatch component styles are being converted to [Vanilla Extract](https://vanilla-extract.style/) using an **element-owned scope** model.

- **Current preferred approach:** [`ve-project2/`](./ve-project2) — element-owned scope via compound CSS selectors.
- **Architecture docs:** [`docs/ve-architecture.md`](./docs/ve-architecture.md)
- **Historical ve-project (v1) docs:** [`docs/ve-project1-docs-index.md`](./docs/ve-project1-docs-index.md)

### Key concepts (ve-project2)

- Every rendered element carries both a **scope class** (identifies the active theme) and a **contract class** (identifies the component slot).
- CSS rules use compound selectors (`.scope.contract`) — no ancestor matching, no inheritance coupling.
- Unlimited theme nesting depth is supported without extra selectors or `@layer`.

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
