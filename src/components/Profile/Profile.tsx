import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./My posts/MyPosts";
import {ProfilePageType} from "../../redux/state";


export const Profile = (props: ProfilePageType) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}



