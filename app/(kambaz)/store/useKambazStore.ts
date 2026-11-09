import { create } from "zustand";
import courseData from "../database/courses.json";
import moduleData from "../database/modules.json";

export type Course = (typeof courseData)[number];
export type CourseInput = Pick<Course, "courseNumber" | "name" | "subtitle" | "startDate">;
export type CourseModule = (typeof moduleData)[number];

type KambazState = {
  courses: Course[];
  modules: CourseModule[];
  addCourse: (course: CourseInput) => void;
  updateCourse: (id: string, course: CourseInput) => void;
  deleteCourse: (id: string) => void;
  addModule: (courseId: string) => void;
  updateModule: (id: string, name: string) => void;
  deleteModule: (id: string) => void;
};

export const useKambazStore = create<KambazState>((set) => ({
  courses: courseData,
  modules: moduleData,
  addCourse: (course) =>
    set((state) => ({
      courses: [
        ...state.courses,
        {
          ...course,
          _id: crypto.randomUUID(),
          image: "/images/reactjs.jpg",
          term: "Fall 2026",
        },
      ],
    })),
  updateCourse: (id, course) =>
    set((state) => ({
      courses: state.courses.map((existing) =>
        existing._id === id ? { ...existing, ...course } : existing,
      ),
    })),
  deleteCourse: (id) =>
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== id),
      modules: state.modules.filter((module) => module.course !== id),
    })),
  addModule: (courseId) =>
    set((state) => ({
      modules: [
        ...state.modules,
        {
          _id: crypto.randomUUID(),
          course: courseId,
          name: "New Module",
          lessons: [],
        },
      ],
    })),
  updateModule: (id, name) =>
    set((state) => ({
      modules: state.modules.map((module) =>
        module._id === id ? { ...module, name } : module,
      ),
    })),
  deleteModule: (id) =>
    set((state) => ({
      modules: state.modules.filter((module) => module._id !== id),
    })),
}));
