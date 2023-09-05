import ReactDom from "react-dom";
import Back from "./Back";
import Button from "../../ui/Button";
import classes from "./style/Style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/index";
import { useState } from "react";
import Card from "../../ui/Card";
import useAddGroupMember from "../../fetch/useAddGroupMember";
import useRemoveGroupMember from "../../fetch/useRemoveGroupMember";

function Confirm({user}) {
    const dispatch = useDispatch();
    const [sendRequest, setSendRequest] = useState(null);

    console.log(user)

    useRemoveGroupMember(sendRequest, user);

    function acceptPortalClicked() {
        const newMember = {
            student_id: user.id
        }
        setSendRequest(newMember);
    }

    function closePortalClicked() {
        dispatch(setModal(null));
    }

    return (
        <Card confirm>
            <h2>آیا میخواهید {user.name} را از گروه خارج کنید؟</h2>
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

export default function ConfirmRemoveMember({user}) {
    return ReactDom.createPortal(
        <>
            <Back></Back>
            <Confirm user={user}></Confirm>
        </>,
        document.querySelector(".modal-container")
    );
}
