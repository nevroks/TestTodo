import classes from "./style.module.css";
import {Button, Chip, Input, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks.ts";
import {changeTodo, deleteTodo} from "../../store/slices/todosSlice.ts";
import {refreshSelectedTodo} from "../../store/slices/selectedTodosSlice.ts";
import {useState} from "react";
import PopUp from "../popup/PopUp.tsx";
const ToolBar = () => {
    const [isTodoChanging,setIsTodoChanging]=useState(false)
    const [newTodo,setNewTodo]=useState({
        title:'',
        description:''
    })
    const dispatch=useAppDispatch()
    const todos=useAppSelector(state => state.selectedTodos)
    const handleDelete=()=>{
        for (let todo of todos){
            dispatch(deleteTodo(todo))
        }
        dispatch(refreshSelectedTodo())
    }

    const handleChange=()=>{
        console.log(todos)
        if (todos.length>1){
            alert("Редактирование нескольких задач одновременно недоступно")
            return
        }
        if (todos.length<1){
            return
        }
        setIsTodoChanging(true)

    }

    const handleApply=()=>{
        dispatch(changeTodo({todo:todos[0],newData:newTodo}))
        dispatch(refreshSelectedTodo())
        setNewTodo({
            title:'',
            description:''
        })
        setIsTodoChanging(false)
    }
    return (
        <div className={classes.toolbar}>
            {isTodoChanging && <PopUp setterFunc={setIsTodoChanging}>
                <div>
                    <p>Изменить</p>
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
                    <Button onClick={handleApply}>Применить</Button>
                </div>
            </PopUp>}
            <Chip onClick={handleDelete} icon={<DeleteIcon/>} color="error" />
            <Chip onClick={handleChange} icon={<CreateIcon/>} color="warning" />
        </div>
    );
};

export default ToolBar;