import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { insightsData } from '@/data/insights';
import { industriesData } from '@/data/industries';
import { learningProgrammes } from '@/data/learning';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.meritandbeyond.in';
  const currentDate = new Date();

  // Core static pages matching Master Brief sitemap
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/learning`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/learning/corporate-programmes`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/learning/open-workshops`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/learning/hr-practitioner-development`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/learning/leadership-manager-development`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/learning/policies`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/quickconsult`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/industries`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/insights`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/accessibility`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Service routes
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Learning programme routes
  const programmeRoutes: MetadataRoute.Sitemap = learningProgrammes.map((prg) => ({
    url: `${baseUrl}/learning/programmes/${prg.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Industry routes
  const industryRoutes: MetadataRoute.Sitemap = industriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Insights routes
  const insightRoutes: MetadataRoute.Sitemap = insightsData.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...programmeRoutes,
    ...industryRoutes,
    ...insightRoutes,
  ];
}
