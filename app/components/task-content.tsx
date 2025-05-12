"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, Upload, FileText, Check, X } from "lucide-react"
import { useTaskContent } from "@/lib/hooks"

interface TaskContentProps {
  courseId: string
  moduleId: string
  taskId: string
}

export default function TaskContent({ courseId, moduleId, taskId }: TaskContentProps) {
  const { task, loading, error, submitTask } = useTaskContent(courseId, moduleId, taskId)
  const [submission, setSubmission] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  if (loading) {
    return <div className="p-6 text-center">Vazifa yuklanmoqda...</div>
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Xatolik yuz berdi: {error}</div>
  }

  if (!task) {
    return <div className="p-6 text-center">Vazifa topilmadi</div>
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...fileArray])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    if (!submission && files.length === 0) {
      alert("Iltimos, vazifani yuboring yoki fayllarni yuklang")
      return
    }

    try {
      setIsSubmitting(true)

      // In a real app, you would upload files to a server
      const formData = new FormData()
      formData.append("text", submission)
      files.forEach((file) => {
        formData.append("files", file)
      })

      const result = await submitTask(formData)
      setFeedback(result.feedback)
      setSubmitted(true)
      setIsSubmitting(false)
    } catch (error) {
      console.error("Failed to submit task", error)
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{task.title}</h2>

      <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: task.description }} />

      {task.dueDate && (
        <div className="mb-6 p-3 bg-yellow-50 rounded-lg">
          <p className="font-medium">Topshirish muddati: {new Date(task.dueDate).toLocaleDateString()}</p>
        </div>
      )}

      {!submitted ? (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Vazifani topshirish</h3>
            <Textarea
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              placeholder="Vazifangizni shu yerga yozing..."
              className="min-h-[200px]"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Fayllarni yuklash</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-2">Fayllarni shu yerga tashlang yoki tanlash uchun bosing</p>
              <Input type="file" multiple onChange={handleFileChange} className="hidden" id="file-upload" />
              <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                Fayllarni tanlash
              </Button>
            </div>

            {files.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">Tanlangan fayllar:</h4>
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-blue-500" />
                        <span>{file.name}</span>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeFile(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Yuborilmoqda..." : "Vazifani topshirish"}
          </Button>
        </div>
      ) : (
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Check className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-green-600">Vazifa topshirildi</h3>
          </div>

          {feedback && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Fikr-mulohaza:</h4>
              <p className="p-3 bg-white rounded">{feedback}</p>
            </div>
          )}

          <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
            Vazifani tahrirlash
          </Button>
        </div>
      )}

      <div className="flex justify-between mt-10 pt-6 border-t">
        <Button variant="outline" className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Oldingi vazifa
        </Button>
        <Button variant="outline" className="flex items-center">
          Keyingi vazifa
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
