import classes from './style/TeacherSchedule.module.css'
import useTeacherRoundList from "../../../../../fetch/useTeacherRoundList";
import Card from "../../../../../ui/Card";
import { useSelector } from 'react-redux';
import Button from '../../../../../ui/Button';
import useRemoveRound from '../../../../../fetch/useRemoveRound';
import { useState } from 'react';


export default function TeacherSchedule() {
    const roundList = useSelector((state) => {
        return state.teacherRoundList;
    })
    const [deletedRound, setDeletedRound] = useState(null)
    useTeacherRoundList()
    useRemoveRound(deletedRound)

    console.log(roundList)
    if (roundList === undefined) return

    return (
        <Card changePass>
            <h2 className={classes.title}>لیست زمانبندی های پروژه</h2>

            {roundList.map((eachRound) => {
                return (
                    <div className={classes.roundContainer} key={eachRound.id}>

                        <Button click={function deleteRoundClicked() {
                            console.log(eachRound.id)
                            const round = {
                                round_id: eachRound.id
                            }
                            setDeletedRound(round)
                        }}>
                            Delete</Button>

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