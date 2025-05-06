import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Ro'yxatdan o'tish | 42.uz Clone",
  description: "42.uz platformasida ro'yxatdan o'tish",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Ro&apos;yxatdan o&apos;tish</h1>
          <p className="text-gray-600 mt-2">42.uz platformasida ro&apos;yxatdan o&apos;tish</p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Ism</Label>
                <Input id="first-name" type="text" placeholder="Ism" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="last-name">Familiya</Label>
                <Input id="last-name" type="text" placeholder="Familiya" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Parol</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Parolni tasdiqlang</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" required />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm font-normal">
                Men{" "}
                <Link href="/terms" className="text-indigo-600 hover:text-indigo-500">
                  foydalanish shartlari
                </Link>{" "}
                va{" "}
                <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500">
                  maxfiylik siyosati
                </Link>{" "}
                bilan tanishdim va roziman
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
            Ro&apos;yxatdan o&apos;tish
          </Button>
        </form>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Yoki</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full">
            Google
          </Button>
          <Button variant="outline" className="w-full">
            Facebook
          </Button>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Hisobingiz bormi?{" "}
            <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Kirish
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
