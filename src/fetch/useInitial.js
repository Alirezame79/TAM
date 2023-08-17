import { useDispatch } from "react-redux";
import { setStudentCourses, setAssistantCourses, setTeacherCourses, setProfile } from '../store/index'
import { useIsAuthenticated } from 'react-auth-kit';


const useInitial = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useIsAuthenticated()

    if (isAuthenticated()) {
        fetch('http://127.0.0.1:8000/user-profile-courses/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then((response) => {
            // console.log(response)
            return response.json();
        }).then((data) => {
            console.log(data);
            if (data.profile.student_tag) {
                // console.log(data.studentCourses)
                dispatch(setStudentCourses(data.student_courses))
            }
            if (data.profile.assistant_tag) {
                // console.log(data.assistant_courses)
                dispatch(setAssistantCourses(data.assistant_courses))
            }
            if (data.profile.teacher_tag) {
                // console.log(data.teacherCourses)
                dispatch(setTeacherCourses(data.teacher_courses))
            }
            dispatch(setProfile(data.profile))

        });
    }

}

export default useInitial