import Button from '../../ui/Button'
import classes from './style/Style.module.css'
import { useDispatch } from "react-redux";
import { setModal } from '../../store/index'
import useUpdateProfile from '../../fetch/useUpdateProfile';
import { useState } from 'react';

export default function Confirm({ data }) {
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
        <div className={classes.confirmContainer}>
            <h2>آیا از اعمال تغییرات اطمینان دارید؟</h2>
            <div className={classes.confirmBtnContainer}>
                <Button click={acceptPortalClicked}>تایید</Button>
                <Button click={closePortalClicked}>انصراف</Button>
            </div>
        </div>
    )
}