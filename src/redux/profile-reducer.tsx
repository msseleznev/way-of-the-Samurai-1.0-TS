import {ActionType, PostsType, ProfilePageType} from "./store";
import {v1} from "uuid";



export const addNewPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
let initialState: ProfilePageType = {
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
}


const profileReducer =(state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: v1(),
                message: action.postText,
                likesCount: 0,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
            }
            state.posts.push(newPost)
            return state;
        case 'CHANGE-NEW-TEXT':
            state.messageForNewPost = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;