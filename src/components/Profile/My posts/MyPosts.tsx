import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css';
import {Posts} from "./Posts/Posts";
import  {addNewPost, changeNewTest, ProfilePageType} from "../../../redux/state";



export const MyPosts = (props: ProfilePageType) => {
    let postsElement = props.posts.map(p => <Posts key={p.id}
                                                   message={p.message}
                                                   likesCount={p.likesCount}
                                                   avatar={p.avatar}
                                                   id={p.id}/>)



    const addPost = () => {
        addNewPost(props.messageFotNewPost)
        changeNewTest('')

    }

    const changeTextPost = (e: ChangeEvent<HTMLInputElement>) => {
        changeNewTest(e.currentTarget.value)
    }

    return <div className={c.content}>
        <div>
            <h3>My posts </h3>
            <div>
                <input value={props.messageFotNewPost} onChange={changeTextPost}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElement}
        </div>
    </div>;
}