import classes from "./style/Header.module.css";
import { AiTwotoneBell } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import tamLogo from "./../../images/tam-logo.jpg";

export default function Header() {
  const signOut = useSignOut();
  const navigate = useNavigate();

  function signoutClicked() {
    navigate("/");
    signOut();
  }

  function profileLogoClicked() {
    navigate("/profile");
  }

  return (
    <div className={classes.body}>
      <img src={tamLogo} alt="Tam Logo" className={classes.tamLogoHeader} />
      <div className={classes.logos}>
        <BiLogOutCircle className={classes.outLogo} onClick={signoutClicked} />
        <AiTwotoneBell className={classes.notifLogo} />
        <BsPersonCircle
          className={classes.profileLogo}
          onClick={profileLogoClicked}
        />
      </div>
    </div>
  );
}
