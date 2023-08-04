import React, { useEffect, useState } from "react";
import classes from './App.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/Login'
import Sidebar from "./component/Sidebar";
import { useIsAuthenticated } from 'react-auth-kit';
import Profile from "./component/Profile";
import { useDispatch } from 'react-redux';
import { reset } from './store/index'
import Course from './component/Course'
import useInitial from "./fetch/useInitial";

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
                {/* <Navigate to="/profile" replace={true} /> */}
                <div className={classes.mainBody}>
                    <Sidebar />
                    <div className={classes.containerBody}>
                        <Profile />
                        <Routes>
                            {/* <Route path="profile" element={<Profile />} /> */}
                            <Route path="course/:id" element={<Course data={":id"} />} />
                            <Route path="course/14021000001" element={<Course courseId={"14021000001"} />} />
                            <Route path="course/14021000002" element={<Course courseId={"14021000002"} />} />
                            <Route path="course/14021000003" element={<Course courseId={"14021000003"} />} />
                            <Route path="course/14021000004" element={<Course courseId={"14021000004"} />} />
                        </Routes>
                    </div>
                </div>
            </>
        )
    }

}

export default App;