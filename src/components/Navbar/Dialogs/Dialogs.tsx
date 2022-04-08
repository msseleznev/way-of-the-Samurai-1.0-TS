import React, {ChangeEvent} from 'react';
import c from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem";
import {Message} from "./Message";
import { DialogsPropsType } from './DialogsContainer';




export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElement = props.dialogs.map(d =>
        <DialogsItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>) // Преобразовываем массив имен dialogsData в массив элементов dialogsElement
    let messagesElement = props.messages.map(m =>
        <Message key={m.id} message={m.message} id={m.id}/>) //Преобразовываем массив сообщений messagesData в массив элементов messagesElement

    const changeTextMessage = (e: ChangeEvent<HTMLInputElement>) => {
        const body = e.currentTarget.value
        //props.changeTextMessage(body)
        props.changeTextMessage(body)
    }

    return (
        < div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                <div>
                    {messagesElement}
                </div>
                <div className={c.sendMessage}>
                    <input value={props.newMessageBody} onChange={changeTextMessage}/>
                    <button onClick={props.addMessage}>Send</button>
                </div>

            </div>
        </div>
    )
}

