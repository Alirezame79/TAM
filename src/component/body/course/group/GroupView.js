import classes from "./style/GroupView.module.css";
import Card from "../../../../ui/Card";
import Button from "../../../../ui/Button";
import { useParams } from "react-router-dom";
import useDetailGroup from "../../../../fetch/useDetailGroup";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../store";
import Modal from "../../../portal/Modal";
import { BiLogOut } from "react-icons/bi";

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

      <Card groupView>
        <div className={classes.groupName}>
          <h2 className={classes.groupNameText}>
            اطلاعات گروه {data.group.name}{" "}
          </h2>
          <BiLogOut className={classes.icon} click={leaveGroupClicked}>
            Leave Group
          </BiLogOut>
        </div>
        <div className={classes.groupView}>
          <div className={classes.groupMember}>
            <h3 className={classes.labelOfMembers}>: اعضا گروه </h3>
            <h4 className={classes.nameOfOwner}>{data.group.creator.name}</h4>

            {data.group.members.map((member) => {
              return (
                <h5 className={classes.nameOfMembers} key={member.id}>
                  {member.name}
                </h5>
              );
            })}
          </div>
          <div>
            <h3 className={classes.description}>: توضیحات</h3>
            <p className={classes.descriptionText}>
              {data.group.description || "توضیحات"}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
