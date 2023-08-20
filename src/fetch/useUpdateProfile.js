import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setModal } from '../store/index'

export default function useUpdateProfile(data) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (data === null) return

    fetch('http://127.0.0.1:8000/update-profile/', {
        method: 'POST',
        body: data,
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }).then((response) => {
        console.log(response)
        if (response.status === 200) {
            navigate('/profile');
            dispatch(setModal(null))
            return response.json()
        }
    }).then((data) => {
        console.log(data)
    })

}