import {ACTIONS_TYPE, AuthPageType, ReducerType, ThunkDispatch} from "./types";
import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true

            }
        }
        default:
            return state;
    }
}


export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        }
    } as const
}

export const authUserTC = () => {
    return (dispatch: ThunkDispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {login, email, id} = data.data
                    dispatch(setAuthUserData(id, email, login));
                }
            });

    }
}


export default authReducer;

