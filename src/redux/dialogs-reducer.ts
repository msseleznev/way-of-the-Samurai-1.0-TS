import {ACTIONS_TYPE, DialogsPageType, MessagesType, ReducerType} from "./types";
import {v1} from "uuid";


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
    messages: [        //хардкодим массив сообщений, в будущем этот массив будет подгружаться извне
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'What your name?'},
        {id: v1(), message: 'I\'m Nick'}
    ]
}

export const dialogsReducer = (state = initialState, action: ReducerType): DialogsPageType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_NEW_MESSAGE: {
            const newMessage: MessagesType = {
                id: v1(), message: action.newMessageBody
            }
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state;
    }
}

export const addNewMessageAC = (newMessageBody: string) => {
    return {
        type: ACTIONS_TYPE.ADD_NEW_MESSAGE,
        newMessageBody,
    }
}
