import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Login from '../components/Login';

// Router
export default (
    <Switch>
        <Route exact path="/" component={Login} />
    </Switch>
);