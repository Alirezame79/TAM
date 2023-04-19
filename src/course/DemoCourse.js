import Card from '../ui/Card';
import classes from './DemoCourse.module.css';

function DemoCourse() {
    return (
        <div className={classes.demoCourseContainer}>
            <h1>نام درس</h1>
            <Card>
                <h3>نام استاد</h3>
            </Card>
            <Card>
                <h3>مکان کلاس</h3>
                <h3>زمان برگزاری کلاس</h3>
                <h4>تعداد اعضای کلاس</h4>
            </Card>
        </div>
    );
}

export default DemoCourse;