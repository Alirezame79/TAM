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
import Course from './component/routePages/course/Course'
import useInitial from "./fetch/useInitial";
import NotFound from "./component/routePages/NotFound";
import EditProfile from "./component/routePages/EditProfile";
import PermissionDenied from "./component/routePages/PermissionDenied";
import StudentCourse from "./component/routePages/course/StudentCourse";
import AssistantCourse from "./component/routePages/course/AssistantCourse";
import TeacherCourse from "./component/routePages/course/TeacherCourse";
import ChangePassword from "./component/routePages/ChangePassword";
import CourseMember from "./component/routePages/course/CourseMember";
// import { useSelector } from 'react-redux'

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
                <div className={classes.mainBody}>
                    <Sidebar />
                    <div className={classes.containerBody}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Profile />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/course/:id" element={<Course />} />
                            <Route path="/course/:id/members" element={<CourseMember />} />
                            <Route path="/profile/edit" element={<EditProfile />} />
                            <Route path="/profile/changePassword" element={<ChangePassword />} />
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