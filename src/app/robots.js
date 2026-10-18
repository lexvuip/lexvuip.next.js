export default function robots() {
  const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
  const baseUrl = region === 'IN' ? 'https://lexvuip.in' : 'https://lexvuip.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
