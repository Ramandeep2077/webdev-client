"use client";

import Link from "next/link";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { useLabStore, type LabTodo } from "./lab-store";
import {
  counterActions,
  helloActions,
  reduxStore,
  todoActions,
  type AppDispatch,
  type RootState,
} from "./redux-store";

const buttonClass = "rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm hover:bg-neutral-100";
const fieldClass = "rounded border border-neutral-300 px-3 py-2";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-6 rounded border border-neutral-200 p-4">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function CounterButtons({ onChange }: { onChange: (change: number) => void }) {
  return (
    <div className="flex gap-2">
      <button type="button" className={buttonClass} onClick={() => onChange(1)}>Up</button>
      <button type="button" className={buttonClass} onClick={() => onChange(-1)}>Down</button>
    </div>
  );
}

function ChildCounter({ count, setCount }: { count: number; setCount: (count: number) => void }) {
  return (
    <div className="rounded border border-dashed border-neutral-300 p-3">
      <p className="mb-2">Child sees count: {count}</p>
      <CounterButtons onChange={(change) => setCount(count + change)} />
    </div>
  );
}

function EditableTodo({
  todo,
  onSave,
  onDelete,
}: {
  todo: LabTodo;
  onSave: (title: string) => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);

  function save() {
    const title = draft.trim();
    if (!title) return;
    onSave(title);
    setEditing(false);
  }

  return (
    <li className="flex flex-wrap items-center gap-2 py-1">
      {editing ? (
        <>
          <input aria-label="Edit todo title" className={fieldClass} value={draft} onChange={(event) => setDraft(event.target.value)} />
          <button type="button" className={buttonClass} onClick={save}>Save</button>
          <button type="button" className={buttonClass} onClick={() => { setDraft(todo.title); setEditing(false); }}>Cancel</button>
        </>
      ) : (
        <>
          <span className="min-w-40 flex-1">{todo.title}</span>
          <button type="button" className={buttonClass} onClick={() => { setDraft(todo.title); setEditing(true); }}>Edit</button>
          <button type="button" className={buttonClass} onClick={onDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

function ZustandTodoList() {
  const todos = useLabStore((state) => state.todos);
  const addTodo = useLabStore((state) => state.addTodo);
  const updateTodo = useLabStore((state) => state.updateTodo);
  const deleteTodo = useLabStore((state) => state.deleteTodo);
  const [title, setTitle] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim()) return;
    addTodo(title.trim());
    setTitle("");
  }

  return (
    <>
      <form onSubmit={submit} className="mb-3 flex flex-wrap gap-2">
        <label className="sr-only" htmlFor="wd-zustand-todo-title">New Zustand todo</label>
        <input id="wd-zustand-todo-title" className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="New todo" />
        <button type="submit" className={buttonClass}>Add</button>
      </form>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <EditableTodo
            key={todo.id}
            todo={todo}
            onSave={(newTitle) => updateTodo(todo.id, newTitle)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </>
  );
}

function ReduxExamples() {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter);
  const hello = useSelector((state: RootState) => state.hello);
  const todos = useSelector((state: RootState) => state.todos);
  const [title, setTitle] = useState("");

  function addTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim()) return;
    dispatch(todoActions.addTodo({ id: crypto.randomUUID(), title: title.trim() }));
    setTitle("");
  }

  return (
    <>
      <Section title="4.6.1 Redux Hello">
        <p className="mb-2">{hello}</p>
        <button type="button" className={buttonClass} onClick={() => dispatch(helloActions.updateHello("Redux state updated!"))}>Update message</button>
      </Section>
      <Section title="4.6.2 Redux Counter">
        <p className="mb-2">Redux count: {count}</p>
        <CounterButtons onChange={(change) => dispatch(change > 0 ? counterActions.increment() : counterActions.decrement())} />
      </Section>
      <Section title="4.6.3 Redux Add">
        <p className="mb-2">Add 5 to the Redux counter: {count + 5}</p>
        <button type="button" className={buttonClass} onClick={() => dispatch(counterActions.add(5))}>Add 5</button>
      </Section>
      <Section title="4.6.4 Redux Todos">
        <form onSubmit={addTodo} className="mb-3 flex flex-wrap gap-2">
          <label className="sr-only" htmlFor="wd-redux-todo-title">New Redux todo</label>
          <input id="wd-redux-todo-title" className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="New todo" />
          <button type="submit" className={buttonClass}>Add</button>
        </form>
        <ul className="list-none p-0">
          {todos.map((todo) => (
            <EditableTodo
              key={todo.id}
              todo={todo}
              onSave={(newTitle) => dispatch(todoActions.updateTodo({ id: todo.id, title: newTitle }))}
              onDelete={() => dispatch(todoActions.deleteTodo(todo.id))}
            />
          ))}
        </ul>
      </Section>
    </>
  );
}

const ContextCounterContext = createContext<{ count: number; change: (value: number) => void } | null>(null);

function ContextCounter() {
  const context = useContext(ContextCounterContext);
  if (!context) throw new Error("ContextCounter requires its provider");

  return (
    <>
      <p className="mb-2">Context count: {context.count}</p>
      <CounterButtons onChange={(change) => context.change(context.count + change)} />
    </>
  );
}

export default function Lab4Client() {
  const [eventMessage, setEventMessage] = useState("Click the button to handle an event.");
  const [localCount, setLocalCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("Hello, React!");
  const [date, setDate] = useState("2026-11-08");
  const [person, setPerson] = useState({ firstName: "Ada", lastName: "Lovelace", city: "London" });
  const [items, setItems] = useState(["Learn React", "Practice state", "Build an app"]);
  const [effectCount, setEffectCount] = useState(0);
  const [contextCount, setContextCount] = useState(0);
  const zustandCount = useLabStore((state) => state.count);
  const incrementZustand = useLabStore((state) => state.increment);
  const decrementZustand = useLabStore((state) => state.decrement);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Lab 4 effect: ${effectCount}`;
    return () => {
      document.title = previousTitle;
    };
  }, [effectCount]);

  return (
    <Provider store={reduxStore}>
      <main id="wd-lab4" className="max-w-4xl p-2">
        <h1 className="mb-5 text-2xl font-semibold">Lab 4: Client State</h1>
        <Section title="4.2.1 Event Handling">
          <p className="mb-2" aria-live="polite">{eventMessage}</p>
          <button type="button" className={buttonClass} onClick={() => setEventMessage("The click handler updated this message.")}>Handle click</button>
        </Section>
        <Section title="4.2.4 useState Counter">
          <h3 className="mb-2 font-medium">Local count: {localCount}</h3>
          <CounterButtons onChange={(change) => setLocalCount((count) => count + change)} />
        </Section>
        <Section title="4.2.4 Parent and Child Components">
          <h3 className="mb-2 font-medium">Parent count: {childCount}</h3>
          <ChildCounter count={childCount} setCount={setChildCount} />
        </Section>
        <Section title="4.2.5 Boolean State">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} />
            Subscribe to course announcements
          </label>
          <p className="my-2">Subscribed: {String(checked)}</p>
          <button type="button" className={buttonClass} onClick={() => setChecked(false)}>Clear checkbox</button>
        </Section>
        <Section title="4.2.6 String State">
          <label className="grid max-w-md gap-1" htmlFor="wd-state-string">Message</label>
          <input id="wd-state-string" className={`${fieldClass} max-w-md`} value={text} onChange={(event) => setText(event.target.value)} />
          <p className="my-2">Input value: {text}</p>
          <button type="button" className={buttonClass} onClick={() => setText("")}>Clear text</button>
        </Section>
        <Section title="4.2.7 Date State">
          <label className="mr-2" htmlFor="wd-state-date">Date</label>
          <input id="wd-state-date" type="date" value={date} onChange={(event) => setDate(event.target.value)} className={fieldClass} />
          <button type="button" className={`${buttonClass} ml-2`} onClick={() => setDate("2026-11-08")}>Reset date</button>
          <p className="mt-2">Selected date: {date}</p>
        </Section>
        <Section title="4.2.8 Object State and City">
          <div className="grid max-w-xl gap-3 sm:grid-cols-3">
            <label className="grid gap-1" htmlFor="wd-person-first">First name<input id="wd-person-first" className={fieldClass} value={person.firstName} onChange={(event) => setPerson({ ...person, firstName: event.target.value })} /></label>
            <label className="grid gap-1" htmlFor="wd-person-last">Last name<input id="wd-person-last" className={fieldClass} value={person.lastName} onChange={(event) => setPerson({ ...person, lastName: event.target.value })} /></label>
            <label className="grid gap-1" htmlFor="wd-person-city">City<input id="wd-person-city" className={fieldClass} value={person.city} onChange={(event) => setPerson({ ...person, city: event.target.value })} /></label>
          </div>
          <pre className="my-3 overflow-x-auto rounded bg-neutral-100 p-3">{JSON.stringify(person, null, 2)}</pre>
          <button type="button" className={buttonClass} onClick={() => setPerson({ firstName: "Ada", lastName: "Lovelace", city: "London" })}>Reset object</button>
        </Section>
        <Section title="4.2.9 Array State">
          <ul className="mb-3 list-disc pl-5">
            {items.map((item, index) => (
              <li key={`${item}-${index}`} className="py-1">
                <span className="mr-3">{item}</span>
                <button type="button" className={buttonClass} onClick={() => setItems((current) => current.filter((_, itemIndex) => itemIndex !== index))}>Delete</button>
              </li>
            ))}
          </ul>
          <button type="button" className={buttonClass} onClick={() => setItems((current) => [...current, `New item ${current.length + 1}`])}>Add item</button>
        </Section>
        <Section title="4.3.3 Query Parameters">
          <p className="mb-2">Pass values in the URL query string:</p>
          <Link className="text-blue-700 underline" href="/labs/lab4/url-encoding/query-params?a=12&b=30">/labs/lab4/url-encoding/query-params?a=12&amp;b=30</Link>
        </Section>
        <Section title="4.3.3 Path Parameters">
          <p className="mb-2">Pass two numbers as path segments:</p>
          <Link className="text-blue-700 underline" href="/labs/lab4/url-encoding/path-params/12/30">/labs/lab4/url-encoding/path-params/12/30</Link>
        </Section>
        <Section title="4.4 useEffect">
          <p className="mb-2">The effect updates the document title. Current dependency value: {effectCount}.</p>
          <button type="button" className={buttonClass} onClick={() => setEffectCount((count) => count + 1)}>Update effect dependency</button>
        </Section>
        <Section title="4.5.1 Zustand Counter">
          <h3 className="mb-2 font-medium">Zustand count: {zustandCount}</h3>
          <CounterButtons onChange={(change) => change > 0 ? incrementZustand() : decrementZustand()} />
        </Section>
        <Section title="4.5.2 Zustand Todo List">
          <h3 className="mb-3 font-medium">Zustand Todos</h3>
          <ZustandTodoList />
        </Section>
        <Section title="4.5.3 Context Counter">
          <ContextCounterContext.Provider value={{ count: contextCount, change: setContextCount }}>
            <ContextCounter />
          </ContextCounterContext.Provider>
        </Section>
        <ReduxExamples />
        <Section title="4.7 Kambaz Shared State">
          <p className="mb-2">The Dashboard and Modules screens use the shared Kambaz Zustand store.</p>
          <button type="button" className={buttonClass} onClick={() => setEventMessage("Kambaz state is shared between its screens.")}>Show shared-state note</button>
        </Section>
      </main>
    </Provider>
  );
}
