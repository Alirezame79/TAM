import classes from "./style/CheckBox.module.css";

export default function Checkbox({ label, value, onChange }) {
  return (
    <label className={classes.container}>
      <input type="checkbox" checked={value} onChange={onChange} />

      <span className={classes.checkmark}></span>
      {label}
    </label>
  );
}
