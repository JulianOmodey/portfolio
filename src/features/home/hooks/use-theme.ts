'use client'

import { useEffect, useLayoutEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'portfolio-theme'

export const themeNames = ['ocean', 'mono-dark', 'mono-light', 'crimson-gold'] as const
export type ThemeName = (typeof themeNames)[number]

export const themeOptions: Array<{ value: ThemeName; label: string; compactLabel: string }> = [
  { value: 'ocean', label: 'Ocean', compactLabel: 'Ocean' },
  { value: 'mono-dark', label: 'Mono Dark', compactLabel: 'Dark' },
  { value: 'mono-light', label: 'Mono Light', compactLabel: 'Light' },
  { value: 'crimson-gold', label: 'Crimson Gold', compactLabel: 'Crimson' },
]

export interface ThemeEffectColors {
  particles: string[]
  dotBase: string
  dotActive: string
}

export const themeEffectColors: Record<ThemeName, ThemeEffectColors> = {
  ocean: {
    particles: ['#c8f4ff', '#9be1ff', '#85ffc7'],
    dotBase: '#123044',
    dotActive: '#00b6ff',
  },
  'mono-dark': {
    particles: ['#d8d8d8', '#f2f2f2', '#a8a8a8'],
    dotBase: '#2a2a2a',
    dotActive: '#f0f0f0',
  },
  'mono-light': {
    particles: ['#2b2b2b', '#4d4d4d', '#6a6a6a'],
    dotBase: '#9a9a9a',
    dotActive: '#161616',
  },
  'crimson-gold': {
    particles: ['#f3d7bc', '#d8a43b', '#b71c3d'],
    dotBase: '#4e1b2a',
    dotActive: '#d8a43b',
  },
}

const isValidTheme = (value: string): value is ThemeName =>
  themeNames.includes(value as ThemeName)

const normalizeStoredTheme = (value: string | null): ThemeName | null => {
  if (!value) return null
  if (value === 'mono') return 'mono-dark'
  if (value === 'dark') return 'mono-dark'
  if (value === 'light') return 'mono-light'
  if (value === 'crimson') return 'crimson-gold'
  return isValidTheme(value) ? value : null
}

const applyThemeToDocument = (theme: ThemeName) => {
  document.documentElement.dataset.theme = theme
}

const resolveThemeFromBrowser = (defaultTheme: ThemeName): ThemeName => {
  const storedTheme = normalizeStoredTheme(window.localStorage.getItem(THEME_STORAGE_KEY))
  if (storedTheme) return storedTheme

  const datasetTheme = normalizeStoredTheme(document.documentElement.dataset.theme ?? null)
  if (datasetTheme) return datasetTheme

  return defaultTheme
}

const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

export function useTheme(defaultTheme: ThemeName = 'ocean') {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme)
  const [hasResolvedInitialTheme, setHasResolvedInitialTheme] = useState(false)

  useBrowserLayoutEffect(() => {
    const resolvedTheme = resolveThemeFromBrowser(defaultTheme)
    setThemeState(resolvedTheme)
    applyThemeToDocument(resolvedTheme)
    window.localStorage.setItem(THEME_STORAGE_KEY, resolvedTheme)
    setHasResolvedInitialTheme(true)
  }, [defaultTheme])

  useEffect(() => {
    if (!hasResolvedInitialTheme) return
    applyThemeToDocument(theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [hasResolvedInitialTheme, theme])

  const setTheme = (nextTheme: ThemeName) => {
    if (nextTheme === theme) return
    setThemeState(nextTheme)
  }

  return { theme, setTheme }
}
