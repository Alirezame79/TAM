import classes from './style/Course.module.css'
import useCourse from '../../fetch/useCourse'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";

export default function Course({ courseId }) {
    const { id } = useParams();
    useCourse(id)
    const course = useSelector((state) => {
        return state.course
    })

    if (Object.keys(course).length === 0) return
    // console.log(course)

    return (
        <div>
            <h1>نام: {course.name}</h1>
            <h2>آیدی: {course.id}</h2>
            <h2>استاد: {course.owner.name}</h2>
            <h2>دستیاران:
                <ul>
                    {course.assistant_profiles.map((assistant) => {
                        return <li key={assistant.id}>{assistant.name}</li>
                    })}</ul></h2>
            <h3>مکان: {course.class_location}</h3>
            <h3>زمان: {course.class_time}</h3>
            <h3>امتحان: {course.exam_time}</h3>
            <h3>دانشجوها: <ul>
                {course.student_profiles.map((student) => {
                    return <li key={student.id}>{student.name}</li>
                })}</ul></h3>
        </div >
    )
}