import { useEffect, useRef, useState } from "react";
import Card from "../../../../../ui/Card";
import Input from "../../../../../ui/Input";
import Checkbox from "../../../../../ui/CheckBox";
import classes from "./style/CreateSchedule.module.css";
import Button from "../../../../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../../store";
import Modal from "../../../../portal/Modal";

export default function GroupOwnerSchedule() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => {
    return state.modal;
  });
  const startTime = useRef("");
  const endTime = useRef("");
  const date = useRef("");
  const customRecipintsNumber = useRef("");
  const [period, setPeriod] = useState(10);
  const [receiversRadioBtn, setReceiversRadioBtn] = useState("assistant");
  const [requestData, setRequestData] = useState(null);

  function logTimes() {
    console.log(startTime.current.value, "start");
    console.log(endTime.current.value, "end");
    console.log(date.current.value, "date");
  }

  function selectPeriod(e) {
    console.log(e.target.value, "minutes");
    setPeriod(e.target.value);
  }

  function receiversRadiobuttonhandler(e) {
    console.log(e.target.value);
    setReceiversRadioBtn(e.target.value);
  }

  function createScheduleClicked() {
    if (receiversRadioBtn === "custom") {
      const data = {
        date: date.current.value,
        start_time: startTime.current.value,
        finish_time: endTime.current.value,
        period: period,
        number_of_recipints: customRecipintsNumber.current.value,
      };
      setRequestData(data);
    } else if (receiversRadioBtn === "assistant") {
      const data = {
        date: date.current.value,
        start_time: startTime.current.value,
        finish_time: endTime.current.value,
        period: period,
        number_of_recipints: -1,
      };
      setRequestData(data);
    }

    // setRequestData(data)
    dispatch(setModal("create-project-schedule"));
  }

  return (
    <>
      {modal === "create-project-schedule" && (
        <Modal data={requestData} createSchedule />
      )}
      <Card changePass>
        <h2 className={classes.title} onClick={logTimes}>
          ساخت تایم ارائه
        </h2>

        <div className={classes.dateContainer}>
          <p>تاریخ </p>
          <Input type="date" innerRef={date} date />
        </div>

        <div className={classes.timeContainer}>
          <p>از </p>
          <Input type="time" innerRef={startTime} time />
          <p>تا </p>
          <Input type="time" innerRef={endTime} time />
        </div>

        <div className={classes.periodContainer}>
          <p>بازه های </p>
          <select
            id="period"
            name="period"
            defaultValue={10}
            onChange={selectPeriod}
            className={classes.select}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <p>دقیقه ای</p>
        </div>

        <div className={classes.receiveContainer}>
          <h3 className={classes.numTitel}>تعداد دریافت کنندگان پروژه</h3>
          <div
            className={classes.receiversRadiobuttonContainer}
            onChange={receiversRadiobuttonhandler}
          >
            <label className={classes.assistantRadiobuttonContainer}>
              <input
                type="radio"
                value="assistant"
                name="receiversNumber"
                className={classes.circle}
              />
              به تعداد دستیار ها
            </label>
            <label className={classes.customRadiobuttonContainer}>
              <input
                type="radio"
                value="custom"
                name="receiversNumber"
                className={classes.circle}
              />
              دستی
            </label>
          </div>
          {receiversRadioBtn === "custom" && (
            <div className={classes.customReceiversNumber}>
              <Input
                type="number"
                haveCounterInputs
                innerRef={customRecipintsNumber}
              />
              <p> نفر</p>
            </div>
          )}
        </div>

        <Button submit click={createScheduleClicked}>
          ساخت سلول های زمانبندی
        </Button>
      </Card>
    </>
  );
}
