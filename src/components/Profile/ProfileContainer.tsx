import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatusTC, getUserProfileTC, updateStatusTC} from '../../redux/profile-reducer';
import {UserProfileType} from "../../redux/types";
import {NavigateFunction, Params, useLocation, useNavigate, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';


type MapStatePropsType = {
    profile: UserProfileType
    status: string
    authorizedUserId: number | null
}
type MapDispatchPropsType = {
    getUserProfileTC: (userId: string | undefined) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void

}
type RoutersType = {
    router: {
        location: Location
        params: Params<string>
        navigate: NavigateFunction
    }
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & RoutersType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId: any = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatusTC}/>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
    }
}


export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        getUserProfileTC,
        getStatusTC,
        updateStatusTC
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)


export function withRouter<T>(Component: ComponentType<T>): ComponentType<T & WithRouterType> {

    const ComponentWithRouterProp = (props: T & WithRouterType) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
    return ComponentWithRouterProp;
}

type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;

