import classes from "./style/Card.module.css";

function Card({
  click,
  dir = "ltr",
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
  groupView,
  groupsOfGroupList,
  uploadProject,
  manageProject,
  projectList,
  projectListItem,
  viewProject,
  projectListItemMoreInfo,
  teacherSchedule,
  assistantSchedule,
  groupOwnerSchedule,
  studentSchedule,
  studentRound,
  studentRoundSet,
  studentRoundSelect,
  studentRounds,
  round,
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

  if (groupView) cardStyle = classes.groupViewStyle;
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
  if (teacherSchedule) cardStyle = classes.teacherScheduleStyle;
  if (assistantSchedule) cardStyle = classes.assistantScheduleStyle;
  if (groupOwnerSchedule) cardStyle = classes.groupOwnerScheduleStyle;
  if (studentSchedule) cardStyle = classes.studentScheduleStyle;
  if (round) cardStyle = classes.roundStyle;
  if (studentRounds) cardStyle = classes.studentRoundsStyle;
  if (studentRound) cardStyle = classes.studentRoundStyle;
  if (studentRoundSet) cardStyle = classes.studentRoundSetStyle;
  if (studentRoundSelect) cardStyle = classes.studentRoundSelectStyle;

  return (
    <div className={cardStyle} dir={dir} onClick={click}>
      {children}
    </div>
  );
}

export default Card;
