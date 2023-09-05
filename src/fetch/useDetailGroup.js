import BASEURL from "./BaseURL";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMembersList } from "../store";

export default function useDetailGroup() {
    const {id} = useParams()
    const [data, setData] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(BASEURL + "course/" + id + "/group-detail/", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("200")
                } else if (response.status === 403) {
                    navigate("/permissionDenied")
                } else {
                    toast.error('مشکلی رخ داده است')
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if (data.group_status === 1) {
                    dispatch(setMembersList(data.group.members))
                }
                setData(data)
            });
    }, [id])

    return { data }
}