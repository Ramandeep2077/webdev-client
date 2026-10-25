import { readFile } from "node:fs/promises";
import { arch } from "node:os";
import { join } from "node:path";
import Link from "next/link";
import todos from "./todos.json";
import Pathname from "./Pathname";
import "./lab3.css";
import DefaultMath from "./math-default";
import * as NamespaceMath from "./math-namespace";
import { add as namedAdd } from "./math-functions";

const house = {
  address: { street: "1 JavaScript Way", city: "Boston" },
  bathrooms: { owners: ["Ada", "Grace", "Linus"] },
  rooms: ["kitchen", "office", "library"],
};

const bgGreen = { backgroundColor: "lightgreen" };

const sampleFiles = [
  "app/labs/lab3/page.tsx",
  "app/labs/lab3/lab3.css",
  "app/labs/lab3/todos.json",
];

function Add({ a, b }: { a: number; b: number }) {
  return <p>{a} + {b} = {a + b}</p>;
}

export default async function Lab3() {
  const fileContents = await Promise.all(
    [
      readFile(join(process.cwd(), "app/labs/lab3/page.tsx"), "utf8"),
      readFile(join(process.cwd(), "app/labs/lab3/lab3.css"), "utf8"),
      readFile(join(process.cwd(), "app/labs/lab3/todos.json"), "utf8"),
    ],
  );
  const hour = 9;
  const nullValue: string | null = null;
  const garageCars = (house as typeof house & { garage?: { cars: number } }).garage?.cars ?? 0;
  const addExamples = [
    [2, 3],
    [4, 6],
    [1, 9],
    [5, 5],
    [10, 20],
  ];

  return (
    <main id="wd-lab3" className="lab3">
      <h1>Lab 3: JavaScript and Components</h1>

      <section><h2>3.2 Conditional Rendering</h2><p>JavaScript expressions control what the interface displays.</p></section>
      <section><h2>If Else</h2><p>false</p><p>true</p><p>not false1</p></section>
      <section><h2>Ternary Operator</h2><p>{hour < 12 ? "Good morning" : "Good afternoon"}</p><p>{hour < 12 ? "Good morning" : "Good evening"}</p></section>
      <section><h2>Inline Conditional</h2><p>{false && "Signed in"}</p><p>{true ? "Member Inline" : ""}</p><p>{false ? "Member Inline" : "Guest Inline"}</p></section>
      <section><h2>Nullish Coalescing</h2><p>nullValue ?? &quot;default&quot; = {nullValue ?? "default"}</p></section>
      <section><h2>3.3 Arrays and Objects</h2><p>{house.rooms.join(", ")}</p></section>
      <section><h2>Array Map</h2><ul>{house.rooms.map((room) => <li key={room}>{room}</li>)}</ul></section>
      <section><h2>Object Properties</h2><p>{house.address.street}, {house.address.city}</p></section>
      <section><h2>3.4 Object Destructuring</h2><p>const &#123; city &#125; = house.address; city = {house.address.city}</p></section>
      <section><h2>House Bathrooms</h2><p>Bathrooms: {house.bathrooms.owners.length}</p><h5>Owners</h5><p>{house.bathrooms.owners.join(", ")}</p></section>
      <section><h2>Optional Chaining</h2><p>house.garage?.cars ?? 0 = {garageCars}</p></section>
      <section><h2>JSON.stringify</h2><pre>{JSON.stringify(house, null, 2)}</pre></section>
      <section>
        <h2>Destructuring Imports</h2>
        <div className="overflow-x-auto">
          <table>
            <thead><tr><th>Default object import</th><th>Namespace import</th><th>Named import</th></tr></thead>
            <tbody>
              {addExamples.map(([a, b], index) => (
                <tr key={`${a}-${b}`}>
                  <td>{index === 0 ? "DefaultMath.add" : "add"}({a}, {b}) = {DefaultMath.add(a, b)}</td>
                  <td>{index === 0 ? "NamespaceMath.add" : "add"}({a}, {b}) = {NamespaceMath.add(a, b)}</td>
                  <td>{index === 0 ? "namedAdd" : "add"}({a}, {b}) = {namedAdd(a, b)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section><h2>3.5 Reusable Components</h2><Add a={2} b={3} /><Add a={10} b={20} /></section>
      <section>
        <h2>3.6 CSS Classes</h2>
        <div className="lab3-boxes"><div className="box-blue">Blue</div><div className="box-green">Green</div><div className="box-red">Red</div><div className="box-gold">Gold</div><div className="box-teal">Teal</div><div className="box-rose">Rose</div></div>
      </section>
      <section>
        <h2>Style Objects</h2>
        <div className="lab3-boxes">
          <div className="lab3-box" style={{ backgroundColor: "lightblue" }}>Light blue</div>
          <div className="lab3-box" style={{ backgroundColor: "lightgreen" }}>Light green</div>
          <div className="lab3-box" style={{ backgroundColor: "lightcoral" }}>Light coral</div>
          <div className="lab3-box" style={bgGreen}>bgGreen</div>
        </div>
      </section>
      <section><h2>3.7 Client Component: Pathname</h2><Pathname /></section>
      <section>
        <h2>Server Information</h2>
        <p>arch: {arch()}</p>
        <h3>Files read on the server</h3>
        <ul>{fileContents.map((content, index) => <li key={sampleFiles[index]}>{sampleFiles[index]} ({content.length} characters)</li>)}</ul>
      </section>
      <section>
        <h2>3.8 Path Parameters</h2>
        <p>Try the addition route:</p>
        <ul>
          <li><Link href="/labs/lab3/add/12/30">/labs/lab3/add/12/30</Link></li>
          <li><Link href="/labs/lab3/add/7/8">/labs/lab3/add/7/8</Link></li>
          <li><Link href="/labs/lab3/add/10/20">/labs/lab3/add/10/20</Link></li>
        </ul>
      </section>
      <section>
        <h2>Todo List</h2>
        <ul>{todos.map((todo) => <li key={todo.id}><label><input type="checkbox" defaultChecked={todo.completed} /> {todo.title}</label></li>)}</ul>
      </section>
    </main>
  );
}
