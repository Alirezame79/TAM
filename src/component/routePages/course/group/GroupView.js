import classes from "./style/DetailGroup.module.css";
import Card from "../../../../ui/Card";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import useDetailGroup from "../../../../fetch/useDetailGroup";

export default function GroupView() {
  const { id } = useParams();
  const { data } = useDetailGroup(id);
  const groupName = useRef("");
  const groupDescription = useRef("");

  if (data === undefined) return;
  console.log(data);

  return (
    <div className={classes.content}>
      <div className={classes.groupName}>
        <h1 className={classes.groupNameText}>{data.group.name} </h1>
      </div>
      <div className={classes.groupView}>
        <Card groupViweDescription>
          <p className={classes.descriptionText}>
            {data.group.description || "jkbhbhbjbjngvbrbobogb"}
          </p>
        </Card>

        <Card groupViweMember>
          <h2 className={classes.labelOfMembers}>: سر گروه </h2>
          <h3 className={classes.nameOfMembers}> کتایون غمگسار</h3>
          {/* tamame h3 ha  baiad meghdar ro begiran*/}
          <h2 className={classes.labelOfMembers}>: اعضا گروه </h2>
          <h3 className={classes.nameOfMembers}> کتایون غمگسار</h3>
          <h3 className={classes.nameOfMembers}> کتایون غمگسار</h3>
          <h3 className={classes.nameOfMembers}> کتایون غمگسار</h3>
        </Card>
      </div>
    </div>
  );
}
