import Card from "../../../ui/Card";
import classes from "./style/PermissionDenied.module.css";

export default function PermissionDenied() {
  return (
    <Card error>
      <h2 className={classes.title}>
        کاربر مورد نظر اجازه دسترسی به این صفحه را ندارد
      </h2>
      <h3 className={classes.miniTitle}>Permission Denied</h3>
    </Card>
  );
}
