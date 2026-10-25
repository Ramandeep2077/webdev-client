import { readFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import { arch as nodeArch, platform as nodePlatform } from "node:os";
import { join } from "node:path";

const requiredFiles = [
  "app/labs/lab3/page.tsx",
  "app/labs/lab3/lab3.css",
  "app/labs/lab3/todos.json",
];

export default async function ServerInformation() {
  const directory = join(process.cwd(), "app/labs/lab3");
  const directoryEntries = await readdir(directory);
  const files = requiredFiles
    .map((file) => file.split("/").at(-1) ?? "")
    .filter((file) => directoryEntries.includes(file));
  const contents = await Promise.all(
    [
      readFile(join(directory, "page.tsx"), "utf8"),
      readFile(join(directory, "lab3.css"), "utf8"),
      readFile(join(directory, "todos.json"), "utf8"),
    ],
  );
  const serverInfo = {
    platform: process.platform || nodePlatform(),
    arch: process.arch || nodeArch(),
  };

  return (
    <div>
      <h3>Server Information</h3>
      <pre>{JSON.stringify(serverInfo, null, 2)}</pre>
      <p>Server architecture: {serverInfo.arch}</p>
      <h3>Files read on the server</h3>
      <ul>
        {files.map((file, index) => (
          <li key={file}>{file} ({contents[index].length} characters)</li>
        ))}
      </ul>
    </div>
  );
}