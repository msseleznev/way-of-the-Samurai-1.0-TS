import {ActionType, DialogsPageType, MessagesType} from "./store";
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

let initialState: DialogsPageType = {
    dialogs: [         //хардкодим массив имен пользователей, в будущем этот массив будет подгружаться извне
        {
            id: v1(),
            name: 'Sveta',
            avatar: 'https://www.meme-arsenal.com/memes/91a4d47ddf47ab28e507d7bb72a59b5c.jpg'
        },
        {
            id: v1(),
            name: 'Maks',
            avatar: 'https://www.meme-arsenal.com/memes/0f8248f0809b1231a56fa7a18c24796f.jpg'
        },
        {
            id: v1(),
            name: 'Sanya',
            avatar: 'https://www.meme-arsenal.com/memes/d811974672c0a99a3b356476056bb0b5.jpg'
        },
        {
            id: v1(),
            name: 'Anjelika',
            avatar: 'https://www.meme-arsenal.com/memes/dbf5616c036f8d58fed31427d49e78d2.jpg'
        },
        {
            id: v1(),
            name: 'Kris',
            avatar: 'https://www.meme-arsenal.com/memes/493b6ca2dcfdfce6dcbe906f4c23c6d9.jpg'
        }
    ],
    newMessageBody: '',
    messages: [        //хардкодим массив сообщений, в будущем этот массив будет подгружаться извне
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'What your name?'},
        {id: v1(), message: 'I\'m Nick'}
    ]
}

const dialogsReducer =(state = initialState, action: ActionType): DialogsPageType => {
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