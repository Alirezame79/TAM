import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../store/index";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASEURL from "./BaseURL";


export default function useEditCourseSetting(data) {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (data === null) return

    fetch(BASEURL + "course/" + id + "/update-course/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => {
            console.log(response);
            if (response.status === 200) {
                navigate("/course/" + id + "/");
                toast.success('اطلاعات درس با موفقیت ویرایش شد')
            } else if (response.status === 403) {
                toast.error('کاربر مورد نظر اجازه تغییر اطلاعات این درس را ندارد')
            } else {
                toast.error('مشکلی رخ داده است. لطفا با پشتیبانی تماس بگیرید')
            }
            dispatch(setModal(null))
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}