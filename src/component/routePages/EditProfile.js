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

    const [file, setFile] = useState();



    useEffect(() => {
        email.current.value = profile.email
        githubLink.current.value = profile.social_github
        linkedinLink.current.value = profile.social_linkedin
    }, [profile])
    // const [data, setData] = useState({
    //     title: "",
    //     description: "",
    //     image_url: "",
    // });

    let form_data = new FormData();

    function setNewImage(e) {
        console.log(e.target.files);
        const newImage = URL.createObjectURL(e.target.files[0])
        // let newData;
        // if (newImage !== null) {
        //     newData["Image"] = newImage
        //     setData(newData);
        // }
        // form_data.append("title", data.title)
        // form_data.append("description", data.description)
        // form_data.append("image url", data.image_url)
    }

    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));

    // }
    // const handleImageChange = (e) => {
    //     let newData = { ...data };
    //     newData["image_url"] = e.target.files[0];
    //     setData(newData);
    // };

    function sendRequest() {
        let form_data = new FormData();
        form_data.append('image', file);
        form_data.append('title', "profile");

        const data = {
            name: "Alireza",
            email: "Alireza New Email",
            profile_image: form_data,
            social_github: "github new ",
            social_linkedin: "linked in new"
        }

        fetch('http://127.0.0.1:8000/update-profile/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then((response) => {
            console.log(response)
            return response.json()
        }).then((data) => {
            console.log(data)
        })
    }

    return (
        <div className={classes.body}>
            <div className={classes.profile}>
                <h3 className={classes.name} >{profile.name}</h3>
                <img className={classes.image} src={BaseURL + profile.profile_image} alt={'profile'} width='200px' />
            </div>

            <div className={classes.main}>
                <div className={classes.choosePhoto}>
                    <h2>Add Image:</h2>
                    <input type="file" onChange={setNewImage} />
                    <img src={file} alt={'newImage'} width='150px' />

                    {/* <label for="inputTag" className={classes.inputPhoto} onClick={setNewImage}>Select Image
                    </label> */}
                </div>

                <Button editProfile click={sendRequest}>Browse Image</Button>
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