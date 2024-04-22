import React, {Dispatch, FC, ReactNode, SetStateAction} from 'react';
import classes from "./style.module.css";

type PopUpProps={
    setterFunc:Dispatch<SetStateAction<boolean>>,
    children:ReactNode
}

const PopUp:FC<PopUpProps> = ({setterFunc,children}) => {
    const handleClose=()=>{
        setterFunc(false)
    }
    return (
        <div onClick={handleClose} className={classes.popUp__wrapper}>
            <div onClick={(e)=>e.stopPropagation()} className={classes.popUp__content}>
                {children}
            </div>
        </div>
    );
};

export default PopUp;