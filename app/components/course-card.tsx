"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Users, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Course } from "@/lib/types"

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link href={`/courses/${course.id}`} className="block h-full">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
          <div className="relative">
            <Image
              src={course.image || "/placeholder.svg?height=200&width=400"}
              alt={course.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {course.featured && (
              <Badge className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600">Mashhur</Badge>
            )}
          </div>

          <div className="p-5 flex flex-col flex-grow">
            <div className="flex items-center mb-2">
              <Badge variant="outline" className="text-xs font-normal">
                {course.category}
              </Badge>
              <span className="ml-auto text-sm text-gray-500">{course.level}</span>
            </div>

            <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{course.shortDescription}</p>

            <div className="flex items-center text-sm text-gray-500 mt-auto">
              <div className="flex items-center mr-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center mr-4">
                <Users className="h-4 w-4 mr-1" />
                <span>{course.studentsCount}</span>
              </div>
              <div className="flex items-center ml-auto">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span>{course.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
