import { useState } from "react";
import classes from "./style/GroupList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useGroupList from "../../../../fetch/useGroupList";
import { setModal } from "../../../../store";
import Card from "../../../../ui/Card";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../../../portal/Modal";
import Loading from "../../../loading/Loading";

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

  console.log(groupList);

  if (groupList === undefined) {
    return <Loading />
  } else {
    return (
      <>
        {modal === "remove-group" && (
          <Modal data={groupData} role="managers" removeGroup />
        )}
  
        <Card groupList>
          <h2 className={classes.titlePage}>لیست گروه‌ها</h2>
          {groupList.length === 0 && (
            <p className={classes.noGroupAlert}>گروهی وجود ندارد</p>
          )}
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
                  {/* <h2 className={classes.title}> : نام گروه</h2> */}
                  <h2 className={classes.nameOfGroup} dir="rtl">
                    {" "}
                    گروه {group.name}{" "}
                  </h2>
                  <h3 className={classes.title}> : توضیحات گروه</h3>
                  <h4 className={classes.textOfGroupList}>
                    {" "}
                    {group.description}
                  </h4>
                </div>
                <div className={classes.parts2}>
                  {/* <h2 className={classes.title}> : سر گروه</h2> */}
                  <h3 className={classes.creatorName}>{group.creator.name} </h3>
                  {/* <h2 className={classes.title}> : اعضا گروه</h2> */}
  
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
}
