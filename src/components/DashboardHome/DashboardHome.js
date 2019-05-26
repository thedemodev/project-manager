import React from 'react'
import { useStateValue } from '../../context/provider';

// Styled Components
import {
    DashboardHomeContainer
} from './DashboardHomeStyles';

const DashboardHome = () => {
    const [{user}, setUser] = useStateValue();
    console.log(user);
    return (
        <DashboardHomeContainer>

        </DashboardHomeContainer>
    )
};

export default DashboardHome;