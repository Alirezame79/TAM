import classes from "./style/GroupView.module.css";
import Card from "../../../../ui/Card";
import  Button from "../../../../ui/Button";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useDetailGroup from "../../../../fetch/useDetailGroup";
import { useDispatch, useSelector } from "react-redux";
import ConfirmLeaveGroupModal from "../../../portal/ConfirmLeaveGroupModal";
import { setModal } from "../../../../store";

export default function GroupView() {
  const { id } = useParams();
  const { data } = useDetailGroup(id);
  const dispatch = useDispatch()
  const groupName = useRef("");
  const groupDescription = useRef("");
  const [modalData, setModalData] = useState(null)
  const modal = useSelector((state) => {
    return state.modal;
  });

  if (data === undefined) return;
  console.log(data);

  function leaveGroupClicked() {
    dispatch(setModal("confirm-leave-group"))
  }

  return (
    <>
      {modal === "confirm-leave-group" && (
      <ConfirmLeaveGroupModal data={data.group.id}/>
      )}
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
            <h3 className={classes.nameOfMembers}>{data.group.creator.name}</h3>
            <h2 className={classes.labelOfMembers}>: اعضا گروه </h2>
            {data.group.members.map((member) => {
              return <h3 className={classes.nameOfMembers} key={member.id}>{member.name}</h3>
            })}
          </Card>
        </div>
        <Button click={leaveGroupClicked}>Leave Group</Button>
      </div>
    </>
  );
}
