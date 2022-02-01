import React from 'react';
import {addNewPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    store: ReduxStoreType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    const state = props.store.getState()
    const addPost = () => {


        props.store.dispatch(addNewPostAC(state.profileReducer.messageForNewPost))
        props.store.dispatch(changeNewTextAC(''))
    }

    const changeTextPost = (text: string) => {
        props.store.dispatch(changeNewTextAC(text))
    }

    return (
        <MyPosts posts={state.profileReducer.posts}
                 messageForNewPost={state.profileReducer.messageForNewPost}
                 addPost={addPost}
                 changeTextPost={changeTextPost}/>
    )

}