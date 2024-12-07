import { siteMetadata } from './lib/metadata';

export default function sitemap() {
  const routes = [
    '',
    '/projects',
    '/experience',
    '/awards',
    '/news',
  ].map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return routes;
} 