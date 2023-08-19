import classes from './style/Input.module.css';

export default function Input({ type, placeholder, innerRef, change, login, editProfile, editProfileBio, changePass }) {
    let selectInput;
    if (login) selectInput = classes.inputLogin;
    if (editProfile) selectInput = classes.inputEditProfile;
    if (changePass) selectInput = classes.inputChangePass;

    if (editProfileBio) {
        return (
            <textarea name="Text1" cols="40" rows="5"></textarea>
        )
    }
    return (
        <input className={selectInput} placeholder={placeholder} type={type} ref={innerRef} onChange={change} />
    )
}