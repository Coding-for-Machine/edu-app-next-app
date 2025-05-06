import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"
import CourseCard from "@/components/course-card"
import InstructorCard from "@/components/instructor-card"
import { courses } from "@/lib/data"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-indigo-600">Backend</span> dasturlashni
              <br />
              Azimjon Po&apos;latov bilan
              <br />
              o&apos;rganing
            </h1>

            <Button className="bg-[#0f172a] text-white hover:bg-[#1e293b] px-8 py-6 text-lg">Ishtirok etish</Button>

            <div className="pt-4">
              <div className="w-full max-w-md flex space-x-2">
                <div className="h-1 bg-indigo-600 w-1/3 rounded"></div>
                <div className="h-1 bg-gray-300 w-1/3 rounded"></div>
                <div className="h-1 bg-gray-300 w-1/3 rounded"></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/courses?category=backend"
                className="px-4 py-2 bg-white rounded-full text-sm hover:bg-gray-100 transition"
              >
                Backend
              </Link>
              <Link
                href="/courses?category=frontend"
                className="px-4 py-2 bg-white rounded-full text-sm hover:bg-gray-100 transition"
              >
                Frontend
              </Link>
              <Link
                href="/courses?category=mobile"
                className="px-4 py-2 bg-white rounded-full text-sm hover:bg-gray-100 transition"
              >
                Mobil dasturlash
              </Link>
              <Link
                href="/courses?category=ux"
                className="px-4 py-2 bg-white rounded-full text-sm hover:bg-gray-100 transition"
              >
                UX dizayn
              </Link>
              <Link
                href="/courses?category=graphic"
                className="px-4 py-2 bg-white rounded-full text-sm hover:bg-gray-100 transition"
              >
                Grafik dizayn
              </Link>
            </div>

            <div className="pt-6">
              <p className="text-gray-600 text-sm mb-4">
                Qirikki orqali 8 000 dan ko&apos;p talabalar xalqaro miqyosdagi quyidagi katta kompaniya mentorlaridan
                tahsil olishmoqda:
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <Image src="/placeholder.svg?height=30&width=90" height={30} width={90} alt="Google" />
                <Image src="/placeholder.svg?height=30&width=90" height={30} width={90} alt="Amazon" />
                <Image src="/placeholder.svg?height=30&width=90" height={30} width={90} alt="Meta" />
                <Image src="/placeholder.svg?height=30&width=90" height={30} width={90} alt="Dropbox" />
                <Image src="/placeholder.svg?height=30&width=90" height={30} width={90} alt="Pinterest" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black rounded-xl p-8 text-white relative z-10 overflow-hidden h-[400px]">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold">42</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">Express</h2>
                <h2 className="text-4xl font-bold">Backend</h2>
              </div>
              <Image
                src="/placeholder.svg?height=300&width=300"
                height={300}
                width={300}
                alt="Instructor"
                className="absolute bottom-0 right-0 z-20"
              />
              <div className="absolute top-10 right-10">
                <div className="bg-white p-2 rounded-full">
                  <Image src="/placeholder.svg?height=24&width=24" height={24} width={24} alt="Cloud icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-t-3xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Mashhur kurslar</h2>
          <Link href="/courses" className="text-indigo-600 flex items-center hover:underline">
            Barcha kurslar <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Why 42.uz */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Qirikki nima uchun kerak bo&apos;ldi?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zamonaviy kasblarni o'rganish va IT sohasida o'z o'rnini topish uchun eng yaxshi platforma
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Yuqori sifatli ta&apos;lim</h3>
            <p className="text-gray-600">
              Tajribali mutaxassislar tomonidan tayyorlangan kurslar va amaliy mashg&apos;ulotlar
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Amaliy tajriba</h3>
            <p className="text-gray-600">Haqiqiy loyihalar ustida ishlash va portfolio yaratish imkoniyati</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Karyera imkoniyatlari</h3>
            <p className="text-gray-600">Yetakchi kompaniyalarda ish topish va kasbiy o&apos;sish uchun yordam</p>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Bizning o&apos;qituvchilar</h2>
          <Link href="/instructors" className="text-indigo-600 flex items-center hover:underline">
            Barcha o&apos;qituvchilar <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <InstructorCard key={id} id={id} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O&apos;quvchilarimiz fikrlari</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bizning platformada o&apos;qigan talabalar tajribalari bilan bo&apos;lishadi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Alisher Karimov</h4>
                <p className="text-gray-600 text-sm">Frontend dasturchi</p>
              </div>
            </div>
            <p className="text-gray-700">
              "42.uz platformasi orqali men zamonaviy web dasturlashni o'rgandim va hozir yaxshi kompaniyada
              ishlayapman. O'qituvchilar juda professional va har doim yordam berishga tayyor."
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Nilufar Azimova</h4>
                <p className="text-gray-600 text-sm">UX/UI dizayner</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Men 42.uz da UX/UI dizayn kursini tugatdim va hozir mustaqil loyihalar ustida ishlayapman. Kurs davomida
              real loyihalar ustida ishlash imkoniyati juda foydali bo'ldi."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-b-3xl mb-8">
        <div className="bg-indigo-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Hoziroq o&apos;rganishni boshlang</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Zamonaviy kasblarni o&apos;rganish va IT sohasida o&apos;z o&apos;rnini topish uchun 42.uz platformasiga
            qo&apos;shiling
          </p>
          <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Ro&apos;yxatdan o&apos;tish
          </Button>
        </div>
      </section>
    </div>
  )
}
