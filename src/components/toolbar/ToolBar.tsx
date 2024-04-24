import classes from "./style.module.css";
import {Chip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import {useAppDispatch} from "../../hooks/ReduxHooks.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks.ts";
import {changeTodo, deleteTodo} from "../../store/slices/todosSlice.ts";
const ToolBar = () => {
    const dispatch=useAppDispatch()

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

    return (
        <div className={classes.toolbar}>
            <Chip onClick={handleDelete} icon={<DeleteIcon/>} color="error" />
            <Chip icon={<CreateIcon/>} color="warning" />
            <Chip icon={<NoteIcon/>} color="success" />
        </div>
    );
};

export default ToolBar;