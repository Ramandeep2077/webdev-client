"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useParams } from "next/navigation";
import CourseHeading from "./CourseHeading";
import CourseNavigation from "./Navigation";
import { useKambazStore } from "../../store/useKambazStore";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams<{ cid: string }>();
  const course = useKambazStore((state) =>
    state.courses.find((candidate) => candidate._id === cid),
  );

  if (!course) {
    return (
      <div id="wd-courses" className="min-w-0">
        <h1 className="mb-2 text-xl font-semibold">Course not found</h1>
        <p className="mb-3">This course may have been deleted.</p>
        <Link href="/dashboard" className="text-blue-700 underline">Return to Dashboard</Link>
      </div>
    );
  }

  return (
    <div id="wd-courses" className="min-w-0">
      <CourseHeading courseName={course.name} />
      <hr className="mb-4 border-neutral-300" />
      <div className="flex gap-4">
        <div className="hidden w-[140px] shrink-0 md:block"><CourseNavigation cid={cid} /></div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
