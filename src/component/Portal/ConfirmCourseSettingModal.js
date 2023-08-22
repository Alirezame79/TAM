import ReactDom from "react-dom";
import Back from "./Back";
import Button from "../../ui/Button";
import classes from "./style/Style.module.css";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/index";
import { useState } from "react";
import Card from "../../ui/Card";
import useEditCourseSetting from "../../fetch/useEditCourseSetting";

function Confirm({ data }) {
    const dispatch = useDispatch();
    const [sendRequest, setSendRequest] = useState(null);

    console.log(data)

    useEditCourseSetting(sendRequest);

    function acceptPortalClicked() {
        setSendRequest(data);
    }

    function closePortalClicked() {
        dispatch(setModal(null));
    }

    return (
        <Card confirm>
            <h2>آیا از اعمال تغییرات اطلاعات درس اطمینان دارید؟</h2>
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

export default function ConfirmCourseSettingModal({ data }) {
    return ReactDom.createPortal(
        <>
            <Back></Back>
            <Confirm data={data} changePassword></Confirm>
        </>,
        document.querySelector(".modal-container")
    );
}
