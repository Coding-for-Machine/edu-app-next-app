"use client"

import { motion } from "framer-motion"

export default function LoadingAnimation() {
  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const dotVariants = {
    initial: {
      y: "0%",
    },
    animate: {
      y: ["0%", "-50%", "0%"],
    },
  }

  const dotTransition = {
    duration: 0.8,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  }

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div className="flex space-x-2" variants={containerVariants} initial="initial" animate="animate">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-blue-600 rounded-full"
            variants={dotVariants}
            transition={{
              ...dotTransition,
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
