import { useSelector } from "react-redux";
import Card from "../../../../../ui/Card";
import classes from './style/AssistantSchedule.module.css'
import useTeacherRoundList from "../../../../../fetch/useTeacherRoundList";


export default function AssistantSchedule() {
    const roundList = useSelector((state) => {
        return state.teacherRoundList;
    })
    useTeacherRoundList()

    console.log(roundList)
    if (roundList === undefined) return
    return (
        <Card changePass>
            <h2 className={classes.title}>لیست زمانبندی های پروژه</h2>

            {roundList.map((eachRound) => {
                return (
                    <div className={classes.roundContainer} key={eachRound.id}>
                        <div className={classes.roundDataContainer}>
                            <h4>{eachRound.round_name}</h4>
                            <h4>{eachRound.start_time.substring(0, 5)}</h4>
                            <h4>{eachRound.finish_time.substring(0, 5)} - </h4>
                        </div>

                        <div className={classes.roundDataContainer}>
                            {eachRound.groups.map((group) => {
                                return (
                                    <div className={classes.roundGroup} key={group.id}>
                                        <h5>{group.name}</h5>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </Card>
    )
}