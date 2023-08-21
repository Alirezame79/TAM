import classes from './style/Input.module.css';

export default function Input({ children, courseSetting, defultValueText, type, placeholder, innerRef, change, login, editProfile, editProfileBio, changePass, haveCounterInputs }) {
    let selectInput;
    if (login) selectInput = classes.inputLogin;
    if (editProfile) selectInput = classes.inputEditProfile;
    if (changePass) selectInput = classes.inputChangePass;
    if (courseSetting) selectInput = classes.inputCourseSetting;
    if (haveCounterInputs) selectInput = classes.inputhaveCounterInputs;

    if (editProfileBio) {
        return (
            <textarea id="bio" cols="40" rows="5" ref={innerRef} className={classes.inputEditProfileBio} defaultValue={defultValueText} />
        )
    } else {
        return (
            <input className={selectInput} placeholder={placeholder} type={type} ref={innerRef} onChange={change} />
        )
    }
}