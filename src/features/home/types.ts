export type SectionId = 'home' | 'about' | 'projects' | 'contact'

export interface NavigationLink {
  id: SectionId
  label: string
}

export interface ProjectItem {
  name: string
  description: string
  stack: string[]
}

export interface CareerTimelineItem {
  period: string
  role: string
  organization: string
  link?: string
  summary: string
}

export type FooterNavigationLabel = 'Home' | 'About' | 'Projects' | 'Contact'

export interface FooterNavigationLink {
  href: `#${SectionId}`
  label: FooterNavigationLabel
}

export type SocialLinkLabel = 'Email' | 'LinkedIn' | 'GitHub' | 'CV'

export interface SocialLink {
  href: string
  label: SocialLinkLabel
}
