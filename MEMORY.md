# MEMORY.md - lexvuip.next.js Project Context

## Overview
This file serves as long-term memory for AI agents working on the `lexvuip.next.js` repository. It tracks significant architectural decisions, features added, structural fixes, and rules specific to this project to ensure continuity between sessions.

---

## 📅 Recent Work & Decisions

### Date: 2026-07-18
**Branch:** `feat/india-region-support`
**Status:** Implemented & Pushed

#### 1. Added Indian Region Support & Assets
- Merged `main` into the `feat/india-region-support` branch to pull in the newly introduced `WorkShowcase` section on the homepage and the `assets/workShowcase` image directories.
- Ensured the `NEXT_PUBLIC_REGION` environment variable controls which services are displayed globally vs. in the Indian region.

#### 2. Dynamic Services Navigation & Display Fixes
**Problem:**
Even when `NEXT_PUBLIC_REGION=IN` was active, the application was displaying global services. The Indian service lists were correctly defined in `src/data/services.js` (using a runtime ternary check on `ipServices`), but the UI components were **hardcoded** instead of mapping over the data arrays.

**Solution:**
Refactored the core navigational components to dynamically map the `ipServices`, `paralegalServices`, and `customServices` arrays.
- **`src/data/navigation.js`**: Updated the `navLinks` array. Instead of statically typing out dropdown items for the "Services" menu, it now uses `.map()` on the service arrays exported from `src/data/services.js`.
- **`src/components/pages/ServicesPage/ServicesPage.jsx`**: Replaced static `<ServiceCard>` elements inside the "IP Solutions", "Paralegal Solutions", and "Custom Solutions" grid sections with `.map()` loops directly rendering cards from the data arrays.
- **`src/components/layout/Footer/Footer.jsx`**: Replaced static list items `<li><a href="...">...</a></li>` with a mapped list corresponding to the exported service data arrays.

**Why:**
This ensures that whenever the environment variable toggles `ipServices` from `globalIpServices` to `indianIpServices`, every surface of the site (Dropdowns, Mobile Menu, Footer, and Services Catalog) correctly reflects the specific region's offerings without manual overrides.

---

## ⚠️ Important Rules for Agents

1. **Environment Variables**:
   - The site uses `NEXT_PUBLIC_REGION` to determine content. 
   - Regional data overriding is handled natively in `src/data/services.js`. Always map over these data exports (e.g., `ipServices`) rather than hardcoding static links to specific services.

2. **Branch Management**:
   - **Never delete a branch after merging.** The user explicitly enforces that source branches must remain intact for future reference or continued work.

3. **Content / Blog Integration**:
   - Use the specific rendering functions (`renderBody()`) and structure when pulling Markdown content into `src/data/blogs.js`. 
   - Paragraph structure, Unsplash ID verifications, and HTML conversion rules must be strictly followed per the user's documented rules.