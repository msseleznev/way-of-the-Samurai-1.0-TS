import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {UserProfileType} from "../../redux/types";


type ProfilePropsType = {
    profile: UserProfileType
}


export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}



