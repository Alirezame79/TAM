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
        console.log(studentId)
        
        fetch(BASEURL + "course/" + id + "/check-group-member/", {
            method: "POST",
            body: JSON.stringify(studentId),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("Ok user")
                    dispatch(setModal("add-group-member"));
                } else if (response.status === 409) {
                    console.log("Conflict")
                    toast.error('دانشجوی مورد نظر، در حال حاضر عضو گروه می‌باشد.')
                } else {
                    console.log("Error")
                    toast.error('شماره دانشجویی وارد شده معتبر نمی‌باشد.')
                }
                return response.json();
            })
            .then((data) => {
                if (data.name !== undefined) {
                    dispatch(setMember(data))
                    
                }
                console.log(data);
            });
    }, [studentId, id])

}