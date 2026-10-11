"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const links = [
    ["Home", `/courses/${cid}/home`, "wd-course-home-link"],
    ["Modules", `/courses/${cid}/modules`, "wd-course-modules-link"],
    ["Piazza", `/courses/${cid}/piazza`, "wd-course-piazza-link"],
    ["Zoom", `/courses/${cid}/zoom`, "wd-course-zoom-link"],
    ["Assignments", `/courses/${cid}/assignments`, "wd-course-assignments-link"],
    ["Quizzes", `/courses/${cid}/quizzes`, "wd-course-quizzes-link"],
    ["Grades", `/courses/${cid}/grades`, "wd-course-grades-link"],
    ["People", `/courses/${cid}/people/table`, "wd-course-people-link"],
  ];
  return (
    <div id="wd-courses-navigation" className="list-group wd text-lg">
      {links.map(([label, href, id]) => (
        <Link key={id} href={href} id={id} className={`list-group-item border-0 ${pathname === href || pathname.startsWith(`${href}/`) ? "active" : "text-red-600"}`}>
          {label}
        </Link>
      ))}
    </div>
  );
}
