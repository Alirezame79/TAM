import classes from "./style/NotFound.module.css";
import Card from "../../../ui/Card";
export default function NoPage() {
  return (
    <Card error>
      <h2 className={classes.title}>صفحه مورد نظر یافت نشد</h2>
      <h3 className={classes.miniTitle}>Error 404</h3>
    </Card>
  );
}
