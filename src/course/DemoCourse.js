import { useEffect, useState } from 'react';
import Card from '../ui/Card';
import classes from './DemoCourse.module.css';

function DemoCourse({ courseId }) {
    const [course, setCourse] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/course/' + courseId).then((response) => {
            console.log("1 ", response);
            return response.json();
        }).then((data) => {
            console.log("2 ", data);
            setCourse(data);
        })
    }, [courseId])

    return (
        <div className={classes.demoCourseContainer}>
            <h1>{course['name'] || "نام درس"}</h1>
            <div className={classes.teacherCard}>
                <h3 >نام استاد</h3>
            </div>
            <div className={classes.informationCard}>
                <h3 className={classes.information}>{course.class_location || "هنوز تعیین نشده است"}</h3>
                <h3 className={classes.information}>{course.class_time || "هنوز تعیین نشده است"}</h3>
                <h4 className={classes.information}>{course.class_exam_time || "هنوز تعیین نشده است"}</h4>
            </div>
        </div>
    );
}

export default DemoCourse;