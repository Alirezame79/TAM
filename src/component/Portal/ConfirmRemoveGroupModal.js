import ReactDom from "react-dom";
import Back from "./Back";
import Button from "../../ui/Button";
import classes from "./style/Style.module.css";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/index";
import { useState } from "react";
import Card from "../../ui/Card";
import useRemoveGroup from "../../fetch/useRemoveGroup";

function Confirm({ data }) {
    const dispatch = useDispatch();
    const [sendRequest, setSendRequest] = useState(null);

    console.log(data)

    useRemoveGroup(sendRequest);

    function acceptPortalClicked() {
        let group = {
            id: data.id
        }
        setSendRequest(group);
    }

    function closePortalClicked() {
        dispatch(setModal(null));
    }

    return (
        <Card confirm>
            <h2>آیا میخواهید گروه {data.name} را حذف کنید؟</h2>
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

export default function ConfirmRemoveGroupModal({ data }) {
    return ReactDom.createPortal(
        <>
            <Back></Back>
            <Confirm data={data} ></Confirm>
        </>,
        document.querySelector(".modal-container")
    );
}
