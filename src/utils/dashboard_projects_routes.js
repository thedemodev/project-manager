import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import ManagingProjects from '../components/DashboardManagingProjects/DashboardManagingProjects';

export default (
    <Switch>
        <Route path="/dashboard/projects/managing" component={ManagingProjects} />
    </Switch>
);