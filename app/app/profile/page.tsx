"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  BookOpen,
  Camera,
  BadgeIcon as Certificate,
  CreditCard,
  Edit,
  Lock,
  LogOut,
  MessageSquare,
  Settings,
  User,
  CheckCircle,
} from "lucide-react"
import { updateUserProfile, fetchUserProfile } from "@/lib/auth"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
    website: "",
    avatar: "/placeholder.svg?height=200&width=200",
  })

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const userData = await fetchUserProfile()
        setUser(userData)
      } catch (error) {
        console.error("Failed to load user profile", error)
      } finally {
        setIsPageLoading(false)
      }
    }

    loadUserProfile()
  }, [])

  const handleSaveProfile = async () => {
    setIsLoading(true)
    try {
      await updateUserProfile(user)
      setIsEditing(false)
    } catch (error) {
      console.error("Failed to update profile", error)
    } finally {
      setIsLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  if (isPageLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="container mx-auto px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
        >
          {/* Sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <motion.button
                      className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-lg"
                      whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Camera className="h-4 w-4" />
                    </motion.button>
                  </motion.div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-gray-500 text-sm">{user.email}</p>

                  <div className="w-full mt-6 space-y-2">
                    {sidebarLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        variants={itemVariants}
                        custom={index}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          variant={link.href === "/profile" ? "default" : "outline"}
                          className={`w-full justify-start ${link.href === "/profile" ? "bg-blue-600 text-white" : ""}`}
                          asChild
                        >
                          <Link href={link.href}>
                            <link.icon className="mr-2 h-4 w-4" />
                            {link.label}
                          </Link>
                        </Button>
                      </motion.div>
                    ))}

                    <Separator className="my-2" />

                    <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                        <LogOut className="mr-2 h-4 w-4" />
                        Chiqish
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <Tabs defaultValue="profile">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="profile">Profil</TabsTrigger>
                <TabsTrigger value="courses">Kurslar</TabsTrigger>
                <TabsTrigger value="settings">Sozlamalar</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Profil ma'lumotlari</CardTitle>
                      <CardDescription>Shaxsiy ma'lumotlaringizni ko'ring va tahrirlang</CardDescription>
                    </div>
                    {!isEditing ? (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" onClick={() => setIsEditing(true)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Tahrirlash
                        </Button>
                      </motion.div>
                    ) : (
                      <div className="flex space-x-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" onClick={() => setIsEditing(false)}>
                            Bekor qilish
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button onClick={handleSaveProfile} disabled={isLoading}>
                            {isLoading ? "Saqlanmoqda..." : "Saqlash"}
                          </Button>
                        </motion.div>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {isEditing ? (
                        <motion.div variants={containerVariants} initial="hidden" animate="visible">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {profileFields.map((field, index) => (
                              <motion.div key={field.id} variants={itemVariants} custom={index} className="space-y-2">
                                <Label htmlFor={field.id}>{field.label}</Label>
                                <Input
                                  id={field.id}
                                  type={field.type}
                                  value={user[field.id as keyof typeof user] as string}
                                  onChange={(e) => setUser({ ...user, [field.id]: e.target.value })}
                                />
                              </motion.div>
                            ))}
                          </div>
                          <motion.div variants={itemVariants} className="space-y-2 mt-6">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                              id="bio"
                              rows={4}
                              value={user.bio}
                              onChange={(e) => setUser({ ...user, bio: e.target.value })}
                            />
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {profileFields.map((field, index) => (
                              <motion.div key={field.id} variants={itemVariants} custom={index}>
                                <h3 className="text-sm font-medium text-gray-500">{field.label}</h3>
                                <p className="mt-1">
                                  {field.id === "website" ? (
                                    <a
                                      href={user[field.id as keyof typeof user] as string}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:underline"
                                    >
                                      {user[field.id as keyof typeof user] as string}
                                    </a>
                                  ) : (
                                    (user[field.id as keyof typeof user] as string)
                                  )}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                          <motion.div variants={itemVariants}>
                            <h3 className="text-sm font-medium text-gray-500">Bio</h3>
                            <p className="mt-1">{user.bio}</p>
                          </motion.div>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Courses Tab */}
              <TabsContent value="courses">
                <Card>
                  <CardHeader>
                    <CardTitle>Mening kurslarim</CardTitle>
                    <CardDescription>Siz ro'yxatdan o'tgan va o'rganayotgan kurslar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                      {/* Active Courses */}
                      <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4">Faol kurslar</h3>
                        <div className="space-y-4">
                          {activeCourses.map((course, index) => (
                            <motion.div
                              key={course.id}
                              variants={itemVariants}
                              custom={index}
                              whileHover={{ scale: 1.01 }}
                              className="border rounded-lg p-4 transition-shadow hover:shadow-md"
                            >
                              <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="w-full md:w-1/4">
                                  <Image
                                    src={course.image || "/placeholder.svg"}
                                    alt={course.title}
                                    width={200}
                                    height={120}
                                    className="rounded-md object-cover w-full h-32"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-lg">{course.title}</h4>
                                  <p className="text-gray-500 text-sm mb-2">{course.instructor}</p>
                                  <div className="mb-2">
                                    <div className="flex items-center justify-between text-sm mb-1">
                                      <span>Progress: {course.progress}%</span>
                                      <span>
                                        {course.completedLessons}/{course.totalLessons} darslar
                                      </span>
                                    </div>
                                    <Progress value={course.progress} className="h-2" />
                                  </div>
                                  <div className="flex mt-3">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                      <Button size="sm" asChild>
                                        <Link href={`/courses/${course.id}`}>Davom ettirish</Link>
                                      </Button>
                                    </motion.div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Completed Courses */}
                      <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4">Tugatilgan kurslar</h3>
                        <div className="space-y-4">
                          {completedCourses.map((course, index) => (
                            <motion.div
                              key={course.id}
                              variants={itemVariants}
                              custom={index}
                              whileHover={{ scale: 1.01 }}
                              className="border rounded-lg p-4 transition-shadow hover:shadow-md"
                            >
                              <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="w-full md:w-1/4">
                                  <Image
                                    src={course.image || "/placeholder.svg"}
                                    alt={course.title}
                                    width={200}
                                    height={120}
                                    className="rounded-md object-cover w-full h-32"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-lg">{course.title}</h4>
                                  <p className="text-gray-500 text-sm mb-2">{course.instructor}</p>
                                  <div className="mb-2">
                                    <div className="flex items-center justify-between text-sm mb-1">
                                      <span className="flex items-center text-green-600 font-medium">
                                        <CheckCircle className="h-4 w-4 mr-1" />
                                        Tugatilgan
                                      </span>
                                      <span>{course.completionDate}</span>
                                    </div>
                                    <Progress value={100} className="h-2 bg-gray-100" />
                                  </div>
                                  <div className="flex mt-3 space-x-2">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                      <Button size="sm" variant="outline" asChild>
                                        <Link href={`/courses/${course.id}`}>Kursni ko'rish</Link>
                                      </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                      <Button size="sm" asChild>
                                        <Link href={`/certificates/${course.id}`}>Sertifikat</Link>
                                      </Button>
                                    </motion.div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Hisob sozlamalari</CardTitle>
                    <CardDescription>Hisobingiz bilan bog'liq sozlamalarni boshqaring</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                      {/* Account Settings */}
                      <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4">Hisob</h3>
                        <div className="space-y-4">
                          {accountSettings.map((setting, index) => (
                            <motion.div
                              key={index}
                              variants={itemVariants}
                              custom={index}
                              className="flex items-center justify-between"
                            >
                              <div>
                                <h4 className="font-medium">{setting.title}</h4>
                                <p className="text-sm text-gray-500">{setting.description}</p>
                              </div>
                              {setting.type === "button" ? (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button variant="outline">
                                    <Lock className="mr-2 h-4 w-4" />
                                    {setting.action}
                                  </Button>
                                </motion.div>
                              ) : (
                                <Switch defaultChecked={setting.defaultChecked} />
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Privacy Settings */}
                      <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4">Maxfiylik</h3>
                        <div className="space-y-4">
                          {privacySettings.map((setting, index) => (
                            <motion.div
                              key={index}
                              variants={itemVariants}
                              custom={index}
                              className="flex items-center justify-between"
                            >
                              <div>
                                <h4 className="font-medium">{setting.title}</h4>
                                <p className="text-sm text-gray-500">{setting.description}</p>
                              </div>
                              <Switch defaultChecked={setting.defaultChecked} />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Danger Zone */}
                      <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4 text-red-600">Xavfli zona</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Hisobni o'chirish</h4>
                              <p className="text-sm text-gray-500">
                                Hisobingizni va barcha ma'lumotlaringizni butunlay o'chirish
                              </p>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Button variant="destructive">Hisobni o'chirish</Button>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Sidebar links
const sidebarLinks = [
  { icon: User, label: "Profil", href: "/profile" },
  { icon: BookOpen, label: "Mening kurslarim", href: "/profile/courses" },
  { icon: Certificate, label: "Sertifikatlar", href: "/profile/certificates" },
  { icon: MessageSquare, label: "Xabarlar", href: "/profile/messages" },
  { icon: CreditCard, label: "To'lovlar", href: "/profile/payments" },
  { icon: Settings, label: "Sozlamalar", href: "/profile/settings" },
]

// Profile fields
const profileFields = [
  { id: "name", label: "To'liq ism", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Telefon", type: "text" },
  { id: "location", label: "Joylashuv", type: "text" },
  { id: "website", label: "Veb-sayt", type: "text" },
]

// Account settings
const accountSettings = [
  {
    title: "Parolni o'zgartirish",
    description: "Hisobingiz xavfsizligini ta'minlash uchun parolingizni yangilang",
    type: "button",
    action: "O'zgartirish",
  },
  {
    title: "Ikki faktorli autentifikatsiya",
    description: "Hisobingizni qo'shimcha xavfsizlik qatlami bilan himoya qiling",
    type: "switch",
    defaultChecked: false,
  },
  {
    title: "Email xabarnomalar",
    description: "Kurslar, yangiliklar va maxsus takliflar haqida xabarnomalarni boshqaring",
    type: "switch",
    defaultChecked: true,
  },
]

// Privacy settings
const privacySettings = [
  {
    title: "Profil ko'rinishi",
    description: "Profilingiz boshqa foydalanuvchilarga ko'rinishi",
    defaultChecked: true,
  },
  {
    title: "O'quv faoliyati",
    description: "O'quv faoliyatingiz boshqa foydalanuvchilarga ko'rinishi",
    defaultChecked: false,
  },
]

// Sample data for courses
const activeCourses = [
  {
    id: "1",
    title: "Web Dasturlash Asoslari",
    instructor: "Alisher Isaev",
    image: "/placeholder.svg?height=200&width=400",
    progress: 65,
    completedLessons: 13,
    totalLessons: 20,
  },
  {
    id: "2",
    title: "JavaScript to'liq kurs",
    instructor: "Dilshod Rahimov",
    image: "/placeholder.svg?height=200&width=400",
    progress: 30,
    completedLessons: 6,
    totalLessons: 20,
  },
]

const completedCourses = [
  {
    id: "3",
    title: "HTML va CSS asoslari",
    instructor: "Aziza Karimova",
    image: "/placeholder.svg?height=200&width=400",
    completionDate: "15.03.2023",
  },
]
