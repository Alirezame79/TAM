import classes from "./style/EditGroup.module.css";
import Button from "../../../../ui/Button";
import Input from "../../../../ui/Input";
import Card from "../../../../ui/Card";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import useDetailGroup from "../../../../fetch/useDetailGroup";

export default function CreateGroup() {
  const { id } = useParams();
  const { data } = useDetailGroup(id);
  const groupName = useRef("");
  const groupDescription = useRef("");

  useEffect(() => {
    if (data === undefined) return;
    groupName.current.value = data.group.name;
    groupDescription.current.value = data.group.description;
  }, [data]);

  if (data === undefined) return;
  console.log(data);

  return (
    <div className={classes.content}>
      <Card editGroup>
        <h2 className={classes.title}>ویرایش اطلاعات گروه</h2>
        <div className={classes.editGroupInput}>
          <label htmlFor="Group name">نام گروه</label>
          <Input id="Group name" editGroup innerRef={groupName} />
        </div>
        <div className={classes.editGroupInput}>
          <label htmlFor="Course Name">نام درس </label>
          <Input
            id="Course Name"
            placeholder={data.course.name}
            editGroup
            readOnly
          />
        </div>
        <div className={classes.editGroupInput}>
          <label htmlFor="master">استاد</label>
          <Input
            id="master"
            editGroup
            placeholder={data.course.owner.name}
            readOnly
          />
        </div>
        <div className={classes.editGroupInput}>
          <label htmlFor="discription">توضیجات</label>
          <Input groupDiscription innerRef={groupDescription} />
        </div>
        <Button submit>ویرایش اطلاعات گروه</Button>
      </Card>
    </div>
  );
}
