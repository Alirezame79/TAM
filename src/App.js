import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/Login";
import Sidebar from "./component/sidebar/Sidebar";
import { useIsAuthenticated } from "react-auth-kit";
import Profile from "./component/body/profile/Profile";
import Header from "./component/header/Header";
import { useDispatch } from "react-redux";
import { reset } from "./store/index";
import Course from "./component/body/course/Course";
import useInitial from "./fetch/useInitial";
import NotFound from "./component/body/other/NotFound";
import EditProfile from "./component/body/profile/EditProfile";
import { useSelector } from "react-redux";
import PermissionDenied from "./component/body/other/PermissionDenied";
import ChangePassword from "./component/body/profile/ChangePassword";
import CourseMember from "./component/body/course/CourseMember";
import CourseSetting from "./component/body/course/CourseSetting";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Group from "./component/body/course/Group";
import EditGroup from "./component/body/course/group/EditGroup";
import ProjectList from './component/body/course/project/ProjectList'
import ManageProject from './component/body/course/project/ManageProject'
import UploadProject from './component/body/course/project/UploadProject'

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
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/profile/changePassword" element={<ChangePassword />} />
              <Route path="/course/:id" element={<Course />} />
              <Route path="/course/:id/members" element={<CourseMember />} />
              <Route path="/course/:id/setting" element={<CourseSetting />} />
              <Route path="/course/:id/group" element={<Group />} />
              <Route path="/course/:id/group/edit" element={<EditGroup />} />
              <Route path="/course/:id/project" element={<UploadProject />} />
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
