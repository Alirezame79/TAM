import classes from './style/PermissionDenied.module.css'

export default function PermissionDenied() {

    return (
        <div className={classes.main}>
            <h1 className={classes.permission}>Permission Denied</h1>
            <div className={classes.img}></div>
        </div>
    )
}