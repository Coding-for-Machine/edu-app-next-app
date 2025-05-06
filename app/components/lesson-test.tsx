"use client"

import { useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { getTestByLessonId } from "@/lib/data"

interface LessonTestProps {
  lessonId: number
  courseId: number
}

export default function LessonTest({ lessonId, courseId }: LessonTestProps) {
  const test = getTestByLessonId(courseId, lessonId)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  if (!test) {
    return <div>Bu dars uchun test mavjud emas.</div>
  }

  const handleAnswerChange = (questionId: number, answerId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }))
  }

  const handleSubmit = () => {
    let correctAnswers = 0

    test.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })

    const calculatedScore = Math.round((correctAnswers / test.questions.length) * 100)
    setScore(calculatedScore)
    setSubmitted(true)
  }

  const isCorrect = (questionId: number, answerId: number) => {
    if (!submitted) return false
    const question = test.questions.find((q) => q.id === questionId)
    return question?.correctAnswer === answerId
  }

  const isWrong = (questionId: number, answerId: number) => {
    if (!submitted) return false
    return answers[questionId] === answerId && !isCorrect(questionId, answerId)
  }

  const isPassed = score >= 70

  return (
    <div className="space-y-8">
      <div className="text-lg font-semibold">{test.title}</div>
      <p className="text-gray-600">{test.description}</p>

      {submitted && (
        <Alert className={isPassed ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}>
          <div className="flex items-center">
            {isPassed ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500 mr-2" />
            )}
            <AlertTitle>{isPassed ? "Tabriklaymiz!" : "Qayta urinib ko'ring"}</AlertTitle>
          </div>
          <AlertDescription>
            {isPassed
              ? `Siz testni muvaffaqiyatli topshirdingiz. Natija: ${score}%`
              : `Siz testni topshira olmadingiz. Natija: ${score}%. Testni o'tish uchun kamida 70% to'g'ri javob berish kerak.`}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-6">
        {test.questions.map((question, index) => (
          <div key={question.id} className="border rounded-lg p-4">
            <div className="font-medium mb-4">
              {index + 1}. {question.text}
            </div>

            <RadioGroup
              value={answers[question.id]?.toString()}
              onValueChange={(value) => handleAnswerChange(question.id, Number.parseInt(value))}
              disabled={submitted}
            >
              {question.answers.map((answer) => (
                <div
                  key={answer.id}
                  className={`flex items-center space-x-2 p-2 rounded ${
                    isCorrect(question.id, answer.id)
                      ? "bg-green-50"
                      : isWrong(question.id, answer.id)
                        ? "bg-red-50"
                        : ""
                  }`}
                >
                  <RadioGroupItem value={answer.id.toString()} id={`q${question.id}-a${answer.id}`} />
                  <Label htmlFor={`q${question.id}-a${answer.id}`} className="flex-grow">
                    {answer.text}
                  </Label>
                  {isCorrect(question.id, answer.id) && <CheckCircle className="h-5 w-5 text-green-500" />}
                  {isWrong(question.id, answer.id) && <XCircle className="h-5 w-5 text-red-500" />}
                </div>
              ))}
            </RadioGroup>

            {submitted && answers[question.id] !== question.correctAnswer && (
              <div className="mt-2 text-sm text-red-600">
                To&apos;g&apos;ri javob: {question.answers.find((a) => a.id === question.correctAnswer)?.text}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <Button onClick={handleSubmit} disabled={Object.keys(answers).length !== test.questions.length}>
          Testni topshirish
        </Button>
      ) : !isPassed ? (
        <Button onClick={() => setSubmitted(false)}>Qayta urinib ko&apos;rish</Button>
      ) : (
        <Button disabled>Test muvaffaqiyatli topshirildi</Button>
      )}
    </div>
  )
}
