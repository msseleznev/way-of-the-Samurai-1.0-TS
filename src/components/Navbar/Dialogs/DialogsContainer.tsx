import {addNewMessageAC} from "../../../redux/dialogs-reducer";
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