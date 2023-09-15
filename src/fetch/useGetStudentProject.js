import BASEURL from "./BaseURL";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGroupList, setStudentProject } from "../store";

export default function useGetStudentProject() {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    fetch(BASEURL + "/course/" + id + "/get-project/", {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => {
            console.log(response);
            if (response.status === 200) {
                console.log("Ok")
            } else if (response.status === 403) {
                navigate("/permissionDenied")
            } else if (response.status === 410) {
                toast.error('استاد اجازه دسترسی به این بخش را فعال نکرده است')
                navigate("/course/" + id)
            }
            return response.json();
        })
        .then((data) => {
            if (data.project_detail !== undefined) {
                dispatch(setStudentProject(data))
            }
            console.log(data);
        });
}