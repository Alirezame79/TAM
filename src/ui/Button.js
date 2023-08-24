import classes from "./style/Button.module.css";

function Button({ children, click, loginBtn, submit, accept, cancle, ok, remove }) {
  let btnClasses = classes.btn;
  if (loginBtn) btnClasses = btnClasses + " " + classes.loginBtn;
  if (submit) btnClasses = btnClasses + " " + classes.submit;
  if (accept) btnClasses = btnClasses + " " + classes.accept;
  if (remove) btnClasses = btnClasses + " " + classes.remove;
  if (cancle) btnClasses = btnClasses + " " + classes.cancle;
  if (ok) btnClasses = btnClasses + " " + classes.ok;

  return (
    <button className={btnClasses} onClick={click}>
      {children}
    </button>
  );
}

export default Button;
