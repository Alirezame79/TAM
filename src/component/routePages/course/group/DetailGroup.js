import classes from "./style/DetailGroup.module.css";
import Input from "../../../../ui/Input";
import { FaUserPlus, FaTrashAlt, FaCog, FaUserMinus } from "react-icons/fa";
import Card from "../../../../ui/Card";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useDetailGroup from "../../../../fetch/useDetailGroup";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../store";
import ConfirmRemoveGroupModal from "../../../Portal/ConfirmRemoveGroupModal";
import ConfirmNewMemberModal from "../../../Portal/ConfirmNewMemberModal";
import EditGroup from "./EditGroup";
import useCheckNewMember from "../../../../fetch/useCheckNewMember";

export default function CreateGroup() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [groupData, setGroupData] = useState(null)
  const modal = useSelector((state) => {
    return state.modal;
  });
  const addNewMember = useRef()
  const [checkAddMember, setCheckAddMember] = useState(null)
  const { data } = useDetailGroup(id);
  useCheckNewMember(checkAddMember)

  if (data === undefined) return;
  console.log(data);

  function deleteGroupClicked() {
    const groupMiniData = {
      id: data.group.id,
      name: data.group.name,
    };
    setGroupData(groupMiniData);
    dispatch(setModal("confirm-remove-group"));
  }

  function editGroupClicked() {
    navigate("/course/" + id + "/group/edit")
  }

  function addMemberClicked() {
    let member = {
      student_id: addNewMember
    }
    setCheckAddMember(member)
  }

  return (
    <>
    {modal === "confirm-remove-group" && (
      <ConfirmRemoveGroupModal data={groupData} role='owner' />
    )}
    {modal === "check-group-member" && (
      <ConfirmNewMemberModal data={addNewMember} courseId={id} />
    )}
    <div className={classes.content}>
      <Card detailGroup>
        <h2 className={classes.title}>اطلاعات گروه</h2>
        <div className={classes.icons}>
          <FaCog className={classes.icon} onClick={editGroupClicked} />
          <FaTrashAlt className={classes.icon} onClick={deleteGroupClicked} />
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
            <div className={classes.member} key={member.id}>
              <h3>{member.name} </h3>
              <FaUserMinus className={classes.addMemberOfGroupIcon} />
            </div>
          );
        })}

        <div className={classes.addMemberOfGroup}>
          <Input innerRef={addNewMember} addMemberOfGroup />
          <FaUserPlus className={classes.addMemberOfGroupIcon} onClick={addMemberClicked} />
        </div>
      </Card>
    </div>
    </>
  );
}