# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

pnpm workspace monorepo. Three workspaces:

- `packages/ui` — the published library (`lynote-ui`). All components live in `packages/ui/src/<component>/`.
- `app/docs` — dumi-based docs site, consumes `lynote-ui` as `workspace:^`.
- `app/storybook` — Storybook 10, also consumes `lynote-ui` as `workspace:^`.

The root `package.json` only owns lint/type-check/husky. There is no root `build` or `dev` — those are per-workspace.

## Common commands

```bash
# from repo root
pnpm install
pnpm lint                # eslint over the whole tree
pnpm lint:fix            # prettier --write then eslint --fix
pnpm type-check          # tsc --noEmit at root

# build the library (run before docs/storybook can resolve fresh changes)
pnpm --filter lynote-ui build
pnpm --filter lynote-ui type-check

# dev — docs (dumi)
cd app/docs && pnpm dev     # has a `predev` that rebuilds lynote-ui first
cd app/docs && pnpm docs:build   # builds dumi + generates llms markdown

# dev — storybook
cd app/storybook && pnpm dev    # storybook on :6006
cd app/storybook && pnpm build
```

There are no unit-test scripts wired up at the root or in `packages/ui`. Storybook has `@storybook/addon-vitest` and `vitest` configured but no top-level `test` script — invoke vitest directly inside `app/storybook` if needed.

## Library build architecture

`packages/ui/vite.config.ts` is the central piece to understand:

- Scans `packages/ui/src/` at config time. Every top-level directory (excluding `lib` and `style`) with an `index.ts` or `index.tsx` becomes its own rollup entry, producing both `dist/<name>/index.mjs` and `dist/<name>/index.js` plus types via `vite-plugin-dts`.
- This is why `packages/ui/package.json` has a long `exports` map (`./button`, `./input`, …). **Adding a new component requires adding its subpath to the `exports` map** and re-exporting from `packages/ui/src/index.ts`. The vite config picks the directory up automatically, but consumers using subpath imports (`lynote-ui/foo`) won't see it without the `exports` entry.
- Everything in `dependencies` + `peerDependencies` is treated as external — do not add bundled-only deps to `devDependencies` if they need to ship.
- CSS is emitted as `dist/style.css` and re-exported via `./style` / `./style.css`. `style.ts` exists solely to import `style/index.css` so it gets bundled.

## Component conventions

Each component is `packages/ui/src/<kebab-name>/` with:

```
index.tsx        # implementation + named exports
demos/*.tsx      # dumi/storybook examples (excluded from dts output)
README.md        # component docs (consumed by docs site)
```

Complex components (see `form/`) may add `components/`, `context/`, `hooks/`, `type.ts`.

Patterns to follow (verified against `button/index.tsx` and the cursor rules):

- Primitives come from `@base-ui/react` (not Radix, despite older README copy). `@radix-ui/react-slot` is also a dep.
- Variants use `cva` from `class-variance-authority`, exported alongside the component (`buttonVariants`).
- Class merging uses `cn` from `packages/ui/lib/utils.ts` (`twMerge(clsx(...))`). Import as `import { cn } from "../../lib"`.
- Set `data-slot="<component>"` on the root element — selectors in this codebase target `data-slot` rather than class names.
- Files that ship a React component start with `"use client";`.
- Tailwind 4 + `tw-animate-css` + shadcn tokens. Design tokens live in `packages/ui/style/index.css` as oklch CSS variables with `.dark` overrides.

## TS / naming / commits (from `.cursor/rules/`)

- Directories: `kebab-case`. React components and types: `PascalCase`. Hooks: `useXxx` in `use-xxx.ts`.
- Component prop type is named `PropsType`, typically `ComponentProps<"element"> & VariantProps<typeof xxxVariants> & {...}`.
- Strict TS, no `any` — prefer `unknown`. `const enum` for status enums.
- JSDoc props in Chinese; every React component should have a top-level JSDoc describing it.
- **Commit messages must be in Simplified Chinese**, format `<type>(<scope>): <subject>` (e.g. `feat(select): 添加多选支持`). See `git log` for established style.
- Husky + lint-staged run prettier + eslint on staged `.{js,jsx,ts,tsx}` under `packages/**` and `app/**` on commit.

## Docs site quirks

`app/docs/scripts/generate-component-markdown.mjs` walks `packages/ui/src/**` README frontmatter and produces per-component markdown under `app/docs/docs-dist/components/` for an LLM-readable docs export. It runs as part of `docs:build` (`pnpm llms:build`). It depends on README frontmatter (`title`, nested group `title`/`order`) — keep that shape when adding component docs.
