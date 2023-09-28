import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProfile, setStudentRoundList, setTeacherRoundList } from "../store/index";
import BASEURL from "./BaseURL";
import { useParams } from "react-router-dom";

export default function useStudentRoundList() {
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(BASEURL + "course/" + id + "/get-student-round/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((data) => {
        if (data.length >= 0) {
          console.log("accepted")
          dispatch(setStudentRoundList(data))
        }
        console.log(data);
      });
  }, [id]);
}
