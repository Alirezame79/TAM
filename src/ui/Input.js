import classes from './style/Input.module.css';

export default function Input({ type, innerRef, change, login, editProfile }) {
    let selectInput;
    if (login) selectInput = classes.inputLogin;
    if (editProfile) selectInput = classes.inputEdirProfile;

    return (
        <input className={selectInput} type={type} ref={innerRef} onChange={change} />
    )
}