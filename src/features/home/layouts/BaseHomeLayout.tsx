'use client'

import { useRef } from 'react'
import SiteFooter from '@/components/site/SiteFooter'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import AboutSection from '@/features/home/components/AboutSection'
import ContactSection from '@/features/home/components/ContactSection'
import FloatingHeader from '@/features/home/components/FloatingHeader'
import HeroSection from '@/features/home/components/HeroSection'
import ProjectsSection from '@/features/home/components/ProjectsSection'
import ScrollProgress from '@/features/home/components/ScrollProgress'
import SkillsSection from '@/features/home/components/SkillsSection'
import { footerLinks, navigationLinks, profile, projects, sectionOrder, skills, socialLinks } from '@/features/home/data'
import { useSectionNavigation } from '@/features/home/hooks/use-section-navigation'
import { themeEffectColors, useTheme } from '@/features/home/hooks/use-theme'

interface BaseHomeLayoutProps {
  showScrollProgress?: boolean
  compactHeader?: boolean
}

export default function BaseHomeLayout({
  showScrollProgress = true,
  compactHeader = false,
}: BaseHomeLayoutProps) {
  const heroRef = useRef<HTMLElement>(null)
  const { showHeader, activeSection } = useSectionNavigation(heroRef, sectionOrder)
  const { theme, setTheme } = useTheme()
  const effectColors = themeEffectColors[theme]

  return (
    <main className="relative overflow-x-clip">
      <ThemeSwitcher compact={compactHeader} theme={theme} onThemeChange={setTheme} />
      {showScrollProgress ? <ScrollProgress /> : null}
      <FloatingHeader
        showHeader={showHeader}
        activeSection={activeSection}
        links={navigationLinks}
        compact={compactHeader}
      />
      <HeroSection heroRef={heroRef} particleColors={effectColors.particles} />
      <AboutSection />
      <SkillsSection
        skills={skills}
        dotBaseColor={effectColors.dotBase}
        dotActiveColor={effectColors.dotActive}
      />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <SiteFooter
        name={profile.name}
        summary={profile.subtitle}
        navigationLinks={footerLinks}
        socialLinks={socialLinks}
      />
    </main>
  )
}
