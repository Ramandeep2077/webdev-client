"use client";

import { useState, type FormEvent } from "react";
import CourseCard from "./CourseCard";
import { useKambazStore, type CourseInput } from "../store/useKambazStore";

const emptyCourse: CourseInput = {
  courseNumber: "",
  name: "",
  subtitle: "",
  startDate: "",
};

export default function Dashboard() {
  const courses = useKambazStore((state) => state.courses);
  const addCourse = useKambazStore((state) => state.addCourse);
  const updateCourse = useKambazStore((state) => state.updateCourse);
  const deleteCourse = useKambazStore((state) => state.deleteCourse);
  const [form, setForm] = useState<CourseInput>(emptyCourse);
  const [editingId, setEditingId] = useState<string | null>(null);

  function submitCourse(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const course = {
      ...form,
      courseNumber: form.courseNumber.trim(),
      name: form.name.trim(),
      subtitle: form.subtitle.trim(),
    };
    if (!course.courseNumber || !course.name || !course.subtitle || !course.startDate) return;

    addCourse(course);
    setForm(emptyCourse);
    setEditingId(null);
  }

  function editCourse(course: (typeof courses)[number]) {
    setForm({
      courseNumber: course.courseNumber,
      name: course.name,
      subtitle: course.subtitle,
      startDate: course.startDate,
    });
    setEditingId(course._id);
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="mb-2 text-2xl font-semibold">Dashboard</h1>
      <hr className="mb-4 border-neutral-300" />
      <form onSubmit={submitCourse} className="mb-6 max-w-2xl rounded border border-neutral-300 p-4">
        <h2 className="mb-3 text-lg font-semibold">Course</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-sm" htmlFor="wd-course-number">
            Course number
            <input id="wd-course-number" value={form.courseNumber} onChange={(event) => setForm({ ...form, courseNumber: event.target.value })} required className="rounded border border-neutral-300 px-3 py-2" />
          </label>
          <label className="grid gap-1 text-sm" htmlFor="wd-course-name">
            Course name
            <input id="wd-course-name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required className="rounded border border-neutral-300 px-3 py-2" />
          </label>
          <label className="grid gap-1 text-sm sm:col-span-2" htmlFor="wd-course-description">
            Description
            <textarea id="wd-course-description" value={form.subtitle} onChange={(event) => setForm({ ...form, subtitle: event.target.value })} required rows={2} className="rounded border border-neutral-300 px-3 py-2" />
          </label>
          <label className="grid gap-1 text-sm" htmlFor="wd-course-start-date">
            Start date
            <input id="wd-course-start-date" type="date" value={form.startDate} onChange={(event) => setForm({ ...form, startDate: event.target.value })} required className="rounded border border-neutral-300 px-3 py-2" />
          </label>
        </div>
        <div className="mt-4 flex gap-2">
          <button type="submit" className="rounded bg-blue-700 px-4 py-2 text-sm font-medium text-white">Add</button>
          <button type="button" disabled={!editingId} onClick={() => {
            if (!editingId || !form.courseNumber.trim() || !form.name.trim() || !form.subtitle.trim() || !form.startDate) return;
            updateCourse(editingId, { ...form, courseNumber: form.courseNumber.trim(), name: form.name.trim(), subtitle: form.subtitle.trim() });
            setForm(emptyCourse);
            setEditingId(null);
          }} className="rounded border border-neutral-300 px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50">Update</button>
          {editingId && <button type="button" onClick={() => { setForm(emptyCourse); setEditingId(null); }} className="rounded border border-neutral-300 px-4 py-2 text-sm">Cancel edit</button>}
        </div>
      </form>
      <h2 id="wd-dashboard-published" className="mb-3 text-xl font-semibold">Published Courses ({courses.length})</h2>
      <hr className="mb-5 border-neutral-300" />
      <div id="wd-dashboard-courses" className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} onEdit={editCourse} onDelete={() => {
            deleteCourse(course._id);
            if (editingId === course._id) {
              setForm(emptyCourse);
              setEditingId(null);
            }
          }} />
        ))}
      </div>
    </div>
  );
}
