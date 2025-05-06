import type { Metadata } from "next"
import { Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CourseCard from "@/components/course-card"
import { courses } from "@/lib/data"

export const metadata: Metadata = {
  title: "Kurslar | 42.uz Clone",
  description: "42.uz platformasidagi barcha kurslar",
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kurslar</h1>
          <p className="max-w-2xl">
            Zamonaviy kasblarni o&apos;rganish va IT sohasida o&apos;z o&apos;rnini topish uchun eng yaxshi kurslar
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input placeholder="Kurslarni qidirish..." className="pl-10" />
            </div>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Kategoriya" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha kurslar</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="mobile">Mobil dasturlash</SelectItem>
                  <SelectItem value="ux">UX dizayn</SelectItem>
                  <SelectItem value="graphic">Grafik dizayn</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Daraja" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha darajalar</SelectItem>
                  <SelectItem value="beginner">Boshlang'ich</SelectItem>
                  <SelectItem value="intermediate">O'rta</SelectItem>
                  <SelectItem value="advanced">Yuqori</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}
