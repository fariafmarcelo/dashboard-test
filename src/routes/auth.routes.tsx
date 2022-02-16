import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SingIn from '../pages/SingIn';

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SingIn />} />
    </Routes>
);

export default AuthRoutes;