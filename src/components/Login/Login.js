import React, { useState, useEffect } from 'react'
import * as Icon from 'react-feather';
import axios from 'axios';
import swal from '@sweetalert/with-react';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom'
import { useStateValue } from '../../context/provider';

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
    // Context State
    const [{user}, setUser] = useStateValue();
    
    // State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Effects
    useEffect(() => {
        // this maintains the loading effect
    }, [loading]);

    // Functions
    const loginSubmit = event => {
        // prevent the default form behavour
        event.preventDefault();
        // give the login btn a loading effect
        setLoading(true);
        // make sure input fields are filled out
        if (username === '' || password === '') {
            // change loading
            setLoading(false);
            // send a pop up
            return swal({
                text: 'Username and Password are required!',
                button: 'Okay'
            })
        };
        // make a post request to login the user
        axios.post('/auth/login', { username, password })
            .then(response => {
                // set loading to false
                setLoading(false);
                //set the user to the gloabl context state
                setUser({
                    type: 'set_user',
                    user: {...response.data}
                });
                // // push the user to the dash
                props.history.push('/dashboard/home');
            })
            .catch(err => {
                // set loading to false
                setLoading(false);
                //create the error object
                const error = Object.create(err);
                //modify the error message based off of the response
                if (error.response.status === 400) {
                    //if username or password is missing
                    error.message = 'Username and Password are required'
                } else if (error.response.status === 401) {
                    //if username or password are incorrect
                    error.message = "Invalid Username or Password"
                } else {
                    error.message = "Internal Server Error"
                };
                // flash a pop up of the error message
                swal({
                    text: error.message,
                    button: "Okay"
                })
            });
    };

    // JSX
    return (
        <LoginContainer>
            <Logo>
                <Icon.Codepen size={35} />
            </Logo>
            <LoginForm onSubmit={loginSubmit}>
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
                <FormButton>{loading ? <Loader type="ThreeDots" height={20} width={20} color="#FFF" /> : 'Sign In'}</FormButton>
                <FormLabel register>
                    <Icon.HelpCircle size={15} />
                    <h1>Don't have an account?</h1>
                </FormLabel>
                <FormButton register onClick={props.changePortal}> Register</FormButton>
            </LoginForm>
        </LoginContainer>
    )
};

export default withRouter(Login);