'use client'

import Link from 'next/link'
import type { NavigationLink, SectionId } from '@/features/home/types'

interface FloatingHeaderProps {
  showHeader: boolean
  activeSection: SectionId
  links: NavigationLink[]
  compact?: boolean
}

export default function FloatingHeader({
  showHeader,
  activeSection,
  links,
  compact = false,
}: FloatingHeaderProps) {
  const headerClassName = `floating-header ${showHeader ? 'is-visible' : ''} ${compact ? 'is-compact' : ''}`
  const navClassName = `floating-header-nav ${compact ? 'is-compact' : ''}`

  return (
    <header className={headerClassName}>
      <nav aria-label="Main" className={navClassName}>
        {links.map(link => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className={`floating-nav-link ${activeSection === link.id ? 'is-active' : ''} ${compact ? 'is-compact' : ''}`}
            aria-current={activeSection === link.id ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
