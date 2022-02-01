import React from 'react';
import c from './Posts.module.css';
import {PostsType} from "../../../../redux/store";



export const Posts = (props: PostsType) => {

    return (
        <div className={c.box}>
            <div className={c.item}>
                <img src= {props.avatar}/>
                {props.message}
                <span> Like {props.likesCount} </span>
            </div>
        </div>

    )
}
