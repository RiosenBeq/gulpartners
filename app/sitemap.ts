import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gulpartners.com'; // Replace with actual domain when ready

  // Define static routes
  const routes = [
    '',
    '/uzmanlik',
    '/ekip',
    '/iletisim',
    '/uzmanlik/gayrimenkul-ve-kira-hukuku',
    '/uzmanlik/is-ve-sosyal-guvenlik-hukuku',
    '/uzmanlik/ticaret-ve-sirketler-hukuku',
    '/uzmanlik/icra-ve-iflas-hukuku',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
