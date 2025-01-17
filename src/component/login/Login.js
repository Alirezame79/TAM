import classes from "./style/Login.module.css";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setStudentCourses,
  setAssistantCourses,
  setTeacherCourses,
  setProfile,
} from "../../store/index";
import useLogin from "../../fetch/useLogin";
import { useSignIn } from "react-auth-kit";
import Card from "../../ui/Card";
import BASEURL from "../../fetch/BaseURL";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";

export default function Login() {
  const username = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useLogin(user);

  function loginClicked() {
    let user = {
      username: username.current.value,
      password: password.current.value,
    };

    setUser(user);
  }

  function forgetPasswordBtnclicked() {
    // navigate("/forget-password")
    toast.error("این بخش هنوز پیاده سازی نشده است");
  }

  if (Object.keys(user).length !== 0) {
    return <Loading login />;
  } else {
    return (
      <div className={classes.body}>
        <div className={classes.header}>
          <img
            src={BASEURL + "static/images/statics/uni-logo.png"}
            alt="guilan uni logo"
            className={classes.uniLable}
          />
          <h2 className={classes.tamLable}>سامانه تام</h2>
          <img
            src={BASEURL + "static/images/statics/tam-logo.jpg"}
            alt="TAM logo"
            className={classes.tamLogo}
          />
        </div>

        <Card login>
          <div className={classes.inputsLocation}>
            <label htmlFor="username" className={classes.labelText}>
              نام کاربری
            </label>
            <Input innerRef={username} id="username" login />
          </div>
          <div className={classes.inputsLocation}>
            <label
              htmlFor="password"
              type="password"
              className={classes.labelText}
            >
              رمز عبور
            </label>
            <Input innerRef={password} type="password" id="password" login />
          </div>
          <Button loginBtn click={loginClicked}>
            ورود
          </Button>

          <p
            className={classes.forgerPasswordBtn}
            onClick={forgetPasswordBtnclicked}
          >
            <i>رمزعبورم را فراموش کرده ام</i>
          </p>
        </Card>
      </div>
    );
  }
}
