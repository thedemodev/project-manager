import React, { useState, useEffect } from 'react'

// Styled Components
import {
    HomeContainer
} from './HomeStyles';

// Components
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const Home = () => {
    // State
    const [portal, setPortal] = useState(true)

    // Functions
    const changePortal = () => {
        let view = !portal;
        setPortal(view);
    };

    return (
        <HomeContainer>
            {
                portal ?
                <Login />
                :
                <SignUp />
            }  
        </HomeContainer>
    )
};

export default Home;