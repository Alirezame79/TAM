import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { setModal, setGroupList } from '../store';
import BASEURL from './BaseURL';

export default function useRemoveGroup(data, role) {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const groupList = useSelector((state) => {
        return state.groupList;
    })

    useEffect(() => {
        if (data === null) return

        fetch(BASEURL + "course/" + id + "/remove-group/", {
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
                    console.log("Ok user")
                    toast.success('گروه با موفقیت حذف شد.')
                    window.location.reload();
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
    }, [data, id])

}