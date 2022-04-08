import React from 'react';
import c from "./Users.module.css";
import userPhoto from "../../../assets/user.png"
import {UserType} from "../../../redux/types";
import {NavLink} from "react-router-dom";



type UserProps = {
    user: UserType
    isFollowingProgress: (number | boolean)[]
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void

}

export const User: React.FC<UserProps> = (
    {
        user,
        isFollowingProgress,
        followTC,unfollowTC,
    }) => {
    const avatar = user.photos.small !== null ? user.photos.small : userPhoto

    return (
        <div className={c.box}>
            {/*<img src={userPhoto}/>*/}

            <NavLink to={'/profile/' + user.id}>
                <img src={avatar} alt={avatar}/>
            </NavLink>


            <div className={c.name}>{user.name}</div>
            <div>
                {user.followed

                    ? <button disabled={isFollowingProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollowTC(user.id)

                              }}>Unfollow</button>
                    : <button disabled={isFollowingProgress.some(id => id === user.id)}
                              onClick={() => {
                                  followTC(user.id)
                              }}>Follow</button>}

            </div>
            <div className={c.item}>
                <div className={c.message}>{user.status}</div>
            </div>
        </div>)

}