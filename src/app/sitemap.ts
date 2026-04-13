import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

export default sitemap
