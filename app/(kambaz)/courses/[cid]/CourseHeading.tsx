"use client";

import { usePathname } from "next/navigation";

const sections = [
  ["/home", "Home"],
  ["/modules", "Modules"],
  ["/assignments", "Assignments"],
  ["/people", "People"],
] as const;

export default function CourseHeading({ courseName }: { courseName: string }) {
  const pathname = usePathname() ?? "";
  const section = sections.find(([suffix]) => pathname.includes(suffix))?.[1] ?? "Home";

  return (
    <h2 className="mb-2 text-xl font-semibold">
      {courseName} <span className="font-normal text-neutral-500">&gt; {section}</span>
    </h2>
  );
}