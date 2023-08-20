import classes from './style/CourseMember.module.css'
import React, { useEffect, useRef, useState } from 'react'
import Card from '../../../ui/Card'
import { useParams } from "react-router-dom";
import useCourseMember from '../../../fetch/useCourseMember';
import { FaUserGraduate, FaUserTie ,  FaUser , FaUserEdit } from "react-icons/fa";

export default function CourseMember() {
    const { id } = useParams();
    const { res } = useCourseMember(id);

    if (res === null) return

    // console.log(res)

    return (
        <Card courseMember>
            <Card members>
                <div className={classes.role}>
                    <h3>استاد</h3>
                    <FaUserTie className={classes.roleIcon}/>
                </div>
                {res.owner !== null && <>
                    <div className={classes.memberContainer}>
                        
                        <div className={classes.eachMember}>
                            <h2>{res.owner.name}</h2>
                        </div>
                    </div>
                </>}
            </Card>
            <Card members> 
                <div className={classes.role}>
                    <h3>دستیاران استاد</h3>
                    <FaUserEdit className={classes.roleIcon}/>
                </div>
                {res.assistant_profiles !== null && <>
                    {res.assistant_profiles.map((profile) => {
                        return (
                            <div className={classes.memberContainer} key={profile.id}>
                               
                                <div className={classes.eachMember}>
                                    <h2>{profile.name}</h2>
                                </div>
                            </div>
                        )
                    })}
                </>}
            </Card>
            <Card members> 
                <div className={classes.role}>
                    <h3>دانشجویان</h3>
                        <FaUserGraduate className={classes.roleIcon}/>
                </div>
                {res.student_profiles !== null && <>
                    {res.student_profiles.map((profile) => {
                        return (
                            <div className={classes.memberContainer} key={profile.id}>
                                
                                <div className={classes.eachMember}>
                                    <h2>{profile.name}</h2>
                                </div>
                            </div>
                        )
                    })}
                </>}
            </Card>
        </Card>

    )
}