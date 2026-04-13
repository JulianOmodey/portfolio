import AnimatedContent from '@/components/AnimatedContent'
import DotGrid from '@/components/DotGrid'

interface SkillsSectionProps {
  skills: string[]
  dotBaseColor: string
  dotActiveColor: string
}

export default function SkillsSection({ skills, dotBaseColor, dotActiveColor }: SkillsSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 py-[clamp(3.25rem,10vw,5.2rem)] md:px-[1.2rem] md:py-[clamp(4rem,10vw,8rem)]">
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-35 [mask-image:linear-gradient(to_bottom,transparent_0%,black_16%,black_84%,transparent_100%)]"
        aria-hidden
      >
        <DotGrid
          dotSize={6}
          gap={22}
          baseColor={dotBaseColor}
          activeColor={dotActiveColor}
          proximity={145}
          shockStrength={3}
          className="h-full"
        />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[1060px]">
        <AnimatedContent distance={50}>
          <h2 className="mx-auto my-0 text-center text-[clamp(1.8rem,9vw,2.6rem)] tracking-[-0.03em] md:text-[clamp(1.9rem,4vw,3.8rem)]">
            Core Stack
          </h2>
        </AnimatedContent>

        <div
          className="mt-8 overflow-hidden border-y border-[color:var(--line)] bg-[color:var(--bg-elev)] py-[0.9rem] md:py-4"
          role="presentation"
        >
          <div
            className="flex w-max flex-nowrap items-center gap-[0.55rem] whitespace-nowrap px-3 md:gap-[0.7rem] md:px-4 [animation:skills-marquee_22s_linear_infinite]"
            role="list"
            aria-label="Core technology stack"
          >
            {[...skills, ...skills].map((skill, index) => {
              const isDuplicate = index >= skills.length

              return (
                <span
                  key={`${skill}-${index}`}
                  className="rounded-full border border-[color:var(--chip-border)] bg-[color:var(--chip-bg)] px-[0.9rem] py-[0.42rem] text-[color:var(--chip-text)] transition-all duration-200 hover:-translate-y-px hover:border-[color:var(--chip-border-hover)] hover:bg-[color:var(--chip-bg-hover)]"
                  role={isDuplicate ? undefined : 'listitem'}
                  aria-hidden={isDuplicate}
                >
                  {skill}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
