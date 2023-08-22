import { useEffect } from "react";


export default function useEditCourseSetting({ data }) {

    useEffect(() => {
        fetch("http://127.0.0.1:8000/login/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, [data])
}