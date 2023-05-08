import classes from './Input.module.css';

export default function Input({ type }) {

    return (
        <input className={classes.input} type={type} />
    )
}