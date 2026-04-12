import Image from 'next/image'
import AnimatedContent from '@/components/AnimatedContent'

export default function AboutSection() {
  return (
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
              I focus on premium frontend engineering: performant rendering, polished transitions, and architectures
              that remain reliable as products grow.
            </p>
          </AnimatedContent>

          <AnimatedContent distance={48} delay={0.25}>
            <p className="section-copy">
              My sweet spot is end-to-end product development where thoughtful UX, clean code, and measurable business
              impact align.
            </p>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
