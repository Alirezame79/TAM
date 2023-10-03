import ReactDom from "react-dom";
import Back from "./Back";
import classes from "./style/Style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useUpdateProfile from "../../fetch/useUpdateProfile";
import { setModal } from "../../store";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import useChangePassword from "../../fetch/useChangePassword";
import useEditCourseSetting from "../../fetch/useEditCourseSetting";
import useAddAssistant from "../../fetch/useAddAssistant";
import useRemoveAssistant from "../../fetch/useRemoveAssistant";
import useCreateGroup from "../../fetch/useCreateGroup";
import useRemoveGroup from "../../fetch/useRemoveGroup";
import useRemoveGroupMember from "../../fetch/useRemoveGroupMember";
import useAddGroupMember from "../../fetch/useAddGroupMember";
import useLeaveGroup from "../../fetch/useLeaveGroup";
import useUpdateGroup from "../../fetch/useUpdateGroup";
import useCreateSchedule from "../../fetch/useCreateSchedule";
import usePostUpdateProject from "../../fetch/usePostUpdateProject";
import useRemoveRound from "../../fetch/useRemoveRound";
import useGroupOwnerSelectRound from "../../fetch/useGroupOwnerSelectRound";

function EditProfile({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useUpdateProfile(sendRequest);

  function acceptPortalClicked() {
    setSendRequest(data);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا اطمینان دارید که اطلاعات وارد شده به پروفایلتان اعمال شود؟
      </h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>
    </Card>
  );
}

function ChangePassword({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useChangePassword(sendRequest);

  function acceptPortalClicked() {
    setSendRequest(data);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>آیا از تغییر رمزعبور خود اطمینان دارید؟</h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>
    </Card>
  );
}

function CourseSetting({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useEditCourseSetting(sendRequest);

  function acceptPortalClicked() {
    setSendRequest(data);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>آیا از اعمال تغییرات درس اطمینان دارید؟</h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>
    </Card>
  );
}

function AddAssistant({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useAddAssistant(sendRequest, data);

  function acceptPortalClicked() {
    const newAssistant = {
      student_id: data.id,
    };
    setSendRequest(newAssistant);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا میخواهید "{data.name}" را به دستیاران این درس اضافه کنید؟
      </h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>
    </Card>
  );
}

function RemoveAssistant({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useRemoveAssistant(sendRequest, data);

  function acceptPortalClicked() {
    let oldAssistant = {
      assistant_id: data.id,
    };
    setSendRequest(oldAssistant);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا میخواهید "{data.name}" را از دستیاران این درس حذف کنید؟
      </h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>
    </Card>
  );
}

function CreateGroup({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useCreateGroup(sendRequest);

  function acceptPortalClicked() {
    setSendRequest(data);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>آیا از ساخت گروه اطمینان دارید؟</h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>
    </Card>
  );
}

function EditGroup({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useUpdateGroup(sendRequest);

  function acceptPortalClicked() {
    setSendRequest(data);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا از ویرایش اطلاعات گروه اطمینان دارید؟
      </h3>
      {loading && (
        <p>
          <i>لطفا شکیبا باشید</i>
        </p>
      )}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>
    </Card>
  );
}

function RemoveGroup({ data, role }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useRemoveGroup(sendRequest, role);

  function acceptPortalClicked() {
    let group = {
      id: data.id,
    };
    setSendRequest(group);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا میخواهید گروه "{data.name}" را حذف کنید؟
      </h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>{" "}
    </Card>
  );
}

function RemoveMember({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useRemoveGroupMember(sendRequest, data);

  function acceptPortalClicked() {
    const newMember = {
      student_id: data.id,
    };
    setSendRequest(newMember);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا میخواهید "{data.name}" را از گروه خارج کنید؟
      </h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>{" "}
    </Card>
  );
}

function AddMember({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);
  const checkMember = useSelector((state) => {
    return state.checkMember;
  });

  useEffect(() => {
    setLoading(false);
  }, [data]);

  console.log(checkMember);

  useAddGroupMember(sendRequest, checkMember);

  function acceptPortalClicked() {
    const newMember = {
      student_id: checkMember.id,
    };
    setSendRequest(newMember);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا میخواهید "{checkMember.name}" را به گروه خود اضافه کنید؟
      </h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>{" "}
    </Card>
  );
}

function LeaveGroup({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useLeaveGroup(sendRequest);

  function acceptPortalClicked() {
    const requestData = {
      group_id: data,
    };
    setSendRequest(requestData);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>آیا میخواهید گروه را ترک کنید؟</h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>{" "}
    </Card>
  );
}

function CreateSchedule({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useCreateSchedule(sendRequest);

  function acceptPortalClicked() {
    setSendRequest(data);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا از ساخت زمانبندی این پروژه اطمینان دارید؟
      </h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>{" "}
    </Card>
  );
}

function ManageProject({ data }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  usePostUpdateProject(sendRequest);

  function acceptPortalClicked() {
    setSendRequest(data);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا از تغییر اطلاعات پروژه اطمینان دارید؟
      </h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>{" "}
    </Card>
  );
}

function DeleteRound({ data, extraData }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useRemoveRound(sendRequest);

  function acceptPortalClicked() {
    setSendRequest(data);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا از حذف بازه ی زمانی {extraData.startTime} - {extraData.endTime}{" "}
        اطمینان دارید؟
      </h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>{" "}
    </Card>
  );
}

function SelectRound({ data, extraData }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useGroupOwnerSelectRound(sendRequest);

  function acceptPortalClicked() {
    setSendRequest(data);
    setLoading(true);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm dir="rtl">
      <h3 className={classes.title}>
        آیا از انتخاب بازه ی زمانی {extraData.startTime} - {extraData.endTime}{" "}
        اطمینان دارید؟
      </h3>
      {loading && <p>لطفا شکیبا باشید</p>}
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} cancle>
          انصراف
        </Button>
        <Button click={acceptPortalClicked} accept>
          تایید
        </Button>
      </div>{" "}
    </Card>
  );
}

export default function Modal({
  data,
  role,
  extraData,
  editProfile,
  changePassword,
  courseSetting,
  addAssistant,
  removeAssistant,
  createGroup,
  editGroup,
  removeGroup,
  removeMember,
  addMember,
  leaveGroup,
  createSchedule,
  manageProject,
  deleteRound,
  selectRound,
}) {
  return ReactDom.createPortal(
    <>
      <Back></Back>

      {editProfile && <EditProfile data={data}></EditProfile>}
      {changePassword && <ChangePassword data={data}></ChangePassword>}

      {courseSetting && <CourseSetting data={data}></CourseSetting>}

      {addAssistant && <AddAssistant data={data}></AddAssistant>}
      {removeAssistant && <RemoveAssistant data={data}></RemoveAssistant>}

      {createGroup && <CreateGroup data={data}></CreateGroup>}
      {editGroup && <EditGroup data={data}></EditGroup>}
      {removeGroup && <RemoveGroup data={data} role={role}></RemoveGroup>}

      {removeMember && <RemoveMember data={data}></RemoveMember>}
      {addMember && <AddMember></AddMember>}
      {leaveGroup && <LeaveGroup data={data}></LeaveGroup>}

      {createSchedule && <CreateSchedule data={data}></CreateSchedule>}

      {manageProject && <ManageProject data={data}></ManageProject>}

      {deleteRound && (
        <DeleteRound data={data} extraData={extraData}></DeleteRound>
      )}

      {selectRound && (
        <SelectRound data={data} extraData={extraData}></SelectRound>
      )}
    </>,
    document.querySelector(".modal-container")
  );
}
