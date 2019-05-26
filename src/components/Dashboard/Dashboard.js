import React from 'react'

// Styled Components
import {
    DashboardContainer,
    ApplicationContainer
} from './DashboardStyles';

// Components
import DashboardSideNav from '../DashboardSideNav/DashboardSideNav';
import ApplicationNav from '../ApplicationNav/ApplicationNav';

const Dashboard = props => {
    return (
       <DashboardContainer>
            <DashboardSideNav />
            <ApplicationContainer>
                <ApplicationNav />
            </ApplicationContainer>
       </DashboardContainer>
    )
};


export default Dashboard;