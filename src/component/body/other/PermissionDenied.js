import classes from "./style/PermissionDenied.module.css";

export default function PermissionDenied() {

  return (
    <div className={classes.conatiner}>
      <h1 className={classes.title}>کاربر مورد نظر اجازه دسترسی به این صفحه را ندارد</h1>
      <h3 className={classes.miniTitle}>Permission Denied</h3>
    </div>
  );
}
