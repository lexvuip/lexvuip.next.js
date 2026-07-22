---
name: add-blog
description: Add a new blog post to the LexVuIP project. Use this when the user wants to create, add, or publish a new blog post. Handles blog content creation, image copying, and proper formatting in blogs.js.
metadata:
  version: 1.0.0
---

# Add Blog Post

This skill guides you through adding a new blog post to the LexVuIP Next.js project.

## Prerequisites

Before starting, gather the following from the user:
1. **Blog content** - The full text/content for the blog post (can be provided as text or PDF)
2. **Blog image** - Path to the hero image file (typically from Downloads folder)

## Step-by-Step Process

### Step 1: Copy the Blog Image

1. First, determine the appropriate filename for the image:
   - Format: `{blog-topic}-1920.png` or `{blog-topic}-1920.webp`
   - Use descriptive lowercase words separated by hyphens

2. Copy the image to the stockimages folder:
   ```bash
   cp "/path/to/image.jpeg" "/Users/kalyankumarpokkula/dineshNikhil/lexvuip.next.js/public/assets/stockimages/{filename}"
   ```

3. If the image is not actually PNG/JPEG format, verify with `file` command and rename accordingly (don't just use .webp extension - the actual format matters for social sharing)

### Step 2: Read Existing Blog Structure

Read the current blogs.js file to understand:
- The structure and format of existing blog entries
- The next available ID
- Categories used in existing blogs

```javascript
// Example blog structure:
{
    id: '9',  // Next sequential number
    slug: 'blog-slug-here',
    category: 'Category Name',
    title: 'Full Blog Title Here',
    date: 'MM/DD/YYYY',
    authorId: 'bhanu-prakash',
    excerpt: 'Brief 1-2 sentence description for SEO and previews',
    heroImage: '/assets/stockimages/filename.png',
    content: [
        {
            heading: 'Section Heading (or null for intro paragraphs)',
            body: 'Full paragraph text here.',
        },
        // More content blocks...
    ],
}
```

### Step 3: Format the Blog Content

When the user provides blog content:

1. **Title**: Create a compelling, SEO-friendly title
2. **Slug**: Generate from title (lowercase, hyphens instead of spaces)
3. **Category**: Use existing categories or create a new one if appropriate
   - Common categories: 'Insights', 'Patent Strategy', 'Trademark', 'Process', 'IP Fundamentals', 'Updates'
4. **Excerpt**: Create a 1-2 sentence summary for SEO and previews
5. **Content**: Split into sections with heading/body pairs
   - Use `heading: null` for intro paragraphs without a heading
   - Each body should be a coherent paragraph or set of related points

### Step 4: Handle Special Characters

When adding content with apostrophes or special characters:
- Use double quotes (`"`) for the string if it contains apostrophes
- Example: `body: "This is the inventor's work..."`

### Step 5: Add to blogs.js

1. Read the end of blogs.js to find where to add (before the closing `];`)
2. Add the new blog entry following the exact same format
3. Ensure proper JSON syntax (commas between entries)

### Step 6: Verify

1. Run `npm run build` to ensure no syntax errors
2. Check that the blog page loads correctly

### Step 7: Commit and Push

1. Stage the files:
   ```bash
   git add src/data/blogs.js public/assets/stockimages/{image-filename}
   ```
2. Commit with descriptive message:
   ```bash
   git commit -m "Add new blog post: {blog title}"
   ```
3. Push to the current branch

## Common Issues

### Image Format Mismatch
- Check actual file type with `file` command
- Don't assume .webp works - verify it says "Web/P image data"
- If it's actually PNG, use .png extension

### Syntax Errors with Apostrophes
- Use double quotes for strings containing apostrophes
- Example: `body: "Inventor's work..."` instead of `body: 'Inventor's work...'`

### Missing Commas
- Ensure each blog entry is separated by a comma
- Check the last entry before the new one has a comma
