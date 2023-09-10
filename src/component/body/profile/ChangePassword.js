import Input from "../../../ui/Input";
import { useRef, useState } from "react";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import classes from "./style/ChangePassword.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setModal } from "../../../store/index";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../portal/Modal";

export default function ChangePassword() {
  let currentPassword = useRef("");
  let newPassword = useRef("");
  let repeatNewPassword = useRef("");
  const modal = useSelector((state) => {
    return state.modal;
  });
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  function sendRequest() {
    if (
      currentPassword.current.value === "" ||
      newPassword.current.value === "" ||
      repeatNewPassword.current.value === ""
    ) {
      toast.error("تمام فیلدها را پر کنید", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });
      return;
    }

    let requestData = {
      old_password: currentPassword.current.value,
      new_password: newPassword.current.value,
      confirm_password: repeatNewPassword.current.value,
    };
    setData(requestData);
    dispatch(setModal("change-user-password"));
  }

  return (
    <>
      {modal === "change-user-password" && <Modal data={data} changePassword />}

      <Card changePass>
        <h2 className={classes.title}>تغییر رمزعبور</h2>
        <div className={classes.changePassInput}>
          <label htmlFor="bio" className={classes.labels}>
            پسوورد کنونی{" "}
          </label>
          <Input
            changePass
            innerRef={currentPassword}
            id="currentPassword"
          />
        </div>
        <div className={classes.changePassInput}>
          <label htmlFor="bio" className={classes.labels}>
            پسوورد جدید
          </label>
          <Input
            changePass
            type="password"
            innerRef={newPassword}
            id="newPassword"
          />
        </div>
        <div className={classes.changePassInput}>
          <label htmlFor="bio" className={classes.labels}>
            تکرار پسوورد جدید
          </label>
          <Input
            changePass
            type="password"
            innerRef={repeatNewPassword}
            id="repeatNewPassword"
          />
        </div>
        <Button submit click={sendRequest}>
          مرحله بعد
        </Button>
      </Card>
    </>
  );
}
