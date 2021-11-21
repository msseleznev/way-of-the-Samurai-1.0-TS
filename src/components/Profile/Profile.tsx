import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./My posts/MyPosts";


export const Profile: React.FC = () => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}



