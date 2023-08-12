import classes from './style/Button.module.css';

function Button({ children, danger, custome, success, click, loginBtn }) {
    let btnClasses = classes.btn;
    if (danger) btnClasses = btnClasses + ' ' + classes.danger;
    if (custome) btnClasses = btnClasses + ' ' + classes.custome;
    if (success) btnClasses = btnClasses + ' ' + classes.success;
    if (loginBtn) btnClasses = btnClasses + ' ' + classes.loginBtn;
    return <button className={btnClasses} onClick={click}>{children}</button>
}

export default Button;