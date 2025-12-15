import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos: [{
        id:1,
        text:"Hello World",
    }],
    edit:{
        id:null,
        text:null
    }
}

export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.todos.find(todo => todo.id === id)
            if (todo) {
                todo.text = text
            }
            state.edit={
                id:null,
                text:null
            }
        },
        setEdit: (state,action)=>{
            state.edit=action.payload
        }
    }
})

export const {addTodo,removeTodo,updateTodo,setEdit}= todoSlice.actions

export default todoSlice.reducer