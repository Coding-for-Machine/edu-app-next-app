// lib/api-service.ts
import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";

// Environment variables check
if (!process.env.NEXT_PUBLIC_API_URL) {
  console.warn("NEXT_PUBLIC_API_URL environment variable is not set");
}

// TypeScript interfaces
interface User {
  phone_number: string;
  name: string;
}

interface Tokens {
  access: string;
  refresh: string;
}

interface Course {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  level: string;
  duration: string;
  studentsCount: number;
  rating: number;
  reviewsCount: number;
  featured: boolean;
}

interface CourseDetails extends Course {
  description: string;
  language: string;
  modulesCount: number;
  certificate: boolean;
  updatedAt: string;
  instructor: {
    id: string;
    name: string;
    title: string;
    bio: string;
    avatar: string;
  };
  modules: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

interface Lesson {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  videoUrl?: string;
  images: Array<{
    url: string;
    caption: string;
  }>;
  attachments: Array<{
    title: string;
    url: string;
    type: string;
    size: string;
  }>;
}

interface Test {
  id: string;
  title: string;
  description: string;
  questions: Array<{
    id: string;
    text: string;
    type: string;
    options: Array<{
      id: string;
      text: string;
    }>;
  }>;
}

interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  website: string;
  avatar: string;
}

