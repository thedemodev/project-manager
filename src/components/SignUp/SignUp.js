import React, { useState } from 'react'
import * as Icon from 'react-feather';
import swal from '@sweetalert/with-react';

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

const SignUp = props => {
    // State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // Functions
    const registerSubmit = event => {
        // prevent the forms default submit behavour
        event.preventDefault();
        // make sure the fields are filled
        if (username === '' || password === '' || email === ''){
            // if they aren't present a pop message
            return swal({
                text: 'Username, Password, and Email are all required!',
                button: 'Okay'
            });
        };
    };

    // JSX
    return (
        <SignUpContainer>
            <Logo>
                <Icon.Codepen size={35} className="logo"/>
            </Logo>
            <LoginForm onSubmit={registerSubmit}>
                <FormLabel>
                    <Icon.User size={15} />
                    <h1>Username</h1>
                </FormLabel>
                <FormUsername onChange={event => setUsername(event.target.value)}/>
                <FormLabel>
                    <Icon.Lock size={15} />
                    <h1>Password</h1>
                </FormLabel>
                <FormPassword onChange={event => setPassword(event.target.value)}/>
                <FormLabel>
                    <Icon.Mail size={15} />
                    <h1>Email</h1>
                </FormLabel>
                <FormUsername onChange={event => setEmail(event.target.value)}/>
                <FormButton>Register</FormButton>
                <FormLabel>
                    <Icon.XCircle size={15} />
                    <h1>Already have an account?</h1>
                </FormLabel>
                <FormButton login onClick={props.changePortal}>Back To Login</FormButton>
            </LoginForm>
        </SignUpContainer>
    )
};

export default SignUp;