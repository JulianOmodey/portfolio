import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'
import React from 'react'
import { profile } from '@/features/home/data'

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

export const metadata: Metadata = {
  title: 'Julian Omodey | Software Developer',
  description:
    'Personal software developer portfolio featuring animated, scroll-driven storytelling and project highlights.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <title>{profile.name} | Portfolio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
