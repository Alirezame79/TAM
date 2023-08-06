import classes from './style/Login.module.css';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Checkbox, FormControlLabel } from '@mui/material';
import { blue, pink } from "@mui/material/colors";
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStudentCourses, setAssistantCourses, setTeacherCourses, setProfile } from '../store/index'
import axios from 'axios';
import useLogin from '../fetch/useLogin';
import { useSignIn } from 'react-auth-kit'

export default function Login() {
    const username = useRef("");
    const password = useRef("");
    const [user, setUser] = useState({})
    useLogin(user)

    function loginClicked() {

        let user = {
            "username": username.current.value,
            "password": password.current.value
        }

        setUser(user)

    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h2 className={classes.tamLable}>سامانه تام</h2>
                <h4 className={classes.uniLable}>دانشگاه گیلان</h4>
                <img src='image.jpg' alt="TAM logo" />
            </div>
            <div className={classes.img}>
                <img src="./src/img/loginPhoto.jpg" alt="login" />
            </div>
            <div className={classes.loginBox}>
                <label htmlFor="username" className={classes.labelText}>نام کاربری</label>
                <Input innerRef={username} id="username" className={classes.myInputs} />
                <label htmlFor="password" type='password' className={classes.labelText}>رمز عبور</label>
                <Input innerRef={password} id="password" className={classes.myInputs} />
                {/* <FormControlLabel className={classes.fullCheckBox} control={<Checkbox className={classes.checkBox} />} label="استاد هستم" labelPlacement="start" /> */}
                <Button className={classes.loginBtn} click={loginClicked}>ورود</Button>
            </div>
        </div>
    )
}