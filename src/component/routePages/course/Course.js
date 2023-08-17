import classes from './style/Course.module.css'
import useCourse from '../../../fetch/useCourse'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { BiSolidGroup } from "react-icons/bi";
import { FaCalendarAlt, FaFileAlt, FaUsers } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import StudentCourse from './StudentCourse';
import AssistantCourse from './AssistantCourse';
import TeacherCourse from './TeacherCourse';


export default function Course() {
    const { id } = useParams();
    const [course, setCourse] = useState()
    const studentCourses = useSelector((state) => {
        return state.studentCourses
    })
    const assistantCourses = useSelector((state) => {
        return state.assistantCourses
    })
    const teacherCourses = useSelector((state) => {
        return state.teacherCourses
    })

    useEffect(() => {
        for (const x of teacherCourses) {
            if (x.id == id) {
                console.log('teacher')
                setCourse('teacher')
                return
            }
        }
        for (const x of assistantCourses) {
            if (x.id == id) {
                console.log('assistant')
                setCourse('assistant')
                return
            }
        }
        for (const x of studentCourses) {
            if (x.id == id) {
                console.log('student')
                setCourse('student')
                return
            }
        }
        setCourse('student')
    })


    return (
        <>
            {course === 'student' && <StudentCourse id={id} />}
            {course === 'assistant' && <AssistantCourse id={id} />}
            {course === 'teacher' && <TeacherCourse id={id} />}
        </>
    )
}