import Input from '../../ui/Input'
import { useEffect, useRef, useState } from 'react'
import classes from './style/EditProfile.module.css'
import { useSelector } from 'react-redux'
import BaseURL from '../../fetch/BaseURL'
import Button from '../../ui/Button'

export default function EditProfile() {
    let email = useRef("");
    let githubLink = useRef("");
    let linkedinLink = useRef("");
    const profile = useSelector((state) => {
        return state.profile
    })
    useEffect(() => {
        email.current.value = profile.email
        githubLink.current.value = profile.social_github
        linkedinLink.current.value = profile.social_linkedin
    }, [profile])
    const [data, setData] = useState({
        title: "",
        description: "",
        image_url: "",
    });

    let form_data = new FormData();



    function setNewImage(e) {
        console.log(e.target.files);
        const newImage = URL.createObjectURL(e.target.files[0])
        let newData;
        if (newImage !== null) {
            newData["Image"] = newImage
            setData(newData);
        }
        form_data.append("title", data.title)
        form_data.append("description", data.description)
        form_data.append("image url", data.image_url)
    }


    return (
        <div>
            <div className={classes.profil}>
                <h3 className={classes.name} >{profile.name}</h3>
                <img  className={classes.image} src={BaseURL + profile.profile_image} alt={'profile'} width='200px' />
            </div>
            <div className={classes.main}>
                {/* <h3>{profile.id}</h3>
                <h3>{profile.national_id}</h3> */}
                <h2>:Add Image</h2>
                <div className={classes.chosePhoto}>
                    <label for="inputTag"className={classes.inputPhoto}>Select Image
                        <input type="file" onChange={setNewImage}/>
                    </label>
                    {/* <input type="file" onChange={setNewImage} /> */}
                    <img src={data.image_url} alt={'newImage'} width='150px' />
                </div>
                <Button editProfile>Browse Image</Button>
                <label htmlFor="email">:ایمیل</label>
                <Input innerRef={email} id="email" />
                <label htmlFor="githubLink">:گیت هاب</label>
                <Input innerRef={githubLink} id="githubLink" />
                <label htmlFor="linkedinLink">:لینکدین</label>
                <Input innerRef={linkedinLink} id="linkedinLink" />
            </div>
        </div>
    )
}