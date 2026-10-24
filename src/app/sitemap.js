import { blogs } from '../data/blogs';
import { ipServices, paralegalServices, customServices } from '../data/services';

function toIsoDate(value) {
  const [m, d, y] = String(value).split('/');
  if (!m || !d || !y) return new Date().toISOString();
  return new Date(Number(y), Number(m) - 1, Number(d)).toISOString();
}

export default function sitemap() {
  const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
  const baseUrl = region === 'IN' ? 'https://lexvuip.in' : 'https://lexvuip.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/security',
    '/founder',
    '/llm-info',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/service/ipsolutions',
    '/service/Patent-Drawings',
    ...(paralegalServices.length > 0 ? ['/service/paralegalsolutions'] : []),
    ...(customServices.length > 0 ? ['/service/customsolutions'] : []),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: toIsoDate(blog.date),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const ipRoutes = ipServices.map((service) => ({
    url: `${baseUrl}/service/ipsolutions/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const paralegalRoutes = paralegalServices.map((service) => ({
    url: `${baseUrl}/service/paralegalsolutions/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const customRoutes = customServices.map((service) => ({
    url: `${baseUrl}/service/customsolutions/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...ipRoutes, ...paralegalRoutes, ...customRoutes];
}
