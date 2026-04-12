'use client'

import { motion, useScroll } from 'motion/react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-[linear-gradient(90deg,#00A6FB,#00E0A4)]"
    />
  )
}
