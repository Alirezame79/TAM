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

    return (
        <div className={classes.body}>
            <FaCog custome onClick={editProfile} className={classes.edit} />
            <img src={BaseURL + profile.profile_image} alt={'profile'} className={classes.profileImg} />
            <h1 className={classes.profileName}>{profile.name || "کتایون غمگسار"}</h1>

            <div className={classes.profileLinks}>
                <div className={classes.icons}>
                    <h3 className={classes.profileEmail}>{profile.email || "katatayoungh@gmail.com"}</h3>
                    <FaEnvelope className={`${classes.Fa} ${classes.email}`} />
                </div>
                <div className={classes.icons}>
                    <h3 className={classes.profileGithub}>{profile.social_github || "katayoungh"}</h3>
                    <FaGithub className={`${classes.Fa} ${classes.github}`} />
                </div>
                <div className={classes.icons}>
                    <h3 className={classes.profileLinkedIn}>{profile.social_linkedIn || "katayounghamgoar"}</h3>
                    <FaLinkedin className={`${classes.Fa} ${classes.Linkedin}`} />
                </div>
            </div>
        </div>
    )
}