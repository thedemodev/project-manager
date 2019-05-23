import React, { useState, useEffect } from 'react'

// Styled Components
import {
    HomeContainer
} from './HomeStyles';

// Components
import Login from '../Login/Login';

const Home = () => {
    return (
        <HomeContainer>
            <Login />
        </HomeContainer>
    )
};

export default Home;