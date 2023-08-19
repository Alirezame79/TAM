import { useParams } from "react-router-dom";
import useCourseSetting from "../../../fetch/useCourseSetting";
import Card from "../../../ui/Card";

export default function CourseSetting() {
    const { id } = useParams();
    const { res } = useCourseSetting(id);

    if (res === null) return

    console.log(res)

    return (
        <Card login>
            <h3>Assistants</h3>
            {res.assistant_profiles.map((profile) => {
                return (
                    <h3 key={profile}>{profile}</h3>
                )
            })}
            <h3>Class Location {res.class_location}</h3>
            <h3>Class Time {res.class_time}</h3>
            <h3>Group Capacity{res.group_capacity}</h3>
            <h3>Projects Phase  {res.projects_phase}</h3>
        </Card>
    )
}