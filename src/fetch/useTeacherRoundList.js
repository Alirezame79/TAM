import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProfile, setTeacherRoundList } from "../store/index";
import BASEURL from "./BaseURL";
import { useParams } from "react-router-dom";

export default function useTeacherRoundList() {
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(BASEURL + "course/" + id + "/get-manager-round/", {
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
          dispatch(setTeacherRoundList(data))
        }
        console.log(data);
      });
  }, [id]);
}
