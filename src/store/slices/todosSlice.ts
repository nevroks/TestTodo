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
            const linkToObject=findObjectInsideTree(state,task)

            linkToObject.underTasks.push(underTask)
        },
        deleteTodo:(state,{payload})=>{
            const id=state.indexOf(payload)
            state.splice(id,1)
        deleteTodo:(state,{payload}:PayloadAction<ITodo>)=>{
            deleteObjectFromTree(state,payload)
        },
        }
    }
})

// Action creators are generated for each case reducer function
export const {addTodo,addUnderTask,deleteTodo} = todosSlice.actions

export default todosSlice.reducer