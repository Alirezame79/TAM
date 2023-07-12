import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import classes from './App.module.css';
import MiniCourse from "./course/MiniCourse";
import { Routes, Route } from 'react-router-dom';
import LoginModalPage from "./loginPortal/LoginModalPage";
import Blue from "./test/Blue";
import Brown from "./test/Brown";
import Yellow from "./test/Yellow";
import DemoCourse from "./course/DemoCourse";

function App() {
    if (localStorage.getItem('login') !== '1') {
        localStorage.setItem('login', '0');
    }
    const [course, setCourse] = useState();

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/courses').then((response) => {
    //         console.log("1 ", response);
    //         return response.json();
    //     }).then((data) => {
    //         console.log("2 ", data);
    //         // setCourse(data);
    //     })
    // }, []);


    return (
        <div className={classes.mainBody}>
            <Sidebar />
            {/* <LoginModalPage /> */}
            <div className={classes.containerBody}>
                <div className={classes.miniCourseContainer}>
                    {/* <MiniCourse />
                    <MiniCourse />
                    <MiniCourse />
                    <MiniCourse />
                    <MiniCourse /> */}
                    {/* <DemoCourse data={course} /> */}
                </div>
                <div>
                    <Routes>
                        {/* <Route path="course/:id" element={<DemoCourse data={":id"} />} /> */}
                        <Route path="course/185d00f7-2007-11ee-a795-d2c5d3c26729" element={<DemoCourse courseId={"185d00f7-2007-11ee-a795-d2c5d3c26729"} />} />
                        <Route path="course/1b66dd45-2007-11ee-b1e1-d2c5d3c26729" element={<DemoCourse courseId={"1b66dd45-2007-11ee-b1e1-d2c5d3c26729"} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;