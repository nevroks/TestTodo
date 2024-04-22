import React, {FC} from 'react';
import TodoItem from "./TodoItem.tsx";
import {List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";

type TodoListProps={
    todos: Array<ITodo>
}

const TodoList:FC<TodoListProps> = ({todos}) => {
    return (
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        List
                    </ListSubheader>
                }
            >
                {todos.map(todo=>
                    <TodoItem todo={todo}/>
                )}
            </List>
    );
};

export default TodoList;