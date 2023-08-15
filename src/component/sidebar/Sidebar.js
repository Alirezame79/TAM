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


<<<<<<< HEAD


function Sidebar() {
    const signOut = useSignOut()
    const navigate = useNavigate();
=======
var bgColors = {
    "pink": "#F26768",
    "pinkHover": "#D93B3C",
    "orangeTa": "#FFC038",
    "orangeTaHover": "F1A900",
    "orangeTeacher": "#FFCF5D",
    "orangeTeacherHover": "#EDAB12"

};

function Sidebar() {
    const signOut = useSignOut()
>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb
    const studentCourses = useSelector((state) => {
        return state.studentCourses
    })
    const assistantCourses = useSelector((state) => {
        return state.assistantCourses
    })
    const teacherCourses = useSelector((state) => {
        return state.teacherCourses
    })
<<<<<<< HEAD

=======
    const navigate = useNavigate();
>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb

    // console.log(studentCourses)

    return (
<<<<<<< HEAD
=======

>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb
        <div className={classes.container}>
            <h1 className={classes.sidebarTopic}>سامانه تام</h1>
            <div className={classes.linkContainer}>

                {/* <BsFillPersonFill/>
               <BiSolidGroup/> 
               <FaUserFriends/>   baraye aaza */}

                {/*  <BsMortarboardFill/>   
               <FaUserGraduate/>  daneshjo*/}

                {/* <BiSolidCalendar/> <FaCalendarAlt/>   taghvim */}
                {/* <FaCircle/>  */}
                {/*   <FaEdit/> shaiad proje*/}
                {/*  <FaFileAlt/> nomre*/}
                {/*   <FaIdCard/>   <FaIdCardAlt/> ostad  */}
                {/*      <FaStar/>     */}
                {/*  <FaUsers/> group */}

                {/* <FaBookOpenReader/> <FaReadme/> jozve  */}

<<<<<<< HEAD
                {Object.keys(studentCourses).length !== 0 && <div className={classes.studentCourses}>
=======
                <div className={classes.studentCourses}>
>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb
                    <div className={classes.courseIcon}>
                        <AiOutlineCaretLeft className={classes.roleIcon} />
                        <p className={classes.role}>دانشجو</p>
                        <BsMortarboardFill className={classes.roleIcon} />
                    </div>
                    {studentCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
<<<<<<< HEAD
                                <RouterCourse student course={course}  />
                            </Link>)
                    })}
                </div>}
                {Object.keys(assistantCourses).length !== 0 && <div className={classes.assistantCourses}>
=======
                                <RouterCourse student course={course} backgroundColors={bgColors.pink} hoverColor={bgColors.pinkHover} />
                            </Link>)
                    })}
                </div>
                <div className={classes.assistantCourses}>
>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb
                    <div className={classes.courseIcon}>
                        <AiOutlineCaretLeft className={classes.roleIcon} />
                        <p className={classes.roleTA}>دستیار استاد</p>
                        <FaStar className={classes.roleIcon} />
                    </div>
                    {assistantCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id}>
<<<<<<< HEAD
                                <RouterCourse course={course} ta />
                            </Link>)
                    })}
                </div>}
                {Object.keys(teacherCourses).length !== 0 && <div className={classes.teacherCourses}>
=======
                                <RouterCourse course={course} backgroundColors={bgColors.orangeTa} hoverColor={bgColors.orangeTaHover} />
                            </Link>)
                    })}
                </div>
                <div className={classes.teacherCourses}>
>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb
                    <div className={classes.courseIcon}>
                        <AiOutlineCaretLeft className={classes.roleIcon} />
                        <p className={classes.role}> استاد</p>
                        <FaIdCard className={classes.roleIcon} />
                    </div>
                    {teacherCourses.map((course) => {
                        return (
                            <Link key={course.id} className={classes.routerLinks} to={"/course/" + course.id} >
<<<<<<< HEAD
                                <RouterCourse course={course} teacher />
                            </Link>)
                    })}
                </div>}
=======
                                <RouterCourse course={course} backgroundColors={bgColors.orangeTeacher} hoverColor={bgColors.orangeTeacherHover} />
                            </Link>)
                    })}
                </div>
                {/* <button onClick={() => {
                    navigate('/');
                    signOut()
                }}>Signed Out</button> */}
>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb
            </div>
        </div >
    );
}

export default Sidebar;