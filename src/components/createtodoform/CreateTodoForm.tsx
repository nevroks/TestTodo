import React, {useState} from 'react';
import {Button, Input, Stack} from "@mui/material";
import classes from "./style.module.css";
import {useAppDispatch} from "../../hooks/ReduxHooks.ts";
import {addTodo} from "../../store/slices/todosSlice.ts";

const CreateTodoForm = () => {
    const dispatch=useAppDispatch()
    const [newTodo,setNewTodo]=useState({
        title:'',
        description:'',
        underTasks:[]
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const handleClick=()=>{
        dispatch(addTodo(newTodo))
    }
    return (
        <form className={classes.create__form} onSubmit={handleSubmit}>
            <p>Форма создания новой задачи</p>
            <Stack spacing={2} direction="row">
                <Input
                    value={newTodo.title}
                    onChange={(e)=>setNewTodo({...newTodo,title:e.target.value})}
                    aria-label="Demo input"
                    placeholder="Заголовок" />
                <Input
                    value={newTodo.description}
                    onChange={(e)=>setNewTodo({...newTodo,description:e.target.value})}
                    aria-label="Demo input"
                    placeholder="Описание" />
            </Stack>
            <Button onClick={handleClick}>Создать</Button>
        </form>
    );
};

export default CreateTodoForm;