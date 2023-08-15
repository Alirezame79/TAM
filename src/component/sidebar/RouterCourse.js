import classes from './style/RouterCourse.module.css';


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