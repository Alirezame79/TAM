import classes from "./style/CreateGroup.module.css";
import Button from "../../../../ui/Button";
import Input from "../../../../ui/Input";
import { FaUserPlus } from "react-icons/fa";
import Card from "../../../../ui/Card";
import { useParams } from "react-router-dom";
import useCourseHeadData from "../../../../fetch/useCourseHeadData";
import { useRef, useState } from "react";
import useCreateGroup from "../../../../fetch/useCreateGroup";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../store";
import ConfirmCreateGroupModal from "../../../Portal/ConfirmCreateGroupModal";

export default function CreateGroup() {
  const { id } = useParams();
  const modal = useSelector((state) => {
    return state.modal;
  });
  const { data } = useCourseHeadData(id);
  const name = useRef("");
  const description = useRef("");
  const dispatch = useDispatch();
  const [groupData, setGroupData] = useState(null);
  // useCreateGroup(id, groupData)

  if (data === undefined) return;
  console.log(data);

  function createGroupClicked() {
    let group = {
      name: name.current.value,
      description: description.current.value,
    };
    setGroupData(group);

    dispatch(setModal("confirm-create-group"));
  }

  return (
    <div className={classes.content}>
      {modal === "confirm-create-group" && (
        <ConfirmCreateGroupModal data={groupData} courseId={id} />
      )}
      <Card creatGroup>
        <h2 className={classes.title}>ساخت گروه</h2>
        <div className={classes.creatGroupInput}>
          <label htmlFor="Group name">نام گروه</label>
          <Input id="Group name" creatGroup innerRef={name} />
        </div>
        <div className={classes.creatGroupInput}>
          <label htmlFor="Course Name">نام درس </label>
          <Input id="Course Name" placeholder={data.name} creatGroup readOnly />
        </div>
        <div className={classes.creatGroupInput}>
          <label htmlFor="master">استاد</label>
          <Input
            id="master"
            creatGroup
            placeholder={data.owner.name}
            readOnly
          />
        </div>
        <div className={classes.creatGroupInput}>
          <label htmlFor="discription">توضیجات</label>
          <Input groupDiscription innerRef={description} />
        </div>
        <Button submit click={createGroupClicked}>
          {" "}
          ساخت گروه
        </Button>
      </Card>

      {/* <Card addMemberOfGroup>
                <h2 className={classes.title}> اضافه کردن اعضا گروه</h2>
                <div className={classes.addMemberOfGroup}>
                    <Input addMemberOfGroup />
                    <FaUserPlus className={classes.addMemberOfGroupIcon} />
                </div>
            </Card> */}
    </div>
  );
}
