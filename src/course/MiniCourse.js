import classes from './MiniCourse.module.css';

function MiniCourse() {
    return (
        <div className={classes.container}>
            <h2>نام درس</h2>
            <h3>نام استاد</h3>
        </div>
    );
}

export default MiniCourse;