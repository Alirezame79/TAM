import classes from './MiniCourse.module.css';

function MiniCourse() {
    return (
        <div className={classes.container}>
            <h2>نام درس</h2>
            <h5 className={classes.text} >نام استاد</h5>
            <h5 className={classes.text} >مکان برگذاری</h5>
            <h5 className={classes.text} >زمان برگذاری</h5>

        </div>
    );
}

export default MiniCourse;