import React from 'react';
import c from './MyPosts.module.css';
import {Posts} from "./Posts/Posts";
import {PostsType, ProfilePageType} from "../../../redux/state";


export const MyPosts = (props: ProfilePageType) => {
    let postsElement = props.posts.map(p => <Posts message={p.message}
                                                   likesCount={p.likesCount}
                                                   avatar={p.avatar}
                                                   id={p.id}/>)
    return <div className={c.content}>
        <div>
            <h3>My posts </h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postsElement}
        </div>
    </div>;
}