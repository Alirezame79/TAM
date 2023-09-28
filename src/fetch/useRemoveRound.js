import { useEffect } from "react";
import BASEURL from "./BaseURL";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../store";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function useRemoveRound(data) {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (data === null) return

        fetch(BASEURL + "course/" + id + "/delete-round/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, [data, id])
}