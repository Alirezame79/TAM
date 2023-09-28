import classes from "./style/EditGroup.module.css";
import Button from "../../../../ui/Button";
import Input from "../../../../ui/Input";
import Card from "../../../../ui/Card";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useDetailGroup from "../../../../fetch/useDetailGroup";
import useUpdateGroup from "../../../../fetch/useUpdateGroup";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../store";
import Modal from "../../../portal/Modal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditGroup() {
  const { id } = useParams();
  const { data } = useDetailGroup(id);
  const dispatch = useDispatch();
  const modal = useSelector((state) => {
    return state.modal;
  });
  const groupName = useRef("");
  const groupDescription = useRef("");
  const [updatedData, setUpdatedData] = useState(null);

  useEffect(() => {
    if (data === undefined) return;
    groupName.current.value = data.group.name;
    groupDescription.current.value = data.group.description;
  }, [data]);

  if (data === undefined) return;
  console.log(data);

  function updateGroupClicked() {
    if (groupName.current.value.trim() === "") {
      toast.error('نام گروه نمیتواند خالی باشد')
      return
    }

    let data = {
      name: groupName.current.value,
      description: groupDescription.current.value,
    };

    setUpdatedData(data);
    dispatch(setModal("edit-group"));
  }

  return (
    <>
      {modal === "edit-group" && <Modal data={updatedData} editGroup />}
      <div className={classes.content}>
        <Card editGroup>
          <h2 className={classes.title}>ویرایش اطلاعات گروه</h2>
          <div className={classes.editGroupInput}>
            <label htmlFor="Group name">نام گروه</label>
            <Input id="Group name" editGroup innerRef={groupName} />
          </div>
          <div className={classes.editGroupInput}>
            <label htmlFor="Course Name">نام درس </label>
            <Input
              id="Course Name"
              placeholder={data.course.name}
              editGroup
              readOnly
            />
          </div>
          <div className={classes.editGroupInput}>
            <label htmlFor="master">استاد</label>
            <Input
              id="master"
              editGroup
              placeholder={data.course.owner.name}
              readOnly
            />
          </div>
          <div className={classes.editGroupInput}>
            <label htmlFor="discription">توضیحات</label>
            <Input groupDiscription innerRef={groupDescription} />
          </div>
          <Button submit click={updateGroupClicked}>
            ویرایش اطلاعات گروه
          </Button>
        </Card>
      </div>
    </>
  );
}
