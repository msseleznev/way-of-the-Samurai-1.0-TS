import {ActionType, DialogsPageType, MessagesType} from "./state";
import {v1} from "uuid";


export const addNewMessageAC = (messageText: string) => {
    return {
        type: "ADD-MESSAGE",
        messageText: messageText
    } as const
}
export const sendNewMessageAC = (body: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE-BODY",
        body: body
    } as const
}


const dialogsReducer =(state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagesType = {
                id: v1(), message: action.messageText
            }
            state.messages.push(newMessage)
            return state;
        case "CHANGE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        default:
                return state;
    }
}

export default dialogsReducer;