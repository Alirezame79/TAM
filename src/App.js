import React, { useEffect, useState } from "react";
import classes from './App.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/Login'
import Sidebar from "./component/sidebar/Sidebar";
import { useIsAuthenticated } from 'react-auth-kit';
import Profile from "./component/routePages/Profile";
import Header from "./component/header/Header";
import { useDispatch } from 'react-redux';
import { reset } from './store/index'
import Course from './component/routePages/Course'
import useInitial from "./fetch/useInitial";
import NotFound from "./component/routePages/NotFound";
import EditProfile from "./component/routePages/EditProfile";
import PermissionDenied from "./component/routePages/PermissionDenied";

function App() {
    const isAuthenticated = useIsAuthenticated()
    const dispatch = useDispatch()
    useInitial()

    if (!isAuthenticated()) {
        localStorage.setItem('login', '0');
        dispatch(reset())
        return <Login />;
    }
    else {
        localStorage.setItem('login', '1');
        return (
            <>
<<<<<<< HEAD
                {/* <Login /> */}
                <div className={classes.mainBody}>
                    <Sidebar />
                    <div className={classes.containerBody}>
                        <Header />
=======
            {/* <Login /> */}
                <div className={classes.mainBody}>
                    <Header/>
                    <Sidebar />
                    <div className={classes.containerBody}>
>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb
                        <Routes>
                            <Route path="/" element={<Profile />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/course/:id" element={<Course />} />
                            <Route path="/profile/edit" element={<EditProfile />} />
                            <Route path="/permissionDenied" element={<PermissionDenied />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </>
        )
    }
}

export default App;