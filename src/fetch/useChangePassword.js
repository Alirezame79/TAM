import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../store/index";

export default function useChangePassword(data) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (data === null) return;

  fetch("http://127.0.0.1:8000/change-password/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        navigate("/profile");
        dispatch(setModal(null));
      } else if (response.status === 400) {
        dispatch(setModal("change-password-alert"));
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
