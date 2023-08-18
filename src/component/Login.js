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
import { useSignIn } from 'react-auth-kit';
import uniLogo from './navbar-logo.png';
import loginImg from './imglog_auto_x2.jpg';

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
    const backImg = {
        backgroundImage: `url(${loginImg})`
    }

    return (
        <div className={classes.body}>
            <div className={classes.header}>
                <img src={uniLogo} alt="guilan uni logo" className={classes.uniLable} />
                <h2 className={classes.tamLable}>سامانه تام</h2>
                <img src='image.jpg' alt="TAM logo" />
            </div>
            <div className={classes.fatherImg}>
                <div className={classes.img} style={backImg}></div>
            </div>
            <div className={classes.loginBox}>
                <div className={classes.inputsLocation}>
                    <label htmlFor="username" className={classes.labelText}>نام کاربری</label>
                    <Input innerRef={username} id="username" className={classes.myInputs} login />
                </div>
                <div className={classes.inputsLocation}>
                    <label htmlFor="password" type='password' className={classes.labelText}>رمز عبور</label>
                    <Input innerRef={password} id="password" className={classes.myInputs} login />
                </div>
                <Button loginBtn click={loginClicked}>ورود</Button>
            </div>
            <div className={classes.triangleContainer} >
                <div className={classes.triangleUp} ></div>
                <div className={classes.textUp} >نام کاربری شما همان شماره دانشجویی تان است</div>
            </div>
            <div className={classes.triangleContainer} >
                <div className={classes.triangleDown} ></div>
                <div className={classes.textDown} > اکر اولین بار هست که وارد سامانه میشوید و یا رمز عبور خود را تغییر ندادید رمر عبور شما کد ملی تان می باشد</div>
            </div>
            <div className={classes.footer}>
                <div className={classes.box}><p className={classes.footerText}>هدف تام ؟</p></div>
                <div className={classes.box}><p className={classes.footerText}>چرا تام ؟</p></div>
            </div>

        </div>
    )
}