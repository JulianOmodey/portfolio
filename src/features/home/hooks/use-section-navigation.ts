import type { RefObject } from 'react'
import { useEffect, useState } from 'react'
import type { SectionId } from '@/features/home/types'

interface SectionNavigationState {
  showHeader: boolean
  activeSection: SectionId
}

const HERO_HEADER_THRESHOLD_PX = 80
const MIN_SCROLL_FOR_HEADER_PX = 120

export function useSectionNavigation(
  heroRef: RefObject<HTMLElement>,
  sectionIds: readonly SectionId[]
): SectionNavigationState {
  const [showHeader, setShowHeader] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0] ?? 'home')

  useEffect(() => {
    let frame = 0

    const getSections = () =>
      sectionIds
        .map(sectionId => document.getElementById(sectionId))
        .filter((section): section is HTMLElement => section !== null)

    const updateState = () => {
      const heroElement = heroRef.current

      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect()
        const isHeroVisible =
          heroRect.bottom > HERO_HEADER_THRESHOLD_PX && heroRect.top < window.innerHeight * 0.72
        const hasScrolledEnough = window.scrollY > MIN_SCROLL_FOR_HEADER_PX
        setShowHeader(hasScrolledEnough && !isHeroVisible)
      } else {
        setShowHeader(window.scrollY > MIN_SCROLL_FOR_HEADER_PX)
      }

      const viewportMiddle = window.innerHeight * 0.5
      const sections = getSections()

      for (const section of sections) {
        const rect = section.getBoundingClientRect()

        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          setActiveSection(section.id as SectionId)
          return
        }
      }

      const firstVisible = sections.find(section => section.getBoundingClientRect().top >= 0)

      if (firstVisible) {
        setActiveSection(firstVisible.id as SectionId)
      } else if (sections.length > 0) {
        setActiveSection(sections[sections.length - 1].id as SectionId)
      }
    }

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateState)
    }

    updateState()

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)
    window.addEventListener('pageshow', scheduleUpdate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', scheduleUpdate)
      window.removeEventListener('pageshow', scheduleUpdate)
    }
  }, [heroRef, sectionIds])

  return { showHeader, activeSection }
}
