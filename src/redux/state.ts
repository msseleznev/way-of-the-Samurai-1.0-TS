type PostsType = {
    id: number
    message: string
    likesCount: number
    avatar: string
}
type DialogsType = {
    id: number
    name: string
    avatar: string
}
type MessagesType = {
    id: number
    message: string
}
type ProfilePageType = {
    posts: Array<PostsType>
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [            //хардкодим массив постов, в будущем этот массив будет подгружаться извне
            {
                id: 1,
                message: 'Hi!',
                likesCount: 150,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
            },
            {
                id: 2,
                message: 'I\'m from Russia',
                likesCount: 35,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
            },
            {
                id: 3,
                message: "I'm Russian",
                likesCount: 235,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
            }
        ]
    },
    dialogsPage: {
        dialogs: [         //хардкодим массив имен пользователей, в будущем этот массив будет подгружаться извне
            {id: 1, name: 'Sveta', avatar: 'https://www.meme-arsenal.com/memes/91a4d47ddf47ab28e507d7bb72a59b5c.jpg'},
            {id: 2, name: 'Maks', avatar: 'https://www.meme-arsenal.com/memes/0f8248f0809b1231a56fa7a18c24796f.jpg'},
            {id: 3, name: 'Sanya', avatar: 'https://www.meme-arsenal.com/memes/d811974672c0a99a3b356476056bb0b5.jpg'},
            {
                id: 4,
                name: 'Anjelika',
                avatar: 'https://www.meme-arsenal.com/memes/dbf5616c036f8d58fed31427d49e78d2.jpg'
            },
            {id: 5, name: 'Kris', avatar: 'https://www.meme-arsenal.com/memes/493b6ca2dcfdfce6dcbe906f4c23c6d9.jpg'}
        ],
        messages: [        //хардкодим массив сообщений, в будущем этот массив будет подгружаться извне
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'What your name?'},
            {id: 3, message: 'I\'m Nick'}
        ]
    }
}


export default state;

