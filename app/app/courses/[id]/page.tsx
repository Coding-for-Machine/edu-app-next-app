import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, FileText, Globe, Play, Share2, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { courses, getCourseLessons } from "@/lib/data"

export const metadata: Metadata = {
  title: "Kurs tafsilotlari | 42.uz Clone",
  description: "42.uz platformasidagi kurs tafsilotlari",
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseId = Number.parseInt(params.id)
  const course = courses.find((c) => c.id === courseId) || courses[0]
  const lessons = getCourseLessons(courseId)

  // Group lessons by section
  const sections = [
    { id: 1, title: "Kirish", lessons: lessons.slice(0, 2) },
    { id: 2, title: "Asosiy tushunchalar", lessons: lessons.slice(2, 4) },
    { id: 3, title: "Amaliy qo'llanish", lessons: lessons.slice(4) },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
              <p className="text-gray-600 mb-4">{course.instructor} tomonidan tayyorlangan kurs</p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="bg-indigo-600 hover:bg-indigo-700">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <Star className="h-4 w-4 text-gray-300 mr-1" />
                  <span className="text-sm text-gray-600">(120 baho)</span>
                </div>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
                <Image
                  src={course.image || "/placeholder.svg?height=400&width=800"}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" className="w-16 h-16 rounded-full bg-white/80 hover:bg-white">
                    <Play className="h-8 w-8 text-indigo-600" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="bg-white border rounded-xl shadow-sm p-6 sticky top-24">
                <div className="text-3xl font-bold mb-4">{course.price}</div>

                <div className="space-y-4 mb-6">
                  <Link href={`/courses/${course.id}/learn/1`}>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Kursni boshlash</Button>
                  </Link>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-gray-500" /> Davomiyligi
                    </span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-gray-500" /> Darslar
                    </span>
                    <span className="font-medium">{lessons.length} ta video</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-gray-500" /> Til
                    </span>
                    <span className="font-medium">O&apos;zbek</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-gray-500" /> O&apos;quvchilar
                    </span>
                    <span className="font-medium">{course.students}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-center">
                  <Button variant="ghost" className="text-gray-500">
                    <Share2 className="mr-2 h-4 w-4" /> Ulashish
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Kurs haqida</TabsTrigger>
            <TabsTrigger value="curriculum">O&apos;quv dasturi</TabsTrigger>
            <TabsTrigger value="instructor">O&apos;qituvchi</TabsTrigger>
            <TabsTrigger value="reviews">Baholar</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Kurs haqida</h2>
              <p className="text-gray-700 mb-4">
                Bu kursda siz {course.category} sohasidagi zamonaviy texnologiyalar va yondashuvlar bilan tanishasiz.
                Kurs davomida amaliy mashg&apos;ulotlar orqali bilimlaringizni mustahkamlaysiz va real loyihalar ustida
                ishlaysiz.
              </p>
              <p className="text-gray-700 mb-4">
                Kurs {course.level} darajadagi o&apos;quvchilar uchun mo&apos;ljallangan bo&apos;lib, soha bo&apos;yicha
                chuqur bilim va ko&apos;nikmalarni o&apos;zlashtirishga yordam beradi.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Nimalarni o&apos;rganasiz</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Zamonaviy {course.category} texnologiyalari va frameworklari</li>
                <li>Loyihalarni rejalashtirish va amalga oshirish</li>
                <li>Xavfsizlik va optimizatsiya usullari</li>
                <li>Jamoaviy ishlash va versiyalarni boshqarish</li>
                <li>Portfolio uchun real loyihalar</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">O&apos;quv dasturi</h2>

              <div className="space-y-4">
                {sections.map((section) => (
                  <div key={section.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 font-medium">
                      {section.id}-bo&apos;lim: {section.title}
                    </div>
                    <div className="divide-y">
                      {section.lessons.map((lesson) => (
                        <div key={lesson.id} className="p-4 flex justify-between items-center">
                          <div className="flex items-center">
                            {lesson.type === "video" ? (
                              <Play className="h-4 w-4 mr-3 text-gray-500" />
                            ) : lesson.type === "test" ? (
                              <FileText className="h-4 w-4 mr-3 text-blue-500" />
                            ) : (
                              <FileText className="h-4 w-4 mr-3 text-amber-500" />
                            )}
                            <span>{lesson.title}</span>
                            {lesson.type === "test" && (
                              <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Test</span>
                            )}
                            {lesson.type === "task" && (
                              <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                                Vazifa
                              </span>
                            )}
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-4">{lesson.duration}</span>
                            <Link href={`/courses/${courseId}/learn/${lesson.id}`}>
                              <Button variant="ghost" size="sm">
                                Ko&apos;rish
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="instructor" className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-32 h-32">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt={course.instructor}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{course.instructor}</h2>
                  <p className="text-gray-600 mb-4">{course.category} bo&apos;yicha mutaxassis</p>

                  <p className="text-gray-700 mb-4">
                    10 yildan ortiq tajribaga ega mutaxassis. Xalqaro kompaniyalarda ishlagan va ko&apos;plab
                    muvaffaqiyatli loyihalarni amalga oshirgan. 5000 dan ortiq o&apos;quvchilarga bilim bergan va
                    ularning ko&apos;pchiligi hozirda yirik kompaniyalarda ishlashmoqda.
                  </p>

                  <Button variant="outline">O&apos;qituvchi haqida ko&apos;proq</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">O&apos;quvchilar fikrlari</h2>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold mb-2">4.8</div>
                  <div className="flex mb-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-gray-300" />
                  </div>
                  <div className="text-gray-600">120 ta baho</div>
                </div>

                <div className="md:w-2/3 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right text-sm">5 yulduz</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                    <div className="w-12 text-sm text-gray-600">85%</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right text-sm">4 yulduz</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-[10%]"></div>
                    </div>
                    <div className="w-12 text-sm text-gray-600">10%</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right text-sm">3 yulduz</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-[3%]"></div>
                    </div>
                    <div className="w-12 text-sm text-gray-600">3%</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right text-sm">2 yulduz</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-[1%]"></div>
                    </div>
                    <div className="w-12 text-sm text-gray-600">1%</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right text-sm">1 yulduz</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-[1%]"></div>
                    </div>
                    <div className="w-12 text-sm text-gray-600">1%</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-10 h-10 mr-4">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="User"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Sardor Abdullayev</div>
                      <div className="text-sm text-gray-500">2 oy oldin</div>
                    </div>
                    <div className="ml-auto flex">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Juda ajoyib kurs! O&apos;qituvchi mavzularni juda tushunarli tarzda tushuntiradi. Amaliy
                    mashg&apos;ulotlar orqali bilimlarni mustahkamlash imkoniyati ham juda yaxshi.
                  </p>
                </div>

                <div className="border-b pb-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-10 h-10 mr-4">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="User"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Dilnoza Karimova</div>
                      <div className="text-sm text-gray-500">1 oy oldin</div>
                    </div>
                    <div className="ml-auto flex">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Kurs juda mazmunli va foydali. Lekin ba&apos;zi mavzular tezroq o&apos;tilsa yaxshi bo&apos;lardi.
                    Umuman olganda, men ko&apos;p narsa o&apos;rgandim va bu kursni tavsiya qilaman.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
