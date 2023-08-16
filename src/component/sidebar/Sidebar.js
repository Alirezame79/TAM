import { useContext, useEffect, useState } from 'react';
import classes from './style/Sidebar.module.css';
import { useSignOut } from 'react-auth-kit'
import { Link, Navigate } from 'react-router-dom';
import RouterCourse from './RouterCourse';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AiOutlineCaretLeft } from "react-icons/ai";
import { BsFillPersonFill, BsMortarboardFill } from "react-icons/bs";
import { BiSolidCalendar, BiSolidGroup } from "react-icons/bi";
import { FaCalendarAlt, FaCircle, FaEdit, FaFileAlt, FaIdCard, FaIdCardAlt, FaStar, FaUserFriends, FaUserGraduate, FaUsers } from "react-icons/fa";
import { FaReadme, FaBookOpenReader } from "react-icons/fa6";

function Sidebar() {
    const signOut = useSignOut()
    const navigate = useNavigate();
    const studentCourses = useSelector((state) => {
        return state.studentCourses
    })
    const assistantCourses = useSelector((state) => {
        return state.assistantCourses
    })
    const teacherCourses = useSelector((state) => {
        return state.teacherCourses
    })


    // console.log(assistantCourses)

    return (
        <div className={classes.container}>
            <h1 className={classes.sidebarTopic}>سامانه تام</h1>
            <div className={classes.linkContainer}>

                {Object.keys(studentCourses).length !== 0 && <div className={classes.studentCourses}>
                    <div className={classes.courseIcon}>
                        <AiOutlineCaretLeft className={classes.roleIcon} />
                        <div className={classes.roleContainer}>
                            <p className={classes.role}>دانشجو</p>
                            <BsMortarboardFill className={classes.roleIcon} />
                        </div>
                    </div>
                    {studentCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                                <RouterCourse course={course} student />
                            </Link>)
                    })}
                </div>}

                {Object.keys(assistantCourses).length !== 0 && <div className={classes.assistantCourses}>
                    <div className={classes.courseIcon}>
                        <AiOutlineCaretLeft className={classes.roleIcon} />
                        <div className={classes.roleContainer}>
                            <p className={classes.roleTA}>دستیار استاد</p>
                            <FaStar className={classes.roleIcon} />
                        </div>
                    </div>
                    {assistantCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                                <RouterCourse course={course} assistant />
                            </Link>)
                    })}
                </div>}

                {Object.keys(teacherCourses).length !== 0 && <div className={classes.teacherCourses}>
                    <div className={classes.courseIcon}>
                        <AiOutlineCaretLeft className={classes.roleIcon} />
                        <div className={classes.roleContainer}>
                            <p className={classes.role}> استاد</p>
                            <FaIdCard className={classes.roleIcon} />
                        </div>
                    </div>
                    {teacherCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id} >
                                <RouterCourse course={course} teacher />
                            </Link>)
                    })}
                </div>}
            </div>
        </div >
    );
}

export default Sidebar;