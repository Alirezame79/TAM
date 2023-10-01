import classes from "./style/TeacherSchedule.module.css";
import useTeacherRoundList from "../../../../../fetch/useTeacherRoundList";
import Card from "../../../../../ui/Card";
import { useSelector } from "react-redux";
import useRemoveRound from "../../../../../fetch/useRemoveRound";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function TeacherSchedule() {
  const roundList = useSelector((state) => {
    return state.teacherRoundList;
  });
  const [deletedRound, setDeletedRound] = useState(null);
  useTeacherRoundList();
  useRemoveRound(deletedRound);

  console.log(roundList);
  if (roundList === undefined) return;

  return (
    <Card teacherSchedule>
      <h2 className={classes.title}>لیست زمانبندی های پروژه</h2>

      {roundList.map((eachRound) => {
        return (
          <Card round key={eachRound.id}>
            <FaTrashAlt
              className={classes.deletIcon}
              click={function deleteRoundClicked() {
                console.log(eachRound.id);
                const round = {
                  round_id: eachRound.id,
                };
                setDeletedRound(round);
              }}
            >
              Delete
            </FaTrashAlt>

            <div className={classes.roundDataContainer}>
              <h3 className={classes.roundName}>{eachRound.round_name}</h3>
              <h3>{eachRound.start_time.substring(0, 5)} </h3>
              <h3>{eachRound.finish_time.substring(0, 5)} - </h3>
            </div>

            <div className={classes.roundGroupNameContainer}>
              {eachRound.groups.map((group) => {
                return (
                  <div className={classes.roundGroup} key={group.id}>
                    <h5>{group.name}</h5>
                  </div>
                );
              })}
            </div>
          </Card>
        );
      })}
    </Card>
  );
}
