import { useContext, useEffect, useState } from 'react';
import classes from './style/Sidebar.module.css';
import { useSignOut } from 'react-auth-kit'
import { Link, Navigate } from 'react-router-dom';
import RouterCourse from './RouterCourse';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AiOutlineCaretLeft, AiFillCaretDown } from "react-icons/ai";
import { BsFillPersonFill, BsMortarboardFill } from "react-icons/bs";
import { BiSolidCalendar, BiSolidGroup } from "react-icons/bi";
import { FaCalendarAlt, FaCircle, FaEdit, FaFileAlt, FaIdCard, FaIdCardAlt, FaStar, FaUserFriends, FaUserGraduate, FaUsers } from "react-icons/fa";
import { FaReadme, FaBookOpenReader } from "react-icons/fa6";

function Sidebar() {
    const [studentCourseHeader, setStudentCourseHeader] = useState(true)
    const [assistantCourseHeader, setAssistantCourseHeader] = useState(true)
    const [teacherCourseHeader, setTeacherCourseHeader] = useState(true)

    const studentCourses = useSelector((state) => {
        return state.studentCourses
    })
    const assistantCourses = useSelector((state) => {
        return state.assistantCourses
    })
    const teacherCourses = useSelector((state) => {
        return state.teacherCourses
    })

    function studentCourseHeaderClicked() {
        if (studentCourseHeader) setStudentCourseHeader(false)
        if (!studentCourseHeader) setStudentCourseHeader(true)
    }

    function assistantCourseHeaderClicked() {
        if (assistantCourseHeader) setAssistantCourseHeader(false)
        if (!assistantCourseHeader) setAssistantCourseHeader(true)
    }

    function teacherCourseHeaderClicked() {
        if (teacherCourseHeader) setTeacherCourseHeader(false)
        if (!teacherCourseHeader) setTeacherCourseHeader(true)
    }


    // console.log(assistantCourses)

    return (
        <div className={classes.container}>
            <h1 className={classes.sidebarTopic}>سامانه تام</h1>
            <div className={classes.linkContainer}>
                {Object.keys(studentCourses).length !== 0 && <div className={classes.studentCourses}>
                    <div className={classes.courseIcon} onClick={studentCourseHeaderClicked}>
                        {!studentCourseHeader && <AiOutlineCaretLeft className={classes.roleIcon} />}
                        {studentCourseHeader && <AiFillCaretDown className={classes.roleIcon} />}
                        <div className={classes.roleContainer}>
                            <p className={classes.role}>دانشجو</p>
                            <BsMortarboardFill className={classes.roleIcon} />
                        </div>
                    </div>
                    {studentCourseHeader && studentCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                                <RouterCourse course={course} student />
                            </Link>)
                    })}
                </div>}

                {Object.keys(assistantCourses).length !== 0 && <div className={classes.assistantCourses}>
                    <div className={classes.courseIcon} onClick={assistantCourseHeaderClicked}>
                        {!assistantCourseHeader && < AiOutlineCaretLeft className={classes.roleIcon} />}
                        {assistantCourseHeader && < AiFillCaretDown className={classes.roleIcon} />}
                        <div className={classes.roleContainer}>
                            <p className={classes.roleTA}>دستیار استاد</p>
                            <FaStar className={classes.roleIcon} />
                        </div>
                    </div>
                    {assistantCourseHeader && assistantCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
                                <RouterCourse course={course} assistant />
                            </Link>)
                    })}
                </div>}

                {Object.keys(teacherCourses).length !== 0 && <div className={classes.teacherCourses}>
                    <div className={classes.courseIcon} onClick={teacherCourseHeaderClicked}>
                        {!teacherCourseHeader && <AiOutlineCaretLeft className={classes.roleIcon} />}
                        {teacherCourseHeader && <AiFillCaretDown className={classes.roleIcon} />}
                        <div className={classes.roleContainer}>
                            <p className={classes.role}> استاد</p>
                            <FaIdCard className={classes.roleIcon} />
                        </div>
                    </div>
                    {teacherCourseHeader && teacherCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id} >
                                <RouterCourse course={course} teacher />
                            </Link>)
                    })}
                </div>}
            </div>
            <div className={classes.profileContainer}>
                <h5>Profile</h5>
            </div>
        </div >
    );
}

export default Sidebar;