import React from 'react';
import c from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div >
            <div className={c.content}>
                <img src='https://feweek.co.uk/wp-content/uploads/2020/11/rocket-projection-space-feat-1280x720.jpg' />
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}



