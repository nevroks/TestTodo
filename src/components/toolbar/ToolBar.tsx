import classes from "./style.module.css";
import {Chip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import {useAppDispatch} from "../../hooks/ReduxHooks.ts";
const ToolBar = () => {
    const dispatch=useAppDispatch()

    const handleDelete=()=>{

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