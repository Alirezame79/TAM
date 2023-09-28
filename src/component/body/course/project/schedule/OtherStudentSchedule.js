import { useSelector } from "react-redux";
import Card from "../../../../../ui/Card";
import useStudentRoundList from "../../../../../fetch/useStudentRoundList";
import classes from './style/OtherStudentSchedule.module.css'


export default function OtherStudentSchedule() {
    const roundList = useSelector((state) => {
        return state.studentRoundList;
    })
    useStudentRoundList()

    return (
        <Card changePass>
            <h2 className={classes.title}>زمانبندی تحویل پروژه</h2>

            {roundList.map((eachRound) => {
                return (
                    <div className={classes.roundContainer}>
                        <h3>{eachRound.round_name}</h3>
                        <h3>{eachRound.start_time}</h3>
                        <h3>{eachRound.finish_time}</h3>
                        <h3> {eachRound.round_capacity}ظرفیت باقی مانده </h3>
                    </div>
                )
            })}
        </Card>
    )
}