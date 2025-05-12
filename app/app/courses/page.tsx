"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import CourseList from "@/components/course-list"
import CourseFilters from "@/components/course-filters"
import LoadingSpinner from "@/components/loading-spinner"
import PageTransition from "@/components/page-transition"
import { fetchAllCourses } from "@/lib/api"

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([])
  const [filteredCourses, setFilteredCourses] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilters, setActiveFilters] = useState<any>({
    categories: [],
    levels: [],
    priceRange: [0, 100],
    ratings: [],
    languages: [],
  })

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const coursesData = await fetchAllCourses()
        setCourses(coursesData)
        setFilteredCourses(coursesData)
      } catch (error) {
        console.error("Failed to load courses", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCourses()
  }, [])

  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters)

    // Apply filters
    let filtered = [...courses]

    // Filter by category
    if (filters.categories.length > 0) {
      filtered = filtered.filter((course) => filters.categories.includes(course.category))
    }

    // Filter by level
    if (filters.levels.length > 0) {
      filtered = filtered.filter((course) => filters.levels.includes(course.level))
    }

    // Filter by price range
    filtered = filtered.filter(
      (course) => course.price >= filters.priceRange[0] && course.price <= filters.priceRange[1],
    )

    // Filter by rating
    if (filters.ratings.length > 0) {
      const minRating = Math.min(...filters.ratings)
      filtered = filtered.filter((course) => course.rating >= minRating)
    }

    // Filter by language
    if (filters.languages.length > 0) {
      filtered = filtered.filter((course) => filters.languages.includes(course.language))
    }

    setFilteredCourses(filtered)
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            Barcha kurslar
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <CourseFilters onFilterChange={handleFilterChange} activeFilters={activeFilters} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              {isLoading ? <LoadingSpinner /> : <CourseList courses={filteredCourses} />}
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
