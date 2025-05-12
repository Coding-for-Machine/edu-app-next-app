"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Users, Star, BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ModuleList from "@/components/module-list"
import LoadingSpinner from "@/components/loading-spinner"
import PageTransition from "@/components/page-transition"
import { fetchCourseDetails } from "@/lib/api"

interface CoursePageProps {
  params: {
    courseId: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const [course, setCourse] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const courseData = await fetchCourseDetails(params.courseId)
        setCourse(courseData)
      } catch (error) {
        console.error("Failed to load course details", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCourse()
  }, [params.courseId])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500">Kurs topilmadi</p>
      </div>
    )
  }

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
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Course Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col md:flex-row gap-8"
            >
              <motion.div variants={itemVariants} className="md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Link href="/" className="hover:text-blue-600">
                    Bosh sahifa
                  </Link>
                  <ChevronRight className="h-4 w-4 mx-2" />
                  <Link href="/courses" className="hover:text-blue-600">
                    Kurslar
                  </Link>
                  <ChevronRight className="h-4 w-4 mx-2" />
                  <span className="text-gray-700">{course.title}</span>
                </div>

                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-gray-600 mb-6">{course.description}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span>{course.studentsCount} o'quvchilar</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>
                      {course.rating} ({course.reviewsCount} sharhlar)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
                    <span>{course.modulesCount} modullar</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Kursni boshlash
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline">Kurs dasturi</Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="md:w-1/3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={course.image || "/placeholder.svg?height=400&width=600"}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Course Content */}
        <div className="container mx-auto px-4 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Kurs tarkibi</h2>
              <ModuleList modules={course.modules} courseId={params.courseId} />
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">O'qituvchi haqida</h3>

                <div className="flex items-center mb-4">
                  <Image
                    src={course.instructor.avatar || "/placeholder.svg?height=60&width=60"}
                    alt={course.instructor.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{course.instructor.name}</h4>
                    <p className="text-gray-600">{course.instructor.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{course.instructor.bio}</p>

                <Link href={`/instructors/${course.instructor.id}`} className="text-blue-600 hover:underline">
                  O'qituvchi haqida ko'proq
                </Link>

                <hr className="my-6" />

                <h3 className="text-xl font-bold mb-4">Kurs ma'lumotlari</h3>

                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Darajasi:</span>
                    <span className="font-medium">{course.level}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Til:</span>
                    <span className="font-medium">{course.language}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sertifikat:</span>
                    <span className="font-medium">{course.certificate ? "Ha" : "Yo'q"}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Yangilangan:</span>
                    <span className="font-medium">{course.updatedAt}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
