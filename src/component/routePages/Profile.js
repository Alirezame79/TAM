import classes from './style/Profile.module.css'
import { useSelector } from 'react-redux'
import BaseURL from '../../fetch/BaseURL'
import Button from '../../ui/Button'
import NotFound from './NotFound'
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaCog } from "react-icons/fa";

export default function Profile() {
    const profile = useSelector((state) => {
        return state.profile
    })
    const navigate = useNavigate();

    function editProfile() {
        navigate('/profile/edit');
    }

    function changePasswordBtnClicked() {
        navigate('/profile/changePassword');
    }

    console.log(profile)

    return (
        <div className={classes.body}>
            <FaCog custome onClick={editProfile} className={classes.edit} />
            <button onClick={changePasswordBtnClicked}>Change Password</button>
            <img src={BaseURL + profile.profile_image} alt={'profile'} className={classes.profileImg} />
            <h1 className={classes.profileName}>{profile.name || "نام"}</h1>
            <h2>Bio: {profile.bio}</h2>
            <h2>National ID: {profile.national_id}</h2>
            <h2>Student ID: {profile.id}</h2>

            <div className={classes.profileLinks}>
                <div className={classes.icons}>
                    <h3 className={classes.profileEmail}>{profile.email || "Email"}</h3>
                    <FaEnvelope className={`${classes.Fa} ${classes.email}`} />
                </div>
                <div className={classes.icons}>
                    <h3 className={classes.profileGithub}>{profile.social_github || "Github"}</h3>
                    <FaGithub className={`${classes.Fa} ${classes.github}`} />
                </div>
                <div className={classes.icons}>
                    <h3 className={classes.profileLinkedIn}>{profile.social_linkedin || "LinkedIn"}</h3>
                    <FaLinkedin className={`${classes.Fa} ${classes.Linkedin}`} />
                </div>
            </div>
        </div>
    )
}