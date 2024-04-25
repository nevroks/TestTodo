import classes from "./style.module.css";
import {Stack} from "@mui/material";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <Stack className={classes.header__navigation} direction="row" spacing={150}>
                <p>Logo</p>
                <Stack direction="row" spacing={2}>
                    <Link to={'/'}>Ссылка</Link>
                    <Link to={'/'}>Ссылка</Link>
                    <Link to={'/'}>Ссылка</Link>
                </Stack>
            </Stack>
        </header>
    );
};

export default Header;