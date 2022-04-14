import {ACTIONS_TYPE, AppPageType, ReducerType} from "./types";


import {authUserTC} from "./auth-reducer";


const initialState: AppPageType = {
    initialized: false
}

const appReducer = (state = initialState, action: ReducerType): AppPageType => {

    switch (action.type) {
        case ACTIONS_TYPE.INITIALIZED_SUCCESS: {
            return {
                ...state, initialized: true
            }
        }
        default:
            return state;
    }
}


export const initializedSuccess = () => {
    return {
        type: ACTIONS_TYPE.INITIALIZED_SUCCESS,
    } as const
}

export const initializeAppTC = () => (dispatch: any) => {
    dispatch(authUserTC())
        .then(() => {
            dispatch(initializedSuccess())
        })
}


export default appReducer;

