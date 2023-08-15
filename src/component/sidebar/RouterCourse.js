import classes from './style/RouterCourse.module.css';
<<<<<<< HEAD


 function RouterCourse({ student, teacher, ta, course }) {
   let courseStyle = classes.name;
   if (student==true) courseStyle =   classes.student;
   if (teacher== true) courseStyle = classes.teacher;
   if (ta == true) courseStyle =  classes.ta;
   

   return (
     
      <h4 className={`${classes.courseStyle} ${classes.name}` }>{course.name || "نام درس"}</h4>

   )
}
export default RouterCourse;
=======
import { useState } from 'react';
import { FaCircle } from "react-icons/fa";

export default function RouterCourse({ student, course, backgroundColors, hoverColor }) {
   const [isHover, setIsHover] = useState(false);
   const [isActive, setIsActive] = useState(false);

   const handleMouseEnter = () => {
      console.log("state")
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      console.log("state")
      setIsHover(false);
   };

   const handleClick = () => {
      setIsActive(current => !current);
   };

   const courseBox = {
      backgroundColor: isHover ? hoverColor : backgroundColors,
      backgroundColor: isActive ? hoverColor : backgroundColors
   }

   return (

      <h4 className={classes.courseName}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onClick={handleClick}
         style={courseBox}
      >{course.name || "نام درس"}</h4>

   )
}
>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb
