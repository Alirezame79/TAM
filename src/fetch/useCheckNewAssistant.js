import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setAssistant, setModal } from '../store';
import BASEURL from './BaseURL';

export default function useCheckNewAssistant(newAssistant, id) {
    const dispatch = useDispatch()

    useEffect(() => {
        if (newAssistant === null) return

        fetch(BASEURL + "course/" + id + "/check-assistant/", {
            method: "POST",
            body: JSON.stringify(newAssistant),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("Ok user")
                    dispatch(setModal("check-course-assistant"));
                } else if (response.status === 404) {
                    console.log("User not found")
                    toast.error('کاربری با شماره دانشجویی وارد شده وجود ندارد.')
                } else if (response.status === 409) {
                    console.log("Assistant exist")
                    toast.error('دستیاری با شماره دانشجویی وارد شده موجود است.')
                } else if (response.status === 406) {
                    console.log("User is student")
                    toast.error('کاربر مورد نظر دانشجوی این درس است و توانایی دستیار شدن را دارا نیست.')
                } else {
                    console.log("Error")
                    toast.error('مشکلی رخ داده است. لطفا با پشتیبانی تماس بگیرید')
                }
                return response.json();
            })
            .then((data) => {
                if (data.name !== undefined) {
                    dispatch(setAssistant(data))
                }
                console.log(data);
            });
    }, [newAssistant, id])

}