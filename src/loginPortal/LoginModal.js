import React from "react";
import ReactDOM from "react-dom";
import Input from "../ui/Input";
import classes from './LoginModal.module.css';
import Button from '../ui/Button';
import { Checkbox, FormControlLabel } from '@mui/material';
import { blue, pink } from "@mui/material/colors";

function Back({ onClose }) {
    return (
        <div className={classes.backPortal} onClick={onClose}></div>
    );
}

function Front() {
    return (
        <div className={classes.frontPortal}>
            <h1 className={classes.loginPortalTitle}>ورود</h1>
            <div className={classes.loginPortalBody}>
                <div className={classes.inputContainers}>
                    <Input id="username" />
                    <label className={classes.labelInput} htmlFor="username">نام کاربری</label>
                </div>
                <div className={classes.inputContainers}>
                    <Input id="password" type={'password'} />
                    <label className={classes.labelInput} htmlFor="password">رمز عبور</label>
                </div>
                <div className={classes.checkBoxContainer}>
                    <FormControlLabel control={<Checkbox sx={{
                        color: pink[500],
                        '&.Mui-checked': {
                            color: pink[200],
                        },
                    }} />} label="مدرس هستم" labelPlacement="start" />
                </div>
                <Button>ورود</Button>
            </div>
        </div>
    )
}

export default function LoginModal({ onClose }) {

    return ReactDOM.createPortal(
        <div>
            <Back onClose={onClose} />
            <Front />
        </div>,
        document.querySelector('.login-modal-container')
    );
}