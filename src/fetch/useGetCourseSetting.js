import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAssistantList, setCourseSetting } from '../store/index'
import BASEURL from "./BaseURL";
import { useNavigate } from "react-router-dom";

export default function useCourseSetting(id) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(BASEURL + "course/" + id + "/update-course/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("Ok")
        } else if (response.status === 403) {
          console.log("permission denied")
          navigate("/permissionDenied")
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setCourseSetting(data))
        dispatch(setAssistantList(data.assistant_profiles))
      });
  }, [id]);

}
