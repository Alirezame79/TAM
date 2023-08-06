import classes from './style/Profile.module.css'
import { useSelector } from 'react-redux'
import BaseURL from '../../fetch/BaseURL'
import Button from '../../ui/Button'
import NotFound from './NotFound'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const profile = useSelector((state) => {
        return state.profile
    })
    const navigate = useNavigate();

    function editProfile() {
        navigate('/profile/edit');
    }

    return (
        <div>
            <h1>{profile.name}</h1>
            <h3>{profile.email}</h3>
            <h3>{profile.id}</h3>
            <h3>{profile.national_id}</h3>
            <img src={BaseURL + profile.profile_image} alt={'profile'} width='200px' />
            <h3>{profile.social_github}</h3>
            <h3>{profile.social_linkedin}</h3>
            <Button custome click={editProfile}>Edit Profile</Button>
        </div>
    )
}