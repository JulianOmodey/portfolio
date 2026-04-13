'use client'

import { useEffect, useState } from 'react'

const MOBILE_LAYOUT_QUERY = '(max-width: 767px)'

export function useIsMobileLayout(
  query: string = MOBILE_LAYOUT_QUERY
): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQueryList = window.matchMedia(query)
    const handleChange = () => setIsMobile(mediaQueryList.matches)

    handleChange()
    mediaQueryList.addEventListener('change', handleChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [query])

  return isMobile
}
