import { useContext, useEffect, useState } from 'react';
import BeforeLogin from './BeforeLogin';
import classes from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import RouterCourse from './RouterCourse';

function Sidebar() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/courses/').then((response) => {
            console.log("1 ", response);
            return response.json();
        }).then((data) => {
            console.log("2 ", data);
            setCourses(data);
        })
    }, []);

    return (
        <div className={classes.container}>
            <h1 className={classes.sidebarTopic}>سامانه تام</h1>
            <BeforeLogin />
            <div className={classes.linkContainer}>
                {/* <Link className={classes.routerLinks} to={"/blue"}><RouterCourse /></Link> */}
                {courses.map((course) => {
                    return (
                        <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                            <RouterCourse name={course.name} />
                        </Link>)
                })}
            </div>
        </div >
    );
}

export default Sidebar;