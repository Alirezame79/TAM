import { useSelector } from "react-redux";
import useCourse from "../../../../../fetch/useCourse";
import Card from "../../../../../ui/Card";
import TeacherSchedule from "./TeacherSchedule";
import CreateSchedule from "./CreateSchedule";
import AssistantSchedule from "./AssistantSchedule";
import GroupOwnerSchedule from "./GroupOwnerSchedule";
import OtherStudentSchedule from "./OtherStudentSchedule";
import useSchedule from "../../../../../fetch/useSchedule";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import Loading from "../../../../loading/Loading";

export default function Schedule() {
  const { id } = useParams();
  const navigate = useNavigate();
  useSchedule();
  const role = useSelector((state) => {
    return state.scheduleRole;
  });

  useEffect(() => {
    console.log(role);
  }, [role]);

  if (role === undefined || Object.keys(role).length === 0) {
    return <Loading />;
  } else {
    if (role.schedule_status === 0) {
      toast.error("پروژه ی این درس توسط استاد تعریف نشده است");
      navigate("/course/" + id + "/project/");
    } else if (role.schedule_status === 1) {
      return <TeacherSchedule />;
    } else if (role.schedule_status === 2) {
      return <AssistantSchedule />;
    } else if (role.schedule_status === 3) {
      return <GroupOwnerSchedule />;
    } else if (role.schedule_status === 4) {
      return <OtherStudentSchedule />;
    } else if (role.schedule_status === 5) {
      return <CreateSchedule />;
    } else if (role.schedule_status === 6) {
      toast.error("این بخش توسط استاد هنوز فعال نشده است");
      navigate("/course/" + id);
    }
  }
}
