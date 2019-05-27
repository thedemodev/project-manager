import React, { useState, useEffect } from 'react'
import * as Icon from 'react-feather';
import swal from '@sweetalert/with-react';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import { withRouter } from 'react-router-dom';
import { useStateValue } from '../../context/provider';

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
    // Context State
    const [{user}, setUser] = useStateValue();

    // State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    // Effects
    useEffect(() => {
        // this is will allow loading to change after the asynch code
    }, [loading]);

    // Functions
    const registerSubmit = event => {
        // prevent the forms default submit behavour
        event.preventDefault();
        // change the button to display a loading
        setLoading(true);
        // make sure the fields are filled
        if (username === '' || password === '' || email === '') {
            // change the loading animation for the button
            setLoading(false);
            // if they aren't present a pop message
            return swal({
                text: 'Username, Password, and Email are all required!',
                button: 'Okay'
            });
        };
        // make an http request to sign up
        axios.post('/auth/register', { username, password, email })
            .then(response => {
                // stop the loading animation
                setLoading(false);
                //set the user to the gloabl context state
                setUser({
                    type: 'set_user',
                    user: {...response.data}
                });
                // push user to dashboard
                props.history.push('/dashboard');
            })
            .catch(err => {
                // change the button to display a loading
                setLoading(false);
                //create the error object
                const error = Object.create(err);
                //modify the error message based off of the response
                if (error.response.status === 400) {
                    //if username or password is missing
                    error.message = 'Username and Password are required'
                } else if (error.response.status === 401) {
                    //if username or password are incorrect
                    error.message = "Username is already taken, please try another!"
                } else {
                    error.message = "Internal Server Error"
                };
                // flash a pop up of the error message
                swal({
                    text: error.message,
                    button: "Okay"
                });

            });
    };

    // JSX
    return (
        <SignUpContainer>
            <Logo>
                <Icon.Codepen size={35} className="logo" />
            </Logo>
            <LoginForm onSubmit={registerSubmit}>
                <FormLabel>
                    <Icon.User size={15} />
                    <h1>Username</h1>
                </FormLabel>
                <FormUsername onChange={event => setUsername(event.target.value)} />
                <FormLabel>
                    <Icon.Lock size={15} />
                    <h1>Password</h1>
                </FormLabel>
                <FormPassword onChange={event => setPassword(event.target.value)} />
                <FormLabel>
                    <Icon.Mail size={15} />
                    <h1>Email</h1>
                </FormLabel>
                <FormUsername onChange={event => setEmail(event.target.value)} />
                <FormButton>{loading ? <Loader type="ThreeDots" height={20} width={20} color="#FFF" /> : 'Register'}</FormButton>
                <FormLabel>
                    <Icon.XCircle size={15} />
                    <h1>Already have an account?</h1>
                </FormLabel>
                <FormButton login onClick={props.changePortal}>Back To Login</FormButton>
            </LoginForm>
        </SignUpContainer>
    )
};

export default withRouter(SignUp);