import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import App from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    );
}

export default Routes;