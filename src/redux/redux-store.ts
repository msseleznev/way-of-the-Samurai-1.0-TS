import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer
})
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
//export type ReduxStoreType = typeof store

export let store = createStore(rootReducer)
