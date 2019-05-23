import React from 'react'
import * as Icon from 'react-feather';

// Styled Components
import {
    SignUpContainer,
    Logo,
    LoginForm,
    FormLabel,
    FormUsername,
    FormPassword,
    FormButton
} from './SignUpStyles';

const SignUp = () => {
    return (
        <SignUpContainer>
            <Logo>
                <Icon.Codepen size={35}/>
            </Logo>
            <LoginForm>
                <FormLabel>
                    <Icon.User size={15}/>
                    <h1>Username</h1>
                </FormLabel>
                <FormUsername />
                <FormLabel>
                    <Icon.Lock size={15}/>
                    <h1>Password</h1>
                </FormLabel>
                <FormPassword />
                <FormLabel>
                    <Icon.Mail size={15}/>
                    <h1>Email</h1>
                </FormLabel>
                <FormUsername />
                <FormButton>Sign In</FormButton>
            </LoginForm>
        </SignUpContainer>
    )
};

export default SignUp;