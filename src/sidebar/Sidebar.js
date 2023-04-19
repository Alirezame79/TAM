import BeforeLogin from './BeforeLogin';
import classes from './Sidebar.module.css';

function Sidebar() {

    return (
        <div className={classes.container}>
            <h1 className={classes.sidebarTopic}>TAM</h1>
            <BeforeLogin />
        </div >
    );
}

export default Sidebar;