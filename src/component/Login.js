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
import Card from '../ui/Card';

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
        <div className={classes.body}>
            <div className={classes.header}>
                <img src={uniLogo} alt="guilan uni logo" className={classes.uniLable} />
                <h2 className={classes.tamLable}>سامانه تام</h2>
                <img src='image.jpg' alt="TAM logo" className={classes.tamLogo} />
            </div>
       
            <Card login>
                <div className={classes.inputsLocation}>
                    <label htmlFor="username" className={classes.labelText}>نام کاربری</label>
                    <Input innerRef={username} id="username"  login />
                </div>
                <div className={classes.inputsLocation}>
                    <label htmlFor="password" type='password' className={classes.labelText}>رمز عبور</label>
                    <Input innerRef={password} id="password"  login />
                </div>
                <Button loginBtn click={loginClicked}>ورود</Button>
            </Card>
        </div>
    )
}