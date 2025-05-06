import Image from "next/image"
import Link from "next/link"

interface InstructorCardProps {
  id: number
}

export default function InstructorCard({ id }: InstructorCardProps) {
  // This would normally come from a database or API
  const instructors = [
    { id: 1, name: "Azimjon Po'latov", role: "Backend dasturlash", courses: 5 },
    { id: 2, name: "Dilshod Tursunov", role: "Frontend dasturlash", courses: 3 },
    { id: 3, name: "Malika Karimova", role: "UX/UI dizayn", courses: 4 },
    { id: 4, name: "Bobur Aliyev", role: "Mobil dasturlash", courses: 2 },
  ]

  const instructor = instructors.find((i) => i.id === id) || instructors[0]

  return (
    <Link href={`/instructors/${instructor.id}`}>
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center p-6">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src={`/placeholder.svg?height=100&width=100`}
            alt={instructor.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <h3 className="font-semibold text-lg">{instructor.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{instructor.role}</p>
        <p className="text-indigo-600 text-sm">{instructor.courses} ta kurs</p>
      </div>
    </Link>
  )
}
