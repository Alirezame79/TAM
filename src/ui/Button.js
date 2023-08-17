import classes from './style/Button.module.css';

function Button({ children, click, loginBtn, editProfile }) {
    let btnClasses = classes.btn;
    if (loginBtn) btnClasses = btnClasses + ' ' + classes.loginBtn;
    if (editProfile) btnClasses = btnClasses + ' ' + classes.editProfile;

    return <button className={btnClasses} onClick={click}>{children}</button>
}

export default Button;