import { useContext } from "react";
import LoginModalPage from "../loginPortal/LoginModalPage";
import Button from "../ui/Button";
import classes from './BeforeLogin.module.css';

function BeforeLogin() {
    function onClick() {
        fetch(`http://localhost:5000/test3`).then((response) => {
            return response.json();
        }).then((data) => {
            console.log("2 ", data);
        }).catch(error => console.log(error));

        // fetch(`http://localhost:5000/test10`, {
        //     method: 'POST',
        //     body: JSON.stringify("DATA FROM CLIENT"),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then((response) => {
        //     return response.json();
        // }).then((data) => {
        //     console.log("2 ", data);
        // })
        //     .catch(error => console.log(error))

    }

    return (
        <div className={classes.btnContainer}>
            <Button success click={onClick}>ورود</Button>
        </div>
    );
}

export default BeforeLogin;