import React from 'react'
import { motion, Variants } from 'motion/react'

const blurInContainerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1 as const,
    },
  },
}

const blurInItemVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 0.3 },
  },
}

function TextBlur({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
        variants={blurInContainerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ display: "inline-block" }}
      >
        <motion.span
          variants={blurInItemVariants}
          style={{ display: "inline-block" }}
        >
          {children}
        </motion.span>
      </motion.span>
  )
}

export default TextBlur