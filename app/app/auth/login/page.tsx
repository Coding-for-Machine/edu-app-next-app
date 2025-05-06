import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Kirish | 42.uz Clone",
  description: "42.uz platformasiga kirish",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Kirish</h1>
          <p className="text-gray-600 mt-2">42.uz platformasiga kirish</p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" required />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Parol</Label>
                <Link href="/auth/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                  Parolni unutdingizmi?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal">
                Meni eslab qolish
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
            Kirish
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
            Hisobingiz yo&apos;qmi?{" "}
            <Link href="/auth/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Ro&apos;yxatdan o&apos;tish
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
