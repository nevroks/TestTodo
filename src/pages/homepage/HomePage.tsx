import classes from "./style.module.css";
import {useAppSelector} from "../../hooks/ReduxHooks.ts";
import {useState} from "react";
import TodoList from "../../components/todo/TodoList.tsx";
import PopUp from "../../components/popup/PopUp.tsx";
import {Button} from "@mui/material";
import CreateTodoForm from "../../components/createtodoform/CreateTodoForm.tsx";
import ToolBar from "../../components/toolbar/ToolBar.tsx";

const HomePage = () => {

    const todosList=useAppSelector(state => state.todos)
    const [isCreateFormShowed,setSIsCreateFormShowed]=useState(false)

    function handleCreate() {
        setSIsCreateFormShowed(true)
    }

    return (
        <div className={classes.page__content}>
            <div className={classes.home_navigation}>
                <Button onClick={handleCreate}>Добавить новую задачу</Button>
            </div>
            <br/>
            <TodoList todos={todosList}/>
            {isCreateFormShowed && <PopUp setterFunc={setSIsCreateFormShowed}>
                <CreateTodoForm/>
            </PopUp>}
            <ToolBar/>
        </div>
    );
};

export default HomePage;