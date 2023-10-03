import { useDispatch } from "react-redux";
import { reset, setCourse } from "../store/index";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BASEURL from "./BaseURL";

export default function useCourse() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(reset());

    fetch(BASEURL + "course/" + id + "/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 403) {
          navigate("/permissionDenied");
          return;
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setCourse(data));
      });
  }, [id]);

}
