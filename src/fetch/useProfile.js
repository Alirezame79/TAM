import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProfile } from '../store/index'

export default function useProfile() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/update-profile/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            dispatch(setProfile(data))
        })
    }, [])

}