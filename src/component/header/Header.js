import classes from './style/Header.module.css';
import {AiTwotoneBell} from "react-icons/ai";
import{BiLogOutCircle} from "react-icons/bi"

export default function Header() {

    return (
        <div className={classes.body}>
            
            <img src="TamLogo.png" alt="Tam Logo"  className={classes.tamLogoHeader}/>
            <BiLogOutCircle className={classes.outLogo}/>
            <AiTwotoneBell className={classes.notifLogo} onClick={() => {
                    navigate('/');
                    signOut()
                }}/>
        </div>
    )
}