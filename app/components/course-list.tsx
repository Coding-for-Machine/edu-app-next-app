"use client"

import { motion } from "framer-motion"
import CourseCard from "@/components/course-card"
import type { Course } from "@/lib/types"

interface CourseListProps {
  courses: Course[]
}

export default function CourseList({ courses }: CourseListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  if (courses.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 bg-white rounded-lg shadow-sm"
      >
        <p className="text-gray-500">Kurslar topilmadi</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {courses.map((course, index) => (
        <motion.div key={course.id} variants={itemVariants} custom={index}>
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  )
}
