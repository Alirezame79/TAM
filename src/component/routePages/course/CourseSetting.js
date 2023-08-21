import { useParams } from "react-router-dom";
import useCourseSetting from "../../../fetch/useCourseSetting";
import Card from "../../../ui/Card";
import classes from './style/CourseSetting.module.css'
import Input from '../../../ui/Input';
import { FaUserMinus, FaUserPlus, FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Button from '../../../ui/Button'

export default function CourseSetting() {
    const { id } = useParams();
    const { res } = useCourseSetting(id);
    let classLocation = useRef("")
    let classTime = useRef("")
    let groupCapacity = useRef("")
    let projectPhase = useRef("")

    useEffect(() => {
        if (res === null) return
        classLocation.current.value = res.class_location
        classTime.current.value = res.class_time
        groupCapacity.current.value = res.group_capacity
        projectPhase.current.value = res.projects_phase
    }, [res])

    if (res === null) return


    console.log(res)

    return (
        <Card courseSetting>
            <h2 className={classes.title}>ویرایش درس</h2>
            <div className={classes.Inputs} >
                <div className={classes.courseSettingInput} >
                    <label htmlFor="Class Location">مکان کلاس</label>
                    <Input innerRef={classLocation} id="Class Location" courseSetting />
                </div>

                <div className={classes.courseSettingInput}>
                    <label htmlFor="Class Time">زمان کلاس</label>
                    <Input innerRef={classTime} id="Class Time" courseSetting />
                </div>
            </div>
            <div className={classes.groupOfInputs}>
                <div className={classes.haveCounterInputs}>
                    <div className={classes.courseSettingInput}>
                        <label htmlFor="Group Capacity"> تعداد اعضا گروه</label>
                        <Input type='number' innerRef={groupCapacity} id="Group Capacity" haveCounterInputs >
                            {/* <div className={classes.minusPlusIcon}>
                                <FaMinus />
                                <FaPlus />
                            </div> */}
                        </Input>
                        <div className={classes.minusPlusIcon}>
                            <FaMinus />
                            <FaPlus />
                        </div>
                    </div>

                    <div className={classes.courseSettingInput}>
                        <label htmlFor="Projects Phase "> تعداد فازهای پروژه</label>
                        <Input innerRef={projectPhase} id="Projects Phase " haveCounterInputs>
                            {/* <div className={classes.minusPlusIcon}>
                                <FaMinus/>
                                <FaPlus/>
                            </div> */}
                        </Input>
                        <div className={classes.minusPlusIcon}>
                            <FaMinus />
                            <FaPlus />
                        </div>
                    </div>
                </div>
                <Card assistants>
                    <div className={classes.addDeletAssistant}>
                        <h3 >: دستیاران </h3>
                        <div className={classes.addDeletAssistantIcon}>
                            <FaUserMinus className={classes.minusIcon} />
                            <FaUserPlus />
                        </div>
                    </div>
                    {res.assistant_profiles.map((profile) => {
                        return (
                            <h4 className={classes.assistants} key={profile} >{profile}</h4>
                        )
                    })}
                </Card>
            </div>
            <Button submit >مرحله بعد</Button>
        </Card>
    )
}