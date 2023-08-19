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
        <Card changePass>
            <h2>تعییر رمز عبور</h2>
            <Input placeholder="پسوورد کنونی" onFocus={(e) => e.target.placeholder = ''} changePass innerRef={currentPassword} id="currentPassword" change={inputChnaged} />
            <Input placeholder="پسوورد جدید" changePass type='password' innerRef={newPassword} id="newPassword" change={inputChnaged} />
            <Input placeholder="تکرار پسوورد جدید" changePass type='password' innerRef={repeatNewPassword} id="repeatNewPassword" change={inputChnaged} />
            {(error.length !== 0) && <p className={classes.error}>{error}</p>}
            <Button submit click={sendRequest}>مرحله بعد</Button>
        </Card>
    )
}