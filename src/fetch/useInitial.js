import { useDispatch } from "react-redux";
import {setStudentCourses, setAssistantCourses, setTeacherCourses, setProfile} from "../store/index";
import { useIsAuthenticated } from "react-auth-kit";
import BASEURL from "./BaseURL";

const useInitial = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated()) {
    fetch(BASEURL + "initialize/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.profile.student_tag) {
          // console.log(data.studentCourses)
          dispatch(setStudentCourses(data.student_courses));
        }
        if (data.profile.assistant_tag) {
          // console.log(data.assistant_courses)
          dispatch(setAssistantCourses(data.assistant_courses));
        }
        if (data.profile.teacher_tag) {
          // console.log(data.teacherCourses)
          dispatch(setTeacherCourses(data.teacher_courses));
        }
        dispatch(setProfile(data.profile));
      });
  }
};

export default useInitial;
