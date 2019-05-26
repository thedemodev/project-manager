import React, { useState } from 'react';
import routes from './utils/routes';
import 'reset-css';
import './styles/sweet_alerts.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme_provider';
import { StateProvider } from './context/provider';


// Top Level Component
const App = () => {
    // Context State
    const initialState = {
        user: {}
    };

    // Context Reducer
    const reducer = (state, action) => {
        switch (action.type) {
            case 'set_user':
                return {
                    ...state,
                    user: action.user
                };
            default:
                return state;
        };
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <ThemeProvider theme={theme('light')}>
                <div>{routes}</div>
            </ThemeProvider>
        </StateProvider>
    )
};

export default App;