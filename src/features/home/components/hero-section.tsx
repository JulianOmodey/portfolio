'use client'

import type { RefObject } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import AnimatedContent from '@/components/AnimatedContent'
import Particles from '@/components/Particles'

interface HeroSectionProps {
  heroRef: RefObject<HTMLElement>
}

export default function HeroSection({ heroRef }: HeroSectionProps) {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -160])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.94])

  return (
    <section id="home" ref={heroRef} className="hero-shell">
      <div className="hero-particles">
        <Particles
          particleCount={260}
          particleSpread={12}
          speed={0.16}
          particleBaseSize={92}
          sizeRandomness={1.1}
          moveParticlesOnHover={false}
          alphaParticles
          particleHoverFactor={0.8}
          particleColors={['#c8f4ff', '#9be1ff', '#85ffc7']}
        />
      </div>

      <motion.div style={{ y: heroY, scale: heroScale }} className="hero-content">
        <AnimatedContent distance={70} direction="vertical" duration={1.1} ease="power4.out">
          <p className="capsule">Software Developer Portfolio</p>
        </AnimatedContent>

        <AnimatedContent distance={56} direction="vertical" delay={0.12}>
          <h1 className="hero-title">Julian Omodey</h1>
        </AnimatedContent>

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
  )
}
