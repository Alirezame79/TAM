import { useEffect } from "react";
import BASEURL from "./BaseURL";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../store";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function useUpdateGroup(updatedData) {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (updatedData === null) return

        fetch(BASEURL + "course/" + id + "/update-group/", {
            method: "POST",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("Ok user")
                    toast.success('اطلاعات گروه بروزرسانی شد.')
                    navigate('/course/' + id)
                // } 
                // else if (response.status === 403) {
                //     console.log("Permission Denied")
                //     toast.error('کاربر مورد نظر اجازه تغییر اطلاعات این درس را ندارد')
                } else {
                    console.log("Error")
                    toast.error('مشکلی رخ داده است. لطفا با پشتیبانی تماس بگیرید')
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, [updatedData])
}