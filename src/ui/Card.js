import classes from './style/Card.module.css';

function Card({ children, profile,editProfile,courseInfo, changePass }) {
    let cardStyle;
    if (profile) cardStyle = classes.loginStyle;
    if (editProfile) cardStyle = classes.edirProfileStyle;
    if (changePass) cardStyle = classes.changePassStyle;
    if (courseInfo) cardStyle = classes.courseStyle;
    return (
        <div className={cardStyle}>{children}</div>
    );
}

export default Card;