"use client"

import { useState, useEffect } from "react"
import {
  fetchLessonContent,
  fetchTestContent,
  fetchTaskContent,
  markLessonComplete,
  submitTest,
  submitTask,
} from "@/lib/api"

export function useLessonContent(courseId: string, moduleId: string, lessonId: string) {
  const [lesson, setLesson] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadLesson = async () => {
      try {
        setLoading(true)
        const data = await fetchLessonContent(courseId, moduleId, lessonId)
        setLesson(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load lesson content")
        setLoading(false)
      }
    }

    loadLesson()
  }, [courseId, moduleId, lessonId])

  const markAsCompleted = async () => {
    if (!lesson) return

    try {
      await markLessonComplete(lessonId)
      setLesson((prev: any) => ({ ...prev, completed: true }))
      return { success: true }
    } catch (err) {
      throw new Error("Failed to mark lesson as complete")
    }
  }

  return { lesson, loading, error, markAsCompleted }
}

export function useTestContent(courseId: string, moduleId: string, testId: string) {
  const [test, setTest] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTest = async () => {
      try {
        setLoading(true)
        const data = await fetchTestContent(courseId, moduleId, testId)
        setTest(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load test content")
        setLoading(false)
      }
    }

    loadTest()
  }, [courseId, moduleId, testId])

  const submitTestAnswers = async (answers: Record<string, any>) => {
    if (!test) return

    try {
      const result = await submitTest(testId, answers)
      return result
    } catch (err) {
      throw new Error("Failed to submit test answers")
    }
  }

  return { test, loading, error, submitTest: submitTestAnswers }
}

export function useTaskContent(courseId: string, moduleId: string, taskId: string) {
  const [task, setTask] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTask = async () => {
      try {
        setLoading(true)
        const data = await fetchTaskContent(courseId, moduleId, taskId)
        setTask(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load task content")
        setLoading(false)
      }
    }

    loadTask()
  }, [courseId, moduleId, taskId])

  const submitTaskContent = async (formData: FormData) => {
    if (!task) return

    try {
      const result = await submitTask(taskId, formData)
      return result
    } catch (err) {
      throw new Error("Failed to submit task")
    }
  }

  return { task, loading, error, submitTask: submitTaskContent }
}
