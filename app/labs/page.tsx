import Link from "next/link";
import { courses } from "../(kambaz)/database";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Ramandeep Singh</h2>
      <p>
        Source code:{" "}
        <a
          href="https://github.com/Ramandeep2077/webdev-client"
          id="wd-github"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>
      </p>
      <ul>
        <li>
          <Link href="/labs/lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/labs/lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/labs/lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4: Client State
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5" id="wd-lab5-link">
            Lab 5: Express REST APIs
          </Link>
        </li>
        <li>
          <Link href="/dashboard" id="wd-kambaz-link">
            Kambaz Dashboard
          </Link>
        </li>
      </ul>
      <h2>Kambaz Screens</h2>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        {courses.map((course) => (
          <li key={course._id}>
            {course.name}: {[
              ["Home", "home"],
              ["Modules", "modules"],
              ["Assignments", "assignments"],
              ["People", "people/table"],
            ].map(([label, path], index) => (
              <span key={path}>
                {index > 0 ? " | " : ""}
                <Link href={`/courses/${course._id}/${path}`}>{label}</Link>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
