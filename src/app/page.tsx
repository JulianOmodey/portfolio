'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import DotGrid from '@/components/DotGrid'
import Particles from '@/components/Particles'

const projects = [
  {
    name: 'Realtime Collaboration Platform',
    description:
      'Multiplayer editing with optimistic UI, conflict resolution, and web sockets at scale.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis']
  },
  {
    name: 'Developer Analytics Dashboard',
    description:
      'Fast, visual product intelligence with streaming charts, cohort tooling, and role-based access.',
    stack: ['React', 'Node.js', 'ClickHouse', 'Tailwind CSS']
  },
  {
    name: 'AI Workflow Automations',
    description:
      'An internal automation suite that removes repetitive tasks through event-driven pipelines.',
    stack: ['Python', 'Queue Workers', 'OpenAI API', 'Docker']
  }
]

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'GraphQL',
  'PostgreSQL',
  'Redis',
  'Docker',
  'CI/CD',
  'System Design'
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -160])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.94])

  return (
    <main className="portfolio-root">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-[linear-gradient(90deg,#00A6FB,#00E0A4)]"
      />

      <section className="hero-shell">
        <div className="hero-particles">
          <Particles
            particleCount={260}
            particleSpread={12}
            speed={0.16}
            particleBaseSize={92}
            sizeRandomness={1.1}
            moveParticlesOnHover
            alphaParticles
            particleHoverFactor={0.8}
            particleColors={['#c8f4ff', '#9be1ff', '#85ffc7']}
          />
        </div>

        <motion.div style={{ y: heroY, scale: heroScale }} className="hero-content">
          <AnimatedContent distance={70} direction="vertical" duration={1.1} ease="power4.out">
            <p className="capsule">Software Developer Portfolio</p>
          </AnimatedContent>

          <BlurText
            text="Julian Omodey"
            animateBy="letters"
            delay={46}
            className="hero-title"
          />

          <AnimatedContent distance={40} direction="vertical" delay={0.35}>
            <p className="hero-subtitle">
              I design and build high-performance web products with smooth, story-driven experiences.
            </p>
          </AnimatedContent>

          <AnimatedContent distance={38} direction="vertical" delay={0.5}>
            <div className="hero-cta-row">
              <Link href="#projects" className="cta-primary">
                Explore Projects
              </Link>
              <Link href="/files/JulianOmodeyCV.pdf" className="cta-secondary" target="_blank">
                Download CV
              </Link>
            </div>
          </AnimatedContent>
        </motion.div>
      </section>

      <section id="about" className="section-shell about-shell">
        <div className="section-glow" />
        <div className="section-grid">
          <AnimatedContent distance={68}>
            <div className="profile-card glass-panel">
              <Image
                src="/images/portrait-2.JPG"
                alt="Portrait of Julian Omodey"
                width={520}
                height={680}
                className="profile-image"
                priority
              />
            </div>
          </AnimatedContent>

          <div className="about-copy-wrap">
            <AnimatedContent distance={60} delay={0.05}>
              <h2 className="section-title">Crafting Fast Interfaces With Purpose</h2>
            </AnimatedContent>

            <AnimatedContent distance={52} delay={0.15}>
              <p className="section-copy">
                I focus on premium frontend engineering: performant rendering, polished transitions, and
                architectures that remain reliable as products grow.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={48} delay={0.25}>
              <p className="section-copy">
                My sweet spot is end-to-end product development where thoughtful UX, clean code, and
                measurable business impact align.
              </p>
            </AnimatedContent>
          </div>
        </div>
      </section>

      <section className="section-shell skills-shell">
        <div className="dotgrid-wrap" aria-hidden>
          <DotGrid
            dotSize={6}
            gap={22}
            baseColor="#123044"
            activeColor="#00b6ff"
            proximity={145}
            shockStrength={3}
            className="h-full"
          />
        </div>

        <div className="section-content">
          <AnimatedContent distance={50}>
            <h2 className="section-title center">Core Stack</h2>
          </AnimatedContent>

          <div className="skills-ticker" role="presentation">
            <div className="skills-track">
              {[...skills, ...skills].map((skill, index) => (
                <span key={`${skill}-${index}`} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell projects-shell">
        <div className="section-content sticky-title-wrap">
          <AnimatedContent distance={64}>
            <h2 className="section-title">Selected Work</h2>
          </AnimatedContent>
          <AnimatedContent distance={54} delay={0.12}>
            <p className="section-copy narrow">
              Scroll down to reveal each project card with layered motion, inspired by Apple-like product pages.
            </p>
          </AnimatedContent>
        </div>

        <div className="project-stack">
          {projects.map((project, index) => (
            <AnimatedContent
              key={project.name}
              distance={100}
              direction="vertical"
              duration={0.95}
              delay={index * 0.08}
            >
              <article className="project-card glass-panel">
                <p className="project-index">0{index + 1}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell contact-shell">
        <AnimatedContent distance={62}>
          <h2 className="section-title center">Let&apos;s Build Something Great</h2>
        </AnimatedContent>
        <AnimatedContent distance={44} delay={0.18}>
          <p className="section-copy center narrow">
            Open to remote opportunities, product-focused teams, and ambitious freelance collaborations.
          </p>
        </AnimatedContent>
        <AnimatedContent distance={34} delay={0.25}>
          <div className="hero-cta-row center">
            <a className="cta-primary" href="mailto:julian@example.com">
              Email Me
            </a>
            <a className="cta-secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </AnimatedContent>
      </section>
    </main>
  )
}
