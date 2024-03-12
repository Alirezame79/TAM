import BASEURL from "./BaseURL";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../store";

export default function useGroupOwnerSelectRound(data) {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (data === null) return

        fetch(BASEURL + "course/" + id + "/select-round/", {
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
                    navigate("/course/" + id + "/project/");
                    toast.success('زمانبندی با موفقیت انتخاب شد')
                } else if (response.status === 403) {
                    toast.error('کاربر مورد نظر اجازه ساخت گروه را ندارد')
                } else {
                    toast.error('مشکلی رخ داده است. لطفا با پشتیبانی تماس بگیرید')
                }
                dispatch(setModal(null))
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, [id, data])
}