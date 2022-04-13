import React from 'react';
import c from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/types";
import {Preloader} from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/user.png";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void

}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = (
    {
        profile,
        status,
        updateStatus
    }) => {
    if (Object.keys(profile).length === 0) {
        return <Preloader isFetching={true}/>
    }

    const backgroundImg = 'https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png'
    const profileImg = profile.photos.large !== null ? profile.photos.large : userPhoto
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
                    <h3>{profile.fullName}</h3>
                    <ProfileStatus status={status}
                                   updateStatus={updateStatus}/>
                </div>
                <div className={c.about}>
                    <div><b>About me:</b> {profile.aboutMe}</div>
                    <b>Contacts:</b>
                    <li>{profile.contacts.vk}</li>
                    <li>{profile.contacts.github}</li>
                    <li>{profile.contacts.facebook}</li>
                    <li>{profile.contacts.instagram}</li>
                </div>
            </div>


        </div>
    )
}



