import React from 'react'
import { useStateValue } from '../../context/provider';
import { withRouter } from 'react-router-dom';

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
    // Context State
    const [{ user }] = useStateValue();

    // Functions
    const checkAuth = user => {
        // check to make sure the user is authenticated before displaying the dash
        if(!user.id){
            props.history.push('/');
        };
    };

    // checks to make sure a user is logged in
    // checkAuth(user);

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


export default withRouter(Dashboard);