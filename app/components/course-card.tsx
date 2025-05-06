import Image from "next/image"
import Link from "next/link"
import { Clock, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CourseProps {
  course: {
    id: number
    title: string
    instructor: string
    category: string
    level: string
    students: number
    duration: string
    price: string
    image: string
  }
}

export default function CourseCard({ course }: CourseProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-48">
          <Image
            src={course.image || "/placeholder.svg?height=200&width=400"}
            alt={course.title}
            fill
            className="object-cover"
          />
          <Badge className="absolute top-3 left-3 bg-indigo-600 hover:bg-indigo-700">{course.category}</Badge>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{course.instructor}</p>

          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-1" />
              <span>{course.students} o&apos;quvchi</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <Badge variant="outline">{course.level}</Badge>
            <span className="font-bold text-lg">{course.price}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
