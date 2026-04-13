'use client'

import Link from 'next/link'
import type { NavigationLink, SectionId } from '@/data/types'

interface FloatingHeaderProps {
  showHeader: boolean
  activeSection: SectionId
  links: NavigationLink[]
  compact?: boolean
}

const joinClasses = (...classes: Array<string | false | null | undefined>): string =>
  classes.filter(Boolean).join(' ')

const FloatingHeader = ({
  showHeader,
  activeSection,
  links,
  compact = false,
}: FloatingHeaderProps): JSX.Element => {
  const headerClassName = joinClasses(
    'fixed left-1/2 top-0 z-[120] -translate-x-1/2',
    'transition-all duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
    showHeader ? 'pointer-events-auto translate-y-[14px] opacity-100' : 'pointer-events-none -translate-y-[150%] opacity-0',
    compact ? 'w-[calc(100vw-1rem)] max-w-[420px]' : 'w-auto',
  )
  const navClassName = joinClasses(
    'inline-flex rounded-full border border-[color:var(--nav-border)] bg-[color:var(--nav-bg)] p-[0.36rem] shadow-[0_12px_34px_rgba(0,0,0,0.28)] backdrop-blur-[10px]',
    compact ? 'w-full justify-between gap-[0.22rem]' : 'gap-[0.28rem]',
  )

  return (
    <header className={headerClassName}>
      <nav aria-label="Main" className={navClassName}>
        {links.map((link) => {
          const linkClassName = joinClasses(
            'inline-flex min-h-[2.05rem] items-center justify-center rounded-full px-[0.84rem] text-[0.84rem] no-underline',
            'text-[color:var(--nav-text)] transition-colors duration-200',
            'hover:bg-[color:var(--nav-hover-bg)] hover:text-[color:var(--text-strong)]',
            activeSection === link.id &&
              'bg-[color:var(--nav-active-bg)] text-[color:var(--text-strong)] shadow-[inset_0_0_0_1px_var(--line-strong)]',
            compact && 'min-h-[1.95rem] flex-1 px-[0.44rem] text-[0.78rem]',
          )

          return (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={linkClassName}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default FloatingHeader
