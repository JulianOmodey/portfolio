import AnimatedContent from '@/components/AnimatedContent'
import type { ProjectItem } from '@/data/types'

interface ProjectsSectionProps {
  projects: ProjectItem[]
}

const ProjectsSection = ({ projects }: ProjectsSectionProps): JSX.Element => {
  return (
    <section
      id="projects"
      className="relative px-4 py-[clamp(3.25rem,10vw,5.2rem)] md:mx-auto md:grid md:w-full md:max-w-[1180px] md:grid-cols-[0.95fr_1.05fr] md:gap-8 md:px-[1.2rem] md:py-[clamp(4rem,10vw,8rem)]"
    >
      <div className="mx-auto w-full max-w-[1060px] pb-[1.15rem] md:sticky md:top-3 md:max-w-none md:pb-8">
        <AnimatedContent distance={64}>
          <h2 className="m-0 text-[clamp(1.8rem,9vw,2.6rem)] tracking-[-0.03em] md:text-[clamp(1.9rem,4vw,3.8rem)]">
            Selected Work
          </h2>
        </AnimatedContent>
        <AnimatedContent distance={54} delay={0.12}>
          <p className="m-0 max-w-[60ch] text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.72] text-[color:var(--text-soft)]">
            A selection of production-grade frontend and full-stack work across
            e-commerce, CMS-driven platforms, and scalable UI architecture.
          </p>
        </AnimatedContent>
      </div>

      <div className="mx-auto grid w-full max-w-[1060px] gap-4 md:mt-16 md:max-w-none">
        {projects.map((project, index) => (
          <AnimatedContent
            key={project.name}
            distance={100}
            direction="vertical"
            duration={0.95}
            delay={index * 0.08}
          >
            <article className="min-h-[210px] rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-[1.1rem] shadow-app backdrop-blur-[10px] md:p-[1.4rem]">
              <p className="mb-[0.6rem] mt-0 text-[0.82rem] tracking-[0.08em] text-[color:var(--project-index)]">
                0{index + 1}
              </p>
              <h3 className="m-0 text-[clamp(1.25rem,2vw,1.8rem)]">
                {project.name}
              </h3>
              <p className="mb-0 mt-[0.85rem] text-[color:var(--text-soft)]">
                {project.description}
              </p>
              <div className="mt-[0.95rem] flex flex-wrap gap-[0.45rem]">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[color:var(--tag-border)] px-[0.7rem] py-[0.28rem] text-[0.86rem] text-[color:var(--tag-text)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
