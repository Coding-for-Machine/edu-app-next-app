import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">42.uz</h3>
            <p className="text-gray-400 mb-4">
              Zamonaviy kasblarni o&apos;rganish va IT sohasida o&apos;z o&apos;rnini topish uchun eng yaxshi platforma
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kurslar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses?category=backend" className="text-gray-400 hover:text-white transition-colors">
                  Backend
                </Link>
              </li>
              <li>
                <Link href="/courses?category=frontend" className="text-gray-400 hover:text-white transition-colors">
                  Frontend
                </Link>
              </li>
              <li>
                <Link href="/courses?category=mobile" className="text-gray-400 hover:text-white transition-colors">
                  Mobil dasturlash
                </Link>
              </li>
              <li>
                <Link href="/courses?category=ux" className="text-gray-400 hover:text-white transition-colors">
                  UX dizayn
                </Link>
              </li>
              <li>
                <Link href="/courses?category=graphic" className="text-gray-400 hover:text-white transition-colors">
                  Grafik dizayn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kompaniya</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="text-gray-400 hover:text-white transition-colors">
                  O&apos;qituvchilar
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Karyera
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Bog&apos;lanish
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Yordam</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Foydalanish shartlari
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Maxfiylik siyosati
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Qo&apos;llab-quvvatlash
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 42.uz. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
