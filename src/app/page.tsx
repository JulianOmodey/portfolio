import ResponsiveHomeLayout from '@/layouts/ResponsiveHomeLayout'
import { getSocialLinkHref, profile } from '@/data/data'
import { siteConfig } from '@/lib/site'

const emailHref = getSocialLinkHref('Email')
const email = emailHref.startsWith('mailto:')
  ? emailHref.replace('mailto:', '')
  : emailHref

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: 'Full-Stack Software Developer',
  url: siteConfig.siteUrl,
  email,
  sameAs: [getSocialLinkHref('LinkedIn'), getSocialLinkHref('GitHub')],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Julián Omodey Portfolio',
  url: siteConfig.siteUrl,
}

const Home = (): JSX.Element => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <ResponsiveHomeLayout />
    </>
  )
}

export default Home
