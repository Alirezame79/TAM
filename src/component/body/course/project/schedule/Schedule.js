import { useSelector } from "react-redux";
import useCourse from "../../../../../fetch/useCourse";
import Card from "../../../../../ui/Card";
import TeacherSchedule from "./TeacherSchedule";
import AssistantSchedule from "./AssistantSchedule";
import GroupOwnerSchedule from "./GroupOwnerSchedule";
import OtherSchedule from "./OtherSchedule";


export default function Schedule() {
    useCourse();
    const role = useSelector((state) => {
      return state.course;
    });

    if (role.group_status === 1) {
        return <TeacherSchedule />
    } else if (role.group_status === 2) {
        return <AssistantSchedule />
    } else if (role.group_status === 3) {
        return <GroupOwnerSchedule />
    } else if (role.group_status === 4 || role.group_status === 5) {
        return <OtherSchedule />
    } else {
        return (
            <Card profile>
                <h1>Schedule</h1>
            </Card>
        );
    }
}