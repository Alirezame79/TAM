import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { setModal, setAssistantList, setMembersList } from '../store';
import useGetCourseSetting from './useGetCourseSetting';
import BASEURL from './BaseURL';

export default function useAddGroupMember(newMember, user) {
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (newMember === null) return

        fetch(BASEURL + "course/" + id + "/add-group-member/", {
            method: "POST",
            body: JSON.stringify(newMember),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("Ok user")
                    toast.success('دانشجو با موفقیت به گروه اضافه شد.')
                    window.location.reload();
                } else if (response.status === 403) {
                    console.log("Permission Denied")
                    toast.error('کاربر مورد نظر اجازه تغییر اطلاعات این درس را ندارد')
                } else if (response.status === 406) {
                    console.log("Capacity is full")
                    toast.error('ظرفیت گروه تکمیل شده است')
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
    }, [newMember, id])

}