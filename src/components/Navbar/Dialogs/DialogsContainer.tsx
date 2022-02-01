import React, {ChangeEvent, FC} from 'react';
import c from './Dialogs.module.css';

import {ActionType, DialogsPageType} from "../../../redux/store";
import {DialogsItem} from "./DialogsItem";
import {Message} from "./Message";
import {addNewMessageAC, sendNewMessageAC} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {ReduxStoreType} from "../../../redux/redux-store";

type DialogsPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    const state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addNewMessageAC(state.dialogsReducer.newMessageBody))
        props.store.dispatch(sendNewMessageAC(''))

    }
    const changeTextMessage = (body: string) => {
        props.store.dispatch(sendNewMessageAC(body))
    }
    return (
       <Dialogs dialogs={state.dialogsReducer.dialogs}
                messages={state.dialogsReducer.messages}
                newMessageBody={state.dialogsReducer.newMessageBody}
                addMessage = {addMessage}
                changeTextMessage ={changeTextMessage}/>
    )
}