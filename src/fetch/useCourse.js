import { useDispatch } from "react-redux";
import { setCourse } from "../store/index";
import { useIsAuthenticated } from "react-auth-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BASEURL from "./BaseURL";

export default function useCourse(id) {
  const dispatch = useDispatch();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
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
    }
  }, [id]);

}
