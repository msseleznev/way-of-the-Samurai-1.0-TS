import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogsItemPropsType = {
    name: string
    id: string
    avatar: string
}


export const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={c.dialog}>
            <img src={props.avatar}/>
            <NavLink to={path} className={(d) => d.isActive ? c.active : ""}>{props.name} </NavLink>
        </div>

    )
}
