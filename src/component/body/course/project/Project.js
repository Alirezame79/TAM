import { useSelector } from "react-redux";
import Card from "../../../../ui/Card";
import ManageProject from "./ManageProject";
import useCourse from "../../../../fetch/useCourse";
import ProjectList from "./ProjectList";
import UploadProject from "./UploadProject";
import ViewProject from "./ViewProject";
import Loading from "../../../loading/Loading";

export default function Project() {
  useCourse();
  const role = useSelector((state) => {
    return state.course;
  });

  console.log(role);

  if (role === undefined || Object.keys(role).length === 0) {
    return <Loading />
  } else {
    if (role.group_status === 1) {
      return <ManageProject />;
    } else if (role.group_status === 2) {
      return <ProjectList />;
    } else if (role.group_status === 3 || role.group_status === 4) {
      return <UploadProject />;
    } else if (role.group_status === 5) {
      return <ViewProject />;
    }
  }
}
