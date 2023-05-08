import React from "react";
import ReactDOM from "react-dom";
import Input from "../ui/Input";
import classes from './LoginModal.module.css';

function Back({ onClose }) {
    return (
        <div className={classes.backPortal} onClick={onClose}></div>
    );
}

function Front() {
    return (
        <div className={classes.frontPortal}>
            <h1>ورود</h1>
            <label for="Username" />
            <Input id="username" type={'password'} />
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