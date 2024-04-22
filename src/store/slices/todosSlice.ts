import {createSlice} from "@reduxjs/toolkit";

const initialState = []

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo:(state,{payload})=>{
            state.push(payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const {addTodo} = todosSlice.actions

export default todosSlice.reducer