'use client'

import { useRef } from 'react'
import SiteFooter from '@/components/global/SiteFooter'
import ThemeSwitcher from '@/components/global/ThemeSwitcher'
import AboutSection from '@/components/home/AboutSection'
import ContactSection from '@/components/home/ContactSection'
import FloatingHeader from '@/components/home/FloatingHeader'
import HeroSection from '@/components/home/HeroSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import ScrollProgress from '@/components/home/ScrollProgress'
import SkillsSection from '@/components/home/SkillsSection'
import { footerLinks, navigationLinks, profile, projects, sectionOrder, skills, socialLinks } from '@/data/data'
import { useSectionNavigation } from '@/hooks/use-section-navigation'
import { themeEffectColors, useTheme } from '@/hooks/use-theme'

interface BaseHomeLayoutProps {
  showScrollProgress?: boolean
  compactHeader?: boolean
}

const BaseHomeLayout = ({
  showScrollProgress = true,
  compactHeader = false,
}: BaseHomeLayoutProps): JSX.Element => {
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

export default BaseHomeLayout
