"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import CourseCard from "@/components/course-card"
import PageTransition from "@/components/page-transition"
import { useEffect, useState } from "react"
import { fetchFeaturedCourses } from "@/lib/api"
import LoadingSpinner from "@/components/loading-spinner"

export default function HomePage() {
  const [featuredCourses, setFeaturedCourses] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const courses = await fetchFeaturedCourses()
        setFeaturedCourses(courses)
      } catch (error) {
        console.error("Failed to load courses", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCourses()
  }, [])

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

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -z-10 top-0 right-0 w-full h-full overflow-hidden opacity-10"
          >
            <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-purple-400 rounded-full filter blur-3xl"></div>
          </motion.div>

          <div className="container mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Ta'lim Kelajakka Yo'l
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Zamonaviy bilimlarni o'rganish va kasbiy ko'nikmalarni rivojlantirish uchun eng yaxshi onlayn kurslar
                platformasi
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <Link href="/courses">Kurslarga o'tish</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Batafsil ma'lumot</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-16 relative"
            >
              <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Learning Platform"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Zamonaviy ta'lim platformasi</h3>
                    <p className="text-white/80">Istalgan vaqtda, istalgan joyda o'rganing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants} className="p-6 rounded-lg">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-blue-600 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-10">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold"
              >
                Mashhur kurslar
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <Link href="/courses" className="text-blue-600 hover:text-blue-800 flex items-center">
                  Barcha kurslar <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {featuredCourses.map((course, index) => (
                  <motion.div key={course.id} variants={itemVariants} custom={index}>
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-10 text-center"
            >
              Kurs kategoriyalari
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <Link
                    href={`/categories/${category.id}`}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center block"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm text-gray-500 mt-2">{category.courseCount} kurs</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Nima uchun bizni tanlashingiz kerak</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bizning platformamiz sizga eng yaxshi ta'lim tajribasini taqdim etadi
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-10 text-center"
            >
              O'quvchilar fikrlari
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=48&width=48&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.course}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Hoziroq o'rganishni boshlang</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                100+ kurslar, tajribali o'qituvchilar va interaktiv ta'lim tajribasi sizni kutmoqda
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/register">Ro'yxatdan o'tish</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-10 text-center text-gray-600"
            >
              Bizning hamkorlarimiz
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.1 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=${partner}`}
                    alt={partner}
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

// Sample data
const stats = [
  { value: "100+", label: "Kurslar" },
  { value: "50+", label: "O'qituvchilar" },
  { value: "10,000+", label: "O'quvchilar" },
  { value: "95%", label: "Mamnunlik darajasi" },
]

const categories = [
  { id: "programming", name: "Dasturlash", courseCount: 42, icon: <div className="text-blue-600 text-2xl">💻</div> },
  { id: "design", name: "Dizayn", courseCount: 38, icon: <div className="text-blue-600 text-2xl">🎨</div> },
  { id: "business", name: "Biznes", courseCount: 27, icon: <div className="text-blue-600 text-2xl">📊</div> },
  { id: "marketing", name: "Marketing", courseCount: 18, icon: <div className="text-blue-600 text-2xl">📱</div> },
  { id: "language", name: "Tillar", courseCount: 24, icon: <div className="text-blue-600 text-2xl">🗣️</div> },
  { id: "photography", name: "Fotografiya", courseCount: 15, icon: <div className="text-blue-600 text-2xl">📷</div> },
  { id: "music", name: "Musiqa", courseCount: 12, icon: <div className="text-blue-600 text-2xl">🎵</div> },
  { id: "health", name: "Sog'liq", courseCount: 20, icon: <div className="text-blue-600 text-2xl">🧘</div> },
]

const features = [
  {
    title: "Yuqori sifatli kurslar",
    description: "Barcha kurslar tajribali mutaxassislar tomonidan yaratilgan va sifat nazoratidan o'tgan",
    icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Moslashuvchan jadval",
    description: "Istalgan vaqtda, istalgan joyda o'z sur'atingizda o'rganing",
    icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Interaktiv ta'lim",
    description: "Amaliy mashg'ulotlar, testlar va loyihalar orqali bilimlaringizni mustahkamlang",
    icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
  },
]

const testimonials = [
  {
    name: "Aziza Karimova",
    course: "Web Dasturlash",
    rating: 5,
    text: "Bu platformada o'qish juda qulay va samarali. Barcha materiallar tushunarli tarzda tushuntirilgan va amaliy mashg'ulotlar orqali bilimlarni mustahkamlash imkoniyati bor.",
  },
  {
    name: "Bobur Aliyev",
    course: "UI/UX Dizayn",
    rating: 4,
    text: "Men bu kursni tugatganimdan so'ng, o'z sohamda ish topishim oson bo'ldi. O'qituvchilar o'z ishining ustasi va har doim yordam berishga tayyor.",
  },
  {
    name: "Dilnoza Rahimova",
    course: "Digital Marketing",
    rating: 5,
    text: "Kurslar juda sifatli va zamonaviy. Men o'z bilimlarimni oshirib, yangi ko'nikmalarni o'rgandim. Endi o'z biznesimni rivojlantirishda bu bilimlardan foydalanmoqdaman.",
  },
]

const partners = ["Company A", "Company B", "Company C", "Company D", "Company E"]
