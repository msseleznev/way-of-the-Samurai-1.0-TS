import React from 'react';
import c from './Posts.module.css';


type propsMyPosts = {
    message: string
    likeCounts: number
}
export const Posts: React.FC<propsMyPosts> = (props) => {

    return (
        <div className={c.box}>
            <div className={c.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9s5YmZqV-QmXoSiq9kAjpwfTUkaZPUZfBg&usqp=CAU'/>
                {props.message}
                <span> Like {props.likeCounts} </span>
            </div>
        </div>

    )
}
