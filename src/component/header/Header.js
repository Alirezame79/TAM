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
<<<<<<< HEAD
            <img src="TamLogo.png" alt="Tam Logo" className={classes.tamLogoHeader} />
            <div className={classes.logos}>
                <BiLogOutCircle className={classes.outLogo} onClick={signoutClicked} />
                <AiTwotoneBell className={classes.notifLogo} />
            </div>
=======

            <img src="TamLogo.png" alt="Tam Logo" className={classes.tamLogoHeader} />
            <BiLogOutCircle className={classes.outLogo} onClick={signoutClicked} />
            <AiTwotoneBell className={classes.notifLogo} />
>>>>>>> c3ccb4a6e5abd2165d4309248ee2c30b2e55f9eb
        </div>
    )
}