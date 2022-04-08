import React from 'react';
import s from './App.module.css';
import {Navigate, Route, Routes,} from "react-router-dom";

import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/Navbar/News/News";
import {Music} from "./components/Navbar/Music/Music";
import {Settings} from "./components/Navbar/Settings/Settings";
import {DialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Navbar/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',



}


const App = () => {
    return (
        <div>
            <HeaderContainer/>
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s.side_bar}>
                        <Navbar/>
                    </div>
                    <div className={s.page_body}>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path='/users/*' element={<UsersContainer/>}/>
                            <Route path='/dialogs/' element={<DialogsContainer/>}/>
                            <Route path='/news/' element={<News/>}/>
                            <Route path='/music/' element={<Music/>}/>
                            <Route path='/settings/' element={<Settings/>}/>
                            <Route path='/login/' element={<Login/>}/>
                        </Routes>
                    </div>

                </div>


            </div>
        </div>



    );
}


export default App;
