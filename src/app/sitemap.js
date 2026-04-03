import { blogs } from '../data/blogs';

export default function sitemap() {
  const baseUrl = 'https://lexvuip.github.io';
  
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/security',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/service/paralegalsolutions',
    '/service/ipsolutions',
    '/service/customsolutions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
