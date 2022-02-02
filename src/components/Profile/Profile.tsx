import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";






export const Profile= () => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}



