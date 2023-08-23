import classes from "./style/CourseMember.module.css";

import React, { useEffect, useRef, useState } from "react";
import Card from "../../../ui/Card";
import { useParams } from "react-router-dom";
import useCourseMember from "../../../fetch/useCourseMember";
import { FaUserGraduate, FaUserTie, FaUser, FaUserEdit } from "react-icons/fa";

export default function CourseMember() {
  const { id } = useParams();
  const { res } = useCourseMember(id);

  if (res === null) return;

  // console.log(res)

  return (
    <Card courseMember>
      <Card members>
        <div className={classes.role}>
          <h2>استاد</h2>
          <FaUserTie className={classes.roleIcon} />
        </div>
        {res.owner !== null && (
          <>
            <div className={classes.memberContainer}>
              <div className={classes.eachMember}>
                <h3>{res.owner.name}</h3>
              </div>
            </div>
          </>
        )}
      </Card>
      <Card members>
        <div className={classes.role}>
          <h2>دستیاران استاد</h2>
          <FaUserEdit className={classes.roleIcon} />
        </div>
        {res.assistant_profiles !== null && (
          <>
            {res.assistant_profiles.map((profile) => {
              return (
                <div className={classes.memberContainer} key={profile.id}>
                  <div className={classes.eachMember}>
                    <h3>{profile.name}</h3>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </Card>
      <Card members>
        <div className={classes.role}>
          <h2>دانشجویان</h2>
          <FaUserGraduate className={classes.roleIcon} />
        </div>
        {res.student_profiles !== null && (
          <>
            {res.student_profiles.map((profile) => {
              return (
                <div className={classes.memberContainer} key={profile.id}>
                  <div className={classes.eachMember}>
                    <h3>{profile.name}</h3>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </Card>
    </Card>
  );
}
