"use client"

import Link from "next/link"
import { useState } from "react"
import { BookOpen, FileText, CheckCircle, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Module } from "@/lib/types"

interface ModuleNavigationProps {
  courseId: string
  moduleId: string
  module: Module
  activeTab: string
  activeLessonId: string | null
  activeTestId: string | null
  activeTaskId: string | null
}

export default function ModuleNavigation({
  courseId,
  moduleId,
  module,
  activeTab,
  activeLessonId,
  activeTestId,
  activeTaskId,
}: ModuleNavigationProps) {
  const [expandedSections, setExpandedSections] = useState({
    lessons: true,
    tests: true,
    tasks: true,
  })

  const toggleSection = (section: "lessons" | "tests" | "tasks") => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Link href={`/courses/${courseId}`} className="text-blue-600 hover:text-blue-800 text-sm mb-4 block">
        ← Kursga qaytish
      </Link>

      <h2 className="text-xl font-bold mb-4">{module.title}</h2>

      <div className="space-y-4">
        {/* Lessons Section */}
        <div>
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between p-2 text-left"
            onClick={() => toggleSection("lessons")}
          >
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-medium">Darslar</span>
            </div>
            {expandedSections.lessons ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>

          {expandedSections.lessons && (
            <div className="mt-2 ml-6 space-y-1">
              {module.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/courses/${courseId}/modules/${moduleId}?tab=lessons&lessonId=${lesson.id}`}
                  className={cn(
                    "block py-2 px-3 rounded-md text-sm",
                    activeTab === "lessons" && activeLessonId === lesson.id
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "hover:bg-gray-100",
                  )}
                >
                  <div className="flex items-center">
                    {lesson.completed ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <div className="h-4 w-4 border border-gray-300 rounded-full mr-2" />
                    )}
                    {lesson.title}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Tests Section */}
        <div>
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between p-2 text-left"
            onClick={() => toggleSection("tests")}
          >
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-orange-500 mr-2" />
              <span className="font-medium">Testlar</span>
            </div>
            {expandedSections.tests ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>

          {expandedSections.tests && (
            <div className="mt-2 ml-6 space-y-1">
              {module.tests.map((test) => (
                <Link
                  key={test.id}
                  href={`/courses/${courseId}/modules/${moduleId}?tab=tests&testId=${test.id}`}
                  className={cn(
                    "block py-2 px-3 rounded-md text-sm",
                    activeTab === "tests" && activeTestId === test.id
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "hover:bg-gray-100",
                  )}
                >
                  <div className="flex items-center">
                    {test.completed ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <div className="h-4 w-4 border border-gray-300 rounded-full mr-2" />
                    )}
                    {test.title}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Tasks Section */}
        <div>
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between p-2 text-left"
            onClick={() => toggleSection("tasks")}
          >
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-medium">Vazifalar</span>
            </div>
            {expandedSections.tasks ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>

          {expandedSections.tasks && (
            <div className="mt-2 ml-6 space-y-1">
              {module.tasks.map((task) => (
                <Link
                  key={task.id}
                  href={`/courses/${courseId}/modules/${moduleId}?tab=tasks&taskId=${task.id}`}
                  className={cn(
                    "block py-2 px-3 rounded-md text-sm",
                    activeTab === "tasks" && activeTaskId === task.id
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "hover:bg-gray-100",
                  )}
                >
                  <div className="flex items-center">
                    {task.completed ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <div className="h-4 w-4 border border-gray-300 rounded-full mr-2" />
                    )}
                    {task.title}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
