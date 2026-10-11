import { FaUserCircle } from "react-icons/fa";

export default function People() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <h2 className="mb-4 text-2xl font-semibold">People</h2>
      <table className="w-full border-collapse text-left text-sm">
        <thead><tr className="border-b border-neutral-300"><th className="p-2">Name</th><th className="p-2">Login ID</th><th className="p-2">Section</th><th className="p-2">Role</th><th className="p-2">Last Activity</th><th className="p-2">Total Activity</th></tr></thead>
        <tbody>
          {[
            ["Tony Stark", "001234561S", "S101", "STUDENT", "2020-10-01", "10:21:32"],
            ["Bruce Wayne", "001234562S", "S101", "STUDENT", "2020-11-02", "23:32:23"],
            ["Steve Rogers", "001234563S", "S101", "STUDENT", "2020-10-02", "13:21:32"],
            ["Natasha Romanoff", "001234564S", "S101", "TA", "2020-11-05", "11:22:33"],
            ["Jane Sample", "001234565S", "S101", "STUDENT", "2020-11-08", "08:14:20"],
            ["Alex Sample", "001234566S", "S101", "STUDENT", "2020-11-09", "09:30:12"],
            ["Sam Sample", "001234567S", "S101", "STUDENT", "2020-11-10", "05:42:08"],
          ].map(([name, login, section, role, lastActivity, totalActivity]) => (
            <tr key={login} className="border-b border-neutral-200 odd:bg-neutral-50">
              <td className="p-2 text-nowrap"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" />{name}</td><td className="p-2">{login}</td><td className="p-2">{section}</td><td className="p-2">{role}</td><td className="p-2">{lastActivity}</td><td className="p-2">{totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
