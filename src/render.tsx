import {RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addNewPost} from './redux/state'

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App dialogsPage={state.dialogsPage} profilePage={state.profilePage} addNewPost={addNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};