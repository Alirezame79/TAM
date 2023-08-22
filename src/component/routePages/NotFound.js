import classes from "./style/NotFound.module.css";

export default function NoPage() {
  return (
    <div className={classes.main}>
      <h1 className={classes.error}>
        Error 404 <br /> Not Found
      </h1>
    </div>
  );
}
