import BASEURL from "./BaseURL";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function useCheckGroup(id) {
    const navigate = useNavigate()
    const [data, setData] = useState()

    useEffect(() => {
        fetch(BASEURL + "course/" + id + "/check-group/", {
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
                    console.log("create group 403")
                    navigate("/permissionDenied");
                    return
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setData(data)
            });
    }, [])

    return { data };
}