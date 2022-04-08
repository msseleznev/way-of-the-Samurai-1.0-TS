import {ACTIONS_TYPE, ReducerType, ThunkDispatch, UsersPageType, UserType} from "./types";

import {usersAPI} from "../api/api";


const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: [],
}

const usersReducer = (state = initialState, action: ReducerType): UsersPageType => {

    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW: {
            return {
                ...state, users: state.users
                    .map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case ACTIONS_TYPE.UNFOLLOW: {
            return {
                ...state, users: state.users
                    .map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case ACTIONS_TYPE.SET_USERS: {
            return {...state, users: action.users}
        }
        case ACTIONS_TYPE.SET_CURRENT_PAGE: {

            return {...state, currentPage: action.currentPage}
        }
        case ACTIONS_TYPE.SET_USERS_TOTAL_COUNT: {

            return {...state, totalUsersCount: action.totalCount}
        }
        case ACTIONS_TYPE.TOGGLE_IS_FETCHING: {

            return {...state, isFetching: action.isFetching}
        }
        case ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}


export const followSuccess = (userId: number) => {
    return {
        type: ACTIONS_TYPE.FOLLOW,
        userId: userId
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: ACTIONS_TYPE.UNFOLLOW,
        userId: userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: ACTIONS_TYPE.SET_USERS,
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: ACTIONS_TYPE.SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: ACTIONS_TYPE.SET_USERS_TOTAL_COUNT,
        totalCount: totalCount
    } as const
}
export const setToggleIsFetching = (isFetching: boolean) => {
    return {
        type: ACTIONS_TYPE.TOGGLE_IS_FETCHING,
        isFetching: isFetching
    } as const
}
export const setToggleFollowingProgress = (userId: number, isFetching: boolean) => {

    return {
        type: ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS,
        userId,
        isFetching,
    } as const
}
export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setToggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        dispatch(setUsers([]));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setToggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            });

    }
}
export const followTC = (userId: number) => {

    return (dispatch: ThunkDispatch) => {
        dispatch(setToggleFollowingProgress(userId, true))
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch( followSuccess(userId));
                }
                dispatch(setToggleFollowingProgress(userId, false))
            });

    }
}
export const unfollowTC = (userId: number) => {

    return (dispatch: ThunkDispatch) => {

        dispatch(setToggleFollowingProgress(userId, true))
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch( unfollowSuccess(userId));
                }
                dispatch(setToggleFollowingProgress(userId, false))
            });

    }
}

export default usersReducer;

