import Link from "next/link";
import Image from "next/image";
import type { Course } from "../store/useKambazStore";

export default function CourseCard({
  course,
  onEdit,
  onDelete,
}: {
  course: Course;
  onEdit: (course: Course) => void;
  onDelete: () => void;
}) {
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link href={`/courses/${course._id}/home`} className="wd-dashboard-course-link block text-neutral-900 no-underline">
        <Image src={course.image} width={300} height={160} alt={course.name} className="h-40 w-full object-cover" />
        <div className="p-4">
          <h5 className="m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">{course.name}</h5>
          <p className="wd-dashboard-course-title m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">{course.subtitle}</p>
          <button type="button" className="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">Go</button>
        </div>
      </Link>
      <div className="flex gap-2 border-t border-neutral-200 p-3">
        <button type="button" onClick={() => onEdit(course)} aria-label={`Edit ${course.name}`} className="rounded border border-neutral-300 px-3 py-1 text-sm">Edit</button>
        <button type="button" onClick={onDelete} aria-label={`Delete ${course.name}`} className="rounded border border-red-300 px-3 py-1 text-sm text-red-700">Delete</button>
      </div>
    </div>
  );
}
