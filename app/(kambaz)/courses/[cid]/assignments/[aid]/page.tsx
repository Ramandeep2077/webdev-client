import Link from "next/link";
import { notFound } from "next/navigation";
import { getAssignmentsForCourse } from "../../../../database";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = getAssignmentsForCourse(cid).find((item) => item._id === aid);
  if (!assignment) notFound();

  return (
    <div id="wd-assignments-editor" className="max-w-4xl space-y-3">
      <h1 className="text-2xl font-semibold">Assignment Details</h1>
      <label className="block font-medium" htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue={assignment.title} className="w-full rounded border border-neutral-300 px-3 py-2" />
      <textarea
        id="wd-description"
        cols={50}
        rows={5}
        className="w-full rounded border border-neutral-300 px-3 py-2"
        defaultValue={assignment.description}
      />
      <table className="w-full border-separate border-spacing-y-3">
        <tbody>
          <tr>
            <td align="right" valign="top"><label htmlFor="wd-points">Points</label></td>
            <td><input id="wd-points" defaultValue={assignment.points} /></td>
          </tr>
          <tr>
            <td align="right" valign="top"><label htmlFor="wd-group">Assignment Group</label></td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top"><label htmlFor="wd-display-grade-as">Display Grade as</label></td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
                <option value="POINTS">Points</option>
                <option value="LETTER">Letter Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top"><label htmlFor="wd-submission-type">Submission Type</label></td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
                <option value="ON_PAPER">On Paper</option>
                <option value="NO_SUBMISSION">No Submission</option>
              </select>
              <h3 className="my-2 font-medium">Online Entry Options</h3>
              <label><input type="checkbox" id="wd-text-entry" /> Text Entry</label><br />
              <label><input type="checkbox" id="wd-website-url" defaultChecked /> Website URL</label><br />
              <label><input type="checkbox" id="wd-media-recordings" /> Media Recordings</label><br />
              <label><input type="checkbox" id="wd-student-annotation" /> Student Annotation</label><br />
              <label><input type="checkbox" id="wd-file-upload" /> File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">Assign</td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input id="wd-assign-to" defaultValue="Everyone" /><br />
              <label htmlFor="wd-due-date">Due</label><br />
              <input type="date" id="wd-due-date" defaultValue={assignment.dueDate} />
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="flex justify-end gap-2 border-t border-neutral-300 pt-4">
        <Link href={`/courses/${cid}/assignments`} id="wd-cancel" className="rounded border border-neutral-300 px-4 py-2 text-neutral-800 no-underline">Cancel</Link>
        <Link href={`/courses/${cid}/assignments`} id="wd-save" className="rounded bg-red-600 px-4 py-2 text-white no-underline">Save</Link>
      </div>
    </div>
  );
}
