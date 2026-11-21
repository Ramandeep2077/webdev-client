"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname() ?? "";
  const server = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
  const serverUrl = server.replace(/\/$/, "");
  const labs = [
    ["Lab 1", "/labs/lab1"],
    ["Lab 2", "/labs/lab2"],
    ["Lab 3", "/labs/lab3"],
    ["Lab 4", "/labs/lab4"],
    ["Lab 5", "/labs/lab5"],
  ];

  return (
    <div id="wd-toc">
      <p>
        <strong>Ramandeep Singh</strong>
        <br />
        <em>Build it, break it, learn it.</em>
        <br />
        <a
          href="https://github.com/Ramandeep2077/webdev-client"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>
      </p>
      <ul>
        <li>
          <Link href="/labs" id="wd-home-link">
            Home
          </Link>
        </li>
        {labs.map(([label, href]) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
              className={pathname.startsWith(href) ? "font-semibold text-red-700 underline" : "text-neutral-700"}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/dashboard" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/Ramandeep2077/webdev-server"
            target="_blank"
            rel="noreferrer"
          >
            Server GitHub
          </a>
        </li>
        <li>
          <a href={serverUrl} target="_blank" rel="noreferrer">
            Deployed Server
          </a>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>
    </div>
  );
}
