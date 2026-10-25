import AssignmentItem from "./AssignmentItem";
import { FaPlus, FaSearch } from "react-icons/fa";
import { getAssignmentsForCourse } from "../../../database";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const courseAssignments = getAssignmentsForCourse(cid);
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
          <input placeholder="Search for Assignments" id="wd-search-assignment" className="rounded border border-neutral-300 py-1.5 pr-3 pl-9 text-sm" />
        </div>
        <div className="flex gap-2">
          <button type="button" id="wd-add-assignment-group" className="inline-flex items-center gap-1 rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"><FaPlus /> Group</button>
          <button type="button" id="wd-add-assignment" className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"><FaPlus /> Assignment</button>
        </div>
      </div>
      <h3 id="wd-assignments-title" className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg">
        <span>ASSIGNMENTS 40% of Total</span><button type="button" className="rounded border border-neutral-300 bg-white px-2 py-0.5 text-sm"><FaPlus /></button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {courseAssignments.map((assignment) => (
          <AssignmentItem key={assignment._id} cid={cid} aid={assignment._id} title={assignment.title} details={assignment.details} />
        ))}
      </ul>
    </div>
  );
}
