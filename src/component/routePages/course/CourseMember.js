import classes from './style/CourseMember.module.css'
import React, { useEffect, useRef, useState } from 'react'
import Card from '../../../ui/Card'
import { useParams } from "react-router-dom";
import useCourseMember from '../../../fetch/useCourseMember';

export default function CourseMember() {
    const { id } = useParams();
    const { res } = useCourseMember(id);

    if (res === null) return

    // console.log(res)

    return (
        <Card courseMember>
            <Card members>
                {res.owner !== null && <>
                    <div className={classes.memberContainer}>
                        <h3>استاد</h3>
                        <div className={classes.eachMember}>
                            <h2>{res.owner.name}</h2>
                            <h2>icon</h2>
                        </div>
                    </div>
                </>}
            </Card>
            <Card members>
                {res.assistant_profiles !== null && <>
                    {res.assistant_profiles.map((profile) => {
                        return (
                            <div className={classes.memberContainer} key={profile.id}>
                                <h3>دستیار استاد</h3>
                                <div className={classes.eachMember}>
                                    <h2>{profile.name}</h2>
                                    <h2>icon</h2>
                                </div>
                            </div>
                        )
                    })}
                </>}
            </Card>
            <Card members>
                {res.student_profiles !== null && <>
                    {res.student_profiles.map((profile) => {
                        return (
                            <div className={classes.memberContainer} key={profile.id}>
                                <h3>دانشجو</h3>
                                <div className={classes.eachMember}>
                                    <h2>{profile.name}</h2>
                                    <h2>icon</h2>
                                </div>
                            </div>
                        )
                    })}
                </>}
            </Card>
        </Card>

    )
}