import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from '../common/FormControls/FormControls';
import {required} from '../../utils/validators/validators';
import {loginTC} from "../../redux/auth-reducer";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean

}
type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    loginTC: (login: string, password: string, rememberMe: boolean) => void
}
type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       name={"email"} validate={required} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} validate={required}
                       component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button> Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)

    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            LOGIN
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {loginTC})(Login);