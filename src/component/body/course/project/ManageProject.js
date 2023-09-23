import classes from "./style/ManageProject.module.css";
import Card from "../../../../ui/Card";
import Button from "../../../../ui/Button";
import Input from "../../../../ui/Input";
import SwitchInput from "../../../../ui/SwitchInput";
import { FaList } from "react-icons/fa";
import Checkbox from "../../../../ui/CheckBox";
import { useEffect, useRef, useState } from "react";
import useGetUpdateProject from "../../../../fetch/useGetUpdateProject";
import { useSelector } from "react-redux";
import BASEURL from "../../../../fetch/BaseURL";
import usePostUpdateProject from "../../../../fetch/usePostUpdateProject";
import { useNavigate } from "react-router-dom";
import ProjectList from "./ProjectList";

export default function ManageProject() {
  const [checkboxCheck, setCheckboxCheck] = useState(false);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const descriptionInput = useRef("");
  const [projectListPage, setProjectListPage] = useState(false);
  const navigate = useNavigate();
  const project = useSelector((state) => {
    return state.project;
  });
  useGetUpdateProject();
  usePostUpdateProject(data);

  useEffect(() => {
    descriptionInput.current.value = project.description;
    setCheckboxCheck(project.status);
  }, [project]);

  console.log(project);

  function handleCheckBox() {
    setCheckboxCheck(!checkboxCheck);
  }

  function getFileHandler(e) {
    console.log(e.target.files);
    const x = URL.createObjectURL(e.target.files[0]);
    console.log(x);
    console.log(e.target.files[0]);
    if (x === null) return;
    setFile(e.target.files[0]);
  }

  function submitProjectClicked() {
    let requestData = new FormData();
    requestData.append("name", "Project Name");
    if (file !== null) {
      requestData.append("project_file", file, file.name);
    } else {
      requestData.append("project_file", "");
    }
    requestData.append("description", descriptionInput.current.value);
    if (checkboxCheck) {
      requestData.append("status", 1);
    } else {
      requestData.append("status", 0);
    }

    console.log(requestData);
    setData(requestData);
  }

  function projectListBtnClicked() {
    setProjectListPage(true);
  }

  if (projectListPage) {
    return <ProjectList />;
  } else {
    return (
      <Card manageProject>
        <h2 className={classes.title}>مدیریت پروژه</h2>
        <FaList className={classes.icon} onClick={projectListBtnClicked} />

        <h3>  بارگذاری صورت پروژه</h3>
        <input type="file" onChange={getFileHandler} />

        {project.project_file !== null && (
          <a
            href={BASEURL + project.project_file}
            target="_blank"
            rel="noreferrer"
            className={classes.downLink}
          >
            دانلود آخرین فایل بارگذاری شده
          </a>
        )}

        <div className={classes.descriptionInput}>
          <label htmlFor="bio" className={classes.label}>
            : توضیحات
          </label>
          <Input manageProjectDescription innerRef={descriptionInput} />
        </div>

        <div className={classes.enable}>
          <Checkbox
            className={classes.checkboxLabel}
            label="وضعیت فعالسازی"
            value={checkboxCheck}
            onChange={handleCheckBox}
          />
        </div>

        <Button submit click={submitProjectClicked}>
          ثبت پروژه
        </Button>
      </Card>
    );
  }
}
