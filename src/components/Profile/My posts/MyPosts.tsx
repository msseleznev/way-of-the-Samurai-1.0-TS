import React from 'react';
import c from './MyPosts.module.css';
import {Posts} from "./Posts/Posts";


export const MyPosts = () => {

    return <div className={c.content}>
        <div>
            <h3>My posts </h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
                <Posts message='Hi' likeCounts={150}/>
                <Posts message='WTF?' likeCounts={200}/>

        </div>
    </div>;
}