import Input from '../../ui/Input'
import { useRef, useState } from 'react'
import Button from '../../ui/Button'
import Card from '../../ui/Card'
import classes from './style/ChangePassword.module.css'
import useChangePassword from '../../fetch/useChangePassword'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { setModal } from '../../store/index'
import ConfirmChangePasswordModal from '../Portal/ConfirmChangePasswordModal'

export default function ChangePassword() {
    let currentPassword = useRef('')
    let newPassword = useRef('')
    let repeatNewPassword = useRef('')
    const modal = useSelector((state) => {
        return state.modal
    })
    const [data, setData] = useState(null)
    const [error, setError] = useState('')
    const [errorVisibility, setErrorVisibility] = useState(false)
    const dispatch = useDispatch();

    // useChangePassword(data);

    function sendRequest() {
        if (!checkNewPassword()) {
            setErrorVisibility(true)
            setError('پسوورد های جدید تفاوت دارند')
            return
        }

        if (currentPassword.current.value === '' || newPassword.current.value === '' || repeatNewPassword.current.value === '') {
            setErrorVisibility(true)
            setError('تمام فیلدها را پر کنید')
            return
        }

        let passwords = {
            old_password: currentPassword.current.value,
            new_password: newPassword.current.value
        }

        setData(passwords);
        dispatch(setModal('change-password'))
    }

    function checkNewPassword() {
        if (newPassword.current.value === repeatNewPassword.current.value) return true
        return false
    }

    function inputChnaged() {
        setError(" ")
        setData(null)
    }

    return (
        <>
            {modal === 'change-password' && <ConfirmChangePasswordModal data={data} />}
            <Card changePass>
                <h2>تغییر رمزعبور</h2>
                <div className={classes.changePassInput}>
                    <label htmlFor="bio">پسوورد کنونی </label>
                    <Input changePass innerRef={currentPassword} id="currentPassword" change={inputChnaged} />
                </div>
                <div className={classes.changePassInput}>
                    <label htmlFor="bio">پسوورد جدید</label>
                    <Input changePass type='password' innerRef={newPassword} id="newPassword" change={inputChnaged} />
                </div>
                <div className={classes.changePassInput}>
                    <label htmlFor="bio">تکرار پسوورد جدید</label>
                    <Input changePass type='password' innerRef={repeatNewPassword} id="repeatNewPassword" change={inputChnaged} />
                </div>
                {(error.length !== 0) && <p className={classes.error}>{error}</p>}
                <Button submit click={sendRequest}>مرحله بعد</Button>
            </Card>
        </>
    )
}