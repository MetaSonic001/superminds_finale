"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function LogoCloud() {
  const logos = [
    { name: "Company 1", src: "/placeholder.svg" },
    { name: "Company 2", src: "/placeholder.svg" },
    { name: "Company 3", src: "/placeholder.svg" },
    { name: "Company 4", src: "/placeholder.svg" },
    { name: "Company 5", src: "/placeholder.svg" },
    { name: "Company 6", src: "/placeholder.svg" },
  ]

  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center grayscale transition hover:grayscale-0"
        >
          <Image
            src={logo.src || "/placeholder.svg"}
            alt={logo.name}
            width={158}
            height={48}
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  )
}

