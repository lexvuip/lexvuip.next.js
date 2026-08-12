'use client';
import React, { useState, useEffect, useCallback } from 'react';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function BlogTOC({ sections }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headingElements = sections
      .map((s) => document.getElementById(slugify(s.heading)))
      .filter(Boolean);

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
      setActiveId(id);
    }
  }, []);

  if (!sections || sections.length < 2) return null;

  return (
    <nav className="blog-toc" aria-label="Table of contents">
      <h3 className="blog-toc-title">On This Page</h3>
      <ul className="blog-toc-list">
        {sections.map((sec) => {
          const id = slugify(sec.heading);
          return (
            <li key={id} className="blog-toc-item">
              <a
                href={`#${id}`}
                className={`blog-toc-link${activeId === id ? ' is-active' : ''}`}
                onClick={(e) => handleClick(e, id)}
              >
                {sec.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
