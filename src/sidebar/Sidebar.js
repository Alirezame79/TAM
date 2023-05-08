import { useContext, useEffect, useState } from 'react';
import BeforeLogin from './BeforeLogin';
import classes from './Sidebar.module.css';
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <div className={classes.container}>
            <h1 className={classes.sidebarTopic}>سامانه تام</h1>
            <BeforeLogin />
            <div className={classes.linkContainer}>
                <Link className={classes.routerLinks} to={"/blue"}>Blue</Link>
                <Link className={classes.routerLinks} to={"/brown"}>Brown</Link>
                <Link className={classes.routerLinks} to={"/yellow"}>Yellow</Link>
            </div>
        </div >
    );
}

export default Sidebar;