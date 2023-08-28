import classes from "./style/CreateGroup.module.css";
import Button from "../../../../ui/Button";
import Input from "../../../../ui/Input";
import { FaUserPlus } from "react-icons/fa";
import Card from "../../../../ui/Card";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from 'react'
import useDetailGroup from "../../../../fetch/useDetailGroup";

export default function CreateGroup() {
    const { id } = useParams();
    const { data } = useDetailGroup(id);
    const groupName = useRef("");
    const groupDescription = useRef("");

    useEffect(() => {
        if (data === undefined) return
        groupName.current.value = data.group.name;
        groupDescription.current.value = data.group.description;
    }, [data])

    if (data === undefined) return
    console.log(data)


    return (
        <div className={classes.content}>
            <Card creatGroup>
                <h2 className={classes.title}>ساخت گروه</h2>
                <div className={classes.creatGroupInput}>
                    <label htmlFor="Group name">نام گروه</label>
                    <Input id="Group name" creatGroup innerRef={groupName} />
                </div>
                <div className={classes.creatGroupInput}>
                    <label htmlFor="Course Name">نام درس </label>
                    <Input id="Course Name" placeholder={data.course.name} creatGroup readOnly />
                </div>
                <div className={classes.creatGroupInput}>
                    <label htmlFor="master">استاد</label>
                    <Input id="master" creatGroup placeholder={data.course.owner.name} readOnly />
                </div>
                <div className={classes.creatGroupInput}>
                    <label htmlFor="discription">توضیجات</label>
                    <Input groupDiscription innerRef={groupDescription} />
                </div>
                <Button submit>اضافه کردن اعضا گروه</Button>
            </Card>

            <Card addMemberOfGroup>
                <h2 className={classes.title}> اضافه کردن اعضا گروه</h2>
                {data.group.members.map((member) => {
                    return <h3 key={member.id}>{member.name}</h3>
                })}
                <div className={classes.addMemberOfGroup}>
                    <Input addMemberOfGroup />
                    <FaUserPlus className={classes.addMemberOfGroupIcon} />
                </div>
            </Card>
        </div>
    );
}