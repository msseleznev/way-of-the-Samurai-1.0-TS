import React, {ChangeEvent, FC} from 'react';
import c from './Dialogs.module.css';
import {DialogsType, MessagesType} from "../../../redux/store";
import {DialogsItem} from "./DialogsItem";
import {Message} from "./Message";


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    newMessageBody: string
    messages: Array<MessagesType>
    addMessage: () => void
    changeTextMessage: (body: string) => void


}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElement = props.dialogs.map(d =>
        <DialogsItem name={d.name} id={d.id} avatar={d.avatar}/>) // Преобразовываем массив имен dialogsData в массив элементов dialogsElement
    let messagesElement = props.messages.map(m =>
        <Message message={m.message} id={m.id}/>) //Преобразовываем массив сообщений messagesData в массив элементов messagesElement

    const changeTextMessage = (e: ChangeEvent<HTMLInputElement>) => {
        const body = e.currentTarget.value
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