import React, {useState} from 'react';
import c from './MyPosts.module.css';
import {Posts} from "./Posts/Posts";
import {addNewPost, ProfilePageType} from "../../../redux/state";


export const MyPosts = (props: ProfilePageType) => {
    let postsElement = props.posts.map(p => <Posts message={p.message}
                                                   likesCount={p.likesCount}
                                                   avatar={p.avatar}
                                                   id={p.id}/>)
    /*const [newPOst, setNewPost] = useState("")*/
    const postMessageRef = React.createRef<HTMLInputElement>()

    const addNewPost1 = () => {
        if (postMessageRef.current) {
            // alert(postMessageRef.current.value)
            addNewPost(postMessageRef.current.value)
            postMessageRef.current.value = ""
        }
    }
    return <div className={c.content}>
        <div>
            <h3>My posts </h3>
            <div>
                <input ref={postMessageRef}></input>
                <div>
                    <button onClick={addNewPost1}>Add post</button>
                </div>
            </div>
            {postsElement}
        </div>
    </div>;
}