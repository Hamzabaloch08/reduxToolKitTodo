import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "BreakFast"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        },
        clearAllTodo: (state) => {
            state.todos = [];
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if (existingTodo) {
                existingTodo.text = newText;
            }
        }
    }
})

export const { addTodo, removeTodo, clearAllTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer