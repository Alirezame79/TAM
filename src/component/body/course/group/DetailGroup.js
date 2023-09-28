import classes from "./style/DetailGroup.module.css";
import Input from "../../../../ui/Input";
import { FaUserPlus, FaTrashAlt, FaCog, FaUserMinus } from "react-icons/fa";
import Card from "../../../../ui/Card";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useDetailGroup from "../../../../fetch/useDetailGroup";
import { useDispatch, useSelector } from "react-redux";
import { setMembersList, setModal } from "../../../../store";
import useCheckGroupNewMember from "../../../../fetch/useCheckGroupNewMember";
import Modal from "../../../portal/Modal";
import EditGroup from "./EditGroup";

export default function CreateGroup() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [groupData, setGroupData] = useState(null);
  const [editGroupPage, setEditGroupPage] = useState(false);
  const modal = useSelector((state) => {
    return state.modal;
  });
  const addNewMember = useRef();
  const [checkAddMember, setCheckAddMember] = useState(null);
  const [removeMember, setRemoveMember] = useState(null);
  const { data } = useDetailGroup(id);
  const membersList = useSelector((state) => {
    return state.membersList;
  });

  useCheckGroupNewMember(checkAddMember);
  
  if (data === undefined) return;
  console.log(data);
  dispatch(setMembersList(data.group.members));

  function deleteGroupClicked() {
    const groupMiniData = {
      id: data.group.id,
      name: data.group.name,
    };
    setGroupData(groupMiniData);
    dispatch(setModal("remove-group"));
  }

  function editGroupClicked() {
    setEditGroupPage(true);
  }

  function addMemberClicked() {
    let member = {
      student_id: addNewMember.current.value,
    };
    addNewMember.current.value = "";
    setCheckAddMember(member);
  }

  if (editGroupPage) {
    return <EditGroup />;
  } else {
    return (
      <>
        {modal === "remove-group" && (
          <Modal data={groupData} role="owner" removeGroup />
        )}
        {modal === "remove-group-member" && (
          <Modal data={removeMember} removeMember />
        )}
        {modal === "add-group-member" && <Modal addMember />}

        <div className={classes.content}>
          <Card detailGroup>
            <h2 className={classes.title}>اطلاعات گروه</h2>
            <div className={classes.icons}>
              <FaCog className={classes.icon} onClick={editGroupClicked} />
              <FaTrashAlt
                className={classes.icon}
                onClick={deleteGroupClicked}
              />
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
            
              <h3 className={classes.info}> {data.course.group_capacity} نفر</h3>
            </div>
            <div className={classes.detailGroupSubjects}>
              <h2>: توضیحات</h2>
              <h3 className={classes.info}>{data.group.description} </h3>
            </div>
          </Card>

          <Card addMemberOfGroup>
            <h2 className={classes.title}> اعضا گروه</h2>
            {membersList.map((member) => {
              console.log(membersList)

              return (
                <div className={classes.member} key={member.id}>
                  <h3>{member.name} </h3>
                  <FaUserMinus
                    className={classes.addMemberOfGroupIcon}
                    onClick={function removeMemberClicked() {
                      dispatch(setModal("remove-group-member"));
                      setRemoveMember(member);
                    }}
                  />
                </div>
              );
            })}

            <div className={classes.addMemberOfGroup}>
              <Input innerRef={addNewMember} addMemberOfGroup />
              <FaUserPlus
                className={classes.addMemberOfGroupIcon}
                onClick={addMemberClicked}
              />
            </div>
          </Card>
        </div>
      </>
    );
  }
}
