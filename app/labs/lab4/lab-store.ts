import { create } from "zustand";

export type LabTodo = {
  id: string;
  title: string;
};

type LabState = {
  count: number;
  todos: LabTodo[];
  increment: () => void;
  decrement: () => void;
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

export const useLabStore = create<LabState>((set) => ({
  count: 0,
  todos: [
    { id: "zustand-1", title: "Learn Zustand" },
    { id: "zustand-2", title: "Share state between components" },
    { id: "zustand-3", title: "Update a todo" },
  ],
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: crypto.randomUUID(), title }],
    })),
  updateTodo: (id, title) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
