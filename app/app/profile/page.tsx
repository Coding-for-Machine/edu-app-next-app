import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Calendar, CheckCircle, Clock, Edit, FileText, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { courses } from "@/lib/data"

export const metadata: Metadata = {
  title: "Profil | 42.uz Clone",
  description: "42.uz platformasidagi foydalanuvchi profili",
}

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "Abdulloh Abdurahmonov",
    email: "abdulloh@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    joinDate: "May 2023",
    bio: "Backend dasturchi bo'lishni xohlayman. Hozirda Node.js va Express o'rganmoqdaman.",
    completedCourses: 2,
    inProgressCourses: 3,
    certificates: 2,
    points: 1250,
    level: "O'rta",
    achievements: [
      { id: 1, title: "Birinchi kurs", description: "Birinchi kursni tugatish", date: "10 May 2023" },
      { id: 2, title: "Kod ustasi", description: "10 ta vazifani muvaffaqiyatli topshirish", date: "15 June 2023" },
      { id: 3, title: "Test g'olibi", description: "5 ta testni 100% natija bilan topshirish", date: "20 July 2023" },
    ],
  }

  // Mock enrolled courses with progress
  const enrolledCourses = [
    { ...courses[0], progress: 75, lastAccessed: "Bugun" },
    { ...courses[1], progress: 40, lastAccessed: "Kecha" },
    { ...courses[2], progress: 10, lastAccessed: "3 kun oldin" },
  ]

  // Mock completed courses
  const completedCourses = [
    { ...courses[3], completedDate: "15 April 2023" },
    { ...courses[4], completedDate: "20 March 2023" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full bg-white">
                <Edit className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600 text-sm mt-1 flex items-center justify-center md:justify-start">
                <Calendar className="h-4 w-4 mr-1" />
                {user.joinDate} dan beri a&apos;zo
              </p>

              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="outline" className="flex items-center">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {user.completedCourses} ta kurs tugatilgan
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Award className="h-3 w-3 mr-1" />
                  {user.certificates} ta sertifikat
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  {user.level}
                </Badge>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Profilni tahrirlash
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Sozlamalar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="courses">
          <TabsList className="mb-8">
            <TabsTrigger value="courses">Kurslarim</TabsTrigger>
            <TabsTrigger value="achievements">Yutuqlarim</TabsTrigger>
            <TabsTrigger value="certificates">Sertifikatlar</TabsTrigger>
            <TabsTrigger value="settings">Sozlamalar</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Davom etayotgan kurslar</h2>

              {enrolledCourses.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center">
                    <p className="text-gray-600">Siz hali birorta kursga yozilmagansiz.</p>
                    <Button className="mt-4">
                      <Link href="/courses">Kurslarni ko&apos;rish</Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="relative h-40">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <div className="flex justify-between text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Oxirgi faollik: {course.lastAccessed}
                          </span>
                        </div>

                        <Link href={`/courses/${course.id}/learn/1`}>
                          <Button className="w-full">Davom ettirish</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-4">Tugatilgan kurslar</h2>

              {completedCourses.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center">
                    <p className="text-gray-600">Siz hali birorta kursni tugatmagansiz.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="relative h-40">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Tugatilgan
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Tugatilgan sana: {course.completedDate}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <Link href={`/courses/${course.id}`} className="flex-1">
                            <Button variant="outline" className="w-full">
                              Batafsil
                            </Button>
                          </Link>
                          <Link href={`/certificates/${course.id}`} className="flex-1">
                            <Button className="w-full">Sertifikat</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Yutuqlar</CardTitle>
                <CardDescription>Platformada erishgan yutuqlaringiz</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user.achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          <Calendar className="h-3 w-3 inline mr-1" />
                          {achievement.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Statistika</CardTitle>
                <CardDescription>Platformadagi faoliyatingiz statistikasi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-indigo-600">{user.points}</div>
                    <div className="text-sm text-gray-600">Ballar</div>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-indigo-600">{user.completedCourses}</div>
                    <div className="text-sm text-gray-600">Tugatilgan kurslar</div>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-indigo-600">{user.certificates}</div>
                    <div className="text-sm text-gray-600">Sertifikatlar</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sertifikatlar</CardTitle>
                <CardDescription>Platformada olgan sertifikatlaringiz</CardDescription>
              </CardHeader>
              <CardContent>
                {completedCourses.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600">Siz hali birorta sertifikat olmagansiz.</p>
                    <p className="text-gray-600 mt-2">Sertifikat olish uchun kurslarni tugatishingiz kerak.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {completedCourses.map((course) => (
                      <div key={course.id} className="border rounded-lg overflow-hidden">
                        <div className="relative h-60 bg-indigo-50">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <FileText className="h-12 w-12 text-indigo-600 mx-auto mb-2" />
                              <h3 className="font-bold text-lg">{course.title}</h3>
                              <p className="text-gray-600">{course.completedDate}</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between">
                          <Button variant="outline">Ko&apos;rish</Button>
                          <Button variant="outline">Yuklab olish</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profil ma&apos;lumotlari</CardTitle>
                <CardDescription>Profil ma&apos;lumotlaringizni tahrirlash</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ism</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        defaultValue={user.name.split(" ")[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Familiya</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        defaultValue={user.name.split(" ")[1]}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full p-2 border rounded-md" defaultValue={user.email} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bio</label>
                    <textarea className="w-full p-2 border rounded-md h-24" defaultValue={user.bio}></textarea>
                  </div>

                  <Button>Saqlash</Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Parolni o&apos;zgartirish</CardTitle>
                <CardDescription>
                  Hisobingiz xavfsizligini ta&apos;minlash uchun parolingizni o&apos;zgartiring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Joriy parol</label>
                    <input type="password" className="w-full p-2 border rounded-md" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Yangi parol</label>
                    <input type="password" className="w-full p-2 border rounded-md" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Yangi parolni tasdiqlang</label>
                    <input type="password" className="w-full p-2 border rounded-md" />
                  </div>

                  <Button>Parolni o&apos;zgartirish</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
