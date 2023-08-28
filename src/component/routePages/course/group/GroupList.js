import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useGroupList from "../../../../fetch/useGroupList";
import { setModal } from "../../../../store";
import Card from "../../../../ui/Card";
import ConfirmRemoveGroupModal from "../../../Portal/ConfirmRemoveGroupModal";

export default function GroupList() {
    const { id } = useParams();
    useGroupList(id)
    const modal = useSelector((state) => {
        return state.modal;
    });
    const groupList = useSelector((state) => {
        return state.groupList;
    });
    const dispatch = useDispatch()
    const [groupData, setGroupData] = useState(null)

    if (groupList === undefined) return
    console.log(groupList)

    return (
        <>
            {modal === "confirm-remove-group" && (<ConfirmRemoveGroupModal data={groupData} />)}
            <Card profile>
                {groupList.map((group) => {
                    return (
                        <div key={group.id}>
                            <h3>{group.name}</h3>
                            <h3>{group.description}</h3>
                            <h3>{group.creator.name}</h3>
                            {group.members.map((member) => {
                                return <h5 key={member.id}>{member.name}</h5>
                            })}
                            <h3 onClick={function deleteGroupClicked() {
                                const miniData = {
                                    id: group.id,
                                    name: group.name
                                }
                                setGroupData(miniData)
                                dispatch(setModal("confirm-remove-group"));
                            }}>Delete</h3>
                        </div>
                    )
                })}
            </Card>
        </>
    )
}