import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {UserProfileType} from "../../redux/types";


type ProfilePropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}


export const Profile: React.FC<ProfilePropsType> = (
    {
        profile,
        status,
        updateStatus,
    }) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profile={profile}
                         updateStatus={updateStatus}
                         status={status}/>
            <MyPostsContainer/>
        </div>
    )
}



