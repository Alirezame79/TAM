import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setModal, setAssistantList } from '../store';
import useGetCourseSetting from './useGetCourseSetting';
import BASEURL from './BaseURL';

export default function useAddAssistant(newAssistant, user, id) {
    const dispatch = useDispatch()
    const assistantList = useSelector((state) => {
        return state.assistantList;
    })

    useEffect(() => {
        if (newAssistant === null) return

        fetch(BASEURL + "course/" + id + "/add-assistant/", {
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
                    toast.success('دستیار با موفقیت افزوده شد.')
                    let list = [...assistantList]
                    list.unshift(user)
                    dispatch(setAssistantList(list))
                } else if (response.status === 403) {
                    console.log("Permission Denied")
                    toast.error('کاربر مورد نظر اجازه تغییر اطلاعات این درس را ندارد')
                } else {
                    console.log("Error")
                    toast.error('مشکلی رخ داده است. لطفا با پشتیبانی تماس بگیرید')
                }
                dispatch(setModal(null))
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, [newAssistant, id])

}