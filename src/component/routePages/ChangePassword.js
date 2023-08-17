import Input from '../../ui/Input'
import { useRef, useState } from 'react'
import Button from '../../ui/Button'
import Card from '../../ui/Card'
import classes from './style/ChangePassword.module.css'
import useChangePassword from '../../fetch/useChangePassword'

export default function ChangePassword() {
    let currentPassword = useRef('')
    let newPassword = useRef('')
    let repeatNewPassword = useRef('')
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    useChangePassword(data);

    function sendRequest() {
        if (!checkNewPassword()) {
            setError('New Password is not Matched with repeat new password')
            return
        }

        if (currentPassword.current.value === '' || newPassword.current.value === '' || repeatNewPassword.current.value === '') {
            setError('Fill all the Inputs')
            return
        }

        let passwords = {
            old_password: currentPassword.current.value,
            new_password: newPassword.current.value
        }

        setData(passwords);
    }

    function checkNewPassword() {
        if (newPassword.current.value === repeatNewPassword.current.value) return true
        return false
    }

    function inputChnaged() {
        setError('')
        setData(null)
    }

    return (
        <div className={classes.body}>
            <Card changePass>
            <h2>تعییر رمز عبور</h2>
            <div className={classes.changePassInput}>
                <label htmlFor="currentPassowrd">پسوورد کنونی</label>
                <Input changePass innerRef={currentPassword} id="currentPassword" change={inputChnaged} />
            </div>
            <div className={classes.changePassInput}>
                <label htmlFor="newPassowrd">پسوورد جدید</label>
                <Input changePass type='password' innerRef={newPassword} id="newPassword" change={inputChnaged} />
            </div>
            <div className={classes.changePassInput} >
                <label htmlFor="repeatNewPassowrd">تکرار پسوورد جدید</label>
                <Input changePass type='password' innerRef={repeatNewPassword} id="repeatNewPassword" change={inputChnaged} />
            </div>

            {/* {res} */}
            {(error.length !== 0) && <p className={classes.error}>{error}</p>}
            <div className={classes.btn}>
                <Button submit click={sendRequest}>Submit</Button>
            </div>
            </Card>
        </div>
    )
}