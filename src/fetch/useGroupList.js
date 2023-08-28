import BASEURL from "./BaseURL";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGroupList } from "../store";

export default function useGroupList(id) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(BASEURL + "course/" + id + "/group-list/", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("create group 200")
                } else if (response.status === 403) {
                    navigate("/permissionDenied")
                } else {
                    toast.error('مشکلی رخ داده است')
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                dispatch(setGroupList(data))
            });
    }, [id])
}