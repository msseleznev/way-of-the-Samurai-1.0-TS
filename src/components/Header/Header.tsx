import React from 'react';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logoutTC: () => void
}


export const Header: React.FC<HeaderPropsType> = (props) => {

    // @ts-ignore
    return (
        <header className={c.header}>
            <div className={c.loginBlock}>
                {props.isAuth
                    ? <div> {props.login}
                        <button onClick={props.logoutTC}>log out</button>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>}

            </div>
        </header>
    )
}



