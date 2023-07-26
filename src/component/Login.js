import classes from './Login.module.css';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Checkbox, FormControlLabel } from '@mui/material';
import { blue, pink } from "@mui/material/colors";
import { useEffect, useRef } from 'react';
import axios from 'axios';

export default function Login() {
    const username = useRef("");
    const password = useRef("");

    function loginClicked() {
        let user = {
            username: username.current.value,
            password: password.current.value
        }

        console.log(user)

        fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response)
            return response.json;
        }).then((data) => {
            console.log(data);
        });

        // axios.post('http://127.0.0.1:8000/login/', { user })
        //     .then(function (response) {
        //         console.log(response);
        //     })

        // fetch('http://127.0.0.1:8000/login/' + user).then((response) => {
        //     console.log("1 ", response);
        //     return response.json();
        // }).then((data) => {
        //     console.log("2 ", data);
        // })
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h2>سامانه تام</h2>
                <h4>دانشگاه گیلان</h4>
                <img src='image.jpg' alt="TAM logo" />
            </div>
            <div className={classes.img}>
                <img src='../images/login-title.jpg' alt="login" />
            </div>
            <div className={classes.loginBox}>
                <label htmlFor="username">نام کاربری</label>
                <Input innerRef={username} id="username" />
                <label htmlFor="password" type='password'>رمز عبور</label>
                <Input innerRef={password} id="password" />
                <FormControlLabel control={<Checkbox sx={{
                    color: pink[500],
                    '&.Mui-checked': {
                        color: pink[200],
                    },
                }} />} label="استاد هستم" labelPlacement="start" />
                <Button click={loginClicked}>ورود</Button>
            </div>
        </div>
    )
}