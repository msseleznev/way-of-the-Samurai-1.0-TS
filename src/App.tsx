import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Navbar/Dialogs/Dialogs";
import {News} from "./components/Navbar/News/News";
import {Music} from "./components/Navbar/Music/Music";
import {Settings} from "./components/Navbar/Settings/Settings";
import {RootStateType} from "./redux/state";

type AppPropsType = RootStateType & {addNewPost: (post: string) => void}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile posts = {props.profilePage.posts} />}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogs = {props.dialogsPage.dialogs}
                                                                   messages ={props.dialogsPage.messages}
                        />}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
