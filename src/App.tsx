import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter} from "react-router-dom";
import {Dialogs} from "./components/Navbar/Dialogs/Dialogs";
import state from "./redux/state";


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className = 'content'>
                    <Profile/>
                    <Dialogs/>
                </div>

            </div>
        </BrowserRouter>

    );
}


export default App;
