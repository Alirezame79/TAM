import classes from "./style/RouterCourse.module.css";

function RouterCourse({ student, teacher, assistant, course }) {
  let courseStyle;
  if (teacher) courseStyle = classes.routerCourseClass + " " + classes.teacher;
  if (assistant) courseStyle = classes.routerCourseClass + " " + classes.assistant;
  if (student) courseStyle = classes.routerCourseClass + " " + classes.student;

  return <h4 className={courseStyle}>{course.name}</h4>;
}
export default RouterCourse;
