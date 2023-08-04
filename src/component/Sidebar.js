import { useContext, useEffect, useState } from 'react';
import classes from './Sidebar.module.css';
import { useSignOut } from 'react-auth-kit'
import { Link } from 'react-router-dom';
import RouterCourse from './RouterCourse';
import { useSelector } from 'react-redux'

function Sidebar() {
    const [courses, setCourses] = useState([]);
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

    // console.log(studentCourses)

    return (
        <div className={classes.container}>
            <h1 className={classes.sidebarTopic}>سامانه تام</h1>
            <div className={classes.linkContainer}>

                <div className={classes.studentCourses}>
                    {studentCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                                <RouterCourse name={course.name} />
                            </Link>)
                    })}
                </div>
                <div className={classes.assistantCourses}>
                    {assistantCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                                <RouterCourse name={course.name} />
                            </Link>)
                    })}
                </div>
                <div className={classes.teacherCourses}>
                    {teacherCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                                <RouterCourse name={course.name} />
                            </Link>)
                    })}
                </div>
                <button onClick={() => signOut()}>Signed Out</button>
            </div>
        </div >
    );
}

export default Sidebar;