import ReactDom from "react-dom";
import Back from "./Back";
import Button from "../../ui/Button";
import classes from "./style/Style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/index";
import { useState } from "react";
import Card from "../../ui/Card";
import useAddAssistant from "../../fetch/useAddAssistant";

function Confirm({ data, courseId }) {
    const dispatch = useDispatch();
    const [sendRequest, setSendRequest] = useState(null);
    const checkMember = useSelector((state) => {
        return state.checkMember;
    })

    console.log(data)
    console.log(checkMember)

    // useAddMember(sendRequest, data, courseId);

    function acceptPortalClicked() {
        const newAssistant = {
            student_id: data.id
        }
        setSendRequest(newAssistant);
    }

    function closePortalClicked() {
        dispatch(setModal(null));
    }

    return (
        <Card confirm>
            <h2>آیا میخواهید {} را به دستیاران این درس اضافه کنید؟</h2>
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

export default function CheckNewMemberModal({ memberId, courseId }) {
    return ReactDom.createPortal(
        <>
            <Back></Back>
            <Confirm data={memberId} courseId={courseId}></Confirm>
        </>,
        document.querySelector(".modal-container")
    );
}
