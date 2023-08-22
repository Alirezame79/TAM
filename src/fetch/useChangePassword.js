import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../store/index";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success('رمزعبور با موفقیت تغییر کرد', {
          position: toast.POSITION.TOP_LEFT, autoClose: 5000
        })
        dispatch(setModal(null));
      } else if (response.status === 400) {
        toast.error('رمزعبور واردشده، استاندارد های لازم را دارا نیست. لطفا رمزعبور دیگری را امتحان کنید', {
          position: toast.POSITION.TOP_LEFT, autoClose: 5000
        })
        dispatch(setModal(null));
      } else if (response.status === 401) {
        toast.error('رمزعبور فعلی نادرست است', {
          position: toast.POSITION.TOP_LEFT, autoClose: 5000
        })
        dispatch(setModal(null));
      } else if (response.status === 409) {
        toast.error('رمزعبورهای فعلی و جدید یکسان هستند', {
          position: toast.POSITION.TOP_LEFT, autoClose: 5000
        })
        dispatch(setModal(null));
      } else if (response.status === 410) {
        toast.error('رمزعبورهای جدید یکسان نیستند', {
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
