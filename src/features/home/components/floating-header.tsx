'use client'

import Link from 'next/link'
import type { NavigationLink, SectionId } from '@/features/home/types'

interface FloatingHeaderProps {
  showHeader: boolean
  activeSection: SectionId
  links: NavigationLink[]
}

export default function FloatingHeader({ showHeader, activeSection, links }: FloatingHeaderProps) {
  return (
    <header className={`floating-header ${showHeader ? 'is-visible' : ''}`}>
      <nav aria-label="Main" className="floating-header-nav">
        {links.map(link => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className={`floating-nav-link ${activeSection === link.id ? 'is-active' : ''}`}
            aria-current={activeSection === link.id ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
