import {addNewMessageAC, sendNewMessageAC} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogsType, MessagesType} from "../../../redux/types";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import React from "react";


/*export const DialogsContainer = () => {

    return <StoreContext.Consumer>
            {(store: ReduxStoreType) => {
                const state = store.getState()
                const addMessage = () => {
                    store.dispatch(addNewMessageAC(state.dialogsReducer.newMessageBody))
                    store.dispatch(sendNewMessageAC(''))

                }
                const changeTextMessage = (body: string) => {
                    store.dispatch(sendNewMessageAC(body))
                }

                return <Dialogs dialogs={state.dialogsReducer.dialogs}
                                messages={state.dialogsReducer.messages}
                                newMessageBody={state.dialogsReducer.newMessageBody}
                                addMessage={addMessage}
                                changeTextMessage={changeTextMessage}/>
            }}

        </StoreContext.Consumer>


}*/

type MapStatePropsType = {
    dialogs: Array<DialogsType>
    newMessageBody: string
    messages: Array<MessagesType>

}
type MapDispatchPropsType = {
    addMessage: () => void
    changeTextMessage: (body: string) => void
}


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,


    }
}
export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType
const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        addMessage: () => {
            dispatch(addNewMessageAC())
            dispatch(sendNewMessageAC(""))

        },
        changeTextMessage: (body: string) => {
            dispatch(sendNewMessageAC(body))
        }
    }

}


export const DialogsContainer = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)