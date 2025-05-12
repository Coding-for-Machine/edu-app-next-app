"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, BookOpen, FileText, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Module } from "@/lib/types"

interface ModuleListProps {
  modules: Module[]
  courseId: string
}

export default function ModuleList({ modules, courseId }: ModuleListProps) {
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

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      {modules.map((module, index) => (
        <motion.div
          key={module.id}
          variants={itemVariants}
          custom={index}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          className="bg-white rounded-lg border shadow-sm overflow-hidden"
        >
          <div className="p-5 bg-gray-50 border-b flex justify-between items-center">
            <div>
              <div className="flex items-center">
                <Badge variant="outline" className="mr-2">
                  Modul {index + 1}
                </Badge>
                {module.completed && <Badge className="bg-green-500">Tugatilgan</Badge>}
              </div>
              <h3 className="text-xl font-semibold mt-1">{module.title}</h3>
            </div>
            <motion.div whileHover={{ x: 3 }} whileTap={{ x: -3 }}>
              <Link
                href={`/courses/${courseId}/modules/${module.id}`}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                Modulga o'tish <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          </div>

          <div className="p-5">
            <p className="text-gray-600 mb-4">{module.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                <span>{module.lessons.length} darslar</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-orange-500 mr-2" />
                <span>{module.tests.length} testlar</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span>{module.tasks.length} vazifalar</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
