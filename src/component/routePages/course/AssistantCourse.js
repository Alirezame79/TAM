import classes from "./style/AssistantCourse.module.css";
import { BiSolidGroup } from "react-icons/bi";
import {
  FaCalendarAlt,
  FaFileAlt,
  FaUsers,
  FaFileSignature,
} from "react-icons/fa";
import { FaBookOpenReader, FaLaptopCode } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useCourse from "../../../fetch/useCourse";
import { useNavigate } from "react-router-dom";
import Card from "../../../ui/Card";

export default function AssistantCourse({ id }) {
  // const { id } = useParams();
  useCourse(id);
  const course = useSelector((state) => {
    return state.course;
  });
  const navigate = useNavigate();

  if (Object.keys(course).length === 0) return;

  function courseMemberClicked() {
    navigate("members/");
  }

  return (
    <div className={classes.container}>
      <div className={classes.name}>
        <h1> {course.name} </h1>
      </div>

      <div className={classes.teacher}>
        <img alt={"profile"} />
        <h2>{course.owner.name} : استاد درس</h2>
      </div>

      <div className={classes.centarPage}>
        <Card courseInfo>
          <h4>{course.id} : آیدی درس</h4>
          <h4> زمان : {course.class_time}</h4>
          <h4>{course.class_location} : مکان </h4>
          <h4> {course.exam_time} : امتحان</h4>
          <h4>
            {" "}
            :دستیاران
            <ul>
              {course.assistant_profiles.map((assistant) => {
                return <li key={assistant.id}>{assistant.name}</li>;
              })}
            </ul>
          </h4>
        </Card>

        <div className={classes.bodyCircleBtn}>
          <div className={classes.CircleBtn} onClick={courseMemberClicked}>
            {" "}
            <BiSolidGroup className={classes.place} />{" "}
            <p className={classes.CircleBtnText}> اعضا </p>
          </div>
          <div className={classes.CircleBtn}>
            {" "}
            <FaUsers className={classes.place1} />{" "}
            <p className={classes.CircleBtnText}> لیست گروه ها</p>
          </div>
          <div className={classes.CircleBtn}>
            {" "}
            <FaLaptopCode className={classes.place} />{" "}
            <p className={classes.CircleBtnText}> پروژه ها </p>
          </div>
          <div className={classes.CircleBtn}>
            {" "}
            <FaFileSignature className={classes.place} />{" "}
            <p className={classes.CircleBtnText}> تمرین </p>
          </div>
          <div className={classes.CircleBtn}>
            {" "}
            <FaBookOpenReader className={classes.place} />
            <p className={classes.CircleBtnText}> جزوه </p>
          </div>
          <div className={classes.CircleBtn}>
            {" "}
            <FaFileAlt className={classes.place} />{" "}
            <p className={classes.CircleBtnText}> نمره </p>
          </div>
        </div>
      </div>
    </div>
  );
}
