import classes from './style/Profile.module.css'
import { useSelector } from 'react-redux'
import BaseURL from '../../fetch/BaseURL'
import Button from '../../ui/Button'
import NotFound from './NotFound'
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaCog, FaLock } from "react-icons/fa";

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
            <div className={classes.settindIcon}>
                <FaCog custome onClick={editProfile} className={classes.edit} />
                <FaLock className={classes.editPass} onClick={changePasswordBtnClicked} />
            </div>

            <img src={BaseURL + profile.profile_image} alt={'profile'} className={classes.profileImg} />
            <h1 className={classes.profileName}>{profile.name || "نام"}</h1>
            <h4>بیوگرافی: {profile.bio}</h4>
            {/* <h4>{profile.national_id} : کد ملی </h4> */}
            <h4> {profile.id} : شماره دانشجویی</h4>

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