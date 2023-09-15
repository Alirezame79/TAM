import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal, setProfile } from "../store/index";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASEURL from "./BaseURL";

export default function useUpdateProfile(data) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (data === null) return;

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
      } else {
        toast.error('مشکلی رخ داده است')
      }
      dispatch(setModal(null));
      return response.json();
    })
    .then((data) => {
      if (data.id !== undefined) {
        dispatch(setProfile(data))
      }
      console.log(data);
    });
}
