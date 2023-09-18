import classes from "./style/GroupView.module.css";
import Card from "../../../../ui/Card";
import Button from "../../../../ui/Button";
import { useParams } from "react-router-dom";
import useDetailGroup from "../../../../fetch/useDetailGroup";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../store";
import Modal from "../../../portal/Modal";

export default function GroupView() {
  const { id } = useParams();
  const { data } = useDetailGroup(id);
  const dispatch = useDispatch();
  const modal = useSelector((state) => {
    return state.modal;
  });

  if (data === undefined) return;
  console.log(data);

  function leaveGroupClicked() {
    dispatch(setModal("leave-group"));
  }

  return (
    <>
      {modal === "leave-group" && <Modal data={data.group.id} leaveGroup />}

      <div className={classes.content}>
        <div className={classes.groupName}>
          <h1 className={classes.groupNameText}>گروه {data.group.name} </h1>
        </div>
        <div className={classes.groupView}>
          <Card groupViweDescription>
            <p className={classes.descriptionText}>
              {data.group.description || "Description"}
            </p>
          </Card>

          <Card groupViweMember>
            <h2 className={classes.labelOfMembers}>: سر گروه </h2>
            <h3 className={classes.nameOfMembers}>{data.group.creator.name}</h3>
            <h2 className={classes.labelOfMembers}>: اعضا گروه </h2>
            {data.group.members.map((member) => {
              return (
                <h3 className={classes.nameOfMembers} key={member.id}>
                  {member.name}
                </h3>
              );
            })}
          </Card>
        </div>
        <Button remove click={leaveGroupClicked}>
          Leave Group
        </Button>
      </div>
    </>
  );
}
