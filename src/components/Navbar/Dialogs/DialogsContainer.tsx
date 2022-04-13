import {addNewMessageAC} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogsType, MessagesType} from "../../../redux/types";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import React from "react";


type MapStatePropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

}
type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,

    }
}
export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType
const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(addNewMessageAC(newMessageBody))
        },
    }

}


export const DialogsContainer = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)