import classes from "./style/Card.module.css";

function Card({
  children,
  alert,
  profile,
  editProfile,
  courseInfo,
  changePass,
  login,
  courseMember,
  members,
  confirm,
  courseSetting,
  assistants,
  creatGroup,
  addMemberOfGroup,
  groupViweDescription,
  groupViweMember,
  detailGroup,
  editGroup,
  groupList,
  groupsOfGroupList,
}) {
  let cardStyle;
  if (login) cardStyle = classes.loginStyle;
  if (profile) cardStyle = classes.profileStyle;
  if (editProfile) cardStyle = classes.editProfileStyle;
  if (changePass) cardStyle = classes.changePassStyle;
  if (courseInfo) cardStyle = classes.courseStyle;
  if (courseMember) cardStyle = classes.courseMemberStyle;
  if (members) cardStyle = classes.membersStyle;
  if (confirm) cardStyle = classes.confirmStyle;
  if (courseSetting) cardStyle = classes.courseSettingStyle;
  if (assistants) cardStyle = classes.assistantsStyle;
  if (alert) cardStyle = classes.alertStyle;
  if (creatGroup) cardStyle = classes.creatGroupStyle;
  if (editGroup) cardStyle = classes.creatGroupStyle;
  if (detailGroup) cardStyle = classes.creatGroupStyle;
  if (addMemberOfGroup) cardStyle = classes.addMemberOfGroupStyle;
  if (groupViweDescription) cardStyle = classes.groupViweDescriptionStyle;
  if (groupViweMember) cardStyle = classes.groupViweMemberStyle;
  if (groupList) cardStyle = classes.courseMemberStyle;
  if (groupsOfGroupList) cardStyle = classes.groupsOfGroupListStyle;

  return <div className={cardStyle}>{children}</div>;
}

export default Card;
