import classes from "./style/GroupOwnerSchedule.module.css";
import { useSelector } from "react-redux";
import Card from "../../../../../ui/Card";
import useStudentRoundList from "../../../../../fetch/useStudentRoundList";
import Buttom from "./../../../../../ui/Button";
import { useState } from "react";

export default function GroupOwnerSchedule() {
  // let selected2 = true
  const [choose, setChoose] = useState(null);
  const roundList = useSelector((state) => {
    return state.studentRoundList;
  });
  useStudentRoundList();

  if (roundList === undefined) return;

  return (
    <Card groupOwnerSchedule>
      <h2 className={classes.title}>زمانبندی تحویل پروژه</h2>
      <div className={classes.list}>
        {roundList.map((eachRound) => {
          return (
            <>
              {(choose === eachRound.id && eachRound.selected) ||
              choose === eachRound.id ? (
                <Card studentRoundSelect key={eachRound.id}>
                  <div className={classes.roundContainer}>
                    <h3>{eachRound.round_name} </h3>
                    <h3>{eachRound.start_time}</h3>
                    <h3>تا</h3>
                    <h3>{eachRound.finish_time}</h3>
                  </div>
                  <h3> {eachRound.round_capacity} : ظرفیت باقی مانده </h3>
                </Card>
              ) : eachRound.selected ? (
                <Card
                  studentRoundSet
                  key={eachRound.id}
                  click={function newRoundClicked() {
                    console.log(eachRound.id);
                    setChoose(eachRound.id);
                  }}
                >
                  <div className={classes.roundContainer}>
                    <h3>{eachRound.round_name} </h3>
                    <h3>{eachRound.start_time}</h3>
                    <h3>تا</h3>
                    <h3>{eachRound.finish_time}</h3>
                  </div>
                  <h3> {eachRound.round_capacity} : ظرفیت باقی مانده </h3>
                </Card>
              ) : (
                <Card
                  studentRound
                  key={eachRound.id}
                  click={function newRoundClicked() {
                    console.log(eachRound.id);
                    setChoose(eachRound.id);
                  }}
                >
                  <div className={classes.roundContainer}>
                    <h3>{eachRound.round_name} </h3>
                    <h3>{eachRound.start_time}</h3>
                    <h3>تا</h3>
                    <h3>{eachRound.finish_time}</h3>
                  </div>
                  <h3> {eachRound.round_capacity} : ظرفیت باقی مانده </h3>
                </Card>
              )}
            </>
          );
        })}
      </div>
      <Buttom submit>ثبت زمان تحویل پروژه</Buttom>
    </Card>
  );
}
