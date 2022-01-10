import {v1} from "uuid";
import {renderTree} from "../render";

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
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage: {
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
            {id: v1(), name: 'Sveta', avatar: 'https://www.meme-arsenal.com/memes/91a4d47ddf47ab28e507d7bb72a59b5c.jpg'},
            {id: v1(), name: 'Maks', avatar: 'https://www.meme-arsenal.com/memes/0f8248f0809b1231a56fa7a18c24796f.jpg'},
            {id: v1(), name: 'Sanya', avatar: 'https://www.meme-arsenal.com/memes/d811974672c0a99a3b356476056bb0b5.jpg'},
            {
                id: v1(),
                name: 'Anjelika',
                avatar: 'https://www.meme-arsenal.com/memes/dbf5616c036f8d58fed31427d49e78d2.jpg'
            },
            {id: v1(), name: 'Kris', avatar: 'https://www.meme-arsenal.com/memes/493b6ca2dcfdfce6dcbe906f4c23c6d9.jpg'}
        ],
        messages: [        //хардкодим массив сообщений, в будущем этот массив будет подгружаться извне
            {id: v1(), message: 'Hi!'},
            {id: v1(), message: 'What your name?'},
            {id: v1(), message: 'I\'m Nick'}
        ]
    }
}

export const addNewPost = (postText: string) => {
    const newPost: PostsType = {
        id: v1(),
        message: postText,
        likesCount: 0,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
    }
    state.profilePage.posts.push(newPost)
    renderTree(state)
}


export default state;

