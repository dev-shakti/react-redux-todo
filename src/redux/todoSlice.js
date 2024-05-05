import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) || [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        title: action.payload.title,
        completed: false,
      };

      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state));
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
      localStorage.setItem("todos", JSON.stringify(state));
    },

    deleteTodo: (state, action) => {
      const filteredState = state.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.splice(0, state.length, ...filteredState);
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
