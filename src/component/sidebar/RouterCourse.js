import classes from './style/RouterCourse.module.css';

export default function RouterCourse({ course }) {

    return (
        <h4 className={classes.courseName}>{course.name || "نام درس"}</h4>
    )
}