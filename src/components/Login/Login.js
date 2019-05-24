import React, { useState, useEffect } from 'react'
import * as Icon from 'react-feather';

// Styled Components
import {
    LoginContainer,
    Logo,
    LoginForm,
    FormLabel,
    FormUsername,
    FormPassword,
    FormButton
} from './LoginStyles';

const Login = props => {
    // JSX
    return (
        <LoginContainer >
            <Logo>
                <Icon.Codepen size={35} />
            </Logo>
            <LoginForm>
                <FormLabel>
                    <Icon.User size={15} />
                    <h1>Username</h1>
                </FormLabel>
                <FormUsername />
                <FormLabel>
                    <Icon.Lock size={15} />
                    <h1>Password</h1>
                </FormLabel>
                <FormPassword />
                <FormButton>Sign In</FormButton>
                <FormLabel register>
                    <Icon.HelpCircle size={15} />
                    <h1>Don't have an account?</h1>
                </FormLabel>
                <FormButton register onClick={props.changePortal}> Register</FormButton>
            </LoginForm>
        </LoginContainer>
    )
};

export default Login;