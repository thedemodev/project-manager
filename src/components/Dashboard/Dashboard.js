import React from 'react'

// Dashboard Routes
import DashboardRoutes from '../../utils/dashboard_routes';

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
                {DashboardRoutes}
            </ApplicationContainer>
       </DashboardContainer>
    )
};


export default Dashboard;