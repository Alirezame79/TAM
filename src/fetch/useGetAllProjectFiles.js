import BASEURL from "./BaseURL";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMembersList } from "../store";

export default function useGetAllProjectFiles(flag) {
    const {id} = useParams()

    console.log('step 0-1')

    useEffect(() => {
        if (flag === false) return

        console.log('step 1')

        fetch(BASEURL + "course/" + id + "/get-all-project/", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                console.log('step 2')
                if (response.status === 200) {
                    console.log("200")
                } else {
                    console.log(response.status)
                    toast.error('مشکلی رخ داده است')
                }
                return response.json();
            })
            .then((data) => {
                console.log('step 3')
                console.log(data);
            });
    }, [id])

}