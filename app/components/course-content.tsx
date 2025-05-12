"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import LessonContent from "@/components/lesson-content"
import TestContent from "@/components/test-content"
import AssignmentContent from "@/components/assignment-content"
import { fetchLessonContent, fetchTestContent, fetchAssignmentContent } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function CourseContent() {
  const searchParams = useSearchParams()
  const chapterId = searchParams.get("chapterId") || "1"
  const lessonId = searchParams.get("lessonId")
  const testId = searchParams.get("testId")
  const assignmentId = searchParams.get("assignmentId")

  const [content, setContent] = useState<any>(null)
  const [contentType, setContentType] = useState<"lesson" | "test" | "assignment" | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)

        if (lessonId) {
          const data = await fetchLessonContent(chapterId, lessonId)
          setContent(data)
          setContentType("lesson")
        } else if (testId) {
          const data = await fetchTestContent(chapterId, testId)
          setContent(data)
          setContentType("test")
        } else if (assignmentId) {
          const data = await fetchAssignmentContent(chapterId, assignmentId)
          setContent(data)
          setContentType("assignment")
        } else {
          // Default to first lesson if no specific content is requested
          const data = await fetchLessonContent(chapterId, "1")
          setContent(data)
          setContentType("lesson")
        }

        setLoading(false)
      } catch (err) {
        setError("Failed to load content")
        setLoading(false)
      }
    }

    loadContent()
  }, [chapterId, lessonId, testId, assignmentId])

  if (loading) {
    return <div className="bg-white rounded-lg shadow p-6">Loading content...</div>
  }

  if (error) {
    return <div className="bg-white rounded-lg shadow p-6 text-red-500">{error}</div>
  }

  return (
    <div className="bg-white rounded-lg shadow">
      {contentType === "lesson" && <LessonContent lesson={content} />}
      {contentType === "test" && <TestContent test={content} />}
      {contentType === "assignment" && <AssignmentContent assignment={content} />}

      <div className="flex justify-between p-4 border-t">
        <Button variant="outline" className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <Button className="flex items-center">
          Next
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
