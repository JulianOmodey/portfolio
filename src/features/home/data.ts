import type { FooterLink, NavigationLink, ProjectItem, SectionId } from '@/features/home/types'

export const navigationLinks: NavigationLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const sectionOrder: SectionId[] = navigationLinks.map(link => link.id)

export const projects: ProjectItem[] = [
  {
    name: 'Realtime Collaboration Platform',
    description:
      'Multiplayer editing with optimistic UI, conflict resolution, and web sockets at scale.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
  },
  {
    name: 'Developer Analytics Dashboard',
    description:
      'Fast, visual product intelligence with streaming charts, cohort tooling, and role-based access.',
    stack: ['React', 'Node.js', 'ClickHouse', 'Tailwind CSS'],
  },
  {
    name: 'AI Workflow Automations',
    description:
      'An internal automation suite that removes repetitive tasks through event-driven pipelines.',
    stack: ['Python', 'Queue Workers', 'OpenAI API', 'Docker'],
  },
]

export const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'GraphQL',
  'PostgreSQL',
  'Redis',
  'Docker',
  'CI/CD',
  'System Design',
]

export const aboutHighlights = [
  'I focus on premium frontend engineering: performant rendering, polished transitions, and architectures that remain reliable as products grow.',
  'My sweet spot is end-to-end product development where thoughtful UX, clean code, and measurable business impact align.',
]

export const footerLinks: FooterLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const socialLinks: FooterLink[] = [
  { href: 'mailto:julian@example.com', label: 'Email' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { href: 'https://github.com', label: 'GitHub' },
  { href: '/files/JulianOmodeyCV.pdf', label: 'CV' },
]

export const profile = {
  name: 'Julian Omodey',
  subtitle:
    'Full-stack software developer focused on high-performance web products and polished user experiences.',
}
