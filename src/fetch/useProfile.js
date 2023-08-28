import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProfile } from "../store/index";
import BASEURL from "./BaseURL";

export default function useProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(BASEURL + "update-profile/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setProfile(data));
      });
  }, []);
}
