// Dialogs Page
import {Dispatch} from "redux";

export type DialogsType = {
    id: string
    name: string
    avatar: string
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

//Profile User
type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

export type ProfilePhotosType = {
    small: string
    large: string
}
export type UserProfileType = {
    contacts: ContactsType
    photos: ProfilePhotosType
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
}

//Posts User
export type PostType = {
    id: string
    message: string
    likesCount: number
    avatar: string
}
export type ProfilePage = {
    messageForNewPost: string
    posts: Array<PostType>
    profile: UserProfileType

}

// Profile Page

// export type ProfilePage = {
//     userProfile: UserProfileType[]
//     userPosts: UserPostsType
// }

//Users page
export type PhotosType = {
    small: null
    large: null
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: PhotosType
    status: null
    followed: boolean

}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingProgress: (number | boolean)[]
}
export type AuthPageType = {
    userId: null | number
    email: null | string
    login: null | string
    isFetching: boolean
    isAuth: boolean
}

//AC
export enum ACTIONS_TYPE {
    //Users
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS",

    //ProfilePage
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    ADD_NEW_POST = 'ADD_NEW_POST',
    CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT',
    //DialogsPage
    ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE',
    SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE',
    //Auth
    SET_USER_DATA = "SET_USER_DATA",
}

//Auth AC
export type AuthDataType = {
    userId: null | number
    email: null | string
    login: null | string
}
type  SetAuthUserData = {
    type: ACTIONS_TYPE.SET_USER_DATA
    data: AuthDataType
}


// ProfilePage AC
type AddNewPostType = {
    type: ACTIONS_TYPE.ADD_NEW_POST
}
type ChangeNewTextType = {
    type: ACTIONS_TYPE.CHANGE_NEW_TEXT
    newText: string
}
type SetUserProfile = {
    type: ACTIONS_TYPE.SET_USER_PROFILE
    profile: UserProfileType
}

// DialogsPage AC
type AddNewMessageType = {
    type: ACTIONS_TYPE.ADD_NEW_MESSAGE
}
type SendNewMessageType = {
    type: ACTIONS_TYPE.SEND_NEW_MESSAGE
    body: string
}
// UsersPage AC
type FollowType = {
    type: ACTIONS_TYPE.FOLLOW
    userId: number
}
type UnfollowType = {
    type: ACTIONS_TYPE.UNFOLLOW
    userId: number
}
type SetUsersType = {
    type: ACTIONS_TYPE.SET_USERS
    users: UserType[]
}
type SetCurrentPageType = {
    type: ACTIONS_TYPE.SET_CURRENT_PAGE
    currentPage: number
}
type SetUsersTotalCountType = {
    type: ACTIONS_TYPE.SET_USERS_TOTAL_COUNT
    totalCount: number
}
type ToggleIsFetchingType = {
    type: ACTIONS_TYPE.TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleIsFollowingProgressType = {
    type: ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS
    userId: number
    isFetching: boolean
}


// Reducers
export type ReducerType = AddNewPostType
    | ChangeNewTextType
    | AddNewMessageType
    | SendNewMessageType
    | FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetUsersTotalCountType
    | ToggleIsFetchingType
    | SetUserProfile
    | SetAuthUserData
    | ToggleIsFollowingProgressType

export type ThunkDispatch = Dispatch<ReducerType>


/*export type ActionType =
    ReturnType<typeof addNewPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof addNewMessageAC> |
    ReturnType<typeof sendNewMessageAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC>|
    ReturnType<typeof setUsersAC>*/
/*const store: StoreType = {
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
   /!*changeNewText(newText: string) {
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
   },*!/
   /!* dispatch(action) {
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
        }*!/
   dispatch(action) {
       this._state.profilePage =  profileReducer(this._state.profilePage, action)
       this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action)
       this._rerender();
     /!*  switch (action.type) {
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
       }*!/
   }
}
*/



