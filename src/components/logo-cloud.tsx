"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function LogoCloud() {
  const logos = [
    { name: "Company 1", src: "/logo.png" },
    { name: "Company 2", src: "/AI-Logo-1.png" },
    { name: "Company 3", src: "/logo2.png" },
    { name: "Company 4", src: "/logo3.png" },
    { name: "Company 5", src: "/AI-Logo-8.png" },
    { name: "Company 6", src: "/logo5.png" },
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
          className="flex items-center justify-center rounded-lg bg-white shadow-md"
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

