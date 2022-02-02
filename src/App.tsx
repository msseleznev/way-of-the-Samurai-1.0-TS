import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/Navbar/News/News";
import {Music} from "./components/Navbar/Music/Music";
import {Settings} from "./components/Navbar/Settings/Settings";
import {DialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";




const App= () => {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>

                    </Routes>
                </div>
            </div>


    );
}


export default App;
