import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import HomePage from '../Pages/HomePage/HomePage';
import AuthUser from '../Auth/AuthUser';
import UnAuthUser from '../Auth/UnAuthUser';

function UserRoutes() {
    return (
        <Routes>
            <Route element={<AuthUser/>}>
                <Route path="register" element={<RegisterPage />} />
                <Route path="" element={<LoginPage />} />
            </Route>
            <Route element={<UnAuthUser/>}>
                <Route path="home" element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default UserRoutes