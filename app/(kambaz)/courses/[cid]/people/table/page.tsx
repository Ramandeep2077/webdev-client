import { FaUserCircle } from "react-icons/fa";
import { getPeopleForCourse } from "../../../../database";

export default async function People({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const people = getPeopleForCourse(cid);
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <h2 className="mb-4 text-2xl font-semibold">People</h2>
      <table className="w-full border-collapse text-left text-sm">
        <thead><tr className="border-b border-neutral-300"><th className="p-2">Name</th><th className="p-2">Login ID</th><th className="p-2">Section</th><th className="p-2">Role</th><th className="p-2">Last Activity</th><th className="p-2">Total Activity</th></tr></thead>
        <tbody>
          {people.map((person) => (
            <tr key={person._id} className="border-b border-neutral-200 odd:bg-neutral-50">
              <td className="p-2 text-nowrap"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" />{person.firstName} {person.lastName}</td><td className="p-2">{person.loginId}</td><td className="p-2">{person.section}</td><td className="p-2">{person.role}</td><td className="p-2">{person.lastActivity}</td><td className="p-2">{person.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
