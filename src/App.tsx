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
import {StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
 const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile profilePage={state.profilePage}
                                                                   dispatch ={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                                                   messages={state.dialogsPage.messages}
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
