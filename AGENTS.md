# AGENTS.md - LexVuIP Next.js Project

## Project Overview

Next.js 15 website for LexVuIP (legal services: IP Solutions, Patent Design, Paralegal). Built with React 19 and App Router.

## Build/Lint/Test Commands

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Production build with Turbopack
npm start            # Start production server
```

No lint or test commands configured. Consider adding `npm run lint` and `npm test`.

## Technology Stack

- **Framework**: Next.js 15.5.9 with App Router
- **React**: 19.1.0
- **Styling**: Plain CSS with CSS variables (no CSS-in-JS)
- **Fonts**: Google Fonts (Playfair Display, Manrope) via `next/font/google`
- **Language**: JavaScript (JSX), not TypeScript

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.js            # Home page (server component)
│   ├── layout.js          # Root layout
│   ├── globals.css        # Global styles
│   ├── blog/[slug]/page.js
│   └── service/{ipsolutions,paralegalsolutions,customsolutions}/[slug]/
├── components/
│   ├── layout/            # NavBar, Footer
│   ├── pages/             # Page-level components (AboutPage, ContactPage)
│   ├── sections/          # Reusable sections (HeroSection, FAQSection)
│   └── ui/                # UI primitives (Button, BlogCard, Breadcrumbs)
├── hooks/                 # Custom hooks (useScrollReveal, useParallax, etc.)
├── data/                  # Static data (services.js, blogs.js, navigation.js)
└── styles/                # CSS files (variables.css, globals.css)
```

## Code Style Guidelines

### Imports

- Single quotes for all imports
- Order: React/Next imports → local components → styles
- Relative imports (no path aliases)

```jsx
import React, { useState } from 'react';
import Link from 'next/link';
import './Button.css';
```

### Component Organization

Each component in its own folder:
- `ComponentName.jsx` - Main component
- `ComponentName.css` - Styles (if needed)
- `index.js` - Barrel export: `export { default } from './Button';`

### Component Patterns

- Use `'use client'` directive at top of client components
- Server components (page.js) don't need the directive
- Destructure props with defaults in function signature
- Keep page.js minimal - logic goes in `components/pages/`

```jsx
// app/about/page.js
import AboutPage from '../../components/pages/AboutPage';

export const metadata = { title: "About Us - LexVu" };

export default function About() {
  return <AboutPage />;
}
```

### CSS & Styling

- Variables in `src/styles/variables.css`
- One CSS file per component, imported relative: `'./Button.css'`

```css
--color-navy: #0a1628;
--color-gold: #c9a227;
--font-serif: 'Playfair Display', Georgia, serif;
--transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Code Formatting

- Tabs for indentation
- Single quotes for strings
- No trailing commas
- JSX attributes on multiple lines for complex elements

### Naming Conventions

- **Files/Folders**: PascalCase (`Button.jsx`, `HeroSection/`)
- **CSS classes**: kebab-case (`.hero-section`, `.navbar-logo`)
- **Functions**: camelCase (`handleContactClick`, `toggleMobileMenu`)
- **State**: camelCase with descriptive names (`mobileMenuOpen`)
- **Data exports**: camelCase (`ipServices`, `paralegalServices`)
- **Hooks**: camelCase with `use` prefix (`useScrollReveal`)

### Data Files

- Named exports for data arrays
- Group related data in single files

```jsx
// data/services.js
export const ipServices = [ ... ];
export const paralegalServices = [ ... ];

// Usage
import { ipServices } from '../../data/services';
```

### Metadata & SEO

Export `metadata` from page.js files:

```jsx
export const metadata = {
  title: "Page Title",
  description: "Page description",
};
```

### Custom Hooks

Place in `src/hooks/` with JSDoc comments, export via barrel file.

### Client vs Server Components

- `'use client'` for interactive components with hooks
- Server components for static content
- Use `next/link` for internal links, `next/navigation` for router

## Notes for Agents

1. No TypeScript - JavaScript/JSX only
2. No testing framework - recommend Vitest
3. No ESLint - recommend `eslint.config.mjs`
4. Use Turbopack for dev/build
5. Match CSS file naming to component naming
6. Use barrel exports (index.js) for clean imports
