import classes from './style/Input.module.css';

export default function Input({ defultValueText,type, placeholder, innerRef, change, login, editProfile, editProfileBio, changePass }) {
    let selectInput;
    let returnObj;
    if (login) selectInput = classes.inputLogin;
    if (editProfile) selectInput = classes.inputEditProfile;
    if (changePass) selectInput = classes.inputChangePass;

if(editProfileBio){
    return(
        <textarea id="bio" cols="40" rows="5" className={classes.inputEditProfileBio} defaultValue={defultValueText}/> 
    )     
    
}
    else{
    return (
        
      <input className={selectInput} placeholder={placeholder} type={type} ref={innerRef} onChange={change} />
   
    )}
}