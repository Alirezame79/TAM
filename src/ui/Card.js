import classes from './style/Card.module.css';

function Card({ children, profile, editProfile, courseInfo, changePass, login, courseMember, members, confirm }) {
    let cardStyle;
    if (login) cardStyle = classes.loginStyle;
    if (profile) cardStyle = classes.profileStyle;
    if (editProfile) cardStyle = classes.editProfileStyle;
    if (changePass) cardStyle = classes.changePassStyle;
    if (courseInfo) cardStyle = classes.courseStyle;
    if (courseMember) cardStyle = classes.courseMemberStyle;
    if (members) cardStyle = classes.membersStyle;
    if (confirm) cardStyle = classes.confirmStyle;

    return (
        <div className={cardStyle}>{children}</div>
    );
}

export default Card;