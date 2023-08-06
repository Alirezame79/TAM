import { useContext, useEffect, useState } from 'react';
import classes from './style/Sidebar.module.css';
import { useSignOut } from 'react-auth-kit'
import { Link, Navigate } from 'react-router-dom';
import RouterCourse from './RouterCourse';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const signOut = useSignOut()
    const studentCourses = useSelector((state) => {
        return state.studentCourses
    })
    const assistantCourses = useSelector((state) => {
        return state.assistantCourses
    })
    const teacherCourses = useSelector((state) => {
        return state.teacherCourses
    })
    const navigate = useNavigate();

    // console.log(studentCourses)

    return (
        <div className={classes.container}>
            <h1 className={classes.sidebarTopic}>سامانه تام</h1>
            <div className={classes.linkContainer}>

                <div className={classes.studentCourses}>
                    {studentCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                                <RouterCourse course={course} />
                            </Link>)
                    })}
                </div>
                <div className={classes.assistantCourses}>
                    {assistantCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                                <RouterCourse course={course} />
                            </Link>)
                    })}
                </div>
                <div className={classes.teacherCourses}>
                    {teacherCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                                <RouterCourse course={course} />
                            </Link>)
                    })}
                </div>
                <button onClick={() => {
                    navigate('/');
                    signOut()
                }}>Signed Out</button>
            </div>
        </div >
    );
}

export default Sidebar;