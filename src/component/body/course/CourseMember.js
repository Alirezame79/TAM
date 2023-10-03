import classes from "./style/CourseMember.module.css";
import React, { useEffect, useRef, useState } from "react";
import Card from "../../../ui/Card";
import { useParams } from "react-router-dom";
import useCourseMember from "../../../fetch/useCourseMember";
import { FaUserGraduate, FaUserTie, FaUser, FaUserEdit } from "react-icons/fa";
import Loading from "../../loading/Loading";

export default function CourseMember() {
  const { id } = useParams();
  const { res } = useCourseMember(id);

  if (res === null) return <Loading />;

  // console.log(res)

  return (
    <Card courseMember>
      <h2 className={classes.title}>اعضا درس</h2>

      <Card members>
        <div className={classes.role}>
          <h3 className={classes.roleTitle}>استاد</h3>
          <FaUserTie className={classes.roleIcon} />
        </div>
        {res.owner !== null && (
          <>
            <div className={classes.memberContainer}>
              <div className={classes.eachMember}>
                <h4 className={classes.name}>{res.owner.name}</h4>
              </div>
            </div>
          </>
        )}
      </Card>
      <Card members>
        <div className={classes.role}>
          <h3 className={classes.roleTitle}>دستیاران استاد</h3>
          <FaUserEdit className={classes.roleIcon} />
        </div>
        {res.assistant_profiles !== null && (
          <>
            {res.assistant_profiles.map((profile) => {
              return (
                <div className={classes.memberContainer} key={profile.id}>
                  <div className={classes.eachMember}>
                    <h4 className={classes.name}>{profile.name}</h4>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </Card>
      <Card members>
        <div className={classes.role}>
          <h3 className={classes.roleTitle}>دانشجویان</h3>
          <FaUserGraduate className={classes.roleIcon} />
        </div>

        {res.student_profiles !== null && (
          <>
            {res.student_profiles.map((profile) => {
              return (
                <div className={classes.memberContainer} key={profile.id}>
                  <div className={classes.eachMember}>
                    <h4 className={classes.name}>{profile.name}</h4>
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
