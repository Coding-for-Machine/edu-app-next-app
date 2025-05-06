import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Clock, Code, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Arena | 42.uz Clone",
  description: "42.uz platformasidagi dasturlash musobaqalari",
}

export default function ArenaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Arena - Dasturlash musobaqalari</h1>
            <p className="text-lg mb-6">
              O&apos;z bilimlaringizni sinab ko&apos;ring, boshqa dasturchilar bilan raqobatlashing va qimmatli
              sovrinlarni qo&apos;lga kiriting
            </p>
            <Button className="bg-white text-indigo-600 hover:bg-gray-100">Musobaqada qatnashish</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Trophy className="h-8 w-8 text-indigo-600" />
              <div>
                <CardTitle>Haftalik musobaqalar</CardTitle>
                <CardDescription>Har hafta yangi muammolar</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Har haftada yangi dasturlash muammolari bilan o&apos;z bilimlaringizni sinab ko&apos;ring va reyting
                to&apos;plang
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Code className="h-8 w-8 text-indigo-600" />
              <div>
                <CardTitle>Turli qiyinlik darajalari</CardTitle>
                <CardDescription>Har qanday darajadagi dasturchilar uchun</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Boshlang&apos;ich, o&apos;rta va yuqori darajadagi muammolar bilan o&apos;z bilimlaringizni
                bosqichma-bosqich oshiring
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-8 w-8 text-indigo-600" />
              <div>
                <CardTitle>Sovrinlar va sertifikatlar</CardTitle>
                <CardDescription>Yutuqlaringizni nishonlang</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Musobaqalarda g&apos;olib bo&apos;lib, qimmatli sovrinlar va sertifikatlarni qo&apos;lga kiriting
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="active">Faol musobaqalar</TabsTrigger>
              <TabsTrigger value="upcoming">Kelgusi musobaqalar</TabsTrigger>
              <TabsTrigger value="past">O&apos;tgan musobaqalar</TabsTrigger>
            </TabsList>

            <Button variant="outline">Barcha musobaqalar</Button>
          </div>

          <TabsContent value="active" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((id) => (
                <Link href={`/arena/${id}`} key={id}>
                  <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder.svg?height=200&width=400`}
                        alt="Musobaqa"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Algoritm musobaqasi #{id}</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Algoritmik masalalarni yechish bo&apos;yicha haftalik musobaqa
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>3 kun qoldi</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>128 ishtirokchi</span>
                        </div>
                      </div>

                      <Button className="w-full">Musobaqada qatnashish</Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[3, 4].map((id) => (
                <div key={id} className="bg-white border rounded-xl overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image src={`/placeholder.svg?height=200&width=400`} alt="Musobaqa" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Web dasturlash musobaqasi #{id - 2}</h3>
                    <p className="text-gray-600 text-sm mb-4">Frontend va backend dasturlash bo&apos;yicha musobaqa</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>10 kun qoldi</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>64 ishtirokchi</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Eslatib turish
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[5, 6].map((id) => (
                <div key={id} className="bg-white border rounded-xl overflow-hidden shadow-sm opacity-80">
                  <div className="relative h-48">
                    <Image src={`/placeholder.svg?height=200&width=400`} alt="Musobaqa" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Mobil dasturlash musobaqasi #{id - 4}</h3>
                    <p className="text-gray-600 text-sm mb-4">Android va iOS dasturlash bo&apos;yicha musobaqa</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Tugagan</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>256 ishtirokchi</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Natijalarni ko&apos;rish
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-indigo-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Musobaqalarda qatnashing va g&apos;olib bo&apos;ling</h2>
          <p className="max-w-2xl mx-auto mb-8">
            O&apos;z bilimlaringizni sinab ko&apos;ring, boshqa dasturchilar bilan raqobatlashing va qimmatli
            sovrinlarni qo&apos;lga kiriting
          </p>
          <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Hoziroq ro&apos;yxatdan o&apos;ting
          </Button>
        </div>
      </div>
    </div>
  )
}
