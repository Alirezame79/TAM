import classes from './RouterCourse.module.css';

export default function RouterCourse({ name }) {

    return (
        <h4 className={classes.courseName}>{name || "نام درس"}</h4>
    )
}