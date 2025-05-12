"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, BookOpen, CheckCircle, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fetchCourseStructure } from "@/lib/api"
import type { Chapter } from "@/lib/types"

export default function CourseNavigation() {
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadCourseStructure = async () => {
      try {
        setLoading(true)
        const data = await fetchCourseStructure()
        setChapters(data.chapters)

        // Initialize expanded state for all chapters
        const expanded: Record<string, boolean> = {}
        data.chapters.forEach((chapter: Chapter) => {
          expanded[chapter.id] = false
        })
        setExpandedChapters(expanded)

        setLoading(false)
      } catch (err) {
        setError("Failed to load course structure")
        setLoading(false)
      }
    }

    loadCourseStructure()
  }, [])

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }))
  }

  if (loading) {
    return <div className="p-4">Loading course structure...</div>
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">Course Content</h2>

      <div className="space-y-2">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="border rounded-md overflow-hidden">
            <Button
              variant="ghost"
              className="w-full flex items-center justify-between p-3 text-left"
              onClick={() => toggleChapter(chapter.id)}
            >
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>{chapter.title}</span>
              </div>
              {expandedChapters[chapter.id] ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>

            {expandedChapters[chapter.id] && (
              <div className="pl-8 pr-4 pb-3 space-y-1">
                {chapter.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/course/${chapter.id}/lesson/${lesson.id}`}
                    className="flex items-center py-1 px-2 text-sm rounded hover:bg-gray-100"
                  >
                    {lesson.completed ? (
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    ) : (
                      <Circle className="h-4 w-4 mr-2 text-gray-300" />
                    )}
                    {lesson.title}
                  </Link>
                ))}

                {chapter.tests && chapter.tests.length > 0 && (
                  <>
                    <div className="text-xs font-semibold uppercase text-gray-500 mt-2 mb-1 px-2">Tests</div>
                    {chapter.tests.map((test) => (
                      <Link
                        key={test.id}
                        href={`/course/${chapter.id}/test/${test.id}`}
                        className="flex items-center py-1 px-2 text-sm rounded hover:bg-gray-100"
                      >
                        {test.completed ? (
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        ) : (
                          <Circle className="h-4 w-4 mr-2 text-gray-300" />
                        )}
                        {test.title}
                      </Link>
                    ))}
                  </>
                )}

                {chapter.assignments && chapter.assignments.length > 0 && (
                  <>
                    <div className="text-xs font-semibold uppercase text-gray-500 mt-2 mb-1 px-2">Assignments</div>
                    {chapter.assignments.map((assignment) => (
                      <Link
                        key={assignment.id}
                        href={`/course/${chapter.id}/assignment/${assignment.id}`}
                        className="flex items-center py-1 px-2 text-sm rounded hover:bg-gray-100"
                      >
                        {assignment.completed ? (
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        ) : (
                          <Circle className="h-4 w-4 mr-2 text-gray-300" />
                        )}
                        {assignment.title}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
