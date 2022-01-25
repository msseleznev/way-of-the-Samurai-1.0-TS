import {ActionType, PostsType, ProfilePageType} from "./state";
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



const profileReducer =(state: ProfilePageType, action: ActionType) => {
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