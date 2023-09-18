import { useState } from "react";
import classes from "./style/GroupList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useGroupList from "../../../../fetch/useGroupList";
import { setModal } from "../../../../store";
import Card from "../../../../ui/Card";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../../../portal/Modal";

export default function GroupList() {
  const modal = useSelector((state) => {
    return state.modal;
  });
  const groupList = useSelector((state) => {
    return state.groupList;
  });
  useGroupList();
  const dispatch = useDispatch();
  const [groupData, setGroupData] = useState(null);

  if (groupList === undefined) return;
  console.log(groupList);

  return (
    <>
      {modal === "remove-group" && (
        <Modal data={groupData} role="managers" removeGroup />
      )}

      <Card groupList>
        <h2 className={classes.titlePage}>لیست گروه‌ها</h2>
        {groupList.map((group) => {
          return (
            <Card groupsOfGroupList key={group.id}>
              <FaTrashAlt
                className={classes.deletIcon}
                onClick={function deleteGroupClicked() {
                  const miniData = {
                    id: group.id,
                    name: group.name,
                  };
                  console.log(miniData);
                  setGroupData(miniData);
                  dispatch(setModal("remove-group"));
                }}
              ></FaTrashAlt>
              <div className={classes.parts1}>
                <h2 className={classes.title}> : نام گروه</h2>
                <h3 className={classes.textOfGroupList}> {group.name} </h3>
                <h2 className={classes.title}> : توضیحات گروه</h2>
                <h3 className={classes.textOfGroupList}>
                  {" "}
                  {group.description}
                </h3>
              </div>
              <div className={classes.parts2}>
                <h2 className={classes.title}> : سر گروه</h2>
                <h3 className={classes.textOfGroupList}>
                  {group.creator.name}{" "}
                </h3>
                <h2 className={classes.title}> : اعضا گروه</h2>

                {group.members.map((member) => {
                  return (
                    <h3 className={classes.membersOfGroups} key={member.id}>
                      {member.name}
                    </h3>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </Card>
    </>
  );
}
