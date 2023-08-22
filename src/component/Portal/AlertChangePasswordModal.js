import { useState } from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../../store";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Back from "./Back";
import classes from "./style/Style.module.css";

function Alert() {
  const dispatch = useDispatch();

  function closePortalClicked() {
    dispatch(setModal(null));
  }

  return (
    <Card alert>
      <h2>مشکلی رخ داده است!</h2>
      <div className={classes.confirmBtnContainer}>
        <Button click={closePortalClicked} ok>
          متوجه شدم
        </Button>
      </div>
    </Card>
  );
}

export default function AlertChangePasswordModal() {
  return ReactDom.createPortal(
    <>
      <Back></Back>
      <Alert></Alert>
    </>,
    document.querySelector(".modal-container")
  );
}
