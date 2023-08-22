import ReactDom from "react-dom";
import Back from "./Back";
import Button from "../../ui/Button";
import classes from "./style/Style.module.css";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/index";
import useUpdateProfile from "../../fetch/useUpdateProfile";
import { useState } from "react";
import Card from "../../ui/Card";
import useChangePassword from "../../fetch/useChangePassword";

function Confirm({ data, editProfile, changePassword }) {
  const dispatch = useDispatch();
  const [sendRequest, setSendRequest] = useState(null);

  console.log(data, editProfile, changePassword)

  useUpdateProfile(sendRequest, editProfile);
  useChangePassword(sendRequest, changePassword);

  function acceptPortalClicked() {
    setSendRequest(data);
  }

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card confirm>
      {editProfile && <h2>آیا اطمینان دارید که اطلاعات وارد شده به پروفایلتان اعمال شود؟</h2>}
      {changePassword && <h2>آیا از تغییر رمزعبور خود اطمینان دارید؟</h2>}
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

export default function ConfirmProfileModal({ data, editProfile, changePassword }) {
  return ReactDom.createPortal(
    <>
      <Back></Back>
      {editProfile && <Confirm data={data} editProfile></Confirm>}
      {changePassword && <Confirm data={data} changePassword></Confirm>}
    </>,
    document.querySelector(".modal-container")
  );
}
