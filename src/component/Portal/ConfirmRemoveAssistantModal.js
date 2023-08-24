import ReactDom from "react-dom";
import Back from "./Back";
import Button from "../../ui/Button";
import classes from "./style/Style.module.css";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/index";
import { useState } from "react";
import Card from "../../ui/Card";
import useRemoveAssistant from "../../fetch/useRemoveAssistant";

function Confirm({ data, courseId }) {
    const dispatch = useDispatch();
    const [sendRequest, setSendRequest] = useState(null);

    console.log(data)

    useRemoveAssistant(sendRequest, data, courseId);

    function acceptPortalClicked() {
        let oldAssistant = {
            assistant_id: data.id
        }
        setSendRequest(oldAssistant);
    }

    function closePortalClicked() {
        dispatch(setModal(null));
    }

    return (
        <Card confirm>
            <h2>آیا میخواهید {data.name} را از دستیاران این درس حذف کنید؟</h2>
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

export default function ConfirmRemoveAssistantModal({ oldAssistant, courseId }) {
    return ReactDom.createPortal(
        <>
            <Back></Back>
            <Confirm data={oldAssistant} courseId={courseId}></Confirm>
        </>,
        document.querySelector(".modal-container")
    );
}
