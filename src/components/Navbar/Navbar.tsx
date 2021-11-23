import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';



export const Navbar = () => {

    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile' className={(navData) => navData.isActive ? c.active : ""}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/dialogs' className={(navData) => navData.isActive ? c.active : ""}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/news' className={(navData) => navData.isActive ? c.active : ""}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/music' className={(navData) => navData.isActive ? c.active : ""}> Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/settings' className={(navData) => navData.isActive ? c.active : ""}>Settings</NavLink>
            </div>
        </nav>


    )
}



