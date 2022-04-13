import React from 'react';
import c from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem";
import {Message} from "./Message";
import {DialogsPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type AddMessageFormType = {
    newMessageBody: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsElement = props.dialogs.map(d =>
        <DialogsItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>) // Преобразовываем массив имен dialogsData в массив элементов dialogsElement
    let messagesElement = props.messages.map(m =>
        <Message key={m.id} message={m.message} id={m.id}/>) //Преобразовываем массив сообщений messagesData в массив элементов messagesElement

    const addNewMessage = (values: AddMessageFormType) => {
        props.sendMessage(values.newMessageBody)
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>


            </div>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form className={c.sendMessage} onSubmit={props.handleSubmit}>
            <Field component='input' name={"newMessageBody"} placeholder={"Enter your message"}/>
            <button>Send</button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)



