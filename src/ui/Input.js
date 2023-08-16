import classes from './style/Input.module.css';

export default function Input({ type, innerRef, change }) {

    return (
        <input className={classes.input} type={type} ref={innerRef} onChange={change} />
    )
}