import AnimatedContent from '@/components/AnimatedContent'
import type { ProjectItem } from '@/features/home/types'

interface ProjectsSectionProps {
  projects: ProjectItem[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
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
  )
}
