import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
//export type ReduxStoreType = typeof store

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
