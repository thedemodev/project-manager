import React from 'react'
import { useStateValue } from '../../context/provider';

// Styled Components
import {
    DashboardProjectsContainer
} from './DashboardProjectsStyles';

const DashboardProjects = () => {
    // Context State
    const [{user}, dispatch] = useStateValue();

    return (
        <DashboardProjectsContainer>

        </DashboardProjectsContainer>
    )
};

export default DashboardProjects;