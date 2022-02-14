import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';
import Dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={Dark}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
}

export default App;