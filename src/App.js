import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/Login";
import Sidebar from "./component/sidebar/Sidebar";
import { useIsAuthenticated } from "react-auth-kit";
import Profile from "./component/routePages/Profile";
import Header from "./component/header/Header";
import { useDispatch } from "react-redux";
import { reset } from "./store/index";
import Course from "./component/routePages/course/Course";
import useInitial from "./fetch/useInitial";
import NotFound from "./component/routePages/NotFound";
import EditProfile from "./component/routePages/EditProfile";
import { useSelector } from "react-redux";
import PermissionDenied from "./component/routePages/PermissionDenied";
import StudentCourse from "./component/routePages/course/StudentCourse";
import AssistantCourse from "./component/routePages/course/AssistantCourse";
import TeacherCourse from "./component/routePages/course/TeacherCourse";
import ChangePassword from "./component/routePages/ChangePassword";
import CourseMember from "./component/routePages/course/CourseMember";
import CourseSetting from "./component/routePages/course/CourseSetting";
// import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CourseGroup from "./component/routePages/course/CourseGroup";

function App() {
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useDispatch();
  const modal = useSelector((state) => {
    return state.modal;
  });
  useInitial();

  if (!isAuthenticated()) {
    localStorage.setItem("login", "0");
    dispatch(reset());
    return (
      <>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />
        <Login />;
      </>
    )
  } else {
    localStorage.setItem("login", "1");
    return (
      <>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />
        <div className={classes.mainBody}>
          <Sidebar />
          <div className={classes.containerBody}>
            <Header />
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/course/:id" element={<Course />} />
              <Route path="/course/:id/members" element={<CourseMember />} />
              <Route path="/course/:id/setting" element={<CourseSetting />} />
              <Route path="/course/:id/group" element={<CourseGroup />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/profile/changePassword" element={<ChangePassword />} />
              <Route path="/permissionDenied" element={<PermissionDenied />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
}

export default App;
