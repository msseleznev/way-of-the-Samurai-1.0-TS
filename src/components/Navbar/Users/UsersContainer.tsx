import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {UserType} from "../../../redux/types";
import {Users} from './Users';
import {Preloader} from "../../common/preloader/Preloader";
import c from "./Users.module.css";
import {
    followTC,
    getUsersTC,
    setToggleFollowingProgress,
    setToggleIsFetching, unfollowTC,

} from "../../../redux/users-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from 'redux';


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingProgress: (number | boolean)[]

}
type MapDispatchPropsType = {

    setToggleIsFetching: (isFetching: boolean) => void
    setToggleFollowingProgress: (userid: number, isFetching: boolean) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void


}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }


    render() {
        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= 20 /*pagesCount*/; i++) {
            pages.push(i);
        }
        return <>
            <div>
                {pages.map(p => {
                    const onClickHandler = () => {
                        this.onPageChanged(p)
                    }
                    return <span onClick={onClickHandler}
                                 key={p}
                                 className={this.props.currentPage === p ? c.selectedPage : c.notSelectPage}>{p}</span>
                })}
            </div>
            <Preloader isFetching={this.props.isFetching}/>
            <Users
                users={this.props.users}
                isFollowingProgress={this.props.isFollowingProgress}
                followTC={this.props.followTC}
                unfollowTC={this.props.unfollowTC}

            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress,

    }
}
/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {

        follow: (userId: number) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPage(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCount(totalCount))
        },
        setToggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching))
        },
    }
}*/


export const UsersContainer = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
        {
            getUsersTC,
            setToggleIsFetching,
            setToggleFollowingProgress,
            followTC,
            unfollowTC
        }),
    withAuthRedirect,
)(UsersAPIComponent)





