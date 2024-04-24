import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {findObjectInsideTree} from "../../utils/tree/findObjectInsideTree.ts";
import {deleteObjectFromTree} from "../../utils/tree/deleteObjectFromTree.ts";


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
        deleteTodo:(state,{payload}:PayloadAction<ITodo>)=>{
            deleteObjectFromTree(state,payload)
        },
        changeTodo:(state,{payload})=>{
            const todo=payload.todo
            const newData=payload.newData
            const linkToObject=findObjectInsideTree(state,todo)

            if (linkToObject){
                linkToObject.title=newData.title
                linkToObject.description=newData.description
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const {addTodo,addUnderTask,deleteTodo,changeTodo} = todosSlice.actions

export default todosSlice.reducer