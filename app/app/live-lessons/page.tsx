import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Play, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Jonli darslar | 42.uz Clone",
  description: "42.uz platformasidagi jonli darslar",
}

export default function LiveLessonsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Jonli darslar</h1>
            <p className="text-lg mb-6">
              O&apos;qituvchilar bilan jonli muloqot qiling, savollar bering va real vaqtda bilim oling
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">Jonli darslarga qo&apos;shilish</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div>
                <CardTitle>Haftalik jonli darslar</CardTitle>
                <CardDescription>Har hafta yangi mavzular</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Har hafta yangi mavzular bo&apos;yicha jonli darslar o&apos;tkaziladi va siz bevosita qatnashishingiz
                mumkin
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="h-8 w-8 text-purple-600" />
              <div>
                <CardTitle>Interaktiv muloqot</CardTitle>
                <CardDescription>O&apos;qituvchilar bilan jonli muloqot</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Dars davomida o&apos;qituvchilarga savollar berishingiz va javoblar olishingiz mumkin
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Play className="h-8 w-8 text-purple-600" />
              <div>
                <CardTitle>Yozib olingan darslar</CardTitle>
                <CardDescription>Istagan vaqtda ko&apos;rishingiz mumkin</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Agar jonli darsda qatnasha olmasangiz, keyinchalik yozib olingan darslarni ko&apos;rishingiz mumkin
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="upcoming">Kelgusi darslar</TabsTrigger>
              <TabsTrigger value="recorded">Yozib olingan darslar</TabsTrigger>
            </TabsList>

            <Button variant="outline">Barcha darslar</Button>
          </div>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((id) => (
                <div
                  key={id}
                  className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=200&width=400`}
                      alt="Jonli dars"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-purple-600 hover:bg-purple-700">
                      {["Backend", "Frontend", "Mobile", "UX/UI"][id % 4]}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">
                      {["Node.js asoslari", "React hooks", "Flutter UI", "Figma prototiping"][id % 4]}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {["Azimjon Po'latov", "Dilshod Tursunov", "Bobur Aliyev", "Malika Karimova"][id % 4]} tomonidan
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{["10 May", "15 May", "20 May", "25 May"][id % 4]}, 2024</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{["18:00", "19:00", "20:00", "17:00"][id % 4]}</span>
                      </div>
                    </div>

                    <Button className="w-full">Ro&apos;yxatdan o&apos;tish</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recorded" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[5, 6, 7, 8].map((id) => (
                <Link href={`/live-lessons/${id}`} key={id}>
                  <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder.svg?height=200&width=400`}
                        alt="Jonli dars"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button size="icon" className="w-12 h-12 rounded-full bg-white/80 hover:bg-white">
                          <Play className="h-6 w-6 text-purple-600" />
                        </Button>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-purple-600 hover:bg-purple-700">
                        {["Backend", "Frontend", "Mobile", "UX/UI"][id % 4]}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">
                        {["PostgreSQL optimizatsiya", "Next.js 13", "Swift UI", "Design Systems"][id % 4]}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {["Azimjon Po'latov", "Dilshod Tursunov", "Bobur Aliyev", "Malika Karimova"][id % 4]} tomonidan
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{["1 May", "5 May", "8 May", "12 May"][id % 4]}, 2024</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1 soat 20 daqiqa</span>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        Ko&apos;rish
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Jonli darslarga qo&apos;shiling</h2>
          <p className="max-w-2xl mx-auto mb-8">
            O&apos;qituvchilar bilan jonli muloqot qiling, savollar bering va real vaqtda bilim oling
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Hoziroq ro&apos;yxatdan o&apos;ting
          </Button>
        </div>
      </div>
    </div>
  )
}
