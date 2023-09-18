import classes from "./style/UploadProject.module.css";
import Card from "../../../../ui/Card";
import Button from "../../../../ui/Button";
import useGetStudentProject from "../../../../fetch/useGetStudentProject";

export default function UploadProject() {
  useGetStudentProject();

  return (
    <Card uploadProject>
      <h2 className={classes.title}> پروژه</h2>
      <h3> نام گروه : گروه اول </h3>
      <h3> ارسال کننده فایل پروژه : کتایون غمگسار </h3>
      <h3> pdf : نوع فایل پروژه </h3>
      <input type="file" />
      <Button submit>ارسال پروژه</Button>
    </Card>
  );
}
