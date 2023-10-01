import classes from "./Loading.module.css";
import loading from "./../../images/loading.gif";
export default function Loading() {
  return (
    <div className={classes.back}>
      <div className={classes.load}>
        <img src={loading} className={classes.loadImg} />
      </div>
    </div>
  );
}
