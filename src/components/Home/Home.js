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
    const changePortal = event => {
        // prevent the default behaviour of the form
        event.preventDefault();
        // change portal on state ot the opposite of
        setPortal(!portal);
    };

    return (
        <HomeContainer>
            {
                portal ?
                <Login changePortal={changePortal}/>
                :
                <SignUp />
            }  
        </HomeContainer>
    )
};

export default Home;