import assignmentData from "./assignments.json";
import courseData from "./courses.json";
import enrollmentData from "./enrollments.json";
import moduleData from "./modules.json";
import userData from "./users.json";

export const courses = courseData;
export const assignments = assignmentData;
export const modules = moduleData;
export const users = userData;
export const enrollments = enrollmentData;

export function getCourse(courseId: string) {
  return courses.find((course) => course._id === courseId);
}

export function getModulesForCourse(courseId: string) {
  return modules.filter((module) => module.course === courseId);
}

export function getAssignmentsForCourse(courseId: string) {
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function getPeopleForCourse(courseId: string) {
  return enrollments
    .filter((enrollment) => enrollment.course === courseId)
    .flatMap((enrollment) => {
      const user = users.find((candidate) => candidate._id === enrollment.user);
      return user ? [{ ...user, role: enrollment.role }] : [];
    });
}