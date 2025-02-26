"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function FadeUp({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

