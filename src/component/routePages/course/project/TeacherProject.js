import classes from "./project/style/TeacherProject.module.css";
import Card from "../../../ui/Card";
import Button from "./../../../ui/Button";
import Input from "../../../ui/Input";
import SwitchInput from "../../../ui/SwitchInput";
import { FaFileAlt } from "react-icons/fa";
export default function TeacherProject() {
  return (
    <Card teacherProject>
      <h2 className={classes.title}>مدیریت پروژه</h2>
      <h3> : آپلود صورت پروژه</h3>
      <FaFileAlt className={classes.icon} />
      <input type="file" />
      <div className={classes.descriptionInput}>
        <label htmlFor="bio" className={classes.label}>
          : توضیحات
        </label>
        <Input editProfileBio />
      </div>

      <div className={classes.enable}>
        <label className={classes.label}>: فعال سازی پروژه</label>
        <SwitchInput />
      </div>

      <Button submit>ثبت پروژه</Button>
    </Card>
  );
}
