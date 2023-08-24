import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAssistantList, setCourseSetting } from '../store/index'

export default function useCourseSetting(id) {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("http://127.0.0.1:8000/course/" + id + "/setting", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setCourseSetting(data))
        dispatch(setAssistantList(data.assistant_profiles))
      });
  }, [id]);

}
