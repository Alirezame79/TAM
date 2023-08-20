import ReactDom from 'react-dom'
import Card from '../../ui/Card'
import Button from '../../ui/Button'
import classes from './style/Style.module.css'
import Back from './Back'
import { useDispatch } from "react-redux";
import { setModal } from '../../store/index'
import { useState } from 'react';
import useChangePassword from '../../fetch/useChangePassword'

function Confirm({ data }) {
    const dispatch = useDispatch();
    const [sendRequest, setSendRequest] = useState(null)
    useChangePassword(sendRequest)

    function acceptPortalClicked() {
        setSendRequest(data)
    }

    function closePortalClicked() {
        dispatch(setModal(null))
    }

    return (
        <Card confirm>
            <h2>آیا از تغییر رمزعبور خود اطمینان دارید؟</h2>
            <div className={classes.confirmBtnContainer}>
                <Button click={acceptPortalClicked} accept>تایید</Button>
                <Button click={closePortalClicked} cancle>انصراف</Button>
            </div>
        </Card>
    )
}

export default function ConfirmChangePasswordModal({ data }) {

    return ReactDom.createPortal(
        <>
            <Back></Back>
            <Confirm data={data}></Confirm>
        </>
        , document.querySelector('.modal-container')
    )
}