import type {
  CareerTimelineItem,
  FooterNavigationLink,
  NavigationLink,
  ProjectItem,
  SectionId,
  SocialLink,
  SocialLinkLabel,
} from '@/features/home/types'

export const navigationLinks: NavigationLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const sectionOrder: SectionId[] = navigationLinks.map((link) => link.id)

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
  'JavaScript',
  'React',
  'NextJS',
  'Gatsby',
  'GraphQL',
  'SQL',
  'UX/UI',
  'Git',
  'CI/CD',
  'System Design',
  'Full-Stack Development',
  'Object Oriented Programming',
  'Functional Programming',
  'Agile Methodologies',
]

export const aboutHighlights = [
  'I focus on premium frontend engineering: performant rendering, polished transitions, and architectures that remain reliable as products grow.',
  'My sweet spot is end-to-end product development where thoughtful UX, clean code, and measurable business impact align.',
]

export const careerTimeline: CareerTimelineItem[] = [
  {
    period: '2019 - 2022',
    role: 'Programmer Analyst',
    organization: 'ORT University | Uruguay',
    link: 'https://www.ort.edu.uy/',
    summary:
      'Completed formal software engineering training with a strong focus on algorithms, databases, architecture fundamentals, and product implementation.',
  },
  {
    period: 'Nov 2021 - Present',
    role: 'Full-Stack Web Developer',
    organization: 'AnagramDev',
    link: 'https://anagram.dev/',
    summary:
      'Designing and delivering production web applications end to end, from frontend architecture and UI quality to backend integrations and deployment workflows.',
  },
]

export const footerLinks: FooterNavigationLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const normalizeSocialHref = (link: SocialLink): string => {
  if (link.label !== 'Email') {
    return link.href
  }

  if (link.href.startsWith('mailto:')) {
    return link.href
  }

  if (link.href.includes('@') && !link.href.startsWith('http')) {
    return `mailto:${link.href}`
  }

  return link.href
}

const baseSocialLinks: SocialLink[] = [
  { href: 'mailto:julianomodey@gmail.com', label: 'Email' },
  {
    href: 'https://www.linkedin.com/in/julián-omodey-076a35174',
    label: 'LinkedIn',
  },
  { href: 'https://github.com/JulianOmodey', label: 'GitHub' },
  { href: '/files/JulianOmodeyCV.pdf', label: 'CV' },
]

export const socialLinks: SocialLink[] = baseSocialLinks.map((link) => ({
  ...link,
  href: normalizeSocialHref(link),
}))

export const getSocialLinkHref = (label: SocialLinkLabel): string => {
  const link = socialLinks.find((item) => item.label === label)
  if (!link) {
    throw new Error(`Missing social link for label: ${label}`)
  }

  return link.href
}

export const profile = {
  name: 'Julián Omodey',
  subtitle:
    'Full-stack software developer focused on high-performance web products and polished user experiences.',
}
