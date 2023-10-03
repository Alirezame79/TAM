import BASEURL from "./BaseURL";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../store";

export default function usePostUpdateProject(data) {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
      if (data === null) return
      console.log(data)

      fetch(BASEURL + "course/" + id + "/update-project/", {
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
                navigate('/course/' + id)
                toast.success('پروژه با موفقیت آپلود شد')
            } else if (response.status === 403) {
                toast.error('کاربر مورد نظر اجازه ساخت گروه را ندارد')
            } else {
                toast.error('مشکلی رخ داده است. لطفا با پشتیبانی تماس بگیرید')
            }
            return response.json();
        })
        .then((data) => {
            dispatch(setModal(null));
            console.log(data);
        });
  }, [id, data])
}