import { useState } from "react";
import classes from "./style/Sidebar.module.css";
import { Link, Navigate } from "react-router-dom";
import RouterCourse from "./RouterCourse";
import { useSelector } from "react-redux";
import { AiOutlineCaretLeft, AiFillCaretDown } from "react-icons/ai";
import { BsMortarboardFill } from "react-icons/bs";
import { FaIdCard, FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

function Sidebar() {
  const [studentCourseHeader, setStudentCourseHeader] = useState(true);
  const [assistantCourseHeader, setAssistantCourseHeader] = useState(true);
  const [teacherCourseHeader, setTeacherCourseHeader] = useState(true);

  const studentCourses = useSelector((state) => {
    return state.studentCourses;
  });
  const assistantCourses = useSelector((state) => {
    return state.assistantCourses;
  });
  const teacherCourses = useSelector((state) => {
    return state.teacherCourses;
  });

  function studentCourseHeaderClicked() {
    if (studentCourseHeader) setStudentCourseHeader(false);
    if (!studentCourseHeader) setStudentCourseHeader(true);
  }

  function assistantCourseHeaderClicked() {
    if (assistantCourseHeader) setAssistantCourseHeader(false);
    if (!assistantCourseHeader) setAssistantCourseHeader(true);
  }

  function teacherCourseHeaderClicked() {
    if (teacherCourseHeader) setTeacherCourseHeader(false);
    if (!teacherCourseHeader) setTeacherCourseHeader(true);
  }

  console.log(studentCourses.length);
  console.log(assistantCourses.length);
  console.log(teacherCourses.length);

  return (
    <div className={classes.container}>
      <h1 className={classes.sidebarTopic}>سامانه تام</h1>
      <div className={classes.linkContainer}>
        {Object.keys(teacherCourses).length +
          Object.keys(assistantCourses).length +
          Object.keys(studentCourses).length ===
          0 && (
          <Skeleton
            count={3}
            height={40}
            width={"90%"}
            className={classes.skeleton}
          />
        )}
        {Object.keys(studentCourses).length !== 0 && (
          <div className={classes.studentCourses}>
            <div
              className={classes.courseIcon}
              onClick={studentCourseHeaderClicked}
            >
              {!studentCourseHeader && (
                <AiOutlineCaretLeft className={classes.roleIcon} />
              )}
              {studentCourseHeader && (
                <AiFillCaretDown className={classes.roleIcon} />
              )}
              <div className={classes.roleContainer}>
                <p className={classes.role}>دانشجو</p>
                <BsMortarboardFill className={classes.roleIcon} />
              </div>
            </div>
            {studentCourseHeader &&
              studentCourses.map((course) => {
                return (
                  <Link
                    key={course.id}
                    className={classes.routerLinks}
                    to={"/course/" + course.id}
                  >
                    <RouterCourse course={course} student />
                  </Link>
                );
              })}
          </div>
        )}

        {Object.keys(assistantCourses).length !== 0 && (
          <div className={classes.assistantCourses}>
            <div
              className={classes.courseIcon}
              onClick={assistantCourseHeaderClicked}
            >
              {!assistantCourseHeader && (
                <AiOutlineCaretLeft className={classes.roleIcon} />
              )}
              {assistantCourseHeader && (
                <AiFillCaretDown className={classes.roleIcon} />
              )}
              <div className={classes.roleContainer}>
                <p className={classes.roleTA}>دستیار استاد</p>
                <FaStar className={classes.roleIcon} />
              </div>
            </div>
            {assistantCourseHeader &&
              assistantCourses.map((course) => {
                return (
                  <Link
                    key={course.id}
                    className={classes.routerLinks}
                    to={"/course/" + course.id}
                  >
                    <RouterCourse course={course} assistant />
                  </Link>
                );
              })}
          </div>
        )}

        {Object.keys(teacherCourses).length !== 0 && (
          <div className={classes.teacherCourses}>
            <div
              className={classes.courseIcon}
              onClick={teacherCourseHeaderClicked}
            >
              {!teacherCourseHeader && (
                <AiOutlineCaretLeft className={classes.roleIcon} />
              )}
              {teacherCourseHeader && (
                <AiFillCaretDown className={classes.roleIcon} />
              )}
              <div className={classes.roleContainer}>
                <p className={classes.role}> استاد</p>
                <FaIdCard className={classes.roleIcon} />
              </div>
            </div>
            {teacherCourseHeader &&
              teacherCourses.map((course) => {
                return (
                  <Link
                    key={course.id}
                    className={classes.routerLinks}
                    to={"/course/" + course.id}
                  >
                    <RouterCourse course={course} teacher />
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
