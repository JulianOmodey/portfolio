import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'
import React from 'react'
import { siteConfig } from '@/lib/site'

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: '%s | Julián Omodey',
  },
  description: siteConfig.description,
  keywords: [
    'Julián Omodey',
    'Full-Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Software',
    'TypeScript',
    'Next.js',
    'GraphQL',
    'Software Developer Portfolio',
  ],
  authors: [{ name: 'Julián Omodey', url: siteConfig.siteUrl }],
  creator: 'Julián Omodey',
  publisher: 'Julián Omodey',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Julián Omodey Portfolio',
    locale: siteConfig.locale,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: '/images/portrait-2.JPG',
        width: 1200,
        height: 630,
        alt: 'Julián Omodey software developer portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/images/portrait-2.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
}

const themeBootScript = `
(() => {
  const storageKey = 'portfolio-theme';
  const aliases = {
    mono: 'mono-dark',
    dark: 'mono-dark',
    light: 'mono-light',
    crimson: 'crimson-gold',
  };
  const validThemes = ['ocean', 'mono-dark', 'mono-light', 'crimson-gold'];

  const stored = window.localStorage.getItem(storageKey);
  const normalized = stored && Object.prototype.hasOwnProperty.call(aliases, stored)
    ? aliases[stored]
    : stored;
  const nextTheme = normalized && validThemes.includes(normalized) ? normalized : 'ocean';

  document.documentElement.dataset.theme = nextTheme;
})();
`

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
