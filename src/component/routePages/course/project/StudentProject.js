import classes from "./project/style/StudentProject.module.css";
import Card from "../../../ui/Card";
import Button from "./../../../ui/Button";
export default function StudentProject() {
  return (
    <Card studentProject>
      <h2 className={classes.title}>ارسال پروژه</h2>
      <h3> نام گروه : گروه اول </h3>
      <h3> ارسال کننده فایل پروژه : کتایون غمگسار </h3>
      <h3> pdf : نوع فایل پروژه </h3>
      <input type="file" />
      <Button submit>ارسال پروژه</Button>
    </Card>
  );
}
