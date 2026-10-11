import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  return (
    <div id="wd-courses" className="min-w-0">
      <h2 className="mb-2 text-xl font-semibold">Courses {cid}</h2>
      <hr className="mb-4 border-neutral-300" />
      <div className="flex gap-4">
        <div className="hidden w-[140px] shrink-0 md:block"><CourseNavigation cid={cid} /></div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
