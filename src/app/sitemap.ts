import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { insightsData } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.meritandbeyond.in';
  const currentDate = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic Service Detail routes
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Dynamic Insights/Blog routes
  const insightRoutes: MetadataRoute.Sitemap = insightsData.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...insightRoutes];
}
