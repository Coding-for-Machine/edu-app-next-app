export interface Course {
  id: string
  title: string
  shortDescription: string
  description?: string
  image: string
  category: string
  level: string
  language?: string
  duration: string
  studentsCount: number
  rating: number
  reviewsCount: number
  featured: boolean
  modulesCount?: number
  certificate?: boolean
  updatedAt?: string
  instructor?: Instructor
  modules?: Module[]
}

export interface Instructor {
  id: string
  name: string
  title: string
  avatar: string
  bio: string
}

export interface Module {
  id: string
  title: string
  description: string
  completed: boolean
  lessons: LessonSummary[]
  tests: TestSummary[]
  tasks: TaskSummary[]
}

export interface LessonSummary {
  id: string
  title: string
  completed: boolean
}

export interface TestSummary {
  id: string
  title: string
  completed: boolean
}

export interface TaskSummary {
  id: string
  title: string
  completed: boolean
}

export interface Lesson {
  id: string
  title: string
  content: string
  completed: boolean
  videoUrl?: string
  images?: LessonImage[]
  attachments?: LessonAttachment[]
}

export interface LessonImage {
  url: string
  caption?: string
}

export interface LessonAttachment {
  title: string
  url: string
  type: string
  size: string
}

export interface Test {
  id: string
  title: string
  description?: string
  questions: Question[]
}

export interface Question {
  id: string
  text: string
  type: "single-choice" | "multi-choice" | "text-input"
  options?: Option[]
  correctAnswer?: string | string[]
}

export interface Option {
  id: string
  text: string
}

export interface Task {
  id: string
  title: string
  description: string
  dueDate: string | null
  completed: boolean
}

export interface Assignment {
  id: string
  title: string
  description: string
  dueDate: string | null
  completed: boolean
}

export interface Chapter {
  id: string
  title: string
  lessons: LessonSummary[]
  tests: TestSummary[]
  assignments: TaskSummary[]
}
