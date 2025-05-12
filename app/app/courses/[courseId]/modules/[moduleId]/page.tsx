import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ModuleNavigation from "@/components/module-navigation"
import LessonContent from "@/components/lesson-content"
import TestContent from "@/components/test-content"
import TaskContent from "@/components/task-content"
import LoadingSpinner from "@/components/loading-spinner"
import { fetchModuleDetails } from "@/lib/api"

interface ModulePageProps {
  params: {
    courseId: string
    moduleId: string
  }
  searchParams: {
    tab?: string
    lessonId?: string
    testId?: string
    taskId?: string
  }
}

export default async function ModulePage({ params, searchParams }: ModulePageProps) {
  const module = await fetchModuleDetails(params.courseId, params.moduleId)
  const tab = searchParams.tab || "lessons"
  const lessonId = searchParams.lessonId || (module.lessons.length > 0 ? module.lessons[0].id : null)
  const testId = searchParams.testId || (module.tests.length > 0 ? module.tests[0].id : null)
  const taskId = searchParams.taskId || (module.tasks.length > 0 ? module.tasks[0].id : null)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Suspense fallback={<LoadingSpinner />}>
              <ModuleNavigation
                courseId={params.courseId}
                moduleId={params.moduleId}
                module={module}
                activeTab={tab}
                activeLessonId={lessonId}
                activeTestId={testId}
                activeTaskId={taskId}
              />
            </Suspense>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold mb-6">{module.title}</h1>

              <Tabs defaultValue={tab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger
                    value="lessons"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Darslar
                  </TabsTrigger>
                  <TabsTrigger value="tests" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Testlar
                  </TabsTrigger>
                  <TabsTrigger value="tasks" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Vazifalar
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="lessons" className="mt-6">
                  <Suspense fallback={<LoadingSpinner />}>
                    {lessonId ? (
                      <LessonContent courseId={params.courseId} moduleId={params.moduleId} lessonId={lessonId} />
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-500">Bu modulda darslar mavjud emas</p>
                      </div>
                    )}
                  </Suspense>
                </TabsContent>

                <TabsContent value="tests" className="mt-6">
                  <Suspense fallback={<LoadingSpinner />}>
                    {testId ? (
                      <TestContent courseId={params.courseId} moduleId={params.moduleId} testId={testId} />
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-500">Bu modulda testlar mavjud emas</p>
                      </div>
                    )}
                  </Suspense>
                </TabsContent>

                <TabsContent value="tasks" className="mt-6">
                  <Suspense fallback={<LoadingSpinner />}>
                    {taskId ? (
                      <TaskContent courseId={params.courseId} moduleId={params.moduleId} taskId={taskId} />
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-500">Bu modulda vazifalar mavjud emas</p>
                      </div>
                    )}
                  </Suspense>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
