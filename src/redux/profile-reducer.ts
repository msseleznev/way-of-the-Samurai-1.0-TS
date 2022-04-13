import {ACTIONS_TYPE, PostType, ReducerType, ProfilePage, UserProfileType, ThunkDispatch} from "./types";
import {v1} from "uuid";
import {profileAPI} from "../api/api";


const initialState: ProfilePage = {

    posts: [            //хардкодим массив постов, в будущем этот массив будет подгружаться извне
        {
            id: v1(),
            message: 'Hi!',
            likesCount: 150,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
        },
    ],
    messageForNewPost: "",
    profile: {} as UserProfileType,
    status: ""

}


export const profileReducer = (state = initialState, action: ReducerType): ProfilePage => {

    switch (action.type) {
        case ACTIONS_TYPE.ADD_NEW_POST:

            const newPost: PostType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'
            }
            return {...state, posts: [...state.posts, newPost]}
        case ACTIONS_TYPE.CHANGE_NEW_TEXT:
            return {...state, messageForNewPost: action.newText}
        case ACTIONS_TYPE.SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case ACTIONS_TYPE.SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}


export const addNewPostAC = () => {
    return {
        type: ACTIONS_TYPE.ADD_NEW_POST,
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: ACTIONS_TYPE.CHANGE_NEW_TEXT,
        newText: newText
    } as const
}

export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: ACTIONS_TYPE.SET_USER_PROFILE,
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: ACTIONS_TYPE.SET_STATUS,
        status
    } as const
}

export const getUserProfileTC = (userId: string | undefined) => {
    return (dispatch: ThunkDispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data as UserProfileType))
            });
    }
}
export const getStatusTC = (userId: string | undefined) => {
    return (dispatch: ThunkDispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            });
    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: ThunkDispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })

    }
}

