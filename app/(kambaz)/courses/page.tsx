import Link from "next/link";
import { courses } from "../database";

export default function Courses() {
  return (
    <main id="wd-courses-index">
      <h1 className="mb-4 text-2xl font-semibold">Courses</h1>
      <ul className="space-y-2">
        {courses.map((course) => (
          <li key={course._id}>
            <Link href={`/courses/${course._id}/home`} className="text-red-700 underline">
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}