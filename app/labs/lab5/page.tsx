export default function Lab5() {
  const server = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
  const serverUrl = server.replace(/\/$/, "");

  const link = (label: string, path: string) => (
    <li>
      <a href={`${serverUrl}${path}`} target="_blank" rel="noreferrer" className="text-blue-700 underline">
        {label}
      </a>
    </li>
  );

  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <h3>5.2.1 Welcome</h3>
      <ul>{link("Welcome", "/lab5/welcome")}</ul>

      <h3>5.2.2.1 Path Parameters</h3>
      <ul>
        {link("Add 12 + 30", "/lab5/add/12/30")}
        {link("Subtract 30 - 12", "/lab5/subtract/30/12")}
        {link("Multiply 12 * 30", "/lab5/multiply/12/30")}
        {link("Divide 30 / 12", "/lab5/divide/30/12")}
      </ul>

      <h3>5.2.2.2 Query Parameters</h3>
      <ul>
        {link("Add query", "/lab5/calculator?operation=add&a=12&b=30")}
        {link("Subtract query", "/lab5/calculator?operation=subtract&a=30&b=12")}
        {link("Multiply query", "/lab5/calculator?operation=multiply&a=12&b=30")}
        {link("Divide query", "/lab5/calculator?operation=divide&a=30&b=12")}
      </ul>

      <h3>5.2.3.1 Assignment Object</h3>
      <ul>{link("Assignment", "/lab5/assignment")}</ul>
      <h3>5.2.3.2 Assignment Title</h3>
      <ul>{link("Assignment title", "/lab5/assignment/title")}</ul>
      <h3>5.2.3.3 Assignment Grade</h3>
      <ul>{link("Assignment grade", "/lab5/assignment/grade")}</ul>
      <h3>5.2.3.4 Module Object</h3>
      <ul>
        {link("Module", "/lab5/module")}
        {link("Module name", "/lab5/module/name")}
      </ul>

      <h3>5.2.4 Remote Arrays</h3>
      <ul>
        {link("Todos", "/lab5/todos")}
        {link("Todo 1", "/lab5/todos/1")}
        {link("Completed todos", "/lab5/todos?completed=true")}
      </ul>
      <h3>5.2.4.1 Create Todo</h3>
      <h3>5.2.4.2 Update Todo</h3>
      <h3>5.2.4.3 Delete Todo</h3>

      <h3>5.3.1 Next.js Route Handlers</h3>
      <ul>
        <li><a href="/api/lab5/hello" target="_blank" rel="noreferrer" className="text-blue-700 underline">Hello route handler</a></li>
        <li><a href="/api/lab5/calculator?a=12&b=30&operation=add" target="_blank" rel="noreferrer" className="text-blue-700 underline">Calculator route handler</a></li>
      </ul>

      <h3>5.4.1 Courses API</h3>
      <ul>{link("Courses", "/api/courses")}</ul>
      <h3>5.4.2 Modules API</h3>
      <ul>
        {link("React modules", "/api/courses/1234/modules")}
        {link("Node modules", "/api/courses/2345/modules")}
      </ul>
      <h3>5.4.3 Course CRUD</h3>
      <h3>5.4.4 Module CRUD</h3>
      <h3>5.4.5 Kambaz REST Integration</h3>
      <h3>5.5 Deployment</h3>
      <h3>5.6 Environment Variables</h3>
      <h3>5.7 Submission</h3>
    </div>
  );
}
