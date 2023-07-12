import { useEffect, useState } from 'react';
import Card from '../ui/Card';
import classes from './DemoCourse.module.css';

function DemoCourse({ courseId }) {
    const [course, setCourse] = useState('');

    // console.log(window.location.pathname.substring(8))
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
            <h1>{course.name}</h1>
            <Card>
                <h3>نام استاد</h3>
            </Card>
            <Card>
                <h3>{course.class_location || "هنوز تعیین نشده است"}</h3>
                <h3>{course.class_time || "هنوز تعیین نشده است"}</h3>
                <h4>{course.class_exam_time || "هنوز تعیین نشده است"}</h4>
            </Card>
        </div>
    );
}

export default DemoCourse;