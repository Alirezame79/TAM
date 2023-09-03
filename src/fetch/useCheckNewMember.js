import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setMember, setModal } from '../store';
import BASEURL from './BaseURL';

export default function useCheckNewMember(studentId) {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (studentId === null) return

        fetch(BASEURL + "course/" + id + "/check-member/", {
            method: "POST",
            body: JSON.stringify(studentId),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                // if (response.status === 200) {
                //     console.log("Ok user")
                //     dispatch(setModal("check-group-member"));
                // } 
                // else if (response.status === 404) {
                //     console.log("User not found")
                //     toast.error('کاربری با شماره دانشجویی وارد شده وجود ندارد.')
                // } else if (response.status === 409) {
                //     console.log("Assistant exist")
                //     toast.error('دستیاری با شماره دانشجویی وارد شده موجود است.')
                // } else if (response.status === 406) {
                //     console.log("User is student")
                //     toast.error('کاربر مورد نظر دانشجوی این درس است و توانایی دستیار شدن را دارا نیست.')
                // } else {
                //     console.log("Error")
                //     toast.error('مشکلی رخ داده است. لطفا با پشتیبانی تماس بگیرید')
                // }
                return response.json();
            })
            .then((data) => {
                // add dispatch set Member
                console.log(data);
            });
    }, [studentId, id])

}