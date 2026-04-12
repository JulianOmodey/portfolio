import AnimatedContent from '@/components/AnimatedContent'

export default function ContactSection() {
  return (
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
  )
}
