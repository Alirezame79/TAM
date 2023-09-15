import classes from "./style/NotFound.module.css";

export default function NoPage() {
  
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>صفحه مورد نظر یافت نشد</h1>
      <h3 className={classes.miniTitle}>Error 404</h3>
    </div>
  );
}