class ApiService {
  private static instance: ApiService;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private setupInterceptors() {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("access_token");
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config;
        
        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
          originalRequest.retry = true;
          
          try {
            const refreshToken = typeof window !== "undefined" 
              ? localStorage.getItem("refresh_token") 
              : null;
            
            if (refreshToken) {
              const response = await this.axiosInstance.post<Tokens>("/token/refresh", {
                refresh: refreshToken,
              });
              
              if (typeof window !== "undefined") {
                localStorage.setItem("access_token", response.data.access);
              }
              
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
              }
              
              return this.axiosInstance(originalRequest);
            }
          } catch (refreshError) {
            console.error("Token refresh failed:", refreshError);
            this.clearAuthData();
            if (typeof window !== "undefined") {
              window.location.href = "/login";
            }
          }
        }
        
        return Promise.reject(error);
      }
    );
  }

  private clearAuthData() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
    }
  }

  // Authentication services
  public authService = {
    login: async (phoneNumber: string, password: string) => {
      try {
        const response = await this.axiosInstance.post<Tokens & { phone_number: string }>(
          "/token/pair",
          { phone_number: phoneNumber, password }
        );

        if (typeof window !== "undefined") {
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
          localStorage.setItem(
            "user",
            JSON.stringify({
              phone_number: response.data.phone_number,
              name: response.data.phone_number,
            })
          );
        }

        return { success: true, data: response.data };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return {
            success: false,
            error: error.response?.data || error.message,
          };
        }
        return { success: false, error: "Unknown error occurred" };
      }
    },

    refreshToken: async () => {
      try {
        const refreshToken = typeof window !== "undefined" 
          ? localStorage.getItem("refresh_token") 
          : null;

        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        const response = await this.axiosInstance.post<Tokens>(
          "/token/refresh",
          { refresh: refreshToken }
        );

        if (typeof window !== "undefined") {
          localStorage.setItem("access_token", response.data.access);
        }

        return { success: true, data: response.data };
      } catch (error) {
        this.clearAuthData();
        if (axios.isAxiosError(error)) {
          return {
            success: false,
            error: error.response?.data || error.message,
          };
        }
        return { success: false, error: "Unknown error occurred" };
      }
    },

    verifyToken: async (token: string) => {
      try {
        await this.axiosInstance.post("/token/verify", { token });
        return { success: true };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return {
            success: false,
            error: error.response?.data || error.message,
          };
        }
        return { success: false, error: "Unknown error occurred" };
      }
    },

    logout: () => {
      this.clearAuthData();
      return { success: true };
    },

    getCurrentUser: (): User | null => {
      if (typeof window !== "undefined") {
        const userJson = localStorage.getItem("user");
        if (userJson) {
          try {
            return JSON.parse(userJson) as User;
          } catch (error) {
            console.error("JSON parse error:", error);
            localStorage.removeItem("user");
            return null;
          }
        }
      }
      return null;
    },

    isAuthenticated: (): boolean => {
      return !!this.getCurrentUser();
    },
  };

  // Course services
  public courseService = {
    fetchCategories: async (): Promise<string[]> => {
      try {
        const response = await this.axiosInstance.get<string[]>("/categories");
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Categories fetch failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while fetching categories");
      }
    },

    fetchFeaturedCourses: async (): Promise<Course[]> => {
      try {
        const response = await this.axiosInstance.get<any[]>("/courses/featured");
        return response.data.map((course) => ({
          id: course.id,
          title: course.title,
          shortDescription: course.short_description,
          image: course.image,
          category: course.category,
          level: course.level,
          duration: course.duration,
          studentsCount: course.students_count,
          rating: course.rating || 0,
          reviewsCount: course.reviews_count,
          featured: course.featured,
        }));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Featured courses fetch failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while fetching featured courses");
      }
    },

    fetchAllCourses: async (category?: string): Promise<Course[]> => {
      try {
        const params = category ? { category } : {};
        const response = await this.axiosInstance.get<any[]>("/courses", { params });
        return response.data.map((course) => ({
          id: course.id,
          title: course.title,
          shortDescription: course.short_description,
          image: course.image,
          category: course.category,
          level: course.level,
          duration: course.duration,
          studentsCount: course.students_count,
          rating: course.rating || 0,
          reviewsCount: course.reviews_count,
          featured: course.featured,
        }));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `All courses fetch failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while fetching all courses");
      }
    },

    fetchCourseDetails: async (courseId: string): Promise<CourseDetails> => {
      try {
        const response = await this.axiosInstance.get<any>(`/courses/${courseId}`);
        const course = response.data;

        return {
          id: course.id,
          title: course.title,
          description: course.description,
          image: course.image,
          category: course.category,
          level: course.level,
          language: course.language,
          duration: course.duration,
          studentsCount: course.students_count,
          rating: course.rating || 0,
          reviewsCount: course.reviews_count,
          modulesCount: course.modules_count,
          certificate: course.certificate,
          updatedAt: new Date(course.updated_at).toLocaleDateString(),
          instructor: {
            id: course.instructor.id,
            name: course.instructor.name,
            title: course.instructor.title,
            bio: course.instructor.bio,
            avatar: course.instructor.avatar || "/placeholder.svg?height=100&width=100",
          },
          modules: course.modules.map((module: any) => ({
            id: module.id,
            title: module.title,
            description: module.description,
          })),
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Course details fetch failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while fetching course details");
      }
    },

    fetchCourseStructure: async (courseId: string) => {
      try {
        const response = await this.axiosInstance.get(`/courses/${courseId}/structure`);
        return {
          chapters: response.data.modules.map((module: any) => ({
            id: module.id.toString(),
            title: module.title,
            lessons: module.lessons.map((lesson: any) => ({
              id: lesson.id.toString(),
              title: lesson.title,
              completed: lesson.completed,
            })),
            tests: module.tests.map((test: any) => ({
              id: test.id.toString(),
              title: test.title,
              completed: test.completed,
            })),
            assignments: module.assignments.map((assignment: any) => ({
              id: assignment.id.toString(),
              title: assignment.title,
              completed: assignment.completed,
            })),
          })),
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Course structure fetch failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while fetching course structure");
      }
    },

    fetchModuleDetails: async (courseId: string, moduleId: string) => {
      try {
        const response = await this.axiosInstance.get(`/courses/${courseId}/modules/${moduleId}`);
        const module = response.data;

        return {
          id: module.id.toString(),
          title: module.title,
          description: module.description,
          completed: module.completed,
          lessons: module.lessons.map((lesson: any) => ({
            id: lesson.id.toString(),
            title: lesson.title,
            completed: lesson.completed,
          })),
          tests: module.tests.map((test: any) => ({
            id: test.id.toString(),
            title: test.title,
            completed: test.completed,
          })),
          tasks: module.assignments.map((assignment: any) => ({
            id: assignment.id.toString(),
            title: assignment.title,
            completed: assignment.completed,
          })),
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Module details fetch failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while fetching module details");
      }
    },

    fetchLessonContent: async (courseId: string, moduleId: string, lessonId: string): Promise<Lesson> => {
      try {
        const response = await this.axiosInstance.get(`/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`);
        const lesson = response.data;

        return {
          id: lesson.id.toString(),
          title: lesson.title,
          content: lesson.content,
          completed: lesson.completed,
          videoUrl: lesson.video_url,
          images: lesson.images.map((image: any) => ({
            url: image.url,
            caption: image.caption,
          })),
          attachments: lesson.attachments.map((attachment: any) => ({
            title: attachment.title,
            url: attachment.url,
            type: attachment.type,
            size: attachment.size,
          })),
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Lesson content fetch failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while fetching lesson content");
      }
    },

    fetchTestContent: async (courseId: string, moduleId: string, testId: string): Promise<Test> => {
      try {
        const response = await this.axiosInstance.get(`/courses/${courseId}/modules/${moduleId}/tests/${testId}`);
        const test = response.data;

        return {
          id: test.id.toString(),
          title: test.title,
          description: test.description,
          questions: test.questions.map((question: any) => ({
            id: question.id,
            text: question.text,
            type: question.type,
            options: question.options.map((option: any) => ({
              id: option.id,
              text: option.text,
            })),
          })),
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Test content fetch failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while fetching test content");
      }
    },

    fetchTaskContent: async (courseId: string, moduleId: string, assignmentId: string): Promise<Assignment> => {
      try {
        const response = await this.axiosInstance.get(`/courses/${courseId}/modules/${moduleId}/assignments/${assignmentId}`);
        const assignment = response.data;

        return {
          id: assignment.id.toString(),
          title: assignment.title,
          description: assignment.description,
          dueDate: assignment.due_date,
          completed: assignment.completed,
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Assignment content fetch failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while fetching assignment content");
      }
    },

    markLessonComplete: async (courseId: string, moduleId: string, lessonId: string) => {
      try {
        const response = await this.axiosInstance.post(`/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}/complete`);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Mark lesson complete failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while marking lesson complete");
      }
    },

    submitTest: async (courseId: string, moduleId: string, testId: string, answers: Record<string, any>) => {
      try {
        const response = await this.axiosInstance.post(`/courses/${courseId}/modules/${moduleId}/tests/${testId}/submit`, {
          answers,
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Test submission failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while submitting test");
      }
    },

    submitTask: async (courseId: string, moduleId: string, assignmentId: string, formData: FormData) => {
      try {
        const response = await this.axiosInstance.post(
          `/courses/${courseId}/modules/${moduleId}/assignments/${assignmentId}/submit`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `Assignment submission failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while submitting assignment");
      }
    },
  };

  // User services
  public userService = {
    fetchUserProfile: async (): Promise<UserProfile> => {
      try {
        // In a real app, this would be an actual API call
        return {
          name: "Alisher Isaev",
          email: "alisher@example.com",
          phone: "+998 90 123 45 67",
          bio: "Web dasturlash bo'yicha o'quvchi. HTML, CSS va JavaScript texnologiyalarini o'rganmoqdaman.",
          location: "Toshkent, O'zbekiston",
          website: "https://alisher.dev",
          avatar: "/placeholder.svg?height=200&width=200",
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `User profile fetch failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while fetching user profile");
      }
    },

    updateUserProfile: async (userData: Partial<UserProfile>) => {
      try {
        // In a real app, this would be an actual API call
        return { success: true, user: userData };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            `User profile update failed: ${error.response?.data?.message || error.message}`
          );
        }
        throw new Error("Unknown error occurred while updating user profile");
      }
    },
  };
}

// Singleton instance export
export const apiService = ApiService.getInstance();