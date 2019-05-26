import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import DashboardHome from '../components/DashboardHome/DashboardHome';

export default (
    <Switch>
        <Route path="/dashboard/home" component={DashboardHome} />
    </Switch>
)