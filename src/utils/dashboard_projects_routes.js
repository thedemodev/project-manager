import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import ManagingProjects from '../components/DashboardManagingProjects/DashboardManagingProjects';
import NewProject from '../components/NewProject/NewProject';

export default (
    <Switch>
        <Route path="/dashboard/projects/managing" component={ManagingProjects} />
        <Route path="/dashboard/projects/newproject" component={NewProject} />
    </Switch>
);