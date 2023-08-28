import BASEURL from "./BaseURL";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useCourseHeadData(id) {
    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(BASEURL + "course/" + id + "/head-data/", {
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
                setData(data)
            });
    }, [id])

    return { data }
}