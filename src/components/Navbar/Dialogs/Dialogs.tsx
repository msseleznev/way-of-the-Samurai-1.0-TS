import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsPageType, DialogsType, MessagesType} from "../../../redux/state";


const DialogsItem = (props: DialogsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={c.dialog}>
            <img src={props.avatar}/>
            <NavLink to={path} className={(d) => d.isActive ? c.active : ""}>{props.name} </NavLink>
        </div>

    )
}
const Message = (props: MessagesType) => {
    return (
        <div>
            {props.message}
        </div>
    )
}
export const Dialogs = (props: DialogsPageType) => {
    let dialogsElement = props.dialogs.map(d =>
        <DialogsItem name={d.name} id={d.id} avatar={d.avatar}/>) // Преобразовываем массив имен dialogsData в массив элементов dialogsElement
    let messagesElement = props.messages.map(m =>
        <Message message={m.message} id={m.id}/>) //Преобразовываем массив сообщений messagesData в массив элементов messagesElement

    return (
        < div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
        </div>
    )
}