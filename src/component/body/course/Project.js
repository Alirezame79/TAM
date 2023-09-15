import { useSelector } from "react-redux"
import Card from "../../../ui/Card";
import ManageProject from "./project/ManageProject";
import useCourse from "../../../fetch/useCourse";
import ProjectList from "./project/ProjectList";
import UploadProject from "./project/UploadProject";
import ViewProject from "./project/ViewProject";


export default function Project() {
    useCourse()
    const role = useSelector((state) => {
        return state.course;
    })

    console.log(role)

    if (role.group_status === 1) {
        return <ManageProject />
      } else if (role.group_status === 2) {
        return <ProjectList />
      } else if (role.group_status === 3 || role.group_status === 4) {
        return <UploadProject />
      } else if (role.group_status === 5) {
        return <ViewProject />
      } else {
        return (
          <Card  profile>
            <h1>Group</h1>
          </Card>
        )
      }
}