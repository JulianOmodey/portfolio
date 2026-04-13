import AnimatedContent from '@/components/AnimatedContent'
import { FiLinkedin, FiMail } from 'react-icons/fi'
import { getSocialLinkHref } from '@/data/data'

const ContactSection = (): JSX.Element => {
  const emailHref = getSocialLinkHref('Email')
  const linkedInHref = getSocialLinkHref('LinkedIn')

  return (
    <section
      id="contact"
      className="relative px-4 pb-[clamp(5rem,11vw,9rem)] pt-[clamp(3.25rem,10vw,5.2rem)] md:px-[1.2rem] md:pt-[clamp(4rem,10vw,8rem)]"
    >
      <AnimatedContent distance={62}>
        <h2 className="m-0 mx-auto text-center text-[clamp(1.8rem,9vw,2.6rem)] tracking-[-0.03em] md:text-[clamp(1.9rem,4vw,3.8rem)]">
          Let&apos;s Build Something Great
        </h2>
      </AnimatedContent>
      <AnimatedContent distance={44} delay={0.18}>
        <p className="m-0 mx-auto max-w-[60ch] text-center text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.72] text-[color:var(--text-soft)]">
          Open to remote opportunities, product-focused teams, and ambitious
          freelance collaborations.
        </p>
      </AnimatedContent>
      <AnimatedContent distance={34} delay={0.25}>
        <div className="mt-[1.8rem] flex flex-wrap justify-center gap-[0.8rem]">
          <a
            className="inline-flex min-h-[2.8rem] items-center justify-center gap-2 rounded-full bg-app-accent px-[1.15rem] font-bold text-[color:var(--accent-text)] transition-transform duration-300 hover:-translate-y-0.5"
            href={emailHref}
          >
            <FiMail aria-hidden className="h-[1rem] w-[1rem] shrink-0" />
            Email Me
          </a>
          <a
            className="inline-flex min-h-[2.8rem] items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-elev)] px-[1.15rem] text-[color:var(--text-main)] transition-transform duration-300 hover:-translate-y-0.5"
            href={linkedInHref}
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin aria-hidden className="h-[1rem] w-[1rem] shrink-0" />
            LinkedIn
          </a>
        </div>
      </AnimatedContent>
    </section>
  )
}

export default ContactSection
