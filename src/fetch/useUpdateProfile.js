import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../store/index";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASEURL from "./BaseURL";

export default function useUpdateProfile(data, flag) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (data === null || flag === undefined) return;

  fetch(BASEURL + "update-profile/", {
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
        toast.success('پروفایل با موفقیت ویرایش شد')
        dispatch(setModal(null));
      } else {
        toast.error('مشکلی رخ داده است')
        dispatch(setModal(null));
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
