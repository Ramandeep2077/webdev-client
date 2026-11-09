"use client";

import { useState, type ReactNode } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import GreenCheckmark from "./GreenCheckmark";

export default function Module({
  title,
  onRename,
  onDelete,
  children,
}: {
  title: string;
  onRename: (title: string) => void;
  onDelete: () => void;
  children?: ReactNode;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(title);

  function save() {
    const name = draft.trim();
    if (!name) return;
    onRename(name);
    setEditing(false);
  }

  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex flex-wrap items-center justify-between gap-2 bg-neutral-200 p-3 ps-2">
        {editing ? (
          <div className="flex flex-1 items-center gap-2">
            <label className="sr-only" htmlFor={`wd-module-name-${title}`}>Module name</label>
            <input id={`wd-module-name-${title}`} autoFocus value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => {
              if (event.key === "Enter") save();
              if (event.key === "Escape") setEditing(false);
            }} className="min-w-0 flex-1 rounded border border-neutral-300 bg-white px-2 py-1 text-base" />
            <button type="button" onClick={save} className="rounded border border-neutral-300 bg-white px-2 py-1 text-sm">Save</button>
            <button type="button" onClick={() => { setDraft(title); setEditing(false); }} className="rounded border border-neutral-300 bg-white px-2 py-1 text-sm">Cancel</button>
          </div>
        ) : (
          <span>{title}</span>
        )}
        <div className="flex items-center gap-2">
          <GreenCheckmark />
          <button type="button" aria-label={`Edit module ${title}`} title="Edit module" onClick={() => { setDraft(title); setEditing(true); }} className="rounded p-1 text-neutral-700 hover:bg-neutral-300">
            <FiEdit2 aria-hidden="true" />
          </button>
          <button type="button" aria-label={`Delete module ${title}`} title="Delete module" onClick={onDelete} className="rounded p-1 text-red-700 hover:bg-red-100">
            <FiTrash2 aria-hidden="true" />
          </button>
        </div>
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
