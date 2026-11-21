"use client";

import Module from "./Module";
import Lesson from "./Lesson";
import { useKambazStore } from "../../../store/useKambazStore";
import { useEffect } from "react";

export default function CourseModules({ cid }: { cid: string }) {
  const fetchModules = useKambazStore((state) => state.fetchModules);
  const modules = useKambazStore((state) => state.modules);
  const courseModules = modules.filter((module) => module.course === cid);
  const addModule = useKambazStore((state) => state.addModule);
  const updateModule = useKambazStore((state) => state.updateModule);
  const deleteModule = useKambazStore((state) => state.deleteModule);

  useEffect(() => {
    void fetchModules(cid);
  }, [cid, fetchModules]);

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">Collapse All</button>
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">View Progress</button>
        <select defaultValue="publish-all" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
          <option value="publish-all">Publish All</option>
        </select>
        <button type="button" onClick={() => addModule(cid)} className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white">+ Module</button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseModules.map((module) => (
          <Module
            key={module._id}
            title={module.name}
            onRename={(name) => updateModule(module._id, name)}
            onDelete={() => deleteModule(module._id)}
          >
            {module.lessons.map((lesson) => (
              <Lesson key={`${module._id}-${lesson.title}`} title={lesson.title}>
                {lesson.items.map((item) => (
                  <li key={item} className="wd-content-item">{item}</li>
                ))}
              </Lesson>
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}