import Input from '../../ui/Input'
import { useEffect, useRef, useState } from 'react'
import classes from './style/EditProfile.module.css'
import { useSelector } from 'react-redux'
import BaseURL from '../../fetch/BaseURL'
import Button from '../../ui/Button'
import useUpdateProfile from '../../fetch/useUpdateProfile'

export default function EditProfile() {
    let email = useRef("");
    let githubLink = useRef("");
    let linkedinLink = useRef("");
    const profile = useSelector((state) => {
        return state.profile
    })
    const [file, setFile] = useState()
    const [showImage, setShowImage] = useState()
    const [data, setData] = useState(null)
    useUpdateProfile(data)

    useEffect(() => {
        email.current.value = profile.email
        githubLink.current.value = profile.social_github
        linkedinLink.current.value = profile.social_linkedin
        setShowImage(BaseURL + profile.profile_image)
    }, [profile])


    function setNewImage(e) {
        console.log(e.target.files);
        const x = URL.createObjectURL(e.target.files[0])
        setShowImage(x)
        setFile(e.target.files[0]);
    }

    function sendRequest() {
        let form_data = new FormData();
        form_data.append('name', "Alireza Form");
        form_data.append('email', email.current.value);
        form_data.append('profile_image', file, file.name);
        form_data.append('social_github', githubLink.current.value);
        form_data.append('social_linkedin', linkedinLink.current.value);

        setData(form_data)

        console.log(file)
    }

    return (
        <div className={classes.body}>
            {/* <div className={classes.profile}>
                <h3 className={classes.name} >{profile.name}</h3>
                <img className={classes.image} src={BaseURL + profile.profile_image} alt={'profile'} width='200px' />
            </div> */}

            <div className={classes.main}>
                <div className={classes.choosePhoto}>
                    <h2>Add Image:</h2>
                    <input type="file" className={classes.input} onChange={setNewImage} />
                    <img src={showImage} className={classes.image} alt={'newImage'} width='150px' />
                </div>

                <label htmlFor="email">:ایمیل</label>
                <Input innerRef={email} id="email" />
                <label htmlFor="githubLink">:گیت هاب</label>
                <Input innerRef={githubLink} id="githubLink" />
                <label htmlFor="linkedinLink">:لینکدین</label>
                <Input innerRef={linkedinLink} id="linkedinLink" />

                <Button editProfile click={sendRequest}>Submit</Button>
            </div>
        </div>
    )
}