import classes from "./style/Input.module.css";

export default function Input({
  courseSetting,
  defultValueText,
  type = "text",
  placeholder,
  innerRef,
  change,
  login,
  editProfile,
  editProfileBio,
  changePass,
  haveCounterInputs,
  addDeletAssistant,
  addMemberOfGroup,
  creatGroup,
  groupDiscription,
  readOnly,
  editGroup,
  manageProjectDescription,
  date,
  time,
}) {
  let selectInput;
  let textareaInput;
  if (login) selectInput = classes.inputLogin;
  if (editProfile) selectInput = classes.inputEditProfile;
  if (changePass) selectInput = classes.inputChangePass;
  if (courseSetting) selectInput = classes.inputCourseSetting;
  if (haveCounterInputs) selectInput = classes.inputhaveCounterInputs;
  if (addDeletAssistant) selectInput = classes.inputAddDeletAssistant;
  if (addMemberOfGroup) selectInput = classes.inputAddMemberOfGroup;
  if (creatGroup) selectInput = classes.inputcreatGroup;
  if (editGroup) selectInput = classes.inputcreatGroup;
  if (editProfileBio) textareaInput = classes.inputEditProfileBio;
  if (manageProjectDescription)
    textareaInput = classes.inputManageProjectDescription;
  if (groupDiscription) textareaInput = classes.inputGroupDiscription;
  if (date) selectInput = classes.inputDate;
  if (time) selectInput = classes.inputTime;

  if (editProfileBio || groupDiscription || manageProjectDescription) {
    return (
      <textarea
        id="bio"
        cols="40"
        rows="5"
        ref={innerRef}
        className={textareaInput}
        defaultValue={defultValueText}
        dir="rtl"
      />
    );
  } else {
    return (
      <input
        className={selectInput}
        placeholder={placeholder}
        type={type}
        ref={innerRef}
        min={1}
        onChange={change}
        readOnly={readOnly}
        dir="rtl"
      />
    );
  }
}
