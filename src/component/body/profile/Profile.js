import classes from "./style/Profile.module.css";
import { useSelector } from "react-redux";
import BaseURL from "../../../fetch/BaseURL";
import { useNavigate } from "react-router-dom";
import {FaGithub,FaLinkedin,FaEnvelope,FaCog,FaLock} from "react-icons/fa";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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

  console.log(profile)

  return (
    <div className={classes.body}>
      <div className={classes.settindIcon}>
        <FaCog className={classes.edits} onClick={editProfile} />
        <FaLock className={classes.edits} onClick={changePasswordBtnClicked} />
      </div>

      <div className={classes.profileTopics}>
        {profile.profile_image === undefined && <Skeleton circle width={'9rem'} height={'9rem'} />}
        {profile.profile_image !== undefined && <img
          src={BaseURL + profile.profile_image}
          alt={"profile"}
          className={classes.profileImg}
        />}
        <h1>{profile.name || <Skeleton width={150}/>}</h1>
        <h2 className={classes.text}>:بیوگرافی <br />{profile.bio  || <Skeleton width={'25rem'}/>}</h2>
        <h2 className={classes.text}> : شماره دانشجویی <br />{profile.id || <Skeleton/>}</h2>
      </div>

      <div className={classes.profileLinks}>
        <div className={classes.icons}>
          <FaEnvelope className={`${classes.Fa} ${classes.email}`} />
          <h2 className={classes.profileEmail}>{profile.email || <Skeleton width={200}/>}</h2>
        </div>
        <div className={classes.icons}>
          <FaGithub className={`${classes.Fa} ${classes.github}`} />
          <h2 className={classes.profileGithub}>
            {profile.social_github || <Skeleton width={200}/>}
          </h2>
        </div>
        <div className={classes.icons}>
          <FaLinkedin className={`${classes.Fa} ${classes.Linkedin}`} />
          <h2 className={classes.profileLinkedIn}>
            {profile.social_linkedin || <Skeleton width={200}/>}
          </h2>
        </div>
      </div>
    </div>
  );
}
