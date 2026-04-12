import AnimatedContent from '@/components/AnimatedContent'
import DotGrid from '@/components/DotGrid'

interface SkillsSectionProps {
  skills: string[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
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

        <div className="skills-grid" role="list" aria-label="Core technology stack">
          {skills.map(skill => (
            <span key={skill} className="skill-chip" role="listitem">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
