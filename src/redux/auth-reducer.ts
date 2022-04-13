import {ACTIONS_TYPE, AuthPageType, ReducerType, ThunkDispatch} from "./types";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

const initialState: AuthPageType = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action: ReducerType): AuthPageType => {

    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth,
        }
    } as const
}

export const authUserTC = () => {
    return (dispatch: ThunkDispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {login, email, id} = data.data
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authUserTC() as any)
            }
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}


export default authReducer;

