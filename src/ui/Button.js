import classes from './style/Button.module.css';

function Button({ children, click, loginBtn,submit }) {
    let btnClasses = classes.btn;
    if (loginBtn) btnClasses = btnClasses + ' ' + classes.loginBtn;
    if (submit) btnClasses = btnClasses + ' ' + classes.submit;
    return <button className={btnClasses} onClick={click}>{children}</button>
}

export default Button;