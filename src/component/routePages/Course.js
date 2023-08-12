import classes from './style/Course.module.css'
import useCourse from '../../fetch/useCourse'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { BiSolidGroup} from "react-icons/bi";
import { FaCalendarAlt,FaFileAlt,FaUsers } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

export default function Course({ courseId }) {
    const { id } = useParams();
    useCourse(id)
    const course = useSelector((state) => {
        return state.course
    })

    if (Object.keys(course).length === 0) return
    // console.log(course)

    return (
        <div >
            <div className={classes.name}>
                <h1>   {course.name} </h1>
            </div>

            <div className={classes.teacher}>
            <img  alt={'profile'} />
                <h2>{course.owner.name} : استاد درس</h2>
            </div>
            <div className={classes.main}>
            <h2>{course.id} : آیدی درس</h2> {/* che niazi hast ke in bashe */}
            <h2>{course.class_location} : مکان </h2>
            <h2>   زمان : {course.class_time}</h2>
            <h2> {course.exam_time} : امتحان</h2>
            <h2> :دستیاران
                <ul>
                    {course.assistant_profiles.map((assistant) => {
                        return <li key={assistant.id}>{assistant.name}</li>
                    })}</ul></h2>
            </div>
            {/* <h3> : دانشجو ها  <ul>
                {course.student_profiles.map((student) => {
                    return <li key={student.id}>{student.name}</li>
                })}</ul></h3> */}

            <div className={classes.bodyCircleBtn}>
                <div className={classes.CircleBtn}> <BiSolidGroup className={classes.place}/> <p className={classes.CircleBtnText}> اعضا </p></div>
                <div className={classes.CircleBtn}> <FaUsers className={classes.place1}/> <p className={classes.CircleBtnText}> لیست گروه ها</p></div>
                <div className={classes.CircleBtn}> <FaBookOpenReader className={classes.place}/> <p className={classes.CircleBtnText}> پروژه ها </p></div>
                <div className={classes.CircleBtn}> <FaCalendarAlt className={classes.place}/> <p className={classes.CircleBtnText}> تقویم </p></div>
                <div className={classes.CircleBtn}> <FaBookOpenReader className={classes.place}/><p className={classes.CircleBtnText}> جزوه </p></div>
                <div className={classes.CircleBtn}> <FaFileAlt className={classes.place}/> <p className={classes.CircleBtnText}> نمره </p></div>
            </div>
        </div >
    )
}