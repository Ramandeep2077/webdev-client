"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const courseMatch = pathname.match(/^\/courses\/([^/]+)/);
  const items = [
    { label: "Account", href: "/account", id: "wd-account-link", icon: FaRegCircleUser, active: false },
    { label: "Dashboard", href: "/dashboard", id: "wd-dashboard-link", icon: AiOutlineDashboard, active: pathname === "/dashboard" },
    { label: "Courses", href: courseMatch ? `/courses/${courseMatch[1]}/home` : "/dashboard", id: "wd-course-link", icon: LiaBookSolid, active: Boolean(courseMatch) },
    { label: "Calendar", href: "/calendar", id: "wd-calendar-link", icon: IoCalendarOutline, active: false },
    { label: "Inbox", href: "/inbox", id: "wd-inbox-link", icon: FaInbox, active: false },
    { label: "Labs", href: "/labs", id: "wd-labs-link", icon: LiaCogSolid, active: false },
  ];

  return (
    <nav id="wd-kambaz-navigation" className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block">
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/NEU.png" width={75} height={75} alt="Northeastern University" className="mx-auto" />
      </a>
      {items.map(({ label, href, id, icon: Icon, active }) => (
        <Link
          key={id}
          href={href}
          id={id}
          aria-current={active ? "page" : undefined}
          className={`block py-3 text-center text-sm no-underline ${active ? "bg-white text-red-700" : "bg-black text-white"}`}
        >
          <Icon className={`inline-block text-3xl ${active ? "text-red-700" : "text-red-600"}`} />
          <br />
          {label}
        </Link>
      ))}
    </nav>
  );
}
