import React from 'react'
import * as Icon from 'react-feather';

// Styled Components
import {
    LoginContainer,
    Logo,
    LoginForm,
    FormLabel,
    FormInput,
    FormButton
} from './LoginStyles';

const Login = () => {
    return (
        <LoginContainer>
            <Logo>
                <Icon.Codepen size={35}/>
            </Logo>
            <LoginForm>
                <FormLabel>
                    <Icon.User size={20}/>
                    <h1>Username</h1>
                </FormLabel>
                <FormInput />
                <FormLabel>
                    <Icon.Lock size={20}/>
                    <h1>Password</h1>
                </FormLabel>
                <FormInput password/>
                <FormButton>Sign In</FormButton>
            </LoginForm>
        </LoginContainer>
    )
};

export default Login;