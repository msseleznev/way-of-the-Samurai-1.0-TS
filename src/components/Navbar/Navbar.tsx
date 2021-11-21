import React from 'react';
import c from './Navbar.module.css';
import {Profile} from "../Profile/Profile";


export const Navbar = () => {

    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <div>Profile</div>
            </div>
            <div className={c.item}>
                <div>Messages</div>
            </div>
            <div className={c.item}>
                <div>News</div>
            </div>
            <div className={c.item}>
                <div> Music</div>
            </div>
            <div className={c.item}>
                <div>Settings</div>
            </div>
        </nav>


    )
}



