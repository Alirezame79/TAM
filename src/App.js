import React, { useState } from "react";
import classes from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Login from "./component/Login";
import Sidebar from "./component/Sidebar";

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
        <>
            {
                // <Login /> ||
                <div className={classes.mainBody}>
                    <Sidebar />
                    <div className={classes.containerBody}>
                        <div className={classes.miniCourseContainer}>
                            {/* <DemoCourse data={course} /> */}
                        </div>
                        <div>
                            <Routes>
                                {/* <Route path="course/:id" element={<DemoCourse data={":id"} />} /> */}
                                {/* <Route path="course/14021000001" element={<DemoCourse courseId={"14021000001"} />} />
                                <Route path="course/14021000002" element={<DemoCourse courseId={"14021000002"} />} />
                                <Route path="course/14021000003" element={<DemoCourse courseId={"14021000003"} />} />
                                <Route path="course/14021000004" element={<DemoCourse courseId={"14021000004"} />} /> */}
                            </Routes>
                        </div>
                    </div>
                </div>}
        </>
    );
}

export default App;