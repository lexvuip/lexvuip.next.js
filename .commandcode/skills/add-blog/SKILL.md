---
name: add-blog
description: Create a new blog post for the LexVuIP Next.js project. Use when the user wants to create, add, or publish a new blog post. Generates the image prompt (1024x1024 standard), extracts content from PDFs or text, standardizes the hero image, adds the Legal Note section, and wires everything into src/data/blogs.js.
argument-hint: "<title or PDF path or blog details>"
metadata:
  version: 2.0.0
---

# Add Blog Post — LexVuIP

Project-specific workflow for publishing a new blog post on the LexVuIP Next.js site. Follow every step; each is load-bearing.

## Project Context

- Repo: `lexvuip.next.js` (Next.js 15, App Router). Blog data lives in `src/data/blogs.js`.
- Working branch is always `redesign`. Never commit to `main`.
- Blog detail route: `src/app/blog/[slug]/page.js` (reads `heroImage` for OG/twitter metadata). Blog index: `src/app/blog/page.js`.
- Author for all blog posts: `authorId: 'bhanu-prakash'` (Bhanu Prakash, defined in `src/data/authors.js`).

## Blog Post Structure

Each entry in `src/data/blogs.js` follows this exact shape:

```javascript
{
    id: '13',                       // next sequential integer as string
    slug: 'kebab-case-slug',
    category: 'Category Name',      // see Categories below
    title: 'Full Blog Title',
    date: 'MM/DD/YYYY',
    authorId: 'bhanu-prakash',
    excerpt: '1-2 sentence SEO summary',
    heroImage: '/assets/stockimages/<topic>-1920-standard.png',
    content: [
        { heading: null, body: 'Intro paragraph...' },       // null heading = intro
        { heading: 'Section Heading', body: 'Section text...' },
        // ...
        { heading: 'Legal Note', body: '<legal-note-text>' }, // REQUIRED last section
    ],
}
```

### Content sections: `body` vs `blocks`

A section may use either `body` (a plain paragraph string) or `blocks` (an array of typed blocks). Use `blocks` whenever a section needs a list or mixed content.

**`blocks` schema** — supported block types:

```javascript
// Paragraph block (same rendering as `body`, with **bold** and *italic* support)
{ type: 'paragraph', text: 'Intro sentence before the list...' }

// Bullet list block
{ type: 'list', ordered: false, items: [
    'First item — **bold** and *italic* work inside items',
    'Second item',
] }

// Numbered list block
{ type: 'list', ordered: true, items: [
    'First step',
    'Second step',
] }
```

A section with a lead-in sentence followed by a list uses multiple blocks under one heading:

```javascript
{
    heading: 'A Practical Habit for Inventors',
    blocks: [
        { type: 'paragraph', text: 'Consider documenting:' },
        { type: 'list', ordered: false, items: [
            'The original concept date.',
            'Prototype milestones.',
            'Public demonstrations.',
        ] },
    ],
}
```

**Rules:**
- Do NOT use literal `•` or `→` characters inside `body` strings — use a `list` block instead. The renderer treats them as plain text.
- Do NOT use `\n\n` inside `body` to fake separate paragraphs — the browser collapses newlines. Use separate content sections or separate blocks.
- `body` remains valid for plain paragraphs and is still supported.

### Categories (use existing)
`Insights`, `Patent Strategy`, `Trademark`, `Process`, `IP Fundamentals`, `Updates`.

## Step 1: Gather Content and Image Source

1. **Content**: Ask the user for the blog content (text or PDF path).
2. **Image source**: Ask for the hero image path, OR offer to generate an image prompt for them (see Step 4) if they don't have one yet.
3. If content comes from a PDF, extract text before anything else (see Step 2).

## Step 2: Extract PDF Content (if applicable)

PDFs from the client use custom CID fonts whose embedded ToUnicode maps are lossy — the `fi`/`fl`/`ff` ligatures and several letters extract as garbage (e.g. `ﬁ`, `7` for `t`, `%` for `o`). Always reconstruct clean text from context; do NOT paste extraction artifacts into the blog.

Extraction command (Python venv with pypdf lives outside the repo):

```bash
cd /Users/dineshkumarpokkula/Developer/lexvuip/image-pipeline && \
  ./venv/bin/python -c "from pypdf import PdfReader; r = PdfReader('<pdf-path>'); print(chr(10).join(p.extract_text() for p in r.pages))"
```

If extraction is still garbled, cross-check with PyMuPDF (`fitz`) which is also installed in that venv.

## Step 3: Build the blogs.js Entry

1. Read the end of `src/data/blogs.js` to confirm the next `id` and the closing structure.
2. **Slug**: kebab-case from the title.
3. **Title, content**: Use the user's provided title and content **verbatim** — do not rewrite their headings or body text.
4. Split content into `heading`/`body` pairs:
   - Intro/flow paragraphs without a heading → `heading: null`.
   - Keep the user's section headings exactly as written.
