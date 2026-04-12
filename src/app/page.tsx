'use client'

import { useRef } from 'react'
import SiteFooter from '@/components/site/site-footer'
import AboutSection from '@/features/home/components/about-section'
import ContactSection from '@/features/home/components/contact-section'
import FloatingHeader from '@/features/home/components/floating-header'
import HeroSection from '@/features/home/components/hero-section'
import ProjectsSection from '@/features/home/components/projects-section'
import ScrollProgress from '@/features/home/components/scroll-progress'
import SkillsSection from '@/features/home/components/skills-section'
import { footerLinks, navigationLinks, profile, projects, sectionOrder, skills, socialLinks } from '@/features/home/data'
import { useSectionNavigation } from '@/features/home/hooks/use-section-navigation'

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { showHeader, activeSection } = useSectionNavigation(heroRef, sectionOrder)

  return (
    <main className="portfolio-root">
      <ScrollProgress />
      <FloatingHeader showHeader={showHeader} activeSection={activeSection} links={navigationLinks} />
      <HeroSection heroRef={heroRef} />
      <AboutSection />
      <SkillsSection skills={skills} />
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
