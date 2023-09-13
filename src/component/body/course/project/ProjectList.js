import classes from "./style/ProjectList.module.css";
import Card from "../../../../ui/Card";
import { FaFileDownload } from "react-icons/fa";

export default function ProjectList() {
  return (
    <Card projectList>
      <h2 className={classes.title}>لیست پروژه ها</h2>
      <Card projectListItem>
        <h3>گروه اول</h3>
        <FaFileDownload className={classes.icon} />
      </Card>
    </Card>
  );
}
