import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/Layout';
import Dark from './styles/themes/dark';
import Light from './styles/themes/light';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={Dark}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    );
}

export default App;