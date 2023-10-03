import Input from "../../../ui/Input";
import { useEffect, useRef, useState } from "react";
import classes from "./style/EditProfile.module.css";
import { useSelector } from "react-redux";
import BaseURL from "../../../fetch/BaseURL";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import { useDispatch } from "react-redux";
import { setModal } from "../../../store/index";
import useProfile from "../../../fetch/useProfile";
import Modal from "../../portal/Modal";
import Loading from "../../loading/Loading";

export default function EditProfile() {
  let bio = useRef("");
  let email = useRef("");
  let githubLink = useRef("");
  let linkedinLink = useRef("");
  const profile = useSelector((state) => {
    return state.profile;
  });
  const modal = useSelector((state) => {
    return state.modal;
  });
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [showImage, setShowImage] = useState();
  const [data, setData] = useState(null);
  useProfile();

  useEffect(() => {
    if (Object.keys(profile).length === 0) return;

    bio.current.value = profile.bio;
    email.current.value = profile.email;
    githubLink.current.value = profile.social_github;
    linkedinLink.current.value = profile.social_linkedin;
    setShowImage(BaseURL + profile.profile_image);
  }, [profile]);

  function setNewImage(e) {
    console.log(e.target.files);
    const x = URL.createObjectURL(e.target.files[0]);
    console.log(x);
    console.log(e.target.files[0]);
    if (x === null) return;
    setShowImage(x);
    setFile(e.target.files[0]);
  }

  function sendRequest() {
    let requestData = new FormData();
    requestData.append("email", email.current.value);
    requestData.append("bio", bio.current.value);
    if (file !== null) {
      requestData.append("profile_image", file, file.name);
    } else {
      requestData.append("profile_image", "");
    }
    requestData.append("social_github", githubLink.current.value);
    requestData.append("social_linkedin", linkedinLink.current.value);

    setData(requestData);
    dispatch(setModal("edit-user-profile"));

    // console.log(file);
  }

  if (profile === undefined || Object.keys(profile).length === 0) {
    return <Loading />;
  } else {
    return (
      <>
        {modal === "edit-user-profile" && <Modal data={data} editProfile />}

        <Card editProfile>
          <h2 className={classes.title}>ویرایش پروفایل</h2>
          <div className={classes.choosePhoto}>
            <div className={classes.choosePhotoInput}>
              <input
                type="file"
                accept="image/*"
                className={classes.inputImg}
                onChange={setNewImage}
              />
            </div>
            <img
              src={showImage}
              className={classes.image}
              alt={"newImage"}
              width="150px"
            />
          </div>
          <div className={classes.editProfileInput}>
            <label htmlFor="bio" className={classes.labels}>
              بیوگرافی{" "}
            </label>
            {/* <textarea id="bio" cols="40" rows="5" className={classes.inputEditProfile} defaultValue={profile.bio} />  */}
            <Input
              innerRef={bio}
              editProfileBio
              defultValueText={profile.bio}
            />
          </div>
          <div className={classes.editProfileInput}>
            <label htmlFor="email" className={classes.labels}>
              ایمیل
            </label>
            <Input
              placeholder="ایمیل"
              innerRef={email}
              id="email"
              editProfile
            />
          </div>
          <div className={classes.editProfileInput}>
            <label htmlFor="githubLink" className={classes.labels}>
              گیت هاب
            </label>
            <Input
              placeholder="گیت هاب"
              innerRef={githubLink}
              id="githubLink"
              editProfile
            />
          </div>
          <div className={classes.editProfileInput}>
            <label htmlFor="linkedinLink" className={classes.labels}>
              لینکدین
            </label>
            <Input
              placeholder="لینکدین"
              innerRef={linkedinLink}
              id="linkedinLink"
              editProfile
            />
          </div>
          <Button submit click={sendRequest}>
            ثبت تغییرات
          </Button>
        </Card>
      </>
    );
  }
}
