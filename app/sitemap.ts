import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: 'https://drft.io', changeFrequency: 'monthly', priority: 1 }]; }
