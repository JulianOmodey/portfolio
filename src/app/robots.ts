import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  }
}

export default robots
