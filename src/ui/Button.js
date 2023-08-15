import classes from './style/Button.module.css';

<<<<<<< HEAD
function Button({ children, click, loginBtn, editProfile }) {
    let btnClasses = classes.btn;
    if (loginBtn) btnClasses = btnClasses + ' ' + classes.loginBtn;
    if (editProfile) btnClasses = btnClasses + ' ' + classes.editProfile;
=======
function Button({ children, danger, custome, success, click, loginBtn }) {
    let btnClasses = classes.btn;
    if (danger) btnClasses = btnClasses + ' ' + classes.danger;
    if (custome) btnClasses = btnClasses + ' ' + classes.custome;
    if (success) btnClasses = btnClasses + ' ' + classes.success;
    if (loginBtn) btnClasses = btnClasses + ' ' + classes.loginBtn;
>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb
    return <button className={btnClasses} onClick={click}>{children}</button>
}

export default Button;