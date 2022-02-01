import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css';
import {Posts} from "./Posts/Posts";
import {PostsType} from "../../../redux/store";


type MyPostsPropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
    addPost: () => void
    changeTextPost: (text: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElement = props.posts.map(p => <Posts key={p.id}
                                                   message={p.message}
                                                   likesCount={p.likesCount}
                                                   avatar={p.avatar}
                                                   id={p.id}/>)

    const changeTextPost = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.currentTarget.value
        props.changeTextPost(text)
    }


    return <div className={c.content}>
        <div>
            <h3>My posts </h3>
            <div>
                <input value={props.messageForNewPost}
                       onChange={changeTextPost}/>
                <div>
                    <button onClick={props.addPost}>
                        Add post
                    </button>
                </div>
            </div>
            {postsElement}
        </div>
    </div>;
}