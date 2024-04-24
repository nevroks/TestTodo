import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {
    Button,
    Checkbox,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from "@mui/material";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PopUp from "../popup/PopUp.tsx";
import CreateUnderTaskForm from "../createundertaskform/CreateUnderTaskForm.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks.ts";
import {addSelectedTodo, deleteSelectedTodo} from "../../store/slices/selectedTodosSlice.ts";
import TodoList from "./TodoList.tsx";

type TodoItemProps={
    todo:ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const [open,setOpen]=useState(false)
    const [isPopUpShown,setIsPopUpShown]=useState(false)
    const selectedArr=useAppSelector(state => state.selectedTodos)

    const dispatch=useAppDispatch()
    const handleClick=()=>{
        setOpen(prevState => !prevState)
    }
    const handleCreate=()=>{
        setIsPopUpShown(true)
    }
    const isTodoSelected=useMemo(()=>{
        return selectedArr.includes(todo)
    },[selectedArr])
    const handleCheckBox=()=>{
        if (!isTodoSelected){
            dispatch(addSelectedTodo(todo))
        }else{
            dispatch(deleteSelectedTodo(todo))
        }
    }
    return (
        <div>
            {isPopUpShown && <PopUp setterFunc={setIsPopUpShown}>
                <CreateUnderTaskForm todo={todo}/>
            </PopUp>}
            <ListItemButton onClick={handleClick}>
                <Checkbox checked={isTodoSelected} onChange={handleCheckBox} onClick={e=>e.stopPropagation()}/>
                <ListItemText primary={todo.title} />
                <ListItemText secondary={todo.description} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Button onClick={handleCreate}>Создать подзадачу</Button>
                {todo.underTasks.length>0 &&
                    <TodoList todos={todo.underTasks}/>}
            </Collapse>
        </div>
    );
};

export default TodoItem;