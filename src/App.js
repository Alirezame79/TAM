import React, { useContext, useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import classes from './App.module.css';
import MiniCourse from "./course/MiniCourse";
import { Routes, Route } from 'react-router-dom';
import LoginModalPage from "./loginPortal/LoginModalPage";
import Blue from "./test/Blue";
import Brown from "./test/Brown";
import Yellow from "./test/Yellow";

function App() {
    if (localStorage.getItem('login') !== '1') {
        localStorage.setItem('login', '0');
    }

    return (
        <div className={classes.mainBody}>
            <Sidebar />
            <LoginModalPage />
            <div className={classes.containerBody}>
                <div className={classes.miniCourseContainer}>
                    <MiniCourse />
                    <MiniCourse />
                    <MiniCourse />
                    <MiniCourse />
                    <MiniCourse />
                </div>
                <div>
                    <Routes>
                        <Route path="/blue" Component={Blue} />
                        <Route path="/brown" Component={Brown} />
                        <Route path="/yellow" Component={Yellow} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;