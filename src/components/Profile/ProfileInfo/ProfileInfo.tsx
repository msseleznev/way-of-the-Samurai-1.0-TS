import React from 'react';
import c from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/types";
import {Preloader} from "../../../preloader/Preloader";
import userPhoto from "../../../assets/user.png";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType

}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (Object.keys(props.profile).length === 0) {
        return <Preloader isFetching={true}/>
    }

    const backgroundImg = 'https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png'
    const profileImg =  props.profile.photos.large !== null ? props.profile.photos.large : userPhoto
    return (
        
        <div className={c.box}>
            <div>
                <img
                    src={backgroundImg} alt={backgroundImg}/>
            </div>

            <div>
                <div className={c.profileInfo}>
                    {/*<img src={props.profile.photos.large}/>*/}
                    <img src={profileImg} alt={profileImg}/>
                    <h3>{props.profile.fullName}</h3>
                    <ProfileStatus />
                </div>
                <div className={c.about}>
                    <div><b>About me:</b> {props.profile.aboutMe}</div>
                    <b>Contacts:</b>
                    <li>{props.profile.contacts.vk}</li>
                    <li>{props.profile.contacts.github}</li>
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.instagram}</li>
                </div>
            </div>


        </div>
    )
}



