'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());
    return { label, href };
  });

  const allBreadcrumbs = [{ label: 'Home', href: '/' }, ...breadcrumbs];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': allBreadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.label,
      'item': `https://lexvuip.github.io${crumb.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="breadcrumbs-list">
        {allBreadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="breadcrumb-item">
            {index < allBreadcrumbs.length - 1 ? (
              <>
                <Link href={crumb.href}>{crumb.label}</Link>
                <span className="breadcrumb-separator">/</span>
              </>
            ) : (
              <span className="breadcrumb-current" aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
