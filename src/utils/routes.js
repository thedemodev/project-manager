import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from '../components/Home/Home';
import Dashboard from '../components/Dashboard/Dashboard';

// Router
export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="dashboard" component={Dashboard}/>
    </Switch>
);