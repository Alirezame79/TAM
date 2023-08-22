import { useParams } from "react-router-dom";
import useGetCourseSetting from "../../../fetch/useGetCourseSetting";
import Card from "../../../ui/Card";
import classes from "./style/CourseSetting.module.css";
import Input from "../../../ui/Input";
import { FaUserMinus, FaUserPlus, FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Button from "../../../ui/Button";
import ConfirmCourseSettingModal from "../../Portal/ConfirmCourseSettingModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setModal } from "../../../store/index";

export default function CourseSetting() {
  const { id } = useParams();
  const { res } = useGetCourseSetting(id);
  const [data, setData] = useState()
  const dispatch = useDispatch()
  const modal = useSelector((state) => {
    return state.modal;
  });
  let classLocation = useRef("");
  let classTime = useRef("");
  let groupCapacity = useRef("");
  let projectPhase = useRef("");

  useEffect(() => {
    if (res === null) return;
    classLocation.current.value = res.class_location;
    classTime.current.value = res.class_time;
    groupCapacity.current.value = res.group_capacity;
    projectPhase.current.value = res.projects_phase;
  }, [res]);

  if (res === null) return;

  console.log(res);

  function editCourseDataClicked() {
    let courseSetting = {
      class_time: classTime.current.value,
      class_location: classLocation.current.value,
      group_capacity: groupCapacity.current.value,
      projects_phase: projectPhase.current.value
    }

    setData(courseSetting)
    dispatch(setModal("confirm-course-setting"));

  }

  return (
    <div className={classes.content}>
      {modal === "confirm-course-setting" && <ConfirmCourseSettingModal data={data} editProfile />}
      <Card courseSetting>
        <h2 className={classes.title}>ویرایش درس</h2>
        <div className={classes.Inputs}>
          <div className={classes.courseSettingInput}>
            <label htmlFor="Class Location">مکان کلاس</label>
            <Input innerRef={classLocation} id="Class Location" courseSetting />
          </div>

          <div className={classes.courseSettingInput}>
            <label htmlFor="Class Time">زمان کلاس</label>
            <Input innerRef={classTime} id="Class Time" courseSetting />
          </div>
        </div>
        <div className={classes.haveCounterInputs}>
          <div className={classes.courseSettingInput}>
            <label htmlFor="Group Capacity"> تعداد اعضا گروه</label>
            <Input
              type="number"
              innerRef={groupCapacity}
              id="Group Capacity"
              haveCounterInputs
            />
          </div>

          <div className={classes.courseSettingInput}>
            <label htmlFor="Projects Phase "> تعداد فازهای پروژه</label>
            <Input
              type="number"
              innerRef={projectPhase}
              id="Projects Phase "
              haveCounterInputs
            />
          </div>
        </div>
        <Button submit click={editCourseDataClicked}>مرحله بعد</Button>
      </Card>

      <Card assistants>
        <h2 className={classes.title}> لیست دستیاران </h2>
        <div className={classes.addDeletAssistant}>
          <Input addDeletAssistant />
          <div className={classes.addDeletAssistantIcon}>
            {/* <FaUserMinus className={classes.minusIcon} /> */}
            <FaUserPlus />
          </div>
        </div>
        {res.assistant_profiles.map((profile) => {
          return (
            <h4 className={classes.assistants} key={profile}>
              {profile}
            </h4>
          );
        })}
      </Card>
    </div>
  );
}
