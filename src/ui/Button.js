import classes from './Button.module.css';

function Button({ children, danger, custome, success }) {

    let btnClasses = classes.btn;
    if (danger) btnClasses = btnClasses + ' ' + classes.danger;
    if (custome) btnClasses = btnClasses + ' ' + classes.custome;
    if (success) btnClasses = btnClasses + ' ' + classes.success;

    return <button className={btnClasses}>{children}</button>
}

export default Button;