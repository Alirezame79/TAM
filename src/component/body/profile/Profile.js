import classes from "./style/Profile.module.css";
import { useSelector } from "react-redux";
import BaseURL from "../../../fetch/BaseURL";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCog,
  FaLock,
} from "react-icons/fa";

export default function Profile() {
  const profile = useSelector((state) => {
    return state.profile;
  });
  const navigate = useNavigate();
  // useProfile();

  function editProfile() {
    navigate("/profile/edit");
  }

  function changePasswordBtnClicked() {
    navigate("/profile/changePassword");
  }

  // console.log(profile)

  return (
    <div className={classes.body}>
      <div className={classes.settindIcon}>
        <FaCog className={classes.edits} onClick={editProfile} />
        <FaLock
          className={classes.edits}
          onClick={changePasswordBtnClicked}
        />
      </div>

      <div className={classes.profileTopics}>
        <img
          src={BaseURL + profile.profile_image}
          alt={"profile"}
          className={classes.profileImg}
        />
        <h1 className={classes.nameText}>{profile.name || "نام"}</h1>
        <h2 className={classes.text}>بیوگرافی: {profile.bio}</h2>
        <h2 className={classes.text}> {profile.id} : شماره دانشجویی</h2>
      </div>

      <div className={classes.profileLinks}>
        <div className={classes.icons}>
          <FaEnvelope className={`${classes.Fa} ${classes.email}`} />
          <h2 className={classes.profileEmail}>{profile.email || "Email"}</h2>
        </div>
        <div className={classes.icons}>
          <FaGithub className={`${classes.Fa} ${classes.github}`} />
          <h2 className={classes.profileGithub}>
            {profile.social_github || "Github"}
          </h2>
        </div>
        <div className={classes.icons}>
          <FaLinkedin className={`${classes.Fa} ${classes.Linkedin}`} />
          <h2 className={classes.profileLinkedIn}>
            {profile.social_linkedin || "LinkedIn"}
          </h2>
        </div>
      </div>
    </div>
  );
}
