import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";


type ProfilePropsType = {
    store: ReduxStoreType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}



