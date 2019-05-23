import React from 'react';
import routes from './utils/routes';
import 'reset-css';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme_provider';

// Top Level Component
const App = () => {
    <ThemeProvider theme={theme('light')}>
        <div>{routes}</div>
    </ThemeProvider>
};

export default App;