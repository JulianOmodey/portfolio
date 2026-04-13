'use client'

import { motion, useScroll } from 'motion/react'

const ScrollProgress = (): JSX.Element => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-[linear-gradient(90deg,var(--accent-start),var(--accent-end))]"
    />
  )
}

export default ScrollProgress
