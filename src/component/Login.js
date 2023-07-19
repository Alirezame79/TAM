import classes from './Login.module.css';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Checkbox, FormControlLabel } from '@mui/material';
import { blue, pink } from "@mui/material/colors";

export default function Login() {

    // <h1 className={classes.loginPortalTitle}>ورود</h1>
    //         <div className={classes.loginPortalBody}>
    //             <div className={classes.inputContainers}>
    //                 <Input id="username" />
    //                 <label className={classes.labelInput} htmlFor="username">نام کاربری</label>
    //             </div>
    //             <div className={classes.inputContainers}>
    //                 <Input id="password" type={'password'} />
    //                 <label className={classes.labelInput} htmlFor="password">رمز عبور</label>
    //             </div>
    //             <div className={classes.checkBoxContainer}>
    //                 <FormControlLabel control={<Checkbox sx={{
    //                     color: pink[500],
    //                     '&.Mui-checked': {
    //                         color: pink[200],
    //                     },
    //                 }} />} label="مدرس هستم" labelPlacement="start" />
    //             </div>
    //             <Button>ورود</Button>
    //         </div>

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h2>سامانه تام</h2>
                <h4>دانشگاه گیلان</h4>
                <img src='image.jpg' alt="TAM logo" />
            </div>
            <div className={classes.img}>
                <img src='../images/login-title.jpg' alt="login" />
            </div>
            <div className={classes.loginBox}>
                <label htmlFor="username">نام کاربری</label>
                <Input id="username" />
                <label htmlFor="password" type='password'>رمز عبور</label>
                <Input id="password" />
                <FormControlLabel control={<Checkbox sx={{
                    color: pink[500],
                    '&.Mui-checked': {
                        color: pink[200],
                    },
                }} />} label="استاد هستم" labelPlacement="start" />
                <Button>ورود</Button>
            </div>
        </div>
    )
}