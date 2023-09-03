import classes from "./style/DetailGroup.module.css";
import Input from "../../../../ui/Input";
import { FaUserPlus, FaTrashAlt, FaCog, FaUserMinus } from "react-icons/fa";
import Card from "../../../../ui/Card";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import useDetailGroup from "../../../../fetch/useDetailGroup";

export default function CreateGroup() {
  const { id } = useParams();
  const { data } = useDetailGroup(id);
  const groupName = useRef("");
  const groupDescription = useRef("");

  // useEffect(() => {
  //     if (data === undefined) return
  //     groupName.current.value = data.group.name;
  //     groupDescription.current.value = data.group.description;
  // }, [data])

  if (data === undefined) return;
  console.log(data);

  return (
    <div className={classes.content}>
      <Card detailGroup>
        <h2 className={classes.title}>اطلاعات گروه</h2>
        <div className={classes.icons}>
          <FaCog className={classes.icon} />
          <FaTrashAlt className={classes.icon} />
        </div>
        <div className={classes.detailGroupSubjects}>
          <h2>: نام گروه</h2>
          <h3 className={classes.info}> {data.group.name} </h3>
        </div>
        <div className={classes.detailGroupSubjects}>
          <h2>: نام درس</h2>
          <h3 className={classes.info}>{data.course.name} </h3>
        </div>

        <div className={classes.detailGroupSubjects}>
          <h2>: استاد</h2>
          <h3 className={classes.info}> {data.course.owner.name} </h3>
        </div>
        <div className={classes.detailGroupSubjects}>
          <h2>:حداکثر ظرفیت گروه ها </h2>
          <h3 className={classes.info}>5 </h3>
        </div>
        <div className={classes.detailGroupSubjects}>
          <h2>: توضیجات</h2>
          <h3 className={classes.info}>{data.group.description} </h3>
        </div>
      </Card>

      <Card addMemberOfGroup>
        <h2 className={classes.title}> اعضا گروه</h2>
        {data.group.members.map((member) => {
          return (
            <div className={classes.member}>
              <h3 key={member.id}>{member.name} </h3>
              <FaUserMinus className={classes.addMemberOfGroupIcon} />
            </div>
          );
        })}
        {/* <div className={classes.member}>
                    <h3>کتایون غمگسار</h3>
                    <FaUserMinus className={classes.addMemberOfGroupIcon}/>
                </div> */}

        <div className={classes.addMemberOfGroup}>
          <Input addMemberOfGroup />
          <FaUserPlus className={classes.addMemberOfGroupIcon} />
        </div>
      </Card>
    </div>
  );
}
