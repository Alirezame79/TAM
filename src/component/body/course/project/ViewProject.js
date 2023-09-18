import classes from "./style/ViewProject.module.css";
import Card from "../../../../ui/Card";
import useGetStudentProject from "../../../../fetch/useGetStudentProject";
import BASEURL from "../../../../fetch/BaseURL";
import { useSelector } from "react-redux";
import { FaFileDownload } from "react-icons/fa";
export default function ViewProject() {
  const project = useSelector((state) => {
    return state.studentProject;
  });

  useGetStudentProject();

  console.log(project);

  return (
    <Card viewProject>
      <h4 className={classes.title}>
        دانشجو هنوز گروه ندارد درنتیجه تنها میتواند صورت پروژه را مشاهده نماید
      </h4>
      <div className={classes.filDown}>
        <FaFileDownload className={classes.icon} />
        {project.project_detail !== undefined && (
          <a
            className={classes.downLink}
            href={BASEURL + project.project_detail.project_file}
            target="_blank"
            rel="noreferrer"
          >
            <h3>دانلود صورت پروژه</h3>
          </a>
        )}
      </div>
    </Card>
  );
}