5. **String quoting**: use double quotes (`"`) for any string containing an apostrophe; single quotes otherwise. Escape accordingly.
6. **Legal Note — REQUIRED**: Append a final content section with `heading: 'Legal Note'` and a body matching the series convention:

   > This article is intended for educational purposes and provides a general explanation of [topic] considerations before filing a patent application. It is not legal advice. [Topic-specific sentence]. Every invention is different, and the appropriate filing strategy depends on the specific facts, applicable laws, and professional legal advice.

   Tailor the bracketed parts to the blog's subject (priority dates, confidentiality, timing, etc.) following the style already used in blogs 10 and 11.

## Step 4: Hero Image — Generate the Prompt (if needed)

If the user does not have a hero image, generate a prompt they can paste into their image-generation tool (Gemini/Stable Diffusion/etc.). Follow the established series style used for blogs 11 and 12:

**Required format (standardized):**
- Square 1:1, **1024x1024** — NOT 16:9/1920x1080.
- Photography style: elegant overhead flat-lay, ~20° off vertical, deep charcoal desk, warm ivory paper/cards, aged brass accents, soft directional light from upper-left, shallow depth of field (f/2.8 feel), no grain, high resolution.
- Composition: subjects across center and right two-thirds; **leave the left third darker/softer/empty for title-text overlay**.
- Mood phrase tied to the blog topic (e.g. time/planning, confidentiality/discretion).
- Swap the props to match the topic: blog 11 used calendar + clock + hourglass (time), blog 12 used sealed envelope + wax seal + key + strongbox (confidentiality).
- End the prompt with the exact line: `Palette: warm ivory paper and card, deep charcoal desk, aged brass throughout, with soft black ink as the only subtle contrast. Mood: <topic mood>. Shallow depth of field (f/2.8 feel), no visible grain, high resolution, square aspect ratio, 1:1, 1024x1024.`
- Themed props should visually reference the blog's concept (timeline, priority, confidentiality, disclosure tracking, etc.) — always keep the checklist card, fountain pen, and brass chain/thread for series consistency.

## Step 5: Standardize the Hero Image

All local blog hero images MUST be standardized before use. The `standardize.js` script lives OUTSIDE the repo (do not copy it into the project) and uses `sharp`:

```bash
node /Users/dineshkumarpokkula/Developer/lexvuip/image-pipeline/standardize.js \
  "<path/to/source-image>" \
  --out /Users/dineshkumarpokkula/Developer/lexvuip/lexvuip.next.js/public/assets/stockimages
```

This center-crops to square and outputs a 1024x1024 optimized PNG named `<source-name>-standard.png`.

**Naming convention** (must match what the site uses):
- `<topic>-1920-standard.png` — e.g. `confidentiality-fundamentals-1920-standard.png`
- Rename the output if the source had an auto-generated name (e.g. `Gemini_Generated_Image_xxx.png`).
- Verify with `file` → must report `PNG image data, 1024 x 1024`. Under 5MB (aim ~1.4MB).

## Step 6: Wire Up and Verify

1. Set `heroImage` to `/assets/stockimages/<topic>-1920-standard.png`.
2. Validate the file parses and the new entry is well-formed:
   ```bash
   node -e "const { blogs } = require('./src/data/blogs.js'); const b = blogs.find(x => x.id === '<id>'); console.log(b.title, b.content[b.content.length-1].heading);"
   ```
   The last section's heading MUST print `Legal Note`.
3. Run `npm run build` — must succeed.
4. Verify the generated HTML emits correct OG metadata:
   ```bash
   grep -oE 'og:image" content="[^"]*"' .next/server/app/blog/<slug>.html
   ```
   Must show the absolute URL with the `-standard.png` file.

## Step 7: Commit and Push (on `redesign`)

```bash
git add src/data/blogs.js public/assets/stockimages/<image-file>
git commit -F - <<'EOF'
feat: add <blog title> blog with standardized hero image

Co-authored-by: CommandCodeBot <noreply@commandcode.ai>
EOF
git push origin redesign
```

- Commit the new image alongside `blogs.js`.
- Never commit `.commandcode/` or node_modules.

## Common Pitfalls

- **Wrong image size**: Blog images are 1024x1024 PNG, NOT 1200x630. Social platforms fall back to the company logo when the OG image is >5MB or non-standard — this was the exact bug fixed for blogs 8/10/11.
- **Missing Legal Note**: Every blog since blog 10 ends with a `Legal Note` section. Forgetting it is a known regression.
- **PDF garbage text**: Never paste `ﬁ`/`7`/`%` artifacts into content. Reconstruct from context.
- **Apostrophes**: strings with `'` must use double-quote delimiters or the file breaks.
- **Missing comma**: the previous entry must end with `},` before the new entry.
- **Wrong branch**: verify `git branch --show-current` returns `redesign` before committing.
