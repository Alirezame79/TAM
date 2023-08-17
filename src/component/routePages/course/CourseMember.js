import classes from './style/CourseMember.module.css'
import React, { useEffect, useRef, useState } from 'react'
import Card from '../../../ui/Card'
import { useParams } from "react-router-dom";
import useCourseMember from '../../../fetch/useCourseMember';

export default function CourseMember() {
    const { id } = useParams();
    const { res } = useCourseMember(id);

    console.log(res)

    return (
        <div className={classes.body}>
            {res.student_profiles !== null && <div>
                <h1>Test</h1>
                {/* {res.student_profiles.map((profile) => {
                    return (
                        <div className={classes.memberContainer}>
                            <h3>دانشجو</h3>
                            <div className={classes.eachMember}>
                                <h2>{profile.name}</h2>
                                <h2>icon</h2>
                            </div>
                        </div>
                    )
                })} */}
            </div>}
        </div>
    )
}