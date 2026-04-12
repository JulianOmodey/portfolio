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

export interface FooterLink {
  href: string
  label: string
}
