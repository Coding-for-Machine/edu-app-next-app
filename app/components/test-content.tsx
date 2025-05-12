"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useTestContent } from "@/lib/hooks"

interface TestContentProps {
  courseId: string
  moduleId: string
  testId: string
}

export default function TestContent({ courseId, moduleId, testId }: TestContentProps) {
  const { test, loading, error, submitTest } = useTestContent(courseId, moduleId, testId)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (loading) {
    return <div className="p-6 text-center">Test yuklanmoqda...</div>
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Xatolik yuz berdi: {error}</div>
  }

  if (!test) {
    return <div className="p-6 text-center">Test topilmadi</div>
  }

  const handleSingleChoiceChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleMultiChoiceChange = (questionId: string, value: string, checked: boolean) => {
    setAnswers((prev) => {
      const currentAnswers = prev[questionId] || []
      if (checked) {
        return {
          ...prev,
          [questionId]: [...currentAnswers, value],
        }
      } else {
        return {
          ...prev,
          [questionId]: currentAnswers.filter((answer: string) => answer !== value),
        }
      }
    })
  }

  const handleTextInputChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      const result = await submitTest(answers)
      setScore(result.score)
      setFeedback(result.feedback || {})
      setSubmitted(true)
      setIsSubmitting(false)
    } catch (error) {
      console.error("Failed to submit test answers", error)
      setIsSubmitting(false)
    }
  }

  const renderQuestion = (question: any) => {
    switch (question.type) {
      case "single-choice":
        return (
          <RadioGroup
            value={answers[question.id] || ""}
            onValueChange={(value) => handleSingleChoiceChange(question.id, value)}
            disabled={submitted}
          >
            {question.options.map((option: any) => (
              <div key={option.id} className="flex items-center space-x-2 py-2">
                <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} />
                <Label htmlFor={`${question.id}-${option.id}`}>{option.text}</Label>
              </div>
            ))}
          </RadioGroup>
        )

      case "multi-choice":
        return (
          <div className="space-y-2 py-2">
            {question.options.map((option: any) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`${question.id}-${option.id}`}
                  checked={(answers[question.id] || []).includes(option.id)}
                  onCheckedChange={(checked) => handleMultiChoiceChange(question.id, option.id, checked as boolean)}
                  disabled={submitted}
                />
                <Label htmlFor={`${question.id}-${option.id}`}>{option.text}</Label>
              </div>
            ))}
          </div>
        )

      case "text-input":
        return (
          <Input
            value={answers[question.id] || ""}
            onChange={(e) => handleTextInputChange(question.id, e.target.value)}
            placeholder="Javobingizni kiriting..."
            disabled={submitted}
            className="mt-2"
          />
        )

      default:
        return <p>Qo'llab-quvvatlanmaydigan savol turi</p>
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{test.title}</h2>

      {test.description && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <p>{test.description}</p>
        </div>
      )}

      {submitted && score !== null && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold">
            Natija: {score}/{test.questions.length} ({Math.round((score / test.questions.length) * 100)}%)
          </h3>
          {score / test.questions.length >= 0.7 ? (
            <p className="text-green-600 mt-2">Tabriklaymiz! Siz testdan muvaffaqiyatli o'tdingiz.</p>
          ) : (
            <p className="text-red-600 mt-2">
              Siz testdan o'ta olmadingiz. Materialni qayta ko'rib chiqing va qayta urinib ko'ring.
            </p>
          )}
        </div>
      )}

      <div className="space-y-8">
        {test.questions.map((question: any, index: number) => (
          <div key={question.id} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              {index + 1}. {question.text}
            </h3>

            <div className="mt-3">{renderQuestion(question)}</div>

            {submitted && feedback[question.id] && (
              <div className="mt-3 p-2 bg-gray-50 rounded text-sm">
                <p className={feedback[question.id].includes("To'g'ri") ? "text-green-600" : "text-red-600"}>
                  {feedback[question.id]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <Button className="mt-6 w-full" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Yuborilmoqda..." : "Testni yakunlash"}
        </Button>
      ) : (
        <Button className="mt-6 w-full" variant="outline" onClick={() => window.location.reload()}>
          Testni qayta topshirish
        </Button>
      )}

      <div className="flex justify-between mt-10 pt-6 border-t">
        <Button variant="outline" className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Oldingi test
        </Button>
        <Button variant="outline" className="flex items-center">
          Keyingi test
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
