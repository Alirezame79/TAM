import classes from "./style/CourseGroup.module.css";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { FaUserPlus } from "react-icons/fa";
import Card from "../../../ui/Card";

function CourseGroup() {
  return (
    <div className={classes.content}>
      <Card creatGroup>
        <h2 className={classes.title}>ساخت گروه</h2>
        <div className={classes.creatGroupInput}>
          <label htmlFor="Course Name">نام درس </label>
          <Input id="Course Name" creatGroup />
        </div>
        <div className={classes.creatGroupInput}>
          <label htmlFor="Group name">نام گروه</label>
          <Input id="Group name" creatGroup />
        </div>
        <div className={classes.creatGroupInput}>
          <label htmlFor="discription">توضیجات</label>
          <Input groupDiscription />
        </div>
        <Button submit>اضافه کردن اعضا گروه</Button>
      </Card>

      <Card addMemberOfGroup>
        <h2 className={classes.title}> اضافه کردن اعضا گروه</h2>
        <div className={classes.addMemberOfGroup}>
          <Input addMemberOfGroup />
          <FaUserPlus className={classes.addMemberOfGroupIcon} />
        </div>
      </Card>
    </div>
  );
}

export default CourseGroup;
