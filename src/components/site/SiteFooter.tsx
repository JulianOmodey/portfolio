import Link from 'next/link'
import { FiBriefcase, FiFileText, FiGithub, FiHome, FiLinkedin, FiMail, FiUser } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import type { FooterNavigationLink, SocialLink } from '@/features/home/types'

interface SiteFooterProps {
  name: string
  summary: string
  navigationLinks: FooterNavigationLink[]
  socialLinks: SocialLink[]
}

export default function SiteFooter({ name, summary, navigationLinks, socialLinks }: SiteFooterProps) {
  const footerNavigationIcons: Record<FooterNavigationLink['label'], IconType> = {
    Home: FiHome,
    About: FiUser,
    Projects: FiBriefcase,
    Contact: FiMail,
  }

  const footerSocialIcons: Record<SocialLink['label'], IconType> = {
    Email: FiMail,
    LinkedIn: FiLinkedin,
    GitHub: FiGithub,
    CV: FiFileText,
  }

  return (
    <footer className="border-t border-[color:var(--line)] px-4 pb-[1.2rem] pt-[clamp(2.2rem,5vw,3.2rem)] [background:radial-gradient(circle_at_82%_18%,var(--footer-orb),transparent_32%),var(--footer-bg)] md:px-[1.2rem]">
      <div className="mx-auto grid w-full max-w-[1060px] gap-[1.2rem] md:grid-cols-[1.5fr_1fr_1fr] md:items-start">
        <div>
          <p className="m-0 text-base font-[650] tracking-[-0.01em] text-[color:var(--footer-title)]">{name}</p>
          <p className="mb-0 mt-2 max-w-[58ch] text-[0.92rem] leading-[1.65] text-[color:var(--footer-copy)]">{summary}</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-[0.6rem] md:justify-end">
          {navigationLinks.map(link => {
            const Icon = footerNavigationIcons[link.label]
            const linkClassName =
              'inline-flex min-h-[2.1rem] items-center justify-center gap-1.5 rounded-full border border-[color:var(--footer-link-border)] bg-[color:var(--footer-link-bg)] px-3 text-[0.82rem] text-[color:var(--footer-link-text)] no-underline transition-colors duration-200 hover:border-[color:var(--footer-link-hover-border)] hover:bg-[color:var(--footer-link-hover-bg)] hover:text-[color:var(--footer-link-hover-text)]'

            return (
              <Link key={link.href} href={link.href} className={linkClassName}>
                <Icon aria-hidden className="h-[0.95rem] w-[0.95rem] shrink-0" />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="flex flex-wrap gap-[0.6rem] md:justify-end" aria-label="Footer contact links">
          {socialLinks.map(link => {
            const Icon = footerSocialIcons[link.label]
            const linkClassName =
              'inline-flex min-h-[2.1rem] items-center justify-center gap-1.5 rounded-full border border-[color:var(--footer-link-border)] bg-[color:var(--footer-link-bg)] px-3 text-[0.82rem] text-[color:var(--footer-link-text)] no-underline transition-colors duration-200 hover:border-[color:var(--footer-link-hover-border)] hover:bg-[color:var(--footer-link-hover-bg)] hover:text-[color:var(--footer-link-hover-text)]'

            return (
              <Link
                key={link.href}
                href={link.href}
                className={linkClassName}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <Icon aria-hidden className="h-[0.95rem] w-[0.95rem] shrink-0" />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="mx-auto mt-[1.1rem] w-full max-w-[1060px] border-t border-[color:var(--footer-bottom-line)] pt-4">
        <p className="m-0 text-[0.8rem] text-[color:var(--footer-bottom-text)]">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
