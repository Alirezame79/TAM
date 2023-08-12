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
            <h3>{profile.name}</h3>
            <label htmlFor="email">ایمیل</label>
            <Input innerRef={email} id="email" />
            <h3>{profile.id}</h3>
            <h3>{profile.national_id}</h3>
            <img src={BaseURL + profile.profile_image} alt={'profile'} width='200px' />
            <br />
            <h2>Add Image:</h2>
            <input type="file" onChange={setNewImage} />
            <img src={data.image_url} alt={'newImage'} width='150px' />
            <Button >Browse Image</Button>
            <br />
            <label htmlFor="githubLink">گیت هاب</label>
            <Input innerRef={githubLink} id="githubLink" />
            <br />
            <label htmlFor="linkedinLink">لینکدین</label>
            <Input innerRef={linkedinLink} id="linkedinLink" />
        </div>
    )
}