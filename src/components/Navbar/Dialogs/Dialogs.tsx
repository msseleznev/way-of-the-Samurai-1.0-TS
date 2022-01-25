import React, {ChangeEvent, FC} from 'react';
import c from './Dialogs.module.css';

import {ActionType, DialogsPageType} from "../../../redux/state";
import {DialogsItem} from "./DialogsItem";
import {Message} from "./Message";
import {addNewMessageAC, sendNewMessageAC} from "../../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void

}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(d =>
        <DialogsItem name={d.name} id={d.id} avatar={d.avatar}/>) // Преобразовываем массив имен dialogsData в массив элементов dialogsElement
    let messagesElement = props.dialogsPage.messages.map(m =>
        <Message message={m.message} id={m.id}/>) //Преобразовываем массив сообщений messagesData в массив элементов messagesElement

    const addMessage = () => {
        props.dispatch(addNewMessageAC(props.dialogsPage.newMessageBody))
        props.dispatch(sendNewMessageAC(''))

    }
    const changeTextMessage = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(sendNewMessageAC(e.currentTarget.value))
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
                    <input value={props.dialogsPage.newMessageBody} onChange={changeTextMessage}/>
                    <button onClick={addMessage}>Send</button>
                </div>

            </div>
        </div>
    )
}