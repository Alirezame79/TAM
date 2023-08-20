import ReactDom from 'react-dom'
import Back from './Back'
import { useSelector } from 'react-redux'
import Button from '../../ui/Button'
import classes from './style/Style.module.css'
import { useDispatch } from "react-redux";
import { setModal } from '../../store/index'
import useUpdateProfile from '../../fetch/useUpdateProfile';
import { useState } from 'react';
import Card from '../../ui/Card'

function Confirm({ data }) {
    const dispatch = useDispatch();
    const [sendRequest, setSendRequest] = useState(null)
    useUpdateProfile(sendRequest)

    function acceptPortalClicked() {
        setSendRequest(data)
    }

    function closePortalClicked() {
        dispatch(setModal(null))
    }

    return (
        <Card confirm>
            <h2>آیا اطمینان دارید که اطلاعات وارد شده به پروفایلتان اعمال شود؟</h2>
            <div className={classes.confirmBtnContainer}>
                <Button click={closePortalClicked} cancle>انصراف</Button>
                <Button click={acceptPortalClicked} accept>تایید</Button>
            </div>
        </Card>
    )
}

export default function ConfirmEditProfileModal({ data }) {

    return ReactDom.createPortal(
        <>
            <Back></Back>
            <Confirm data={data}></Confirm>
        </>
        , document.querySelector('.modal-container')
    )
}