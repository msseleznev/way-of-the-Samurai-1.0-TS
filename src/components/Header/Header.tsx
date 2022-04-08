import React from 'react';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType ={
    isAuth: boolean
    login: string | null
}


export const Header: React.FC<HeaderPropsType> = (props) => {

    // @ts-ignore
    return (
        <header className={c.header}>
            <div className={c.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to='/login'>Login</NavLink> }

            </div>
        </header>
    )
}



