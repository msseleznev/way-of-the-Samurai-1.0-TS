import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css';
import {Posts} from "./Posts/Posts";
import {ActionType, PostsType} from "../../../redux/state";
import {addNewPostAC, changeNewTextAC} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
    dispatch: (action: ActionType) => void

}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElement = props.posts.map(p => <Posts key={p.id}
                                                   message={p.message}
                                                   likesCount={p.likesCount}
                                                   avatar={p.avatar}
                                                   id={p.id}/>)


    const addPost = () => {

        //props.addNewPostCallback(props.messageFotNewPost)
        //props.changeNewTextCallback('')
        //props.dispatch({type: "ADD-POST", postText: props.messageFotNewPost})
        //props.dispatch({type: "CHANGE-NEW-TEXT", newText: ''})
        props.dispatch(addNewPostAC(props.messageForNewPost))
        props.dispatch(changeNewTextAC(''))
    }

    const changeTextPost = (e: ChangeEvent<HTMLInputElement>) => {

        //props.changeNewTextCallback(e.currentTarget.value)
        //props.dispatch({type: "CHANGE-NEW-TEXT", newText: e.currentTarget.value})
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }

    return <div className={c.content}>
        <div>
            <h3>My posts </h3>
            <div>
                <input value={props.messageForNewPost} onChange={changeTextPost}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElement}
        </div>
    </div>;
}