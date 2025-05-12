"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, ArrowRight, Play } from "lucide-react"
import { useLessonContent } from "@/lib/hooks"

interface LessonContentProps {
  courseId: string
  moduleId: string
  lessonId: string
}

export default function LessonContent({ courseId, moduleId, lessonId }: LessonContentProps) {
  const { lesson, loading, error, markAsCompleted } = useLessonContent(courseId, moduleId, lessonId)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (loading) {
    return <div className="p-6 text-center">Dars yuklanmoqda...</div>
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Xatolik yuz berdi: {error}</div>
  }

  if (!lesson) {
    return <div className="p-6 text-center">Dars topilmadi</div>
  }

  const handleMarkComplete = async () => {
    try {
      setIsSubmitting(true)
      await markAsCompleted()
      setIsSubmitting(false)
    } catch (error) {
      console.error("Failed to mark lesson as complete", error)
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{lesson.title}</h2>
        {lesson.completed ? (
          <div className="flex items-center text-green-600">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>Tugatilgan</span>
          </div>
        ) : (
          <Button onClick={handleMarkComplete} disabled={isSubmitting}>
            {isSubmitting ? "Saqlanmoqda..." : "Tugatildi deb belgilash"}
          </Button>
        )}
      </div>

      {lesson.videoUrl && (
        <div className="mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
            <iframe src={lesson.videoUrl} className="absolute inset-0 w-full h-full" allowFullScreen></iframe>
          </div>
        </div>
      )}

      <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: lesson.content }} />

      {lesson.images && lesson.images.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Rasmlar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden border">
                <Image
                  src={image.url || "/placeholder.svg?height=300&width=500"}
                  alt={image.caption || `Rasm ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                {image.caption && <div className="p-3 bg-gray-50 text-sm text-gray-600">{image.caption}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {lesson.attachments && lesson.attachments.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Qo'shimcha materiallar</h3>
          <div className="space-y-2">
            {lesson.attachments.map((attachment, index) => (
              <a
                key={index}
                href={attachment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border rounded-lg hover:bg-gray-50"
              >
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Play className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">{attachment.title}</div>
                  <div className="text-sm text-gray-500">
                    {attachment.type} • {attachment.size}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between mt-10 pt-6 border-t">
        <Button variant="outline" className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Oldingi dars
        </Button>
        <Button className="flex items-center">
          Keyingi dars
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
