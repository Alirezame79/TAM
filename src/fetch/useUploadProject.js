import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal, setProfile } from "../store/index";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASEURL from "./BaseURL";
import { useEffect } from "react";

export default function useUploadProject(data) {
  const {id} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
      if (data === null) return;

      fetch(BASEURL + "course/" + id + "/upload-project/", {
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
            navigate("/course/" + id);
            toast.success('فایل بروژه ارسال شد')
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
  }, [data])
}
