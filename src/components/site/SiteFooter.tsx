import Link from 'next/link'
import type { FooterLink } from '@/features/home/types'

interface SiteFooterProps {
  name: string
  summary: string
  navigationLinks: FooterLink[]
  socialLinks: FooterLink[]
}

export default function SiteFooter({ name, summary, navigationLinks, socialLinks }: SiteFooterProps) {
  return (
    <footer className="site-footer-shell">
      <div className="site-footer-content">
        <div>
          <p className="site-footer-title">{name}</p>
          <p className="site-footer-copy">{summary}</p>
        </div>

        <nav aria-label="Footer navigation" className="site-footer-links">
          {navigationLinks.map(link => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer-social" aria-label="Footer contact links">
          {socialLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
