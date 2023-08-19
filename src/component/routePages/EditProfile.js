import Input from '../../ui/Input'
import { useEffect, useRef, useState } from 'react'
import classes from './style/EditProfile.module.css'
import { useSelector } from 'react-redux'
import BaseURL from '../../fetch/BaseURL'
import Button from '../../ui/Button'
import useUpdateProfile from '../../fetch/useUpdateProfile'
import Card from '../../ui/Card'
import { useDispatch } from "react-redux";
import { setModal } from '../../store/index'
import ConfirmEditProfileModal from '../Portal/ConfirmEditProfileModal'

export default function EditProfile() {
    let bio = useRef("");
    let email = useRef("");
    let githubLink = useRef("");
    let linkedinLink = useRef("");
    const profile = useSelector((state) => {
        return state.profile
    })
    const modal = useSelector((state) => {
        return state.modal
    })
    const dispatch = useDispatch();
    const [file, setFile] = useState(null)
    const [showImage, setShowImage] = useState()
    const [data, setData] = useState(null)
    // const [modal, setModal] = useState(false)
    // useUpdateProfile(data)

    useEffect(() => {
        // bio.current.value = profile.bio error midad baraye textarea
        email.current.value = profile.email
        githubLink.current.value = profile.social_github
        linkedinLink.current.value = profile.social_linkedin
        setShowImage(BaseURL + profile.profile_image)
        dispatch(setModal(''))
    }, [profile])

    function setNewImage(e) {
        console.log(e.target.files);
        const x = URL.createObjectURL(e.target.files[0])
        console.log(x)
        console.log(e.target.files[0])
        if (x === null) return
        setShowImage(x)
        setFile(e.target.files[0]);
    }

    function sendRequest() {
        let form_data = new FormData();
        form_data.append('email', email.current.value);
        form_data.append('bio', bio.current.value);
        if (file !== null) {
            form_data.append('profile_image', file, file.name);
        } else {
            form_data.append('profile_image', null);
        }
        form_data.append('social_github', githubLink.current.value);
        form_data.append('social_linkedin', linkedinLink.current.value);

        setData(form_data)
        dispatch(setModal('edit-profile'))

        console.log(file)
    }

    return (
        <Card editProfile>
            <h2 className={classes.title}>تغییرات پروفایل</h2>
            {modal === 'edit-profile' && <ConfirmEditProfileModal data={data} />}
            <div className={classes.choosePhoto}>
                <div className={classes.choosePhotoInput}>
                    <input type="file" className={classes.input} onChange={setNewImage} />
                </div>
                <img src={showImage} className={classes.image} alt={'newImage'} width='150px' />
            </div>
            <div className={classes.editProfileInput}>
                <label htmlFor="bio">بیوگرافی   </label>
                {/* <textarea id="bio" cols="40" rows="5" className={classes.inputEditProfile} defaultValue={profile.bio} />  */}
                <Input  innerRef={bio}   editProfileBio defultValueText = {profile.bio}/>
            </div>
            <div className={classes.editProfileInput}>
                <label htmlFor="email">ایمیل</label>
                <Input placeholder="ایمیل" innerRef={email} id="email" editProfile />
            </div>
            <div className={classes.editProfileInput}>
                <label htmlFor="githubLink">گیت هاب</label>
                <Input placeholder="گیت هاب" innerRef={githubLink} id="githubLink" editProfile />
            </div>
            <div className={classes.editProfileInput}>
                <label htmlFor="linkedinLink">لینکدین</label>
                <Input placeholder="لینکدین" innerRef={linkedinLink} id="linkedinLink" editProfile />
            </div>
            <Button submit click={sendRequest}>مرحله بعد</Button>
        </Card>
    )
}