import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProfile, setScheduleRole, setStudentRoundList, setTeacherRoundList } from "../store/index";
import BASEURL from "./BaseURL";
import { useNavigate, useParams } from "react-router-dom";

export default function useSchedule() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(BASEURL + "course/" + id + "/schedule/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response)
        if (response.status === 403) {
          navigate('/permissionDenied')
        }
        return response.json();
      })
      .then((data) => {
        if (data.schedule_status !== undefined) {
          console.log('test')
          dispatch(setScheduleRole(data))
        }
        console.log(data);
      });
  }, [id]);
}
