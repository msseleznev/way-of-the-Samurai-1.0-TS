import {v1} from "uuid";
import profileReducer, {addNewPostAC, changeNewTextAC} from "./profile-reducer";
import dialogsReducer, {addNewMessageAC, sendNewMessageAC} from "./dialogs-reducer";

export type PostsType = {
    id: string
    message: string
    likesCount: number
    avatar: string
}
export type DialogsType = {
    id: string
    name: string
    avatar: string
}
export type MessagesType = {
    id: string
    message: string
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    /*changeNewText: (newText: string) => void
    addNewPost: (newPost: string) => void*/
    _rerender: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}
export type ActionType =
    ReturnType<typeof addNewPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof addNewMessageAC> |
    ReturnType<typeof sendNewMessageAC>

 const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [            //хардкодим массив постов, в будущем этот массив будет подгружаться извне
                {
                    id: v1(),
                    message: 'Hi!',
                    likesCount: 150,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
                },
                {
                    id: v1(),
                    message: 'I\'m from Russia',
                    likesCount: 35,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
                },
                {
                    id: v1(),
                    message: "I'm Russian",
                    likesCount: 235,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
                }
            ]
        },
        dialogsPage: {
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
    },
    _rerender() {

    },
    subscribe(callback) {
        this._rerender = callback;
    },
    getState() {
        return this._state
    },
    /*changeNewText(newText: string) {
        this._state.profilePage.messageFotNewPost = newText;
        this._rerender();
    },
    addNewPost(postText: string) {
        const newPost: PostsType = {
            id: v1(),
            message: postText,
            likesCount: 0,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
        }
        this._state.profilePage.posts.push(newPost)
        this._rerender()
    },*/
    /* dispatch(action) {
         if (action.type === 'ADD-POST') {
             const newPost: PostsType = {
                 id: v1(),
                 message: action.postText,
                 likesCount: 0,
                 avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
             }
             this._state.profilePage.posts.push(newPost)
             this._rerender()
         } else if (action.type === 'CHANGE-NEW-TEXT') {
             this._state.profilePage.messageFotNewPost = action.newText;
             this._rerender();
         }*/
    dispatch(action) {
        this._state.profilePage =  profileReducer(this._state.profilePage, action)
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action)
        this._rerender();
      /*  switch (action.type) {
            case 'ADD-POST':
                const newPost: PostsType = {
                    id: v1(),
                    message: action.postText,
                    likesCount: 0,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
                }
                this._state.profilePage.posts.push(newPost)
                this._rerender()
                break;
            case 'CHANGE-NEW-TEXT':
                this._state.profilePage.messageForNewPost = action.newText;
                this._rerender();
                break;
            case "ADD-MESSAGE":
                const newMessage: MessagesType = {
                    id: v1(), message: action.messageText
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._rerender()
                break;
            case "CHANGE-NEW-MESSAGE-BODY":
                this._state.dialogsPage.newMessageBody = action.body;
                this._rerender();
                break;
        }*/
    }
}




