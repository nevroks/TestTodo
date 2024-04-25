import TodoItem from "./TodoItem.tsx";
import {Chip, Divider, List, ListSubheader} from "@mui/material";
import {FC} from "react";

type TodoListProps={
    todos: Array<ITodo>
}

const TodoList:FC<TodoListProps> = ({todos}) => {
    return (
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        List
                    </ListSubheader>
                }
            >
                {todos.map(todo=>
                    <TodoItem key={Math.random()} todo={todo}/>
                )}
                <Divider variant="middle" component="div"><Chip label="List End" size="medium" /></Divider>
            </List>
    );
};

export default TodoList;