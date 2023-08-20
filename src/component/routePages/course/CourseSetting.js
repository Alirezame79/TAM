import { useParams } from "react-router-dom";
import useCourseSetting from "../../../fetch/useCourseSetting";
import Card from "../../../ui/Card";
import classes from './style/CourseSetting.module.css'
import Input from '../../../ui/Input';
import { FaUserMinus,FaUserPlus } from "react-icons/fa";

export default function CourseSetting() {
    const { id } = useParams();
    const { res } = useCourseSetting(id);

    if (res === null) return

    console.log(res)

    return (
        <Card courseSetting>
            <h2 className={classes.title}>ویرایش درس</h2>
            <div className={classes.Inputs} >
                <div className={classes.courseSettingInput} >
                        <label htmlFor="Class Location">مکان کلاس</label>
                        <Input placeholder= {res.class_location}  id="Class Location" courseSetting />
                </div>

                <div className={classes.courseSettingInput}>
                        <label htmlFor="Class Time">زمان کلاس</label>
                        <Input placeholder={res.class_time} id="Class Time" courseSetting />
                </div>

                <div className={classes.courseSettingInput}>
                        <label htmlFor="Group Capacity"> تعداد اعضا گروه</label>
                        <Input placeholder={res.group_capacity} id="Group Capacity" courseSetting />
                </div>

                <div className={classes.courseSettingInput}>
                        <label htmlFor="Projects Phase "> تعداد فاز های پروژه</label>
                        <Input placeholder= {res.projects_phase}  id="Projects Phase " courseSetting />
                </div>
            </div>
            <Card assistants>
                <div className={classes.addDeletAssistant}>
                    <h3 >: دستیاران </h3>
                    <div className={classes.addDeletAssistantIcon}>
                        <FaUserMinus className={classes.minusIcon}/>
                        <FaUserPlus/>
                    </div>
                </div>
                {res.assistant_profiles.map((profile) => {
                    return (
                        <h4 className={classes.assistants} key={profile} >{profile}</h4>
                    )
                })}
            </Card>
            
         
        </Card>
    )
}