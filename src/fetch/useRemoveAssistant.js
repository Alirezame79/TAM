import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { setModal, setAssistantList } from '../store';
import BASEURL from './BaseURL';

export default function useRemoveAssistant(oldAssistant, user) {
    const {id} = useParams();
    const dispatch = useDispatch()
    const assistantList = useSelector((state) => {
        return state.assistantList;
    })

    useEffect(() => {
        if (oldAssistant === null) return

        fetch(BASEURL + "course/" + id + "/remove-assistant/", {
            method: "POST",
            body: JSON.stringify(oldAssistant),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("Ok user")
                    toast.success('دستیار با موفقیت حذف شد.')
                    let list = [...assistantList]
                    list.shift(user)
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
    }, [oldAssistant, id])

}