import classes from "./style/ManageProject.module.css";
import Card from "../../../../ui/Card";
import Button from "../../../../ui/Button";
import Input from "../../../../ui/Input";
import SwitchInput from "../../../../ui/SwitchInput";
import { FaList } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import Checkbox from "../../../../ui/CheckBox";
import { useEffect, useRef, useState } from "react";
import useGetUpdateProject from "../../../../fetch/useGetUpdateProject";
import { useDispatch, useSelector } from "react-redux";
import BASEURL from "../../../../fetch/BaseURL";
import usePostUpdateProject from "../../../../fetch/usePostUpdateProject";
import { useNavigate, useParams } from "react-router-dom";
import ProjectList from "./ProjectList";
import Loading from "../../../loading/Loading";
import { toast } from "react-toastify";
import { setModal } from "../../../../store";
import Modal from "../../../portal/Modal";

export default function ManageProject() {
  const {id} = useParams()
  const [checkboxCheck, setCheckboxCheck] = useState(false);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const descriptionInput = useRef("");
  const [projectListPage, setProjectListPage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const project = useSelector((state) => {
    return state.project;
  });
  const modal = useSelector((state) => {
    return state.modal;
  })
  useGetUpdateProject();
  
  console.log(project);

  useEffect(() => {
    if (project === undefined || Object.keys(project).length === 0) return

    descriptionInput.current.value = project.description;
    setCheckboxCheck(project.status);
  }, [project]);


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

  function projectListBtnClicked() {
    if (project.project_file === null) {
      toast.error("ابتدا باید پروژه ی درس ساخته شود")
      return
    }
    setProjectListPage(true);
  }

  function scheduleBtnClicked() {
    if (project.project_file === null) {
      toast.error("ابتدا باید پروژه ی درس ساخته شود")
      return
    }
    navigate('/course/' + id + '/project/schedule/')
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
    dispatch(setModal('manage-project'))
    setData(requestData);
  }

  if (project === undefined || Object.keys(project).length === 0) {
    return <Loading />
  } else if (projectListPage) {
    return <ProjectList />;
  } else {
    return (
      <>
        {modal === 'manage-project' && <Modal data={data} manageProject />}
        <Card manageProject>
          <h2 className={classes.title}>مدیریت پروژه</h2>
          <div className={classes.icons}>
            <FaList className={classes.icon} onClick={projectListBtnClicked} />
            <IoTimeOutline className={classes.icon} onClick={scheduleBtnClicked} />
          </div>
          <h3> بارگذاری صورت پروژه</h3>
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
      </>
    );
  }
}
