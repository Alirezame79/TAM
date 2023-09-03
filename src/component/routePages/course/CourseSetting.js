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
import CheckNewAssistantModal from "../../Portal/CheckNewAssistantModal";
import useCheckNewAssistant from "../../../fetch/useCheckNewAssistant";
import useRemoveAssistant from "../../../fetch/useRemoveAssistant";
import ConfirmRemoveAssistantModal from "../../Portal/ConfirmRemoveAssistantModal";

export default function CourseSetting() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [checkNewAssistant, setCheckNewAssistant] = useState(null)
  const [removeAssistant, setRemoveAssistant] = useState(null)
  const dispatch = useDispatch();
  const modal = useSelector((state) => {
    return state.modal;
  });
  const checkAssistant = useSelector((state) => {
    return state.checkAssistant;
  });
  const courseSetting = useSelector((state) => {
    return state.courseSetting;
  });
  const assistantList = useSelector((state) => {
    return state.assistantList;
  });
  let classLocation = useRef("");
  let classTime = useRef("");
  let groupCapacity = useRef("");
  let projectPhase = useRef("");
  let newAssistant = useRef("");

  useGetCourseSetting(id)
  useCheckNewAssistant(checkNewAssistant, id)
  // useRemoveAssistant(removeAssistant, id)

  useEffect(() => {
    if (courseSetting === null) return;
    classLocation.current.value = courseSetting.class_location;
    classTime.current.value = courseSetting.class_time;
    groupCapacity.current.value = courseSetting.group_capacity;
    projectPhase.current.value = courseSetting.projects_phase;
  }, [courseSetting]);

  // if (courseSetting === null) return;

  console.log(courseSetting);
  console.log(checkAssistant)

  function editCourseDataClicked() {
    let courseSetting = {
      class_time: classTime.current.value,
      class_location: classLocation.current.value,
      group_capacity: groupCapacity.current.value,
      projects_phase: projectPhase.current.value,
    };

    setData(courseSetting);
    dispatch(setModal("confirm-course-setting"));
  }

  return (
    <div className={classes.content}>
      {modal === "confirm-course-setting" && (<ConfirmCourseSettingModal data={data} courseId={id} />)}
      {modal === "check-course-assistant" && (<CheckNewAssistantModal newAssistantData={checkAssistant} courseId={id} />)}
      {modal === "remove-course-assistant" && (<ConfirmRemoveAssistantModal oldAssistant={removeAssistant} courseId={id} />)}
      <Card courseSetting>
        <h2 className={classes.title}>ویرایش درس</h2>
        <div className={classes.Inputs}>
          <div className={classes.courseSettingInput}>
            <label htmlFor="Class Location" className={classes.labels}>
              مکان کلاس
            </label>
            <Input innerRef={classLocation} id="Class Location" courseSetting />
          </div>

          <div className={classes.courseSettingInput}>
            <label htmlFor="Class Time" className={classes.labels}>
              زمان کلاس
            </label>
            <Input innerRef={classTime} id="Class Time" courseSetting />
          </div>
        </div>
        <div className={classes.haveCounterInputs}>
          <div className={classes.courseSettingInput}>
            <label htmlFor="Group Capacity" className={classes.numberLabels}>
              {" "}
              تعداد اعضا گروه
            </label>
            <Input
              type="number"
              innerRef={groupCapacity}
              id="Group Capacity"
              haveCounterInputs
            />
          </div>

          <div className={classes.courseSettingInput}>
            <label htmlFor="Projects Phase " className={classes.numberLabels}>
              {" "}
              تعداد فازهای پروژه
            </label>
            <Input
              type="number"
              innerRef={projectPhase}
              id="Projects Phase "
              haveCounterInputs
            />
          </div>
        </div>
        <Button submit click={editCourseDataClicked}>
          مرحله بعد
        </Button>
      </Card>

      <Card assistants>
        {assistantList !== undefined && <>
          <h2 className={classes.title}> لیست دستیاران </h2>
          {assistantList.map((profile) => {
            return (
              <div className={classes.addDeletAssistant} key={profile.id}>
                <h4 className={classes.assistants}>
                  {profile.name}
                </h4>
                <FaUserMinus className={classes.deleteAssistantIcon} onClick={
                  function removeAssistantClicked() {
                    setRemoveAssistant(profile)
                    dispatch(setModal('remove-course-assistant'))
                    console.log(removeAssistant)
                  }} />
              </div>
            );
          })}
          <div className={classes.addDeletAssistant}>
            <Input addDeletAssistant innerRef={newAssistant} placeholder="شماره دانشجویی دستیار جدید" />
            <FaUserPlus className={classes.addAssistantIcon} onClick={
              function newAssistantClicked() {

                let newAssistantId = {
                  student_id: newAssistant.current.value
                }

                setCheckNewAssistant(newAssistantId)
                console.log(checkAssistant)
              }} />
          </div>
        </>}
      </Card>
    </div>
  );
}
