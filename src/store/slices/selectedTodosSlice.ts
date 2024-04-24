import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:Array<ITodo> = []

export const selectedTodosSlice = createSlice({
    name: 'selectedTodos',
    initialState,
    reducers: {
        addSelectedTodo:(state,{payload}:PayloadAction<ITodo>)=>{
            state.push(payload)
        },
        deleteSelectedTodo:(state,{payload}:PayloadAction<ITodo>)=>{
            const id=state.indexOf(payload)

            state.splice(id,1)
        },
        refreshSelectedTodo:(state)=>{
            state.splice(0,state.length)
        }
    }
})

// Action creators are generated for each case reducer function
export const {addSelectedTodo,deleteSelectedTodo,refreshSelectedTodo} = selectedTodosSlice.actions

export default selectedTodosSlice.reducer