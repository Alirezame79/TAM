import classes from "./style/GroupOwnerSchedule.module.css";
import { useSelector } from "react-redux";
import Card from "../../../../../ui/Card";
import useStudentRoundList from "../../../../../fetch/useStudentRoundList";
import Buttom from "./../../../../../ui/Button";

export default function GroupOwnerSchedule() {
  const roundList = useSelector((state) => {
    return state.studentRoundList;
  });
  useStudentRoundList();

  if (roundList === undefined) return;

  return (
    <Card groupOwnerSchedule>
      <h2 className={classes.title}>زمانبندی تحویل پروژه</h2>
      {roundList.map((eachRound) => {
        return (
          <Card studentRound key={eachRound.id}>
            <div className={classes.roundContainer}>
              <h3>{eachRound.round_name} </h3>
              <h3>{eachRound.start_time}</h3>
              <h3>تا</h3>
              <h3>{eachRound.finish_time}</h3>
              {eachRound.selected && <h3>:)</h3>}
            </div>
            <h3> {eachRound.round_capacity} : ظرفیت باقی مانده </h3>
          </Card>
        );
      })}
      <Buttom submit>ثبت زمان تحویل پروژه</Buttom>
    </Card>
  );
}

