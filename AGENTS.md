# AGENTS.md - LexVuIP Project

## Architecture & Tech Stack
- **Framework**: Next.js 15 App Router (`src/app/`), React 19.
- **Language**: JavaScript (JSX). **NO TypeScript**.
- **Styling**: Plain CSS. **NO Tailwind, NO CSS Modules, NO CSS-in-JS**.
  - Components use adjacent `.css` files (e.g., `import './Button.css';`).
  - Use global CSS classes (kebab-case, e.g., `.btn-primary`). Do not use `styles.btnPrimary`.
  - Shared variables are in `src/styles/variables.css`.

## Development Commands
- `npm run dev` (starts Turbopack dev server)
- `npm run build` (Turbopack production build)
- **Note**: No test runner or linting scripts are configured yet. Rely on `npm run build` to verify correctness.

## Conventions & Quirks
- **File Structure**: Each component MUST live in its own folder with a barrel export:
  - `src/components/ui/Button/Button.jsx`
  - `src/components/ui/Button/Button.css`
  - `src/components/ui/Button/index.js` (e.g., `export { default } from './Button';`)
- **Routing**: Keep `src/app/**/page.js` files minimal as Server Components. Delegate complex logic and UI to client components in `src/components/pages/`.
- **Imports**: ALWAYS use **relative imports** (e.g., `import Button from '../../components/ui/Button';`). **Do NOT use `@/*` path aliases**, despite the presence of `jsconfig.json`!
- **Data & Hooks**:
  - Export custom hooks via `src/hooks/index.js`. Add JSDoc comments to hooks.
  - Group related static data into single files in `src/data/` using named exports.
- **Formatting**:
  - Use **tabs** for indentation (not spaces).
  - Use **single quotes** for strings and imports.
  - No trailing commas.
