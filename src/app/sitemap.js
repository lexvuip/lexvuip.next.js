export default function sitemap() {
  const baseUrl = 'https://lexvuip.github.io';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/service/paralegalsolutions',
    '/service/ipsolutions',
    '/service/customsolutions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
