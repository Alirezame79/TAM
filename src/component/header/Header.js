import classes from './style/Header.module.css';
import { AiTwotoneBell } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi"
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const signOut = useSignOut()
    const navigate = useNavigate();

    function signoutClicked() {
        navigate('/');
        signOut()
    }


    return (
        <div className={classes.body}>

            <img src="TamLogo.png" alt="Tam Logo" className={classes.tamLogoHeader} />
            <BiLogOutCircle className={classes.outLogo} onClick={signoutClicked} />
            <AiTwotoneBell className={classes.notifLogo} />
        </div>
    )
}