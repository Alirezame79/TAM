import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../store/index";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function useUpdateProfile(data) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (data === null) return;

  fetch("http://127.0.0.1:8000/update-profile/", {
    method: "POST",
    body: data,
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        navigate("/profile");
        toast.success('پروفایل با موفقیت ویرایش شد', {
          position: toast.POSITION.TOP_LEFT, autoClose: 5000
        })
        dispatch(setModal(null));
      } else {
        toast.error('مشکلی رخ داده است', {
          position: toast.POSITION.TOP_LEFT, autoClose: 5000
        })
        dispatch(setModal(null));
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
