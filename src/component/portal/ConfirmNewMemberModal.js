import ReactDom from "react-dom";
import Back from "./Back";
import Button from "../../ui/Button";
import classes from "./style/Style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/index";
import { useState } from "react";
import Card from "../../ui/Card";
import useAddGroupMember from "../../fetch/useAddGroupMember";

function Confirm() {
    const dispatch = useDispatch();
    const [sendRequest, setSendRequest] = useState(null);
    const checkMember = useSelector((state) => {
        return state.checkMember;
    })

    console.log(checkMember)

    useAddGroupMember(sendRequest, checkMember);

    function acceptPortalClicked() {
        const newMember = {
            student_id: checkMember.id
        }
        setSendRequest(newMember);
    }

    function closePortalClicked() {
        dispatch(setModal(null));
    }

    return (
        <Card confirm>
            <h2>آیا میخواهید {checkMember.name} را به گروه خود اضافه کنید؟</h2>
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

export default function CheckNewMemberModal() {
    return ReactDom.createPortal(
        <>
            <Back></Back>
            <Confirm></Confirm>
        </>,
        document.querySelector(".modal-container")
    );
}
