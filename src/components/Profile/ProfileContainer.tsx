import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC} from '../../redux/profile-reducer';
import {UserProfileType} from "../../redux/types";
import {NavigateFunction, Params, useLocation, useNavigate, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


type MapStatePropsType = {
    profile: UserProfileType
}
type MapDispatchPropsType = {
    getUserProfileTC: (userId: string | undefined) => void
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
        let userId: string | undefined = this.props.router.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}


export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getUserProfileTC}),
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

