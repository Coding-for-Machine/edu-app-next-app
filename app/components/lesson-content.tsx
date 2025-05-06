import { FileText } from "lucide-react"

interface LessonContentProps {
  lesson: {
    id: number
    title: string
    content: string
    type: string
    duration: string
    hasTest: boolean
    hasTask: boolean
    completed: boolean
  }
}

export default function LessonContent({ lesson }: LessonContentProps) {
  return (
    <div className="prose max-w-none">
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <FileText className="h-4 w-4 mr-2" />
        <span>Dars matni</span>
      </div>

      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />

      {lesson.type === "video" && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Dars resurslari</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-indigo-600" />
              <a href="#" className="text-indigo-600 hover:underline">
                Dars prezentatsiyasi.pdf
              </a>
            </li>
            <li className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-indigo-600" />
              <a href="#" className="text-indigo-600 hover:underline">
                Kod namunalari.zip
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
