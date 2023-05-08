import { useContext } from "react";
import LoginModalPage from "../loginPortal/LoginModalPage";
import Button from "../ui/Button";
import classes from './BeforeLogin.module.css';

function BeforeLogin() {
    function onClick() {
        localStorage.setItem('login', '1');
    }

    return (
        <div className={classes.btnContainer}>
            <Button success click={onClick}>ورود</Button>
        </div>
    );
}

export default BeforeLogin;