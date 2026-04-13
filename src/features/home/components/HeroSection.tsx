'use client'

import type { RefObject } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import AnimatedContent from '@/components/AnimatedContent'
import Particles from '@/components/Particles'
import { profile } from '@/features/home/data'

interface HeroSectionProps {
  heroRef: RefObject<HTMLElement>
  particleColors: string[]
}

export default function HeroSection({
  heroRef,
  particleColors,
}: HeroSectionProps) {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -160])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.94])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative grid min-h-screen min-h-[100dvh] place-items-center overflow-hidden px-4 pb-8 pt-[5.2rem] md:px-[1.2rem] md:pb-8 md:pt-24"
    >
      <div className="absolute inset-0 z-[1] opacity-70 md:opacity-95">
        <Particles
          particleCount={260}
          particleSpread={12}
          speed={0.16}
          particleBaseSize={92}
          sizeRandomness={1.1}
          moveParticlesOnHover={false}
          alphaParticles
          particleHoverFactor={0.8}
          particleColors={particleColors}
        />
      </div>

      <motion.div
        style={{ y: heroY, scale: heroScale }}
        className="relative z-[2] w-full max-w-[640px] text-left md:max-w-[980px] md:text-center"
      >
        <AnimatedContent
          distance={70}
          direction="vertical"
          duration={1.1}
          ease="power4.out"
        >
          <p className="inline-flex rounded-full border border-[color:var(--line)] bg-[color:var(--nav-bg)] px-[0.9rem] py-[0.45rem] text-[0.74rem] uppercase tracking-[0.08em]">
            Software Developer
          </p>
        </AnimatedContent>

        <AnimatedContent distance={56} direction="vertical" delay={0.12}>
          <h1 className="mt-5 text-left text-[clamp(2.25rem,11vw,3.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-balance md:text-center md:text-[clamp(2.5rem,7vw,6.5rem)]">
            {profile.name}
          </h1>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" delay={0.35}>
          <p className="mt-[1.2rem] max-w-none text-[clamp(1rem,2vw,1.25rem)] text-[color:var(--text-soft)] md:mx-auto md:max-w-[60ch]">
            I design and build high-performance web products with smooth,
            story-driven experiences.
          </p>
        </AnimatedContent>

        <AnimatedContent distance={38} direction="vertical" delay={0.5}>
          <div className="mt-[1.8rem] flex flex-wrap justify-start gap-[0.8rem] md:justify-center">
            <Link
              href="#projects"
              className="inline-flex min-h-[2.8rem] items-center justify-center rounded-full bg-app-accent px-[1.15rem] font-bold text-[color:var(--accent-text)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Projects
            </Link>
            <Link
              href="/files/JulianOmodeyCV.pdf"
              className="inline-flex min-h-[2.8rem] items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-elev)] px-[1.15rem] text-[color:var(--text-main)] transition-transform duration-300 hover:-translate-y-0.5"
              target="_blank"
            >
              Download CV
            </Link>
          </div>
        </AnimatedContent>
      </motion.div>
    </section>
  )
}
