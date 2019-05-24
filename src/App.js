import React, { useState } from 'react';
import routes from './utils/routes';
import 'reset-css';
import './styles/sweet_alerts.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme_provider';

// Top Level Component
const App = () => {
    const [themeStyle] = useState('light');

    return (
        <ThemeProvider theme={theme(themeStyle)}>
            <div>{routes}</div>
        </ThemeProvider>
    )
};

export default App;