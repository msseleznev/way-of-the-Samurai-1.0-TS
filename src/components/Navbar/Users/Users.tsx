import React from 'react';
import {UserType} from "../../../redux/types";
import {User} from "./User";

type UsersProps = {
    users: Array<UserType>
    isFollowingProgress: (number | boolean)[]
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export const Users: React.FC<UsersProps> = (
    {
        users,
        isFollowingProgress,
        followTC,
        unfollowTC
    }) => {

    return <div>
        {
            users.map(u => <User user={u}
                                 key={u.id}
                                 isFollowingProgress={isFollowingProgress}
                                 followTC={followTC}
                                 unfollowTC={unfollowTC}


                />
            )
        }
    </div>

}