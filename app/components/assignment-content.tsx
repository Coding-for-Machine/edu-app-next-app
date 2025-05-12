"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import type { Assignment } from "@/lib/types"
import { submitAssignment } from "@/lib/api"
import { Upload, FileText, Check, X } from "lucide-react"

interface AssignmentContentProps {
  assignment: Assignment
}

export default function AssignmentContent({ assignment }: AssignmentContentProps) {
  const [submission, setSubmission] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...fileArray])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    if (!submission && files.length === 0) {
      alert("Please provide a submission or upload files")
      return
    }

    try {
      setIsSubmitting(true)

      // In a real app, you would upload files to a server
      const formData = new FormData()
      formData.append("text", submission)
      files.forEach((file) => {
        formData.append("files", file)
      })

      const result = await submitAssignment(assignment.id, formData)
      setFeedback(result.feedback)
      setSubmitted(true)
      setIsSubmitting(false)
    } catch (error) {
      console.error("Failed to submit assignment", error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{assignment.title}</h1>

      <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: assignment.description }} />

      {assignment.dueDate && (
        <div className="mb-6 p-3 bg-yellow-50 rounded-lg">
          <p className="font-medium">Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
        </div>
      )}

      {!submitted ? (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Your Submission</h3>
            <Textarea
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              placeholder="Type your submission here..."
              className="min-h-[200px]"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-2">Drag and drop files here, or click to select files</p>
              <Input type="file" multiple onChange={handleFileChange} className="hidden" id="file-upload" />
              <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                Select Files
              </Button>
            </div>

            {files.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">Selected Files:</h4>
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-blue-500" />
                        <span>{file.name}</span>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeFile(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Submit Assignment"}
          </Button>
        </div>
      ) : (
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Check className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-green-600">Assignment Submitted</h3>
          </div>

          {feedback && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Feedback:</h4>
              <p className="p-3 bg-white rounded">{feedback}</p>
            </div>
          )}

          <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
            Edit Submission
          </Button>
        </div>
      )}
    </div>
  )
}
