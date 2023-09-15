import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../store/index";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASEURL from "./BaseURL";
import { useEffect } from "react";


export default function useForgetPassword(data) {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (data === null) return
    
        fetch(BASEURL + "/reset-password/", {
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
                    navigate("/");
                    toast.info('لینک ساخت رمزعبور جدید به ایمیل شما ارسال شد')
                } else {
                    toast.error('کاربری با ایمیل وارد شده وجود ندارد')
                }
                dispatch(setModal(null))
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, [data])
}