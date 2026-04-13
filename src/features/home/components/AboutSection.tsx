import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import AnimatedContent from '@/components/AnimatedContent'
import { aboutHighlights, careerTimeline } from '@/features/home/data'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-x-clip px-4 py-[clamp(3.25rem,10vw,5.2rem)] md:px-[1.2rem] md:py-[clamp(4rem,10vw,8rem)]"
    >
      <div className="pointer-events-none absolute inset-[28%_-14%_-34%_-14%] z-[1] opacity-60 [background:radial-gradient(circle_at_50%_58%,var(--section-glow),transparent_72%)] [filter:blur(26px)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_24%,black_74%,transparent_100%)]" />
      <div className="relative z-[2] mx-auto grid w-full max-w-[1060px] grid-cols-1 gap-[clamp(1.4rem,3vw,3rem)] md:grid-cols-2">
        <AnimatedContent distance={68}>
          <div className="overflow-hidden rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--bg-elev)] shadow-app backdrop-blur-[10px]">
            <Image
              src="/images/portrait-2.JPG"
              alt="Julian's portrait"
              width={520}
              height={680}
              className="block h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedContent>

        <div className="grid content-center gap-3">
          <AnimatedContent distance={60} delay={0.05}>
            <h2 className="m-0 text-[clamp(1.9rem,4vw,3.8rem)] tracking-[-0.03em]">
              Crafting Fast Interfaces With Purpose
            </h2>
          </AnimatedContent>

          {aboutHighlights.map((paragraph, index) => (
            <AnimatedContent
              key={paragraph}
              distance={52 - index * 4}
              delay={0.15 + index * 0.1}
            >
              <p className="m-0 text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.72] text-[color:var(--text-soft)]">
                {paragraph}
              </p>
            </AnimatedContent>
          ))}

          <AnimatedContent distance={44} delay={0.35}>
            <div className="mt-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-4 shadow-app backdrop-blur-[10px]">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[128px_minmax(0,1fr)] md:gap-6">
                <aside className="m-0 text-sm uppercase tracking-[0.08em] text-[color:var(--text-soft)]">
                  My Career:
                </aside>

                <ol className="relative m-0 list-none space-y-6 border-l border-[color:var(--line-strong)] pl-6">
                  {careerTimeline.map((entry) => (
                    <li
                      key={`${entry.organization}-${entry.period}`}
                      className="relative"
                    >
                      <span
                        aria-hidden
                        className="absolute -left-[1.86rem] top-1.5 h-3 w-3 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-main)]"
                      />
                      <p className="m-0 text-xs uppercase tracking-[0.08em] text-[color:var(--text-soft)]">
                        {entry.period}
                      </p>
                      <h3 className="m-0 mt-1 text-[1.05rem] tracking-[-0.01em] text-[color:var(--text-strong)]">
                        {entry.role}
                      </h3>
                      {entry.link ? (
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-1 inline-flex items-center gap-1.5 text-sm text-[color:var(--text-main)] underline-offset-4 transition-colors duration-200 ease-out hover:text-[color:var(--text-strong)] hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--line-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-elev)]"
                        >
                          <span>{entry.organization}</span>
                          <FiExternalLink
                            aria-hidden
                            className="h-[0.82rem] w-[0.82rem] shrink-0 translate-y-[-0.5px] transition-transform duration-200 ease-out group-hover:translate-x-[1px] group-hover:translate-y-[-1.5px]"
                          />
                        </a>
                      ) : (
                        <p className="m-0 mt-1 text-sm text-[color:var(--text-main)]">
                          {entry.organization}
                        </p>
                      )}
                      <p className="m-0 mt-2 text-sm leading-[1.65] text-[color:var(--text-soft)]">
                        {entry.summary}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
