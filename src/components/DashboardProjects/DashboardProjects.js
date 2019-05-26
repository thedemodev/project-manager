import React from 'react'
import { useStateValue } from '../../context/provider';

// Styled Components
import {
    DashboardProjectsContainer
} from './DashboardProjectsStyles';

const DashboardProjects = () => {
    // Context State
    const [{user}, dispatch] = useStateValue();

    console.log(user);

    return (
        <DashboardProjectsContainer>

        </DashboardProjectsContainer>
    )
};

export default DashboardProjects;