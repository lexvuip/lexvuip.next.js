# AGENTS.md - LexVuIP Next.js Project

## Project Overview

This is a Next.js 15 website for LexVuIP, a legal services company offering IP Solutions, Patent Design, and Paralegal services. Built with React 19 and Next.js App Router.

## Build/Lint/Test Commands

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Production build with Turbopack
npm start            # Start production server
```

No lint or test commands are currently configured. Consider adding:
```bash
npm run lint         # Run ESLint (not configured)
npm test             # Run tests (not configured)
```

## Technology Stack

- **Framework**: Next.js 15.5.9 with App Router
- **React**: 19.1.0
- **Styling**: Plain CSS with CSS variables, no CSS-in-JS
- **Fonts**: Google Fonts (Playfair Display, Manrope) via `next/font/google`
- **Language**: JavaScript (JSX), not TypeScript

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.js            # Home page
│   ├── layout.js          # Root layout
│   ├── globals.css        # Global styles
│   ├── about/             # About page route
│   ├── contact/           # Contact page route
│   ├── security/          # Security page route
│   ├── services/          # Services page route
│   └── service/           # Individual service routes
│       ├── ipsolutions/
│       ├── paralegalsolutions/
│       └── customsolutions/
├── components/            # React components (PascalCase files)
│   ├── NavBar.jsx
│   ├── HeroActions.jsx
│   └── ...
├── data/                  # Static data files
│   └── blogs.js
└── styles/                # CSS files matching component names
    ├── variables.css      # CSS custom properties
    ├── App.css
    └── ...
```

## Code Style Guidelines

### Imports

- Use single quotes for all imports
- Import order: React/Next imports first, then local components, then styles
- Use relative imports from component location (no path aliases configured)

```jsx
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import '../styles/NavBar.css';
```

### Component Naming

- **Files**: PascalCase (e.g., `NavBar.jsx`, `HeroActions.jsx`)
- **Components**: PascalCase function declarations
- **Export**: Use `export default` for single exports

```jsx
function NavBar() {
  // ...
}

export default NavBar;
```

### Component Patterns

- Use `'use client'` directive at the top of client components
- Server components (page.js files) do not need the directive
- Destructure hooks at the top of the component
- Use arrow functions or function declarations consistently

### CSS & Styling

- CSS variable definitions in `src/styles/variables.css`
- One CSS file per component, named matching the component
- Import CSS relative to component: `'../styles/ComponentName.css'`
- Use CSS custom properties for colors, spacing, transitions

```css
/* Available variables */
--color-navy: #0a1628;
--color-gold: #c9a227;
--font-serif: 'Playfair Display', Georgia, serif;
```

### Code Formatting

- Tabs for indentation (observed in codebase)
- Single quotes for strings
- No trailing commas
- JSX attributes on multiple lines for complex elements

### Error Handling

- No specific error boundary pattern observed
- Consider adding error.js files for route segments

### Naming Conventions

- **CSS classes**: kebab-case (e.g., `.hero-section`, `.navbar-logo`)
- **Functions**: camelCase (e.g., `handleContactClick`, `toggleMobileMenu`)
- **State variables**: camelCase with descriptive names (e.g., `mobileMenuOpen`)
- **Data files**: camelCase exports (e.g., `blogs`)

### Metadata & SEO

- Export `metadata` object from page.js for SEO
- Include title, description, keywords for each page

```jsx
export const metadata = {
  title: "Page Title",
  description: "Page description",
  keywords: ["keyword1", "keyword2"],
};
```

### Client vs Server Components

- Use `'use client'` for interactive components with hooks
- Server components for static content and page routing
- Navigation uses `next/link` for internal links, `next/navigation` for router

## Notes for Agents

1. No TypeScript - use JavaScript/JSX only
2. No testing framework configured - recommend adding Jest or Vitest
3. No ESLint configuration - recommend creating `.eslintrc.json`
4. Use Turbopack for development and builds (already configured)
5. Follow existing patterns when creating new components
6. Match CSS file naming to component naming