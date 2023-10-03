import classes from "./style/GroupOwnerSchedule.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../../../ui/Card";
import useStudentRoundList from "../../../../../fetch/useStudentRoundList";
import Buttom from "./../../../../../ui/Button";
import { useEffect, useState } from "react";
import Loading from "../../../../loading/Loading";
import { setModal } from "../../../../../store";
import Modal from "../../../../portal/Modal";
import { toast } from "react-toastify";

export default function GroupOwnerSchedule() {
  const dispatch = useDispatch();
  const [choose, setChoose] = useState(null);
  const [data, setData] = useState(null);
  const [extraData, setExtraData] = useState(null);
  const roundList = useSelector((state) => {
    return state.studentRoundList;
  });
  const modal = useSelector((state) => {
    return state.modal;
  });
  const [selectedRound, setSelectedRound] = useState("");
  useStudentRoundList();

  useEffect(() => {
    if (roundList === undefined || Object.keys(roundList).length === 0) return;

    roundList.map((eachRound) => {
      if (eachRound.selected) {
        setSelectedRound(eachRound.id);
      }
    });
  }, [roundList, selectedRound]);

  function selectRoundClicked() {
    if (choose === null) {
      toast.error("لطفا زمانبندی خود را انتخاب کنید");
      return;
    }
    const roundsData = {
      pervious_round_id: selectedRound,
      round_id: choose,
    };
    setData(roundsData);
    dispatch(setModal("select-round-schedule"));
  }

  if (roundList === undefined || Object.keys(roundList).length === 0) {
    return <Loading />;
  } else {
    return (
      <>
        {modal === "select-round-schedule" && (
          <Modal data={data} extraData={extraData} selectRound />
        )}
        <Card groupOwnerSchedule>
          <h2 className={classes.title}>زمانبندی تحویل پروژه</h2>
          <div className={classes.list}>
            {roundList.map((eachRound) => {
              return (
                <div key={eachRound.id}>
                  {(choose === eachRound.id && eachRound.selected) ||
                  choose === eachRound.id ? (
                    <Card studentRoundSelect key={eachRound.id}>
                      <div className={classes.roundContainer}>
                        <h3> : {eachRound.round_name} </h3>
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
                        const exData = {
                          startTime: eachRound.start_time,
                          endTime: eachRound.finish_time,
                        };
                        setExtraData(exData);
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
                        const exData = {
                          startTime: eachRound.start_time,
                          endTime: eachRound.finish_time,
                        };
                        setExtraData(exData);
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
                </div>
              );
            })}
          </div>
          <Buttom submit click={selectRoundClicked}>
            ثبت زمان تحویل پروژه
          </Buttom>
        </Card>
      </>
    );
  }
}
