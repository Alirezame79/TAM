import classes from './style/RouterCourse.module.css';
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