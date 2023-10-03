import classes from "./Loading.module.css";
import loading from "./../../images/loading.gif";
export default function Loading({ login }) {
  let loadStyle;
  if (login) loadStyle = classes.loginBack;
  else loadStyle = classes.back;

  return (
    <div className={loadStyle}>
      <div className={classes.load}>
        <img src={loading} className={classes.loadImg} />
      </div>
    </div>
  );
}
