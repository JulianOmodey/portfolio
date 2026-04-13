import type {
  CareerTimelineItem,
  FooterNavigationLink,
  NavigationLink,
  ProjectItem,
  SectionId,
  SocialLink,
  SocialLinkLabel,
} from '@/data/types'

export const navigationLinks: NavigationLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const sectionOrder: SectionId[] = navigationLinks.map((link) => link.id)

export const projects: ProjectItem[] = [
  {
    name: 'Headless Commerce Platform',
    description:
      'Built custom storefront experiences with React, GraphQL, Magento, and Sanity for content-rich e-commerce websites.',
    stack: ['React', 'TypeScript', 'GraphQL', 'Magento', 'Sanity'],
  },
  {
    name: 'Frontend System Modernization',
    description:
      'Migrated legacy UI patterns to a scalable Tailwind-based architecture, improving consistency and speeding up development across a large codebase.',
    stack: ['React', 'Tailwind CSS', 'Nx', 'TypeScript', 'Design System'],
  },
  {
    name: 'CMS-Driven Interactive Experiences',
    description:
      'Developed reusable content blocks, advanced navigation, and dynamic UI components for marketing and product teams to ship faster.',
    stack: ['React', 'Sanity', 'RxJS', 'GraphQL', 'Component Architecture'],
  },
]

export const skills = [
  'Full-Stack Development',
  'HTML',
  'CSS',
  'TypeScript',
  'RXJS',
  'JavaScript',
  'Node.js',
  'styled-components',
  'Tailwind CSS',
  'Backbone.js',
  'React',
  'NextJS',
  'Gatsby',
  'GraphQL',
  'SQL',
  'NetSuite',
  'SuiteCommerce',
  'Auth0',
  'AWS',
  'Magento',
  'Object Oriented Programming',
  'Java',
  'C#',
  'UX/UI',
  'Git',
  'CI/CD',
  'System Design',
  'CMS Integrations',
  'Functional Programming',
  'Reactive Programming',
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
      'Gained formal software engineering training with a strong focus on algorithms, databases, architecture fundamentals and design patterns, and object oriented programming.',
  },
  {
    period: 'Nov 2021 - Present',
    role: 'Full-Stack Web Developer',
    organization: 'AnagramDev',
    link: 'https://anagram.dev/',
    summary:
      'Designing and delivering production web applications for eCommerce, from frontend architecture and UI quality to backend and services integrations.',
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
