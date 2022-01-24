import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./My posts/MyPosts";
import {ActionType, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts messageForNewPost={props.profilePage.messageForNewPost}
                     posts={props.profilePage.posts} dispatch={props.dispatch}
            />
        </div>
    )
}



