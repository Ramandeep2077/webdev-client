import Module from "./Module";
import Lesson from "./Lesson";
import { getModulesForCourse } from "../../../database";

export default function CourseModules({ cid }: { cid: string }) {
  const courseModules = getModulesForCourse(cid);

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">Collapse All</button>
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">View Progress</button>
        <select defaultValue="publish-all" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
          <option value="publish-all">Publish All</option>
        </select>
        <button type="button" className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white">+ Module</button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseModules.map((module) => (
          <Module key={module._id} title={module.name}>
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