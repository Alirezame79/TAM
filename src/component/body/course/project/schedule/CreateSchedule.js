import { useEffect, useRef, useState } from "react";
import Card from "../../../../../ui/Card";
import Input from "../../../../../ui/Input";
import Checkbox from "../../../../../ui/CheckBox";
import classes from "./style/CreateSchedule.module.css";
import Button from "../../../../../ui/Button";

export default function GroupOwnerSchedule() {
  const startTime = useRef("");
  const endTime = useRef("");
  const date = useRef("");
  const [period, setPeriod] = useState(10);
  const [receiversRadioBtn, setReceiversRadioBtn] = useState("assistant");

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

  return (
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
            <Input type="number" haveCounterInputs />
            <p> نفر</p>
          </div>
        )}
      </div>

      <Button submit>ساخت سلول های زمانبندی</Button>
    </Card>
  );
}
