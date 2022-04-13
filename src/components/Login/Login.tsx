import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from '../common/FormControls/FormControls';
import {required} from '../../utils/validators/validators';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean

}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"login"} validate={required} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={required} component={Input}/>
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

const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)
    if (isAuth) return <Navigate to='/profile'/>
    return (
        <div>
            LOGIN
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;