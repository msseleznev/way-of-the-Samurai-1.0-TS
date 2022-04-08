import React from 'react';
import c from './Posts.module.css';
import {PostType} from "../../../../redux/types";



export const Posts = (props: PostType) => {

    return (
        <div className={c.box}>
            <div className={c.item}>
                <img src= {props.avatar} alt={props.avatar}/>
                {props.message}
                <span> Like {props.likesCount} </span>
            </div>
        </div>

    )
}
