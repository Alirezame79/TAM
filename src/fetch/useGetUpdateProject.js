import { useEffect } from "react";
import BASEURL from "./BaseURL";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProject } from "../store";

export default function useGetUpdateProject() {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(BASEURL + "course/" + id + "/update-project/", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("ok")
                } else if (response.status === 403) {
                    toast.error("کاربر موردنظر به این صفحه دسترسی ندارد.")
                    navigate('/course/' + id)
                }
                return response.json();
            })
            .then((data) => {
                if (data.id !== undefined) {
                    dispatch(setProject(data))
                }
                console.log(data);
            });
    }, [id])
}