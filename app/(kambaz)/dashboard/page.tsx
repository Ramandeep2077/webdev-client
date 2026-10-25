import CourseCard from "./CourseCard";
import { courses } from "../database";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="mb-2 text-2xl font-semibold">Dashboard</h1>
      <hr className="mb-4 border-neutral-300" />
      <h2 id="wd-dashboard-published" className="mb-3 text-xl font-semibold">Published Courses ({courses.length})</h2>
      <hr className="mb-5 border-neutral-300" />
      <div id="wd-dashboard-courses" className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}
