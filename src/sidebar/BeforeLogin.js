import Button from "../ui/Button";
import classes from './BeforeLogin.module.css';

function BeforeLogin() {
    return (
        <div className={classes.btnContainer}>
            <Button success>Click me!</Button>
        </div>
    );
}

export default BeforeLogin;