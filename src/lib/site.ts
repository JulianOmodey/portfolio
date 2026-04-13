const normalizeSiteUrl = (value: string | undefined): string => {
  if (!value) return 'http://localhost:3000'
  const trimmed = value.trim()
  if (!trimmed) return 'http://localhost:3000'
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed
  }

  return `https://${trimmed}`
}

const PRODUCTION_DOMAIN = 'https://julianomodey.com'

const getDefaultSiteUrl = (): string => {
  const vercelEnv = process.env.VERCEL_ENV
  const vercelUrl = process.env.VERCEL_URL

  if (vercelEnv === 'preview' && vercelUrl) {
    return normalizeSiteUrl(vercelUrl)
  }

  if (vercelEnv === 'production') {
    return PRODUCTION_DOMAIN
  }

  if (process.env.NODE_ENV === 'production') {
    return PRODUCTION_DOMAIN
  }

  return 'http://localhost:3000'
}

const resolveSiteUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
  }

  return getDefaultSiteUrl()
}

export const siteConfig = {
  siteUrl: resolveSiteUrl(),
  title: 'Julián Omodey | Portfolio',
  description:
    'Portfolio of Julián Omodey, full-stack software developer specialized in React, TypeScript, GraphQL, modern frontend architecture, and product-focused web development.',
  locale: 'en_US',
} as const
