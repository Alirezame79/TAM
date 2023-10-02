import { useParams } from "react-router-dom";
import useGetCourseSetting from "../../../fetch/useGetCourseSetting";
import Card from "../../../ui/Card";
import classes from "./style/CourseSetting.module.css";
import Input from "../../../ui/Input";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Button from "../../../ui/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setModal } from "../../../store/index";
import useCheckNewAssistant from "../../../fetch/useCheckNewAssistant";
import Modal from "../../portal/Modal";
import Loading from "../../loading/Loading";

export default function CourseSetting() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [checkNewAssistant, setCheckNewAssistant] = useState(null);
  const [removeAssistant, setRemoveAssistant] = useState(null);
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
  let newAssistant = useRef("");

  useGetCourseSetting(id);
  useCheckNewAssistant(checkNewAssistant, id);

  useEffect(() => {
    if (courseSetting === null) return <Loading />;
    classLocation.current.value = courseSetting.class_location;
    classTime.current.value = courseSetting.class_time;
    groupCapacity.current.value = courseSetting.group_capacity;
  }, [courseSetting]);

  // if (courseSetting === null) return;

  console.log(courseSetting);
  console.log(checkAssistant);

  function editCourseDataClicked() {
    let courseSetting = {
      class_time: classTime.current.value,
      class_location: classLocation.current.value,
      group_capacity: groupCapacity.current.value,
    };

    setData(courseSetting);
    dispatch(setModal("edit-course-setting"));
  }

  return (
    <>
      {modal === "edit-course-setting" && <Modal data={data} courseSetting />}
      {modal === "check-course-assistant" && (
        <Modal data={checkAssistant} addAssistant />
      )}
      {modal === "remove-course-assistant" && (
        <Modal data={removeAssistant} removeAssistant />
      )}

      <div className={classes.content}>
        <Card courseSetting>
          <h2 className={classes.title}>ویرایش درس</h2>
          <div className={classes.Inputs}>
            <div className={classes.courseSettingInput}>
              <label htmlFor="Class Location" className={classes.labels}>
                مکان تشکیل کلاس
              </label>
              <Input
                innerRef={classLocation}
                id="Class Location"
                courseSetting
              />
            </div>

            <div className={classes.courseSettingInput}>
              <label htmlFor="Class Time" className={classes.labels}>
                زمان تشکیل کلاس
              </label>
              <Input innerRef={classTime} id="Class Time" courseSetting />
            </div>
          </div>
          <div className={classes.haveCounterInputs}>
            <div className={classes.courseSettingInput}>
              <label htmlFor="Group Capacity" className={classes.numberLabels}>
                {" "}
                تعداد اعضا گروه ها
              </label>
              <Input
                type="number"
                innerRef={groupCapacity}
                id="Group Capacity"
                haveCounterInputs
              />
            </div>
          </div>

          <Button submit click={editCourseDataClicked}>
            ثبت تغییرات
          </Button>
        </Card>

        <Card assistants>
          {assistantList !== undefined && (
            <>
              <h2 className={classes.title}> لیست دستیاران </h2>
              {assistantList.map((profile) => {
                return (
                  <div className={classes.addDeletAssistant} key={profile.id}>
                    <h4 className={classes.assistants}>{profile.name}</h4>
                    <FaUserMinus
                      className={classes.deleteAssistantIcon}
                      onClick={function removeAssistantClicked() {
                        setRemoveAssistant(profile);
                        dispatch(setModal("remove-course-assistant"));
                        console.log(removeAssistant);
                      }}
                    />
                  </div>
                );
              })}
              <div className={classes.addDeletAssistant}>
                <Input
                  addDeletAssistant
                  innerRef={newAssistant}
                  placeholder="شماره دانشجویی دستیار جدید"
                />
                <FaUserPlus
                  className={classes.addAssistantIcon}
                  onClick={function newAssistantClicked() {
                    let newAssistantId = {
                      student_id: newAssistant.current.value,
                    };

                    newAssistant.current.value = "";

                    setCheckNewAssistant(newAssistantId);
                    console.log(checkAssistant);
                  }}
                />
              </div>
            </>
          )}
        </Card>
      </div>
    </>
  );
}
