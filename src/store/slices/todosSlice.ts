import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:Array<ITodo> = []

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo:(state,{payload}:PayloadAction<ITodo>)=>{
            state.push(payload)
        },
        addUnderTask:(state,{payload})=>{
            const task=payload.task
            const underTask=payload.underTask
            console.log(task)
            const id=state.indexOf(task)
            console.log(id)
            state[id].underTasks.push(underTask)
        },
        deleteTodo:(state,{payload})=>{
            const id=state.indexOf(payload)
            state.splice(id,1)
        }
    }
})

// Action creators are generated for each case reducer function
export const {addTodo,addUnderTask,deleteTodo} = todosSlice.actions

export default todosSlice.reducer