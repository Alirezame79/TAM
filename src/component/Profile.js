import classes from './Profile.module.css'
import { useSelector } from 'react-redux'
import BaseURL from '../fetch/BaseURL'

export default function Profile() {
    const profile = useSelector((state) => {
        return state.profile
    })

    return (
        <div>
            <h1>{profile.name}</h1>
            <h3>{profile.email}</h3>
            <h3>{profile.id}</h3>
            <h3>{profile.nationalID}</h3>
            <img src={BaseURL + profile.profile_image} alt={'profile'} width='200px' />
            <h3>{profile.social_github}</h3>
            <h3>{profile.social_linkedIn}</h3>
        </div>
    )

}