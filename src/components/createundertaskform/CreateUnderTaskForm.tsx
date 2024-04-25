import {FC, FormEvent, useState} from 'react';
import {Button, Input, Stack} from "@mui/material";
import classes from "./style.module.css";
import {useAppDispatch} from "../../hooks/ReduxHooks.ts";
import { addUnderTask} from "../../store/slices/todosSlice.ts";

type CreateUnderTaskFormPropsType={
    todo:ITodo
}

const CreateUnderTaskForm:FC<CreateUnderTaskFormPropsType> = ({todo}) => {
    const dispatch=useAppDispatch()
    const [newTodo,setNewTodo]=useState({
        title:'',
        description:'',
        underTasks:[]
    })
    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
    }
    const handleClick=()=>{
        dispatch(addUnderTask({task:todo,underTask:newTodo}))
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
            <Button onClick={handleClick}>Создать подзадачу</Button>
        </form>
    );
};

export default CreateUnderTaskForm;