import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from '../store/index'
import { useSignIn } from 'react-auth-kit'
import { setStudentCourses, setAssistantCourses, setTeacherCourses, setProfile } from '../store/index'
// import { useNavigate } from 'react-router-dom';

const useLogin = (user) => {
    const signIn = useSignIn()
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    console.log(user);
    if (Object.keys(user).length === 0) { // At start it refuse the request
        return                                           // Because it's empty and caused error
    }

    fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response)
        if (response.status === 200) {
            return response.json()
        } else {
            console.log(response.statusText)
            return
        }

    }).then((data) => {

        if (signIn(
            {
                token: data.access,
                expiresIn: 60,
                tokenType: "Bearer",
                authState: user,
            }
        )) {
            console.log("User Signed in successfuly")
        } else {
            console.log("Some error happened")
        }

        localStorage.setItem("token", data.access);
        localStorage.setItem('login', '1');

        console.log(data.access);

        fetch('http://127.0.0.1:8000/user-profile-courses/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.access
            }
        }).then((response) => {
            console.log(response)
            return response.json();
        }).then((data) => {
            console.log(data);
            if (data.profile.student_tag) {
                console.log(data.studentCourses)
                dispatch(setStudentCourses(data.student_courses))
            }
            if (data.profile.assistant_tag) {
                console.log(data.assistant_courses)
                dispatch(setAssistantCourses(data.assistant_courses))
            }
            if (data.profile.teacher_tag) {
                console.log(data.teacherCourses)
                dispatch(setTeacherCourses(data.teacher_courses))
            }
            dispatch(setProfile(data.profile))

            // navigate('/profile');
        });
    })

}

export default useLogin