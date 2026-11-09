import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ReduxTodo = {
  id: string;
  title: string;
};

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (count) => count + 1,
    decrement: (count) => count - 1,
    add: (count, action: PayloadAction<number>) => count + action.payload,
  },
});

const helloSlice = createSlice({
  name: "hello",
  initialState: "Hello from Redux!",
  reducers: {
    updateHello: (_state, action: PayloadAction<string>) => action.payload,
  },
});

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: "redux-1", title: "Create a Redux store" },
    { id: "redux-2", title: "Dispatch an action" },
    { id: "redux-3", title: "Select state" },
  ] as ReduxTodo[],
  reducers: {
    addTodo: (todos, action: PayloadAction<ReduxTodo>) => {
      todos.push(action.payload);
    },
    updateTodo: (todos, action: PayloadAction<ReduxTodo>) => {
      const todo = todos.find((item) => item.id === action.payload.id);
      if (todo) todo.title = action.payload.title;
    },
    deleteTodo: (todos, action: PayloadAction<string>) =>
      todos.filter((todo) => todo.id !== action.payload),
  },
});

export const reduxStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    hello: helloSlice.reducer,
    todos: todosSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const helloActions = helloSlice.actions;
export const todoActions = todosSlice.actions;
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
