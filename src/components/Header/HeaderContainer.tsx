import React from 'react';
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {authUserTC, logoutTC} from '../../redux/auth-reducer';


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    authUserTC: () => void
    logoutTC: () => {}
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        this.props.authUserTC()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logoutTC={this.props.logoutTC}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    authUserTC,
    logoutTC
})(HeaderContainer)

