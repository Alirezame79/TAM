import classes from "./style/Card.module.css";

function Card({
  dir="ltr",
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
  uploadProject,
  manageProject,
  projectList,
  projectListItem,
  viewProject,
  projectListItemMoreInfo,
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
  if (uploadProject) cardStyle = classes.uploadProjectStyle;
  if (manageProject) cardStyle = classes.manageProjectStyle;
  if (projectList) cardStyle = classes.projectListStyle;
  if (projectListItem) cardStyle = classes.projectListItemStyle;
  if (projectListItemMoreInfo) cardStyle = classes.projectListItemMoreInfoStyle;
  if (viewProject) cardStyle = classes.viewProjectStyle;
  
  return <div className={cardStyle} dir={dir}>{children}</div>;
}

export default Card;
