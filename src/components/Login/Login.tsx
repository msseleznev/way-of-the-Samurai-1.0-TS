import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";

const Login = () => {



    const isAuth = useSelector<AppStateType>(state =>  state.auth.isAuth)
    if (isAuth) return <Navigate to = '/profile'/>
    return (
        <div>
            LOGIN
        </div>
    );
};

export default Login;