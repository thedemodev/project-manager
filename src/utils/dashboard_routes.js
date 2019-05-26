import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import DashboardHome from '../components/DashboardHome/DashboardHome';
import DashboardProjects from '../components/DashboardProjects/DashboardProjects';

export default (
    <Switch>
        <Route path="/dashboard/home" component={DashboardHome} />
        <Route path="/dashboard/projects" component={DashboardProjects} />
    </Switch>
);