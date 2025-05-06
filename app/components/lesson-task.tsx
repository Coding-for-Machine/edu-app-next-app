"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { getTaskByLessonId } from "@/lib/data"

interface LessonTaskProps {
  lessonId: number
  courseId: number
}

export default function LessonTask({ lessonId, courseId }: LessonTaskProps) {
  const task = getTaskByLessonId(courseId, lessonId)
  const [solution, setSolution] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [submitted, setSubmitted] = useState(false)

  if (!task) {
    return <div>Bu dars uchun amaliy vazifa mavjud emas.</div>
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = () => {
    // In a real app, this would send the solution to the server
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <div className="text-lg font-semibold">{task.title}</div>

      {submitted && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <AlertTitle>Vazifa yuborildi!</AlertTitle>
          <AlertDescription>
            Sizning vazifangiz tekshirish uchun yuborildi. Natijalar tez orada e&apos;lon qilinadi.
          </AlertDescription>
        </Alert>
      )}

      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: task.description }} />
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Vazifa talablari</h3>
        <ul className="list-disc pl-5 space-y-2">
          {task.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {!submitted && (
        <div className="space-y-4 border-t pt-6">
          <h3 className="text-lg font-semibold">Vazifani topshirish</h3>

          <div>
            <label className="block text-sm font-medium mb-2">Yechimingiz haqida izoh</label>
            <Textarea
              placeholder="Yechimingiz haqida qisqacha ma'lumot bering..."
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              className="h-32"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Fayllarni yuklash</label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600 mb-2">
                Fayllarni bu yerga tashlang yoki <span className="text-indigo-600">tanlang</span>
              </p>
              <input type="file" multiple onChange={handleFileChange} className="hidden" id="file-upload" />
              <label htmlFor="file-upload">
                <Button variant="outline" type="button" className="mt-2">
                  Fayllarni tanlash
                </Button>
              </label>
            </div>

            {files.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Tanlangan fayllar:</p>
                <ul className="text-sm text-gray-600">
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Button onClick={handleSubmit} disabled={solution.trim() === "" && files.length === 0} className="mt-4">
            Vazifani topshirish
          </Button>
        </div>
      )}
    </div>
  )
}
