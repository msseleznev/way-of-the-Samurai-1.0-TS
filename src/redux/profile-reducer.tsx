import {ActionType, PostsType, ProfilePageType} from "./store";
import {v1} from "uuid";



export const addNewPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
const initialState: ProfilePageType = {

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
        },

    ],
    messageForNewPost: "",
}


const profileReducer =(state = initialState, action: ActionType) => {

    switch (action.type) {
        case 'ADD-POST':
            debugger;
            const newPost: PostsType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
            }

            return  {...state, posts: [...state.posts, newPost]}
        case 'CHANGE-NEW-TEXT':
        return {...state, messageForNewPost: action.newText}

        default:
            return state;
    }
}

export default profileReducer;