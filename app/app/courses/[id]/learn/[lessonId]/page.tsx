import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, List, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LessonContent from "@/components/lesson-content"
import LessonTest from "@/components/lesson-test"
import LessonTask from "@/components/lesson-task"
import { courses, getLessonById, getCourseLessons } from "@/lib/data"

export const metadata: Metadata = {
  title: "Dars | 42.uz Clone",
  description: "42.uz platformasidagi dars",
}

export default function LessonPage({ params }: { params: { id: string; lessonId: string } }) {
  const courseId = Number.parseInt(params.id)
  const lessonId = Number.parseInt(params.lessonId)

  const course = courses.find((c) => c.id === courseId)
  if (!course) notFound()

  const lessons = getCourseLessons(courseId)
  const lesson = getLessonById(courseId, lessonId)
  if (!lesson) notFound()

  const currentIndex = lessons.findIndex((l) => l.id === lessonId)
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null

  // Calculate progress
  const progress = Math.round(((currentIndex + 1) / lessons.length) * 100)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-[65px] z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href={`/courses/${courseId}`} className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Orqaga</span>
              </Link>
              <h1 className="text-lg font-medium truncate max-w-[200px] md:max-w-md">{course.title}</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block w-48">
                <Progress value={progress} className="h-2" />
              </div>
              <span className="text-sm text-gray-600">{progress}% tugallandi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-1/4 order-2 lg:order-1">
          <div className="bg-white rounded-xl shadow-sm p-4 sticky top-[140px]">
            <h2 className="font-semibold mb-4 flex items-center">
              <List className="h-5 w-5 mr-2" />
              Kurs tarkibi
            </h2>

            <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2">
              {lessons.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/courses/${courseId}/learn/${item.id}`}
                  className={`flex items-center p-2 rounded-lg text-sm ${
                    item.id === lessonId ? "bg-indigo-50 text-indigo-700" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    {item.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <span className="text-xs font-medium text-gray-500">{index + 1}</span>
                    )}
                  </div>
                  <span className="truncate">{item.title}</span>
                  {item.type === "test" && (
                    <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Test</span>
                  )}
                  {item.type === "task" && (
                    <span className="ml-auto text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Vazifa</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:w-3/4 order-1 lg:order-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {lesson.type === "video" && (
              <div className="relative h-[300px] md:h-[500px] bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" className="w-16 h-16 rounded-full bg-white/80 hover:bg-white">
                    <Play className="h-8 w-8 text-indigo-600" />
                  </Button>
                </div>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">{lesson.title}</h1>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{lesson.duration}</span>
                </div>
              </div>

              <Tabs defaultValue="content">
                <TabsList className="mb-6">
                  <TabsTrigger value="content">Dars</TabsTrigger>
                  {lesson.hasTest && <TabsTrigger value="test">Test</TabsTrigger>}
                  {lesson.hasTask && <TabsTrigger value="task">Amaliy vazifa</TabsTrigger>}
                  <TabsTrigger value="notes">Eslatmalar</TabsTrigger>
                </TabsList>

                <TabsContent value="content">
                  <LessonContent lesson={lesson} />
                </TabsContent>

                {lesson.hasTest && (
                  <TabsContent value="test">
                    <LessonTest lessonId={lessonId} courseId={courseId} />
                  </TabsContent>
                )}

                {lesson.hasTask && (
                  <TabsContent value="task">
                    <LessonTask lessonId={lessonId} courseId={courseId} />
                  </TabsContent>
                )}

                <TabsContent value="notes">
                  <div className="prose max-w-none">
                    <p className="text-gray-600">Bu yerda dars bo'yicha eslatmalaringizni yozishingiz mumkin.</p>
                    <textarea
                      className="w-full h-40 p-4 border rounded-lg mt-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Eslatmalaringizni yozing..."
                    ></textarea>
                    <Button className="mt-4">Saqlash</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            {prevLesson ? (
              <Link href={`/courses/${courseId}/learn/${prevLesson.id}`}>
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Oldingi dars
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            {nextLesson ? (
              <Link href={`/courses/${courseId}/learn/${nextLesson.id}`}>
                <Button className="flex items-center bg-indigo-600 hover:bg-indigo-700">
                  Keyingi dars
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            ) : (
              <Link href={`/courses/${courseId}`}>
                <Button className="flex items-center bg-green-600 hover:bg-green-700">
                  Kursni tugatish
                  <CheckCircle className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
