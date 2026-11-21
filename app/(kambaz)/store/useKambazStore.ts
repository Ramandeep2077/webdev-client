import { create } from "zustand";
import courseData from "../database/courses.json";
import moduleData from "../database/modules.json";
import { http } from "./api";

export type Course = (typeof courseData)[number];
export type CourseInput = Pick<Course, "courseNumber" | "name" | "subtitle" | "startDate">;
export type CourseModule = (typeof moduleData)[number];

type KambazState = {
  courses: Course[];
  modules: CourseModule[];
  fetchCourses: () => Promise<void>;
  addCourse: (course: CourseInput) => Promise<void>;
  updateCourse: (id: string, course: CourseInput) => Promise<void>;
  deleteCourse: (id: string) => Promise<void>;
  fetchModules: (courseId: string) => Promise<void>;
  addModule: (courseId: string) => Promise<void>;
  updateModule: (id: string, name: string) => Promise<void>;
  deleteModule: (id: string) => Promise<void>;
};

export const useKambazStore = create<KambazState>((set) => ({
  courses: courseData,
  modules: moduleData,
  fetchCourses: async () => {
    try {
      const response = await http.get<Course[]>("/api/courses");
      set({ courses: response.data });
    } catch {
      // Keep the bundled data available when the server is not running.
      set({ courses: courseData });
    }
  },
  addCourse: async (course) => {
    const response = await http.post<Course>("/api/courses", {
      ...course,
      image: "/images/reactjs.jpg",
      term: "Fall 2026",
    });
    set((state) => ({ courses: [...state.courses, response.data] }));
  },
  updateCourse: async (id, course) => {
    const response = await http.put<Course>(`/api/courses/${id}`, course);
    set((state) => ({
      courses: state.courses.map((existing) =>
        existing._id === id ? response.data : existing,
      ),
    }));
  },
  deleteCourse: async (id) => {
    await http.delete(`/api/courses/${id}`);
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== id),
      modules: state.modules.filter((module) => module.course !== id),
    }));
  },
  fetchModules: async (courseId) => {
    try {
      const response = await http.get<CourseModule[]>(`/api/courses/${courseId}/modules`);
      set((state) => ({
        modules: [
          ...state.modules.filter((module) => module.course !== courseId),
          ...response.data,
        ],
      }));
    } catch {
      set({ modules: moduleData });
    }
  },
  addModule: async (courseId) => {
    const response = await http.post<CourseModule>(`/api/courses/${courseId}/modules`, {
      name: "New Module",
      lessons: [],
    });
    set((state) => ({ modules: [...state.modules, response.data] }));
  },
  updateModule: async (id, name) => {
    const response = await http.put<CourseModule>(`/api/modules/${id}`, { name });
    set((state) => ({
      modules: state.modules.map((module) =>
        module._id === id ? response.data : module,
      ),
    }));
  },
  deleteModule: async (id) => {
    await http.delete(`/api/modules/${id}`);
    set((state) => ({
      modules: state.modules.filter((module) => module._id !== id),
    }));
  },
}));
