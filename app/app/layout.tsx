import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "LearnHub - Ta'lim Kelajakka Yo'l",
  description:
    "Zamonaviy bilimlarni o'rganish va kasbiy ko'nikmalarni rivojlantirish uchun eng yaxshi onlayn kurslar platformasi",
}

const inter = Inter({ subsets: ["latin"] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <div className="pt-16 min-h-screen">{children}</div>
          <Footer />
        </ThemeProvider>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 'light';
              document.documentElement.className = theme;
            })();
          `
        }} />
      </body>
    </html>
  )
}
