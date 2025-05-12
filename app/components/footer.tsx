"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">LearnHub</h3>
            <p className="text-gray-400 mb-4">
              Zamonaviy bilimlarni o'rganish va kasbiy ko'nikmalarni rivojlantirish uchun eng yaxshi onlayn kurslar
              platformasi
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#4267B2" }}
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#E1306C" }}
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#FF0000" }}
                className="text-gray-400 hover:text-white"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Bog'lanish</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">
                  Toshkent shahri, Mirzo Ulug'bek tumani, Universitet ko'chasi, 4-uy
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">+998 90 123 45 67</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">info@learnhub.uz</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Yangiliklar</h3>
            <p className="text-gray-400 mb-4">Eng so'nggi yangiliklar va maxsus takliflardan xabardor bo'ling</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Email manzilingiz" className="bg-gray-800 border-gray-700 text-white" />
              <Button>Obuna</Button>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LearnHub. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Foydalanish shartlari
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Maxfiylik siyosati
              </Link>
              <Link href="/help" className="text-gray-400 hover:text-white text-sm">
                Yordam
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const quickLinks = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Kurslar", href: "/courses" },
  { label: "O'qituvchilar", href: "/instructors" },
  { label: "Blog", href: "/blog" },
  { label: "Biz haqimizda", href: "/about" },
  { label: "Bog'lanish", href: "/contact" },
]
