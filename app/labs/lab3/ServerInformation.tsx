import { readFile } from "node:fs/promises";
import { join } from "node:path";

const files = [
  "app/labs/lab3/page.tsx",
  "app/labs/lab3/lab3.css",
  "app/labs/lab3/todos.json",
];

export default async function ServerInformation() {
  const contents = await Promise.all([
    readFile(join(process.cwd(), "app/labs/lab3/page.tsx"), "utf8"),
    readFile(join(process.cwd(), "app/labs/lab3/lab3.css"), "utf8"),
    readFile(join(process.cwd(), "app/labs/lab3/todos.json"), "utf8"),
  ]);
  const serverInfo = {
    platform: process.platform,
    arch: process.arch,
  };

  return (
    <div>
      <h3>Server Information</h3>
      <pre>{JSON.stringify(serverInfo, null, 2)}</pre>
      <h3>Files read on the server</h3>
      <ul>
        {files.map((file, index) => (
          <li key={file}>{file} ({contents[index].length} characters)</li>
        ))}
      </ul>
    </div>
  );
}