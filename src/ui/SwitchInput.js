import classes from "./style/SwitchInput.module.css";
export default function SwitchInput() {
  return (
    <label className={classes.switch}>
      <input type="checkbox" />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
}
